import React from 'react';
import propTypes from 'prop-types';

const API_URL = 'https://api.newrelic.com/graphql';

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

const TestSSR = ({ serverData }) => {
  if (!serverData) {
    return <div>Loading...</div>;
  }

  const quickstartMetadata = serverData?.actor?.nr1Catalog?.quickstart?.metadata;
  const { displayName, summary } = quickstartMetadata;

  return (
    <>
      <h1>{displayName}</h1>
      <p>{summary}</p>
    </>
  );
}

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
        'Api-Key': process.env.NEW_RELIC_API_KEY,
      },
    });

    if (!resp.ok) {
      throw new Error(`Response failed`);
    }

    return {
      props: await resp.json(),
    };
  } catch (error) {
    console.log('Error fetching data from NerdGraph', error);
  }
}

export default TestSSR;
