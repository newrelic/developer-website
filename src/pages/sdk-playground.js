import React, { useState } from 'react';
import ComponentPlayground from '../components/Playground/ComponentPlayground';
import VisualizationPlayground from '../components/Playground/VisualizationPlayground';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/core';

const SdkPlayground = () => {
  const [isSDK, setIsSDK] = useState(true);
  return (
    <>
      <div
        css={css`
          button {
            margin-right: 0.5rem;
            margin-left: 0.5rem;
          }
        `}
      >
        <Button variant={Button.VARIANT.PRIMARY} onClick={() => setIsSDK(true)}>
          Build an app
        </Button>
        <Button
          variant={Button.VARIANT.PRIMARY}
          onClick={() => setIsSDK(false)}
        >
          Build a visualization
        </Button>
      </div>
      {isSDK ? <ComponentPlayground /> : <VisualizationPlayground />}
    </>
  );
};

export default SdkPlayground;
