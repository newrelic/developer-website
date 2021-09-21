const { getPackNr1Url } = require('../src/utils/get-pack-nr1-url');
const quickstarts = require('../src/data/quickstarts.json');
const fs = require('fs');

const NR1_PACK_DETAILS_NERDLET = 'catalog-pack-details.catalog-pack-contents';
const NR1_GUIDED_INSTALL_NERDLET = 'nr1-install-newrelic.nr1-install-newrelic';

const csvColumns = ['Quickstart name,url'];
const urls = quickstarts
  .map((quickstart) => {
    const hasInstallableComponent = quickstart.installPlans.length === 1;
    const hasGuidedInstall =
      hasInstallableComponent &&
      quickstart.installPlans[0].id.includes('guided-install');
    if (hasInstallableComponent) {
      if (hasGuidedInstall) {
        return `${quickstart.title},${getPackNr1Url(
          quickstart.id,
          NR1_GUIDED_INSTALL_NERDLET
        )}`;
      } else {
        return `${quickstart.title},${getPackNr1Url(
          quickstart.id,
          NR1_PACK_DETAILS_NERDLET
        )}`;
      }
    }
  })
  .filter(Boolean);

const urlOutputCsv = csvColumns.concat(urls).join('\n');

fs.writeFileSync('quickstart_urls.csv', urlOutputCsv);
