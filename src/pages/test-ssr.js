/* eslint-disable no-console */
import React from 'react';
import propTypes from 'prop-types';

const API_URL = 'https://staging-api.newrelic.com/graphql';
const API_KEY = process.env.GATSBY_NEW_RELIC_API_KEY;

const QUERY = `
{
  actor {
    nr1Catalog {
      quickstart(id: "d6b36ecf-bf99-475c-938f-370153db8e70") {
        metadata {
          displayName
          summary
        }
      }
    }
  }
}
`;

const prop = (k) => (x) => x[k];

const TestSSR = ({ serverData }) => {
  console.log('serverData', serverData);

  if (!serverData) {
    return <h1>Loading...</h1>;
  }

  if (serverData.error || serverData.messages) {
    return (
      <>
        <h1>Error!</h1>
        {serverData.messages.map((error, i) => (
          <p key={i}>{error}</p>
        ))}
      </>
    );
  }

  const quickstartMetadata =
    serverData.data?.actor?.nr1Catalog?.quickstart?.metadata;

  const { displayName, summary } = quickstartMetadata;

  return (
    <>
      <h1>{displayName}</h1>
      <p>{summary}</p>
    </>
  );
};

TestSSR.propTypes = {
  serverData: propTypes.object.isRequired,
};

export const getServerData = async () => {
  try {
    const resp = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ query: QUERY }),
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': API_KEY,
      },
    });

    const json = await resp.json();

    if (!resp.ok) {
      throw json.errors;
    }

    return {
      props: {
        error: false,
        data: json.data,
      },
    };
  } catch (errors) {
    const messages = errors.map(prop('message'));
    console.log('Error fetching data from NerdGraph', messages);

    return {
      props: {
        error: true,
        messages,
      },
    };
  }
};

export default TestSSR;
