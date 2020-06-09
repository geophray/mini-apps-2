import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
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
  };

  componentDidMount() {
    // Does anything need to happen on load?
  };

  getEventsByQuery() {
    const { currentPage, query } = this.state;
    axios
      .get(`/events?_page=${currentPage}&q=${query}`)
      .then((results) => {
        console.log(results);
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
    }));

    this.getEventsByQuery();

    this.setState({
      query: ''
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
        />
      </>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
