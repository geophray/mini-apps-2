import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: {},
      chartData: {}
    };

  };

  componentDidMount() {
    this.getCoindeskData();
  }

  getCoindeskData() {
    axios
      .get('/coindesk')
      .then((response) => {
        const newChartData= {};
        const { bpi } = response.data;
        const dates = [];
        const closeVals = [];
        for (const date in bpi) {
          dates.push(date);
          closeVals.push(bpi[date]);
        };
        newChartData.labels = dates;
        newChartData.datasets = [{
          label: 'BTC (USD)',
          data: closeVals,
          pointRadius: 0,
          fill: false,
          borderColor: 'orange',
        }]
        this.setState({
          chartData: newChartData
        });
      })
      .catch((err) => {
        console.error('Error retrieving data. Please try again later.');
      });
  }

  static defaultProps = {
    displayTitle: true,
    titleText: 'Historical Bitcoin Prices',
    displayLegend: false,
    yAxesLabelText: 'Bitcoin Price (USD)',
    xAxesUnit: 'month',
  }

  render() {
    const { chartData } = this.state;
    return (
      <Line
        data={ chartData }
        options={{
          title: {
            display: this.props.displayTitle,
            text: this.props.titleText,
            fontSize: 25,
          },
          legend: {
            display: this.props.displayLegend,
          },
          scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: this.props.xAxesUnit,
                },
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: this.props.yAxesLabelText,
              },
            }],
          },
        }}
      />
    );
  };
};

export default Chart;
