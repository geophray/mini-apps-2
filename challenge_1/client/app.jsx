import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return(
      <h2>My react app is rendering!</h2>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
