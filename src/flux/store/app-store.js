var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
// TODO: Add firebase support
var _posts = [
  {id: 0, comments: [], title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome2'},
  {id: 1, comments: [], title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome3'},
  {id: 2, comments: [], title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome4'},
  {id: 3, comments: [], title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'this is just an intro blog post', slug: 'welcome1'}
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
function _addComment(postIndex, newComment){
  _posts[postIndex].comments.push(newComment);
  console.log(newComment, _posts[postIndex]);
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
  getSinglePost: function (index){
    return _posts[index];
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
      case AppConstants.ADD_COMMENT:
        _addComment(action.postIndex, action.newComment);
    }
    AppStore.emitChange();
    return true;
  })
});
module.exports = AppStore;