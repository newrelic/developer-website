/* eslint-disable react/prop-types */
import React from 'react';
import { BreadcrumbContext } from '../src/components/BreadcrumbContext';
import { PageContext } from '../src/components/PageContext';
import GlobalStyles from '../src/components/GlobalStyles';

import createBreadcrumbs from '../src/utils/create-breadcrumbs';
import pages from '../src/data/sidenav.json';

const wrapPageElement = ({ element, props }) => {
  const crumbs = createBreadcrumbs(props.path ?? '/404', pages);

  return (
    <>
      <GlobalStyles />
      <PageContext.Provider value={props.pageContext}>
        <BreadcrumbContext.Provider value={crumbs}>
          {element}
        </BreadcrumbContext.Provider>
      </PageContext.Provider>
    </>
  );
};

export default wrapPageElement;
