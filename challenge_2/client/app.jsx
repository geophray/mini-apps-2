import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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
          data: response.data
        });
      })
      .catch((err) => {
        console.error('Error retrieving data. Please try again later.');
      });
  }

  render() {
    return (
      <h2>My react app is being rendered! Hooray!</h2>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
