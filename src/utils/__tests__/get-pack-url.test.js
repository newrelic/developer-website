import getPackUrl from '../get-pack-url';

describe('getPackUrl', () => {
  test.each([
    [
      'apache',
      'https://github.com/newrelic/newrelic-observability-packs/tree/main/packs/apache',
    ],
    [
      'cassandra',
      'https://github.com/newrelic/newrelic-observability-packs/tree/main/packs/cassandra',
    ],
  ])(
    'given non-falsy pack name, %p, returns %p',
    (firstArg, expectedResult) => {
      const packUrl = getPackUrl(firstArg);

      expect(packUrl).toBe(expectedResult);
    }
  );

  test.each([[''], [null], [undefined]])(
    'given falsy pack name, %p, returns "https://github.com/newrelic/newrelic-observability-packs/tree/main/packs/"',
    (firstArg) => {
      const packUrl = getPackUrl(firstArg);

      expect(packUrl).toBe(
        'https://github.com/newrelic/newrelic-observability-packs/tree/main/packs/'
      );
    }
  );
});
