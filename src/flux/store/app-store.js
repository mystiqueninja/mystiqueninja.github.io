var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
// TODO: Add firebase support
var _posts = [
  {id: 0, title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome2'},
  {id: 1, title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome3'},
  {id: 2, title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome4'},
  {id: 3, title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'this is just an intro blog post', slug: 'welcome1'}
];
function _addPost(newPost){
  newPost.id = _posts.length + 1;
  _posts.push(newPost);
}
function _removePost(index){
  _posts.splice(index, 1);
}
function _editPost(index, newPost){
  _posts[index] = newPost;
}
function _getAllPosts(){
  return _posts;
}
var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAllPosts: function () {
    return _posts;
  },
  dispatcherIndex: AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch(action.actionType){
      case AppConstants.ADD_POST:
        _addPost(action.newPost);
        break;
      case AppConstants.REMOVE_POST:
        _removePost(action.index);
        break;
      case AppConstants.EDIT_POST:
        _editPost(action.index, action.newPost);
        break;
      case AppConstants.GET_ALL_POSTS:
        _editPost();
        break;
    }
    AppStore.emitChange();
    return true;
  })
});
module.exports = AppStore;