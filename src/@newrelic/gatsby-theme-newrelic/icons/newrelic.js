import defaultIcons from '@newrelic/gatsby-theme-newrelic/src/icons/newrelic';
import automation from './newrelic/automation';
import book from './newrelic/book';
import buildApps from './newrelic/build-apps';
import builders from './newrelic/builders';
import nerdBytes from './newrelic/nerd-bytes';
import developerChampions from './newrelic/developer-champions';
import event from './newrelic/event';
import podcasts from './newrelic/podcasts';
import relicans from './newrelic/relicans';
import share from './newrelic/share';
import nerdlog from './newrelic/nerdlog';

export default {
  ...defaultIcons,
  automation,
  book,
  'build-apps': buildApps,
  builders,
  'nerd-bytes': nerdBytes,
  'developer-champions': developerChampions,
  event,
  relicans,
  podcasts,
  share,
  nerdlog,
};
