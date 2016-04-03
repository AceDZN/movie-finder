var React = require('React');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');

function getAppState(){
  return {
    movies: AppStore.getMovies()
  }
}

var App = React.createClass({
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
    console.log(this.state.movies,"this.state.movies");
    return (<div>
      <SearchForm />
    </div>)
  },
  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
