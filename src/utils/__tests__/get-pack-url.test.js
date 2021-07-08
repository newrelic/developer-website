import getPackUrl from '../get-pack-url';

describe('getPackUrl', () => {
  test.each([
    [
      'https://raw.githubusercontent.com/newrelic/newrelic-observability-packs/v0.8.1/packs/apache/logo.svg',
      'https://github.com/newrelic/newrelic-observability-packs/tree/main/packs/apache',
    ],
    [
      'https://raw.githubusercontent.com/newrelic/newrelic-observability-packs/v0.8.2/packs/couchbase/logo.svg',
      'https://github.com/newrelic/newrelic-observability-packs/tree/main/packs/couchbase',
    ],
  ])('given non-falsy logoUrl, %p, returns %p', (firstArg, expectedResult) => {
    const packUrl = getPackUrl(firstArg);

    expect(packUrl).toBe(expectedResult);
  });

  test.each([[''], [null], [undefined]])(
    'given falsy logoUrl, %p, returns "https://github.com/newrelic/newrelic-observability-packs/tree/main/packs/"',
    (firstArg) => {
      const packUrl = getPackUrl(firstArg);

      expect(packUrl).toBe(
        'https://github.com/newrelic/newrelic-observability-packs/tree/main/packs/'
      );
    }
  );
});
