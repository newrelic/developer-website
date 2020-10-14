import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import parseCodeBlockProps from '../utils/parseCodeBlockProps';
import { isCodeBlock, isShellCommand } from '../utils/codeBlock';
import { diffLines } from 'diff';

const Tutorial = ({ children }) => {
  children = Children.toArray(children);

  const initialProjectState =
    children[0].props.mdxType === 'Project'
      ? parseProjectStateFromConfig(children[0])
      : parseProjectStateFromChildren(children);

  const { elements } = children.reduce(
    (memo, child) => {
      const { elements, currentProjectState } = memo;

      if (child.props.mdxType === 'Project') {
        return memo;
      } else if (child.props.mdxType === 'TutorialSection') {
        const { steps, currentProjectState: projectState } = gatherSteps(
          child,
          currentProjectState
        );

        return {
          currentProjectState: projectState,
          elements: [...elements, cloneElement(child, { children: steps })],
        };
      }

      return { elements: [...elements, child], currentProjectState };
    },
    { elements: [], currentProjectState: initialProjectState }
  );

  return elements;
};

Tutorial.propTypes = {
  children: PropTypes.node,
};

const gatherSteps = (parentElement, initialProjectState) => {
  return Children.toArray(parentElement.props.children).reduce(
    ({ steps, currentProjectState }, stepElement, idx, children) => {
      const sharedProps = { stepNumber: idx + 1, totalSteps: children.length };
      const codeBlock = Children.toArray(stepElement.props.children).find(
        (child) => isCodeBlock(child) && !isShellCommand(child)
      );

      if (!codeBlock) {
        return {
          currentProjectState,
          steps: [...steps, cloneElement(stepElement, sharedProps)],
        };
      }

      const props = parseCodeBlockProps(codeBlock);

      if (!currentProjectState.has(props.fileName)) {
        throw new Error(`The following block does not have a file name that matches the project. Please ensure the code block has a \`fileName\` specified:

\`\`\`${props.language}
${props.code}
\`\`\`
`);
      }

      const { code: prevCode } = currentProjectState.get(props.fileName);
      const projectState = clone(currentProjectState).set(props.fileName, {
        code: props.code,
        language: props.language,
      });

      return {
        currentProjectState: projectState,
        steps: [
          ...steps,
          cloneElement(stepElement, {
            ...sharedProps,
            codeBlock: { ...props, diff: diffLines(prevCode, props.code) },
            project: projectState,
            children: Children.toArray(stepElement.props.children).filter(
              (child) => isShellCommand(child) || !isCodeBlock(child)
            ),
          }),
        ],
      };
    },
    { steps: [], currentProjectState: initialProjectState }
  );
};

const clone = (map) => new Map(map);

const parseProjectStateFromConfig = (configElement) => {
  return Children.toArray(configElement.props.children)
    .filter((child) => isCodeBlock(child) && !isShellCommand(child))
    .reduce((map, child) => {
      const { code, fileName, language } = parseCodeBlockProps(child);

      return map.has(fileName) ? map : map.set(fileName, { code, language });
    }, new Map());
};

const parseProjectStateFromChildren = (children) => {
  return children
    .flatMap((child) => {
      switch (child.props.mdxType) {
        case 'TutorialStep':
          return findCodeBlocksInTutorialStep(child);
        case 'TutorialSection':
          return findCodeBlocksInTutorialSection(child);
        default:
          return [];
      }
    })
    .reduce((map, codeBlock) => {
      const { fileName, language } = parseCodeBlockProps(codeBlock);

      return map.has(fileName)
        ? map
        : map.set(fileName, { code: '', language });
    }, new Map());
};

const findCodeBlocksInTutorialStep = (stepElement) => {
  return Children.toArray(stepElement.props.children).filter(
    (child) => isCodeBlock(child) && !isShellCommand(child)
  );
};

const findCodeBlocksInTutorialSection = (sectionElement) => {
  return Children.toArray(sectionElement.props.children).flatMap(
    findCodeBlocksInTutorialStep
  );
};

export default Tutorial;
