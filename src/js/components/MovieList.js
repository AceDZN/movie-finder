var React = require('React');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie');

module.exports = React.createClass({
  renderResults: function(){
    var children = [];
    if(this.props.movies.length >=1){
      this.props.movies.map(function(movie,i){
        children.push(<Movie movie={movie} key={"movie_"+i}/>);
      })
      return (<div>
          <div className="row">
            <div className="col-md-12">
              <h3 className="results">Results</h3>
            </div>
          </div>
          <div className="row">
            {children}
          </div>
        </div>
        )
    }
  },
  render: function(){
    return (<div>
        {this.renderResults()}
    </div>);
  }
});
