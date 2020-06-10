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
        this.setState({
          rawData: response.data
        }, this.wrangleCoinDeskData);
      })
      .catch((err) => {
        console.error('Error retrieving data. Please try again later.');
      });
  }

  wrangleCoinDeskData() {
    const newChartData= {};
    const { bpi } = this.state.rawData;
    const dates = [];
    const closeVals = [];
    for (const date in bpi) {
      dates.push(date);
      closeVals.push(bpi[date]);
    };
    newChartData.labels = dates;
    newChartData.datasets = [{
      label: 'Bitcoin Price (USD)',
      data: closeVals
    }]
    this.setState({
      chartData: newChartData
    });
  }

  render() {
    const { chartData } = this.state;
    return (
      <Line
        data={ chartData }
        options={{}}
      />
    );
  };
};

export default Chart;
