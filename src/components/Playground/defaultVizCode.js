export const indexJS = `const transformData = (rawData) => {
  return rawData.map((entry) => ({
    name: entry.metadata.name,
    // Only grabbing the first data value because this is not time-series data.
    value: entry.data[0].y,
  }));
};

const formatTick = (value) => {
  return value.toLocaleString();
};

 class MyAwesomeVisualizationVisualization extends React.Component {

  render() {
    const {nrqlQueries, stroke, fill} = this.props;

    const nrqlQueryPropsAvailable =
      nrqlQueries &&
      nrqlQueries[0] &&
      nrqlQueries[0].accountId &&
      nrqlQueries[0].query;
    
    if (!nrqlQueryPropsAvailable) {
      return <div>Configure NRQL Props to see viz!</div>;
    }
    

    return (
      <AutoSizer>
        {({width}) => (
          <NrqlQuery
            query={nrqlQueries[0].query}
            accountId={nrqlQueries[0].accountId}
          >
            {({data, loading, error}) => {
              if (loading) {
                return <div>I am loading...</div>
              }

              if (error) {
                return <div>There is an error: {error}</div>
              }

              const transformedData = transformData(data);

              return (
                <div>
                  <RadarChart width={width} height={340} data={transformedData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis tickFormatter={formatTick} />
                    <Radar dataKey="value" stroke={stroke || '#51C9B7'} fill={fill || '#51C9B7'} fillOpacity={0.6} />
                    <Legend />
                  </RadarChart>
                </div>
              );
            }}
          </NrqlQuery>
        )}
      </AutoSizer>
    );
  }
}
`;

export const nr1JSON = `{
  "schemaType": "VISUALIZATION",
  "id": "my-awesome-visualization",
  "displayName": "MyAwesomeVisualization",
  "description": "",
  "configuration": [
    {
      "name": "nrqlQueries",
      "title": "NRQL Queries",
      "type": "collection",
      "items": [
        {
          "name": "accountId",
          "title": "Account ID",
          "description": "Account ID to be associated with the query",
          "type": "number"
        },
        {
          "name": "query",
          "title": "Query",
          "description": "NRQL query for visualization",
          "type": "nrql"
        }
      ]
    },
    {
      "name": "fill",
      "title": "Fill color",
      "description": "A fill color to override the default fill color",
      "type": "string"
    },
    {
      "name": "stroke",
      "title": "Stroke color",
      "description": "A stroke color to override the default stroke color",
      "type": "string"
    }
  ]
}
`;
