// create our angular app and inject ui.bootstrap
var application = angular.module('app', ['ui.bootstrap']);

application.controller('formController', function($scope, $http) {
	
	$scope.formData = {};
	
	  $scope.items = [
	           	    {
	           	    index: 0,
	           	      add: true,
	           	      buttonFace: '+',
	           	      content: 'Item1'
	           	    }
	           	  ];

	  $scope.addItem = function() {
		  // alert('add');
		    var newItemNo = $scope.items.length + 1;
		    var newItem = {index: newItemNo - 1, add:false, buttonFace:'-', content:'Item' + newItemNo};
		    $scope.items.push(newItem);
		  };

	  $scope.removeItem = function(selectedItem) {
		  // alert(selectedItem.content);
		  $scope.items.removeValue('index', selectedItem.index);
		  };

});


application.controller('mainController', function($scope) {
  
  // BUTTONS ======================
  
  // define some random object and button values
  $scope.bigData = {};
  
  $scope.bigData.breakfast = false;
  $scope.bigData.lunch = false;
  $scope.bigData.dinner = false;
  
  // COLLAPSE =====================
  $scope.isCollapsed = false;
  

  
  
  
	  $scope.oneAtATime = false;

	  $scope.groups = [
	    {
	      title: 'Dynamic Group Header - 1',
	      content: 'Dynamic Group Body - 1'
	    },
	    {
	      title: 'Dynamic Group Header - 2',
	      content: 'Dynamic Group Body - 2'
	    }
	  ];

	  $scope.section1status = {
			    isFirstOpen: true,
			    isFirstDisabled: false
			  };
			  
	  $scope.section2status = {
			    isFirstOpen: true,
			    isFirstDisabled: false
			  };
			  
	  $scope.section3status = {
			    isFirstOpen: true,
			    isFirstDisabled: false
			  };
			  
	  $scope.section4status = {
			    isFirstOpen: true,
			    isFirstDisabled: false
			  };
			  
	  $scope.form1status = {
			    isFirstOpen: true,
			    isFirstDisabled: false
			  };
			  
	  $scope.form2status = {
			    isFirstOpen: true,
			    isFirstDisabled: false
			  };
			  
	});