class MyAwesomeVisualizationVisualization extends React.Component {
  render() {
    const { stroke, fill } = this.props;
    const data = (data = [
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
    ]);

    return (
      <AutoSizer>
        {({ width, height }) => {
          return (
            <RadarChart
              outerRadius={90}
              width={width}
              height={height}
              data={this.data}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar
                name="Mike"
                dataKey="A"
                stroke={stroke || '#8884d8'}
                fill={fill || '#8884d8'}
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          );
        }}
      </AutoSizer>
    );
  }
}
