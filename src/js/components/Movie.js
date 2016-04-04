var React = require('React');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      animation_class: "flipInX"
    }
  },
  componentDidMount: function(){
  },
  componentWillUnmount: function(){
    this.setState({
      animation_class: "flipOutY"
    });
  },
  renderImage: function(){
    if(this.props.movie.poster_path && this.props.movie.poster_path != null){
      return <img src={"https://image.tmdb.org/t/p/w300"+this.props.movie.poster_path} />
    } else {
      return (<img src="./img/no-poster.jpg" />)
    }
  },
  renderDetails: function(){
    return (<div className="details_wrap">
      <p>{this.props.movie.overview}</p>
      <ul className="list-group ">
        <li className="list-group-item">
          Vote Average: {this.props.movie.vote_average}
        </li>
      </ul>
    </div>)
  },
  render: function(){
    return (
      <div>
        <div className={"panel panel-default animated "+ this.state.animation_class}>
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.movie.title}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-3 image_preview">
                  {this.renderImage()}
              </div>
              <div className="col-xs-8 col-sm-8 col-md-9 content_wrap">
                {this.renderDetails()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
