import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import parseCodeBlockProps from '../utils/parseCodeBlockProps';
import { isCodeBlock, isShellCommand } from '../utils/codeBlock';
import { diffLines } from 'diff';

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

      const previousStep = new Map(
        steps
          .slice(0, idx)
          .map((element) => element.props.step)
          .reverse()
          .find(Boolean) || initialState
      );

      const props = parseCodeBlockProps(codeBlock);
      const { code: prevCode } = previousStep.get(props.fileName);

      return [
        ...steps,
        cloneElement(stepElement, {
          codeBlock: { ...props, diff: diffLines(prevCode, props.code) },
          step: previousStep.set(props.fileName, {
            code: props.code,
            language: props.language,
          }),
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
