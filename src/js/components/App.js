var React = require('React');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');
var MovieList = require('./MovieList');

function getAppState(){
  return {
    movies: AppStore.getMovies()
  }
}

module.exports = React.createClass({
  getInitialState: function(){
    return getAppState();
  },
  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },
  render: function(){

    if(this.state.movies === ''){
      var results = '';
    } else {
      var results = this.state.movies;
    }
    return (<div>
      <SearchForm />
      <MovieList movies={this.state.movies} />
    </div>)
  },
  _onChange: function(){
    this.setState(getAppState());
  }
});
