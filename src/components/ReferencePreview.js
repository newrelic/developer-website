import React, { useState } from 'react';
import PropTypes from 'prop-types';
import root from 'react-shadow';
import { graphql, useStaticQuery } from 'gatsby';
import { LivePreview } from 'react-live';

const EXAMPLE_CSS = `
:host {
  --nr1--base-colors--ui--white: #fff;
  --nr1--base-colors--ui--black: #000;
  --nr1--base-colors--ui--gray--1: #fcfcfc;
  --nr1--base-colors--ui--gray--2: #f7f8f8;
  --nr1--base-colors--ui--gray--3: #eeefef;
  --nr1--base-colors--ui--gray--4: #e0e2e2;
  --nr1--base-colors--ui--gray--5: #cbcfcf;
  --nr1--base-colors--ui--gray--6: #8c9393;
  --nr1--base-colors--ui--gray--7: #727979;
  --nr1--base-colors--ui--gray--8: #3e4c4c;
  --nr1--base-colors--ui--gray--9: #223030;
  --nr1--base-colors--ui--gray--10: #020303;
  --nr1--base-colors--ui--gray-warm--1: #fcfcfc;
  --nr1--base-colors--ui--gray-warm--2: #f7f7f8;
  --nr1--base-colors--ui--gray-warm--3: #eeeeef;
  --nr1--base-colors--ui--gray-warm--4: #e0e0e2;
  --nr1--base-colors--ui--gray-warm--5: #cbcccf;
  --nr1--base-colors--ui--gray-warm--6: #938c91;
  --nr1--base-colors--ui--gray-warm--7: #7e777c;
  --nr1--base-colors--ui--gray-warm--8: #4c4e5d;
  --nr1--base-colors--ui--gray-warm--9: #25262d;
  --nr1--base-colors--ui--gray-warm--10: #000e0e;
  --nr1--base-colors--ui--red--1: #fcf3f3;
  --nr1--base-colors--ui--red--2: #fce9e9;
  --nr1--base-colors--ui--red--3: #f7c8c6;
  --nr1--base-colors--ui--red--4: #ec847e;
  --nr1--base-colors--ui--red--5: #e56059;
  --nr1--base-colors--ui--red--6: #d8211a;
  --nr1--base-colors--ui--red--7: #8e0000;
  --nr1--base-colors--ui--red--8: #600;
  --nr1--base-colors--ui--red--9: #390000;
  --nr1--base-colors--ui--red--10: #1b0000;
  --nr1--base-colors--ui--green--1: #f1fdf2;
  --nr1--base-colors--ui--green--2: #d1f7d9;
  --nr1--base-colors--ui--green--3: #7fe898;
  --nr1--base-colors--ui--green--4: #22e749;
  --nr1--base-colors--ui--green--5: #00d100;
  --nr1--base-colors--ui--green--6: #00a500;
  --nr1--base-colors--ui--green--7: #008200;
  --nr1--base-colors--ui--green--8: #004d00;
  --nr1--base-colors--ui--green--9: #0d290a;
  --nr1--base-colors--ui--green--10: #021200;
  --nr1--base-colors--ui--blue--1: #f6fafd;
  --nr1--base-colors--ui--blue--2: #e1edff;
  --nr1--base-colors--ui--blue--3: #a8cdfc;
  --nr1--base-colors--ui--blue--4: #81b8fa;
  --nr1--base-colors--ui--blue--5: #4689d9;
  --nr1--base-colors--ui--blue--6: #0069ce;
  --nr1--base-colors--ui--blue--7: #2e528a;
  --nr1--base-colors--ui--blue--8: #1d3c6d;
  --nr1--base-colors--ui--blue--9: #002051;
  --nr1--base-colors--ui--blue--10: #00122f;
  --nr1--base-colors--ui--yellow--1: #f9faec;
  --nr1--base-colors--ui--yellow--2: #fff9cc;
  --nr1--base-colors--ui--yellow--3: #fff089;
  --nr1--base-colors--ui--yellow--4: #f9e66a;
  --nr1--base-colors--ui--yellow--5: #f0d100;
  --nr1--base-colors--ui--yellow--6: #ccb100;
  --nr1--base-colors--ui--yellow--7: #8a7800;
  --nr1--base-colors--ui--yellow--8: #473e00;
  --nr1--base-colors--ui--yellow--9: #262100;
  --nr1--base-colors--ui--yellow--10: #141100;
  --nr1--base-colors--ui--orange--1: #fdf9f2;
  --nr1--base-colors--ui--orange--2: #fef6e6;
  --nr1--base-colors--ui--orange--3: #ffe2a8;
  --nr1--base-colors--ui--orange--4: #ffdb94;
  --nr1--base-colors--ui--orange--5: #f7c14a;
  --nr1--base-colors--ui--orange--6: #f5a802;
  --nr1--base-colors--ui--orange--7: #9f6d01;
  --nr1--base-colors--ui--orange--8: #573b00;
  --nr1--base-colors--ui--orange--9: #332300;
  --nr1--base-colors--ui--orange--10: #1a1100;
  --nr1--base-colors--ui--teal--1: #f1fbfc;
  --nr1--base-colors--ui--teal--2: #d2f3f6;
  --nr1--base-colors--ui--teal--3: #85e0e7;
  --nr1--base-colors--ui--teal--4: #70ccd3;
  --nr1--base-colors--ui--teal--5: #00b3c3;
  --nr1--base-colors--ui--teal--6: #008c99;
  --nr1--base-colors--ui--teal--7: #006c75;
  --nr1--base-colors--ui--teal--8: #00484e;
  --nr1--base-colors--ui--teal--9: #003539;
  --nr1--base-colors--ui--teal--10: #002123;
  --nr1--base-colors--dataviz--bright--1: #21a793;
  --nr1--base-colors--dataviz--bright--2: #16b3d5;
  --nr1--base-colors--dataviz--bright--3: #a35ebf;
  --nr1--base-colors--dataviz--bright--4: #85c956;
  --nr1--base-colors--dataviz--bright--5: #f86e40;
  --nr1--base-colors--dataviz--bright--6: #c21684;
  --nr1--base-sizing--4: 4px;
  --nr1--base-sizing--8: 8px;
  --nr1--base-sizing--12: 12px;
  --nr1--base-sizing--16: 16px;
  --nr1--base-sizing--24: 24px;
  --nr1--base-sizing--32: 32px;
  --nr1--base-sizing--40: 40px;
  --nr1--base-sizing--48: 48px;
  --nr1--base-sizing--64: 64px;
  --nr1--base-sizing--80: 80px;
  --nr1--colors--background--app: #fff;
  --nr1--colors--background--app-theme-light: #fff;
  --nr1--colors--background--surface: #fff;
  --nr1--colors--background--surface-theme-light: #fff;
  --nr1--colors--background--surface-inverted: #223030;
  --nr1--colors--background--surface-inverted-theme-light: #223030;
  --nr1--colors--interactive--primary: #008c99;
  --nr1--colors--interactive--primary-theme-light: #008c99;
  --nr1--colors--interactive--secondary: #eeefef;
  --nr1--colors--interactive--secondary-theme-light: #eeefef;
  --nr1--colors--interactive--danger: #e56059;
  --nr1--colors--interactive--danger-theme-light: #e56059;
  --nr1--colors--states--success: #00d100;
  --nr1--colors--states--success-theme-light: #00d100;
  --nr1--colors--states--warning: #f0d100;
  --nr1--colors--states--warning-theme-light: #f0d100;
  --nr1--colors--states--error: #e56059;
  --nr1--colors--states--error-theme-light: #e56059;
  --nr1--colors--states--disabled: #cbcfcf;
  --nr1--colors--states--disabled-theme-light: #cbcfcf;
  --nr1--colors--border--subtle: #f7f8f8;
  --nr1--colors--border--subtle-theme-light: #f7f8f8;
  --nr1--colors--border--regular: #eeefef;
  --nr1--colors--border--regular-theme-light: #eeefef;
  --nr1--colors--border--strong: #e0e2e2;
  --nr1--colors--border--strong-theme-light: #e0e2e2;
  --nr1--colors--text--primary: #223030;
  --nr1--colors--text--primary-theme-light: #223030;
  --nr1--colors--text--secondary: #3e4c4c;
  --nr1--colors--text--secondary-theme-light: #3e4c4c;
  --nr1--colors--text--emphasis: #020303;
  --nr1--colors--text--emphasis-theme-light: #020303;
  --nr1--colors--text--muted: #8c9393;
  --nr1--colors--text--muted-theme-light: #8c9393;
  --nr1--colors--text--disabled: #727979;
  --nr1--colors--text--disabled-theme-light: #727979;
  --nr1--colors--entity-status--degraded: #ccb100;
  --nr1--colors--entity-status--degraded-theme-light: #ccb100;
  --nr1--colors--entity-status--operational: #00a500;
  --nr1--colors--entity-status--operational-theme-light: #00a500;
  --nr1--colors--entity-status--unavailable: #d8211a;
  --nr1--colors--entity-status--unavailable-theme-light: #d8211a;
  --nr1--colors--entity-status--unknown: #8c9393;
  --nr1--colors--entity-status--unknown-theme-light: #8c9393;
  --nr1--colors--entity-status--anomaly: #f5a802;
  --nr1--colors--entity-status--anomaly-theme-light: #f5a802;
  --nr1--spacing--4: 4px;
  --nr1--spacing--8: 8px;
  --nr1--spacing--12: 12px;
  --nr1--spacing--16: 16px;
  --nr1--spacing--24: 24px;
  --nr1--spacing--32: 32px;
  --nr1--spacing--40: 40px;
  --nr1--spacing--48: 48px;
  --nr1--spacing--64: 64px;
  --nr1--spacing--80: 80px;
  --nr1--spacing--small: 4px;
  --nr1--spacing--medium: 8px;
  --nr1--spacing--large: 12px;
  --nr1--spacing--extra-large: 24px;
  --nr1--typography--body--1--font-family: Open Sans,"Segoe UI","Tahoma",sans-serif;
  --nr1--typography--body--1--font-size: 12px;
  --nr1--typography--body--1--line-height: 16px;
  --nr1--typography--body--1--font-weight: 400;
  --nr1--typography--body--1--color: #223030;
  --nr1--typography--body--1--color-theme-light: #223030;
  --nr1--typography--body--2--font-family: Open Sans,"Segoe UI","Tahoma",sans-serif;
  --nr1--typography--body--2--font-size: 12px;
  --nr1--typography--body--2--line-height: 20px;
  --nr1--typography--body--2--font-weight: 400;
  --nr1--typography--body--2--color: #223030;
  --nr1--typography--body--2--color-theme-light: #223030;
  --nr1--typography--body--3--font-family: Open Sans,"Segoe UI","Tahoma",sans-serif;
  --nr1--typography--body--3--font-size: 14px;
  --nr1--typography--body--3--line-height: 20px;
  --nr1--typography--body--3--font-weight: 400;
  --nr1--typography--body--3--color: #3e4c4c;
  --nr1--typography--body--3--color-theme-light: #3e4c4c;
  --nr1--typography--heading--1--font-family: Open Sans,"Segoe UI","Tahoma",sans-serif;
  --nr1--typography--heading--1--font-size: 32px;
  --nr1--typography--heading--1--line-height: 40px;
  --nr1--typography--heading--1--font-weight: 400;
  --nr1--typography--heading--1--color: #223030;
  --nr1--typography--heading--1--color-theme-light: #223030;
  --nr1--typography--heading--2--font-family: Open Sans,"Segoe UI","Tahoma",sans-serif;
  --nr1--typography--heading--2--font-size: 24px;
  --nr1--typography--heading--2--line-height: 32px;
  --nr1--typography--heading--2--font-weight: 400;
  --nr1--typography--heading--2--color: #223030;
  --nr1--typography--heading--2--color-theme-light: #223030;
  --nr1--typography--heading--3--font-family: Open Sans,"Segoe UI","Tahoma",sans-serif;
  --nr1--typography--heading--3--font-size: 18px;
  --nr1--typography--heading--3--line-height: 28px;
  --nr1--typography--heading--3--font-weight: 400;
  --nr1--typography--heading--3--color: #223030;
  --nr1--typography--heading--3--color-theme-light: #223030;
  --nr1--typography--heading--4--font-family: Open Sans,"Segoe UI","Tahoma",sans-serif;
  --nr1--typography--heading--4--font-size: 16px;
  --nr1--typography--heading--4--line-height: 20px;
  --nr1--typography--heading--4--font-weight: 400;
  --nr1--typography--heading--4--color: #223030;
  --nr1--typography--heading--4--color-theme-light: #223030;
  --nr1--typography--heading--5--font-family: Open Sans,"Segoe UI","Tahoma",sans-serif;
  --nr1--typography--heading--5--font-size: 14px;
  --nr1--typography--heading--5--line-height: 20px;
  --nr1--typography--heading--5--font-weight: 400;
  --nr1--typography--heading--5--color: #223030;
  --nr1--typography--heading--5--color-theme-light: #223030;
  --nr1--typography--heading--6--font-family: Open Sans,"Segoe UI","Tahoma",sans-serif;
  --nr1--typography--heading--6--font-size: 12px;
  --nr1--typography--heading--6--line-height: 16px;
  --nr1--typography--heading--6--font-weight: 600;
  --nr1--typography--heading--6--color: #223030;
  --nr1--typography--heading--6--color-theme-light: #223030;
  --nr1--typography--code--1--font-family: Menlo,"Consolas",monospace;
  --nr1--typography--code--1--font-size: 11px;
  --nr1--typography--code--1--line-height: 16px;
  --nr1--typography--code--1--font-weight: 400;
  --nr1--typography--code--1--color: #223030;
  --nr1--typography--code--1--color-theme-light: #223030;
  --nr1--typography--code--2--font-family: Menlo,"Consolas",monospace;
  --nr1--typography--code--2--font-size: 12px;
  --nr1--typography--code--2--line-height: 20px;
  --nr1--typography--code--2--font-weight: 400;
  --nr1--typography--code--2--color: #223030;
  --nr1--typography--code--2--color-theme-light: #223030;
}

.nr1-ReferenceExample {
  line-height: 1.36;
  font-weight: 400;
  color: #000e0e;
  font-size: 12px;
  font-family: Open Sans,Segoe UI,Tahoma,sans-serif;
}

.nr1-ReferenceExample label {
  color: var(--primary-text-color);
}

.nr1-ReferenceExample-ToastManager > div {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-right: 16px;
  pointer-events: none;
  z-index: 200;
  min-height: 9999px;
}

.nr1-Docs-prettify > * {
  margin-right: 0.5rem;
}

.nr1-Docs-prettify > *:not(:first-child) {
  margin-left: 0.5rem;
}

.nr1-Box,
.nr1-RedBox,
.nr1-Box--a,
.nr1-Box--b,
.nr1-Box--c {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
}

.nr1-RedBox {
  color: red;
  background: rgba(255, 0, 0, 0.15);
  box-shadow: inset 0 0 0 1px rgba(255, 0, 0, 0.5);
  margin-bottom: 0.5rem;
}

[class^=nr1-Example--stack--direction],
[class^=nr1-Example--stack--horizontal],
[class^=nr1-Example--stack--gap],
[class^=nr1-Example--stack--vertical] {
  margin-bottom: 1.25rem;
}

.nr1-Example--stack--title {
  display: block;
  font-size: 1.5em;
  margin-bottom: 1.25rem;
}

.nr1-Box--a {
  min-height: 70px;
  min-width: 70px;
}

.nr1-Box--b {
  min-height: 90px;
  min-width: 40px;
}

.nr1-Box--c {
  min-height: 40px;
  min-width: 90px;
}
`;

const ReferencePreview = ({ className, style, useToastManager }) => {
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const { ToastManager } = window.__NR1_SDK__.default;
  const { newRelicSdk } = useStaticQuery(graphql`
    query {
      newRelicSdk {
        assets {
          css
        }
      }
    }
  `);

  return (
    <root.div className={className}>
      <link
        rel="stylesheet"
        href={newRelicSdk.assets.css}
        onLoad={() => setStylesLoaded(true)}
      />
      <style type="text/css">{EXAMPLE_CSS}</style>
      {useToastManager && (
        <div className="nr1-ReferenceExample-ToastManager">
          <ToastManager />
        </div>
      )}
      {stylesLoaded ? (
        <LivePreview className="nr1-ReferenceExample" style={style} />
      ) : (
        'Loading...'
      )}
    </root.div>
  );
};

ReferencePreview.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  useToastManager: PropTypes.bool,
};

export default ReferencePreview;
