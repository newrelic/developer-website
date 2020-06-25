const React = require('react');
const BreadcrumbContext = require('../src/components/BreadcrumbContext')
  .BreadcrumbContext;
const PageContext = require('../src/components/PageContext').PageContext;

const createBreadcrumbs = require('../src/utils/create-breadcrumbs').default;
const pages = require('../src/data/sidenav.json');

export default ({ element, props }) => {
  const crumbs = createBreadcrumbs(props.path, pages);

  return (
    <PageContext.Provider value={props.pageContext}>
      <BreadcrumbContext.Provider value={crumbs}>
        {element}
      </BreadcrumbContext.Provider>
    </PageContext.Provider>
  );
};
