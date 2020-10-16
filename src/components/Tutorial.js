import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { isCodeBlock, isShellCommand, hasFileName } from '../utils/codeBlock';
import { isMdxType } from '../utils/mdx';
import { diffLines } from 'diff';
import useOnMount from '../hooks/useOnMount';
import TutorialEditor from './TutorialEditor';

const Tutorial = ({ children }) => {
  children = Children.toArray(children);

  useOnMount(() => {
    validate(children);
  });

  const projectElement = isMdxType(children[0], 'Project') ? children[0] : null;

  if (projectElement) {
    children = children.slice(1);
  }

  const initialProjectState = projectElement
    ? parseProjectStateFromConfig(projectElement)
    : parseProjectStateFromChildren(children);

  return updateCodeBlocks(children, initialProjectState);
};

Tutorial.propTypes = {
  children: PropTypes.node,
};

const isProjectCodeBlock = (child) =>
  isCodeBlock(child) && !isShellCommand(child) && hasFileName(child);

const clone = (map) => new Map(map);

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

  visit(children, isProjectCodeBlock, (codeBlock) => {
    const { fileName, ...props } = extractCodeBlockProps(codeBlock);

    if (!project.has(fileName)) {
      project.set(fileName, { ...props, code: '' });
    }
  });

  return project;
};

const visit = (children, guard, fn, parent = null) => {
  Children.toArray(children).forEach((child, idx) => {
    if (guard(child, idx, parent)) {
      fn(child, idx, parent);
    } else if (child.props?.children) {
      visit(child.props.children, guard, fn, child);
    }
  });
};

const reduceChildren = (children, select, reducer, parent = null) => {
  if (typeof children === 'string') {
    return children;
  }

  return Children.map(children, (child, idx) => {
    if (select(child, idx, parent)) {
      return reducer(child, idx, parent);
    }

    if (child.props?.children) {
      return cloneElement(child, {
        children: reduceChildren(child.props.children, select, reducer, child),
      });
    }

    return child;
  });
};

const updateCodeBlocks = (children, project) => {
  return reduceChildren(children, isProjectCodeBlock, (codeBlock) => {
    const { fileName, code, ...props } = extractCodeBlockProps(codeBlock);

    if (!project.has(fileName)) {
      return codeBlock;
    }

    const { code: prevCode } = project.get(fileName);

    project = clone(project).set(fileName, {
      ...props,
      code,
    });

    return (
      <TutorialEditor
        focusedFileName={fileName}
        diff={diffLines(prevCode, code)}
        project={project}
      />
    );
  });
};

const validate = (children) => {
  const projectElementIdx = children.findIndex((child) =>
    isMdxType(child, 'Project')
  );

  if (projectElementIdx > 0) {
    throw new Error(
      'Tutorial: A `Project` element was detected but does not reside as the first child of the `Tutorial`. Please move it to the first child of the `Tutorial`.'
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
