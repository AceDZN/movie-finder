var AppActions = require('../actions/AppActions');
var url = "http://api.themoviedb.org/3/";
var api_key = "4355685cdbaeb9d5c7c44ff0ccd1a7fc";

module.exports = {
  movieSearch: function(str){
    $.ajax({
      url: url+'search/movie?api_key='+api_key+'&query='+str,
      dataType: 'json',
      cache: false,
      success: function(data){
        AppActions.recieveResults(data.results);
      }.bind(this),
      error: function(xhr,status,err){
        alert(err);
      }.bind(this)
    });
  }
}
