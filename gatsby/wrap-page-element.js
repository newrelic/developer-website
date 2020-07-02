/* eslint-disable react/prop-types */
import React from 'react';
import { BreadcrumbContext } from '../src/components/BreadcrumbContext';
import { PageContext } from '../src/components/PageContext';

import createBreadcrumbs from '../src/utils/create-breadcrumbs';
import pages from '../src/data/sidenav.json';
import tessen from '../src/utils/tessen';

const wrapPageElement = ({ element, props }) => {
  const crumbs = createBreadcrumbs(props.path, pages);
  tessen.page(props.path);

  return (
    <PageContext.Provider value={props.pageContext}>
      <BreadcrumbContext.Provider value={crumbs}>
        {element}
      </BreadcrumbContext.Provider>
    </PageContext.Provider>
  );
};

export default wrapPageElement;
