var genericSearch = angular.module('genericSearch', []);

genericSearch.controller('GenericSearchCtrl', function ($scope) {

	$scope.searchQuery = ""
    $scope.searchError = null

    $scope.onSearch = function () {
    	// alert('running onSearch');
    	$scope.searchResults = "- search results from angularjs ..."
    		
		// Experimental model
		$scope.student = {records:[{
				firstName: "John",
				lastName: "Smith",
				fees:500,
				subjects:[
					{name:'Physics',marks:70},
					{name:'Chemistry',marks:80},
					{name:'Math',marks:65},
					{name:'English',marks:75},
				]
			},
			{
				firstName: "Kate",
				lastName: "Jones",
				fees:500,
				subjects:[
					{name:'Physics',marks:80},
					{name:'Chemistry',marks:60},
					{name:'Math',marks:75},
					{name:'English',marks:55},
					{name:'Hindi',marks:67}
				]
			}]};   		
    		
        var searchRoute = jsRoutes.controllers.Application.search($scope.searchQuery)

        searchRoute.ajax( ).done(function(res) {
            $scope.searchError = null
            $scope.searchResults = res
            $scope.$apply()
        } ).fail(function(res) {
            $scope.searchError = res.responseText
            $scope.$apply()
        });
    }

    $scope.playError = false
    $scope.playStatus = null

    $scope.onPlay = function (playerId, videoId, thumbnailUrl) {
        var playRoute = jsRoutes.controllers.Application.playVideo(playerId, videoId, thumbnailUrl)

        playRoute.ajax().done (function(res) {
            $scope.playError = res.error
            $scope.playStatus = res.status
            $scope.$apply()
        }).fail(function(res) {
            $scope.playError = res.responseText
            $scope.playStatus = null
            $scope.$apply()
        })
    }
});