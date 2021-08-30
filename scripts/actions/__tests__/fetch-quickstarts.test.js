'use strict';

const fs = require('fs');
const fetch = require('node-fetch');
const fetchQuickstarts = require('../fetch-quickstarts');

jest.mock('node-fetch');
jest.mock('fs');

describe('Action: Fetch Observability Packs', () => {
  const fakeAPIURL = 'fakeapi.com/graphql';
  const fakeToken = 'fake_token';
  const fakeGqlQuery = 'fake_gql_query';

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('writes observability packs to file', async () => {
    const apiReturnValue = {
      data: {
        docs: {
          openInstallation: {
            quickstartSearch: {
              results: {
                quickstarts: [
                  {
                    test: 'test',
                  },
                ],
              },
            },
          },
        },
      },
    };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn(() => Promise.resolve(apiReturnValue)),
    });

    await fetchQuickstarts(fakeGqlQuery, fakeAPIURL, fakeToken);
    expect(fs.writeFileSync.mock.calls.length).toBe(1);
    expect(fs.writeFileSync.mock.calls[0][0]).toStrictEqual(
      './src/data/quickstarts.json'
    );
    expect(fs.writeFileSync.mock.calls[0][1]).toStrictEqual(
      JSON.stringify([{ test: 'test' }], null, 2)
    );
  });

  test('does not write file when graphql errors are returned', async () => {
    const apiReturnValue = {
      errors: {
        testError: 'error',
      },
      data: {
        docs: {
          openInstallation: {
            quickstartSearch: {
              results: {
                quickstarts: [
                  {
                    test: 'test',
                  },
                ],
              },
            },
          },
        },
      },
    };
    fetch.mockResolvedValueOnce({
      json: jest.fn(() => Promise.resolve(apiReturnValue)),
      ok: true,
    });

    await fetchQuickstarts(fakeGqlQuery, fakeAPIURL, fakeToken);
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });

  test('does not write file when graphql response is malformed', async () => {
    const apiReturnValue = {
      data: {
        docs: {
          quickstartSearch: {
            results: {
              quickstarts: [
                {
                  test: 'test',
                },
              ],
            },
          },
        },
      },
    };
    fetch.mockResolvedValueOnce({
      json: jest.fn(() => Promise.resolve(apiReturnValue)),
      ok: true,
    });

    await fetchQuickstarts(fakeGqlQuery, fakeAPIURL, fakeToken);
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });

  test('does not write file when a network error occurs', async () => {
    fetch.mockImplementation(() => Promise.reject());
    await fetchQuickstarts(fakeGqlQuery, fakeAPIURL, fakeToken);
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });

  test('does not write file when a non-200 status is returned from the API', async () => {
    fetch.mockResolvedValueOnce({
      status: 500,
      ok: false,
    });
    await fetchQuickstarts(fakeGqlQuery, fakeAPIURL, fakeToken);
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });
});
