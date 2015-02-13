var app = angular.module('reddit')

app.controller('PostsController', function($scope, FirebaseService){
	$scope.newPost = {};


	$scope.getPosts = function(){
		FirebaseService.getData()
		.then(function(data){
			$scope.posts = data.data
		})
	};


	$scope.getPosts();

	$scope.addPost = function(){
		FirebaseService.addPost($scope.newPost)
		.then(function(){
			$scope.getPosts();
		})
	}

});