var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  getInitialState: function(){
    return {
      searchQuery:"",
      inputClass: "",
      valid: false
    }
  },
  render: function(){
    return (
      <div className="search-form">
        <h3 className="text-center">Search for a Movie</h3>
        <form onSubmit={this.onSubmit}>
          <div className={"form-group "+this.state.inputClass} >
            <input type="text" className="form-control" ref="title" placeholder="Search for a title" value={this.state.searchQuery} onChange={this.onQueryChange}/>
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={!this.state.valid}>
            Search
          </button>
        </form>
      </div>
    )
  },
  onQueryChange: function(e){
    var query = e.target.value;
    if(e.target.value.length>=1){
      this.setState({
        searchQuery: query,
        inputClass: 'has-success',
        valid:true
      });
    } else {
      this.setState({
        searchQuery: query,
        inputClass: 'has-error',
        valid:false
      });
    }
  },
  onSubmit: function(e){
    e.preventDefault();
    var movie = {
      title: this.state.searchQuery
    };
    AppActions.searchForMovie(movie);
  }
});

module.exports = SearchForm;
