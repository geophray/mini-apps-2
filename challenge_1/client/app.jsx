import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchForm from './components/SearchForm.jsx';
import SearchResults from './components/SearchResults.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searched: '',
      currentPage: 1,
      totalResults: 0,
      events: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  };

  componentDidMount() {
    // Does anything need to happen on load?
  };

  getEventsByQuery() {
    const { currentPage, searched } = this.state;
    axios
      .get(`/events?_page=${currentPage}&q=${searched}`)
      .then((results) => {
        this.setState({
          events: results.data,
          totalResults: parseInt(results.headers['x-total-count'])
        });
      })
      .catch((err) => {
        console.error('Something went wrong!');
      });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    this.setState((previousState) => ({
      currentPage: 1,
      searched: previousState.query
    }), this.getEventsByQuery);

    this.setState({
      query: ''
    });
  };

  handlePageClick(e) {
    let currentPage = e.selected + 1;
    this.setState({ currentPage }, () => {
      this.getEventsByQuery();
    });
  };

  render() {
    const { query, events, searched, currentPage, totalResults } = this.state;
    return(
      <>
        <h2>Search Events</h2>
        <SearchForm
          query={query}
          updateVal={this.handleChange}
          submit={this.handleSubmit}
        />
        <SearchResults
          events={events}
          searched={searched}
          currentPage={currentPage}
          totalResults={totalResults}
          handlePageClick={this.handlePageClick}
        />
      </>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
