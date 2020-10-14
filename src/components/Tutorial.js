import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import parseCodeBlockProps from '../utils/parseCodeBlockProps';
import { isCodeBlock, isShellCommand } from '../utils/codeBlock';
import { isMdxType } from '../utils/mdx';
import { diffLines } from 'diff';
import useOnMount from '../hooks/useOnMount';

const Tutorial = ({ children }) => {
  children = Children.toArray(children);

  useOnMount(() => {
    validateChildren(children);
  });

  const isSectioned = children.some((child) =>
    isMdxType(child, 'TutorialSection')
  );
  const projectElement = isMdxType(children[0], 'Project') ? children[0] : null;

  if (projectElement) {
    children = children.slice(1);
  }

  const initialProjectState = projectElement
    ? parseProjectStateFromConfig(projectElement)
    : parseProjectStateFromChildren(children);

  if (isSectioned) {
    return gatherSections(children, initialProjectState);
  }

  const { steps } = gatherSteps(children, initialProjectState);

  return steps;
};

Tutorial.propTypes = {
  children: PropTypes.node,
};

const gatherSections = (children, initialProjectState) => {
  const { elements } = children.reduce(
    (memo, child) => {
      const { elements, currentProjectState } = memo;

      if (isMdxType(child, 'TutorialSection')) {
        const { steps, currentProjectState: projectState } = gatherSteps(
          child.props.children,
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

const gatherSteps = (children, initialProjectState) => {
  return Children.toArray(children).reduce(
    ({ steps, currentProjectState }, stepElement, idx) => {
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

const validateChildren = (children) => {
  const isSectioned = children.some((child) =>
    isMdxType(child, 'TutorialSection')
  );

  const projectElementIdx = children.findIndex((child) =>
    isMdxType(child, 'Project')
  );

  if (projectElementIdx > 0) {
    throw new Error(
      'Tutorial: A `Project` element was detected but does not reside as the first child of the `Tutorial`. Please move it to the first child of the `Tutorial`.'
    );
  }

  children = children.slice(1);
  isSectioned ? validateSections(children) : validateTutorialSteps(children);
};

const validateSections = (children) => {
  const isValid = children.every((child) => !isMdxType(child, 'TutorialStep'));

  if (!isValid) {
    throw new Error(
      'Tutorial: A `TutorialStep` was detected outside of a `TutorialSection`. Please ensure the element is wrapped in a `TutorialSection`.'
    );
  }
};

const validateTutorialSteps = (children) => {
  const isValid = children.every((child) => isMdxType(child, 'TutorialStep'));

  if (!isValid) {
    throw new Error(
      'Tutorial: Every child of a `Tutorial` must be wrapped in a `TutorialStep`. If you meant to include a non `TutorialStep` in the `Tutorial`, wrap each section in a `TutorialSection` or move the content inside of the `TutorialStep`.'
    );
  }
};

export default Tutorial;
