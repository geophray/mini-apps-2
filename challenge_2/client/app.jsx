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

  render() {
    return (
      <Chart />
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
