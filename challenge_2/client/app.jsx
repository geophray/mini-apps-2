import React from 'react';
import ReactDOM from 'react-dom';

import Chart from './components/Chart.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  };

  // componentDidMount() {
  //   this.getCoindeskData(this.fillChart);
  // }

  // getCoindeskData(cb) {
  //   axios
  //     .get('/coindesk')
  //     .then((response) => {
  //       this.setState({
  //         data: response.data
  //       });
  //     })
  //     .catch((err) => {
  //       console.error('Error retrieving data. Please try again later.');
  //     });
  // }

  render() {
    const { data } = this.state;
    return (
      <>
        <Chart />
      </>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
