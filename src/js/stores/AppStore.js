var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var AppAPI = require('../utils/AppAPI')

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype,{
  setMovies: function(movies){
    _movies = movies;
  },
  getMovies: function(){
    return _movies;
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case AppConstants.SEARCH_MOVIES:
      AppAPI.movieSearch(action.movie.title);
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.RECIEVE_RESULTS:
      AppStore.setMovies(action.movies);
      AppStore.emit(CHANGE_EVENT);
      break;
  }
  return true;
});
module.exports = AppStore;
