var React = require('React');

module.exports = React.createClass({
  renderImage: function(){
    if(this.props.movie.poster_path && this.props.movie.poster_path != null){
      return "https://image.tmdb.org/t/p/w300"+this.props.movie.poster_path
    } else {
      return "./img/no-poster.jpg"
    }
  },
  inset: function(){
    return <div className="inset">
      {this.props.movie.vote_average}
    </div>
  },
  render: function(){
    return (
      <div className="col-xs-6 col-sm-4 col-md-3 image_preview">
          <h5>{this.props.movie.title}</h5>
          <img src={this.renderImage()}/>
          {this.inset()}
      </div>
    );
  }
});
