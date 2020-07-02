import Tessen from '@datanerd/tessen';

const BASE_CONFIG = {
  location: 'public',
};

Tessen.load(['Segment'], {
  Segment: {
    identifiable: true,
    writeKey: 'jzjQisi3j3VvLyH9mc0QNEgYKpj4LlD1', // Production
  },
});

const page = (pathname) => {
  Tessen.page('viewPage', {
    ...BASE_CONFIG,
    label: pathname,
    category: 'Page',
  });
};

export default {
  page,
};
