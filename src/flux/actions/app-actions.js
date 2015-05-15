var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatcher/app-dispatcher.js');

var AppActions = {
	addPost: function (newPost) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_POST,
			newPost: newPost
		});
	},
	removePost: function (index) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_POST,
			index: index
		});
	},
	editPost: function (index, newPost) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.EDIT_POST,
			index: index,
            newPost: newPost
		});
    },
    getAllPosts: function () {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.GET_ALL_POSTS
      });
    }
};

module.exports = AppActions;