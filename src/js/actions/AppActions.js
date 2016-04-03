var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchForMovie: function(movie){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    });
  },
  recieveResults: function(movies){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECIEVE_RESULTS,
      movies: movies
    });
  }
}

module.exports = AppActions;
