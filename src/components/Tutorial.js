import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import parseCodeBlockProps from '../utils/parseCodeBlockProps';
import { isCodeBlock, isShellCommand } from '../utils/codeBlock';

const Tutorial = ({ children }) => {
  children = Children.toArray(children);

  const initialState =
    children[0].props.mdxType === 'Project'
      ? parseFileInfoFromConfig(children[0])
      : parseFileInfoFromChildren(children);

  return children
    .filter((child) => child.props.mdxType === 'TutorialStep')
    .reduce((steps, stepElement, idx, arr) => {
      const codeBlock = Children.toArray(stepElement.props.children).find(
        (child) => isCodeBlock(child) && !isShellCommand(child)
      );

      if (!codeBlock) {
        return [
          ...steps,
          cloneElement(stepElement, { index: idx, totalSteps: arr.length }),
        ];
      }

      const previousStep =
        idx === 0
          ? new Map(initialState)
          : new Map(steps[idx - 1].props.step || initialState);

      const { fileName, code, language } = parseCodeBlockProps(codeBlock);

      return [
        ...steps,
        cloneElement(stepElement, {
          initialSelectedFile: fileName,
          step: previousStep.set(fileName, { code, language }),
          index: idx,
          totalSteps: arr.length,
          children: Children.toArray(stepElement.props.children).filter(
            (child) => isShellCommand(child) || !isCodeBlock(child)
          ),
        }),
      ];
    }, []);
};

Tutorial.propTypes = {
  children: PropTypes.node,
};

const parseFileInfoFromConfig = (configElement) => {
  return Children.toArray(configElement.props.children)
    .filter((child) => isCodeBlock(child) && !isShellCommand(child))
    .reduce((map, child) => {
      const { code, fileName, language } = parseCodeBlockProps(child);

      return map.has(fileName) ? map : map.set(fileName, { code, language });
    }, new Map());
};

const parseFileInfoFromChildren = (children) => {
  return children
    .flatMap((child) => Children.toArray(child.props.children))
    .filter((child) => isCodeBlock(child) && !isShellCommand(child))
    .reduce((map, child) => {
      const { fileName, language } = parseCodeBlockProps(child);

      return map.has(fileName)
        ? map
        : map.set(fileName, { code: '', language });
    }, new Map());
};

export default Tutorial;
