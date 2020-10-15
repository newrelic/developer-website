import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { isCodeBlock, isShellCommand, hasFileName } from '../utils/codeBlock';
import { isMdxType } from '../utils/mdx';
import { diffLines } from 'diff';
import useOnMount from '../hooks/useOnMount';
import TutorialEditor from './TutorialEditor';

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

  const [elements] = isSectioned
    ? updateCodeBlockInSections(children, initialProjectState)
    : updateCodeBlocksInSteps(children, initialProjectState);

  return elements;
};

Tutorial.propTypes = {
  children: PropTypes.node,
};

const updateCodeBlockInSections = (children, initialProjectState) => {
  return children.reduce(
    ([children, currentProjectState], child) => {
      if (!isMdxType(child, 'TutorialSection')) {
        return [[...children, child], currentProjectState];
      }

      const [steps, projectState] = updateCodeBlocksInSteps(
        child.props.children,
        currentProjectState
      );

      return [
        [...children, cloneElement(child, { children: steps })],
        projectState,
      ];
    },
    [[], initialProjectState]
  );
};

const updateCodeBlocksInSteps = (children, initialProjectState) => {
  return Children.toArray(children).reduce(
    ([steps, currentProjectState], stepElement, idx) => {
      const [children, projectState] = swapCodeBlocks(
        stepElement.props.children,
        currentProjectState
      );

      return [
        [
          ...steps,
          cloneElement(stepElement, {
            children,
            stepNumber: idx + 1,
            totalSteps: children.length,
          }),
        ],
        projectState,
      ];
    },
    [[], initialProjectState]
  );
};

const clone = (map) => new Map(map);

const swapCodeBlocks = (children, initialProjectState) => {
  return Children.toArray(children).reduce(
    ([children, currentProjectState], child, idx) => {
      if (!isCodeBlock(child) || isShellCommand(child)) {
        return [[...children, child], currentProjectState];
      }

      const props = extractCodeBlockProps(child);

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

      return [
        [
          ...children,
          <TutorialEditor
            key={idx}
            focusedFileName={props.fileName}
            diff={diffLines(prevCode, props.code)}
            project={projectState}
          />,
        ],
        projectState,
      ];
    },
    [[], initialProjectState]
  );
};

const parseProjectStateFromConfig = (configElement) => {
  return Children.toArray(configElement.props.children)
    .filter((child) => isCodeBlock(child) && !isShellCommand(child))
    .reduce((map, child) => {
      const { code, fileName, language } = extractCodeBlockProps(child);

      return map.has(fileName) ? map : map.set(fileName, { code, language });
    }, new Map());
};

const parseProjectStateFromChildren = (children) => {
  const project = new Map();

  visit(
    children,
    (child) =>
      isCodeBlock(child) && !isShellCommand(child) && hasFileName(child),
    (codeBlock) => {
      const { fileName, ...props } = extractCodeBlockProps(codeBlock);

      if (!project.has(fileName)) {
        project.set(fileName, { ...props, code: '' });
      }
    }
  );

  return project;
};

const visit = (children, guard, fn) => {
  Children.toArray(children).forEach((child, idx) => {
    if (guard(child, idx)) {
      fn(child, idx);
    } else if (child.props?.children) {
      visit(child.props.children, guard, fn);
    }
  });
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

const extractCodeBlockProps = (element) => {
  const {
    children: { props },
  } = element.props;

  const language = props.className?.replace('language-', '');
  const code = props.children.trim();

  return {
    code,
    language,
    fileName: props.fileName,
  };
};

export default Tutorial;
