import { useReducer } from 'react';

import { nr1JSON, indexJS } from './defaultVizCode';

const initialState = {
  json: nr1JSON,
  index: indexJS,
  displayName: 'MyAwesomeVisualization',
  inputProps: new Map([
    ['fill', ''],
    ['stroke', ''],
  ]),
  error: null,
};

const reducer = (state, action) => {
  if (action.type === 'updateNR1Json') {
    try {
      const inputProps = JSON.parse(state.json).configuration.reduce(
        (acc, { name }) => {
          if (acc.has(name)) {
            return acc;
          } else {
            acc.set(name, '');
            return acc;
          }
        },
        state.inputProps
      );
      console.log(state.json);

      const displayName = JSON.parse(state.json).displayName;
      return {
        inputProps,
        displayName,
        error: null,
        ...state,
      };
    } catch (e) {
      return { error: e, ...state };
    }
  } else if (action.type === 'updateInputProps') {
    return {
      inputProps: state.inputProps.set(action.name, action.value),
      ...state,
    };
  } else if (action.type === 'updateIndexJs') {
    return {
      index: action.code,
      ...state,
    };
  } else if (action.type === 'updateNR1JsonCode') {
    console.log(action.code);
    return {
      json: action.code,
      ...state,
    };
  } else {
    throw new Error('');
  }
};

const useVizCode = () => useReducer(reducer, initialState);

export default useVizCode;
