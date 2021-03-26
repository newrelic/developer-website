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
    const {stroke, fill} = this.props;

    return (
      <AutoSizer>
        {({width}) => (
          <NrqlQuery
            query="SELECT count(*) FROM Synthetics"
            accountId={1}
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
