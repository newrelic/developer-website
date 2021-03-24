export const indexJS = `

<RadarChart outerRadius={90} width={730} height={250} data={[
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
]}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Lily"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
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
