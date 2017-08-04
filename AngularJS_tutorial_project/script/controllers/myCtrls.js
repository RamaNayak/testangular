// Controllers for MODULE RamApp
angular.module("RamApps").controller("RamStringCtrl", function($scope) {
    $scope.firstName = "Rama";
    $scope.lastName= "Nayak";
	$scope.myName = "My name is: <h1>Rama Nayak</h1>";
	$scope.name = "Rama Nayak";
});

angular.module("RamApps").controller("RamNumberCtrl", function($scope) {
    
	$scope.quantity = 10;
	$scope.cost=12;
	
});

angular.module("RamApps").controller("RamArrayCtrl", function($scope) {
   
	$scope.myArray = [2,4,6,8,10];
});

angular.module("RamApps").controller("RamSelectCtrl", function($scope) {
   
	$scope.names = [
						"Jani",
						"Carl",
						"Margareth",
						"Hege",
						"Joe",
						"Gustav",
						"Birgit",
						"Mary",
						"Kai"
					];
	$scope.cars = [
					{model : "Ford Mustang", color : "red"},
					{model : "Fiat 500", color : "white"},
					{model : "Volvo XC90", color : "black"}
				  ];
	$scope.cars1 = {
					car01 : "Ford",
					car02 : "Fiat",
					car03 : "Volvo"
  				  };
	$scope.cars2 = {
					car01 : {brand : "Ford", model : "Mustang", color : "red"},
					car02 : {brand : "Fiat", model : "500", color : "white"},
					car03 : {brand : "Volvo", model : "XC90", color : "black"}
				  };
});

angular.module("RamApps").controller("RamStudentsCtrl", function($scope) {
    
	$scope.students = [
						{name:'Jani',country:'Norway'},
						{name:'Carl',country:'Sweden'},
						{name:'Margareth',country:'England'},
						{name:'Hege',country:'Norway'},
						{name:'Joe',country:'Denmark'},
						{name:'Gustav',country:'Sweden'},
						{name:'Birgit',country:'Denmark'},
						{name:'Mary',country:'England'},
						{name:'Kai',country:'Norway'}
					];
	
});


angular.module("RamApps").controller("RamFilterCtrl",function($scope) {
	$scope.price = 58;	
	$scope.today = new Date();
	$scope.names = [
						'Jani',
						'Carl',
						'Margareth',
						'Hege',
						'Joe',
						'Gustav',
						'Birgit',
						'Mary',
						'Kai'
					];
	$scope.namesTable = [
						{name:'Jani',country:'Norway'},
						{name:'Carl',country:'Sweden'},
						{name:'Margareth',country:'England'},
						{name:'Hege',country:'Norway'},
						{name:'Joe',country:'Denmark'},
						{name:'Gustav',country:'Sweden'},
						{name:'Birgit',country:'Denmark'},
						{name:'Mary',country:'England'},
						{name:'Kai',country:'Norway'}
					];
	$scope.customer = 	{
							"name" : "Alfreds Futterkiste",
							"city" : "Berlin",
							"country" : "Germany"
						};
	$scope.cars = ["Audi", "BMW", "Dodge", "Fiat", "Ford", "Volvo"];
	$scope.firstName = "Rama";
    $scope.lastName = "Nayak";
	$scope.prize = 1000000;
	$scope.customers = [
							{"name" : "Bottom-Dollar Marketse" ,"city" : "Tsawassen"},
							{"name" : "Alfreds Futterkiste", "city" : "Berlin"},
							{"name" : "Bon app", "city" : "Marseille"},
							{"name" : "Cactus Comidas para llevar", "city" : "Buenos Aires"},
							{"name" : "Bolido Comidas preparadas", "city" : "Madrid"},
							{"name" : "Around the Horn", "city" : "London"},
							{"name" : "B's Beverages", "city" : "London"}
						];
	 $scope.orderByMe = function(x) {
							$scope.myOrderBy = x;
						}
});

angular.module("RamApps").controller("RamAjaxCtrl", function($scope,$http) {
	 $http.get("helloworld.json")
		  .then(function(response) {
			 $scope.myworld = response.data;
		  });
});

angular.module("RamApps").controller("RamEventObjectCtrl", function($scope) {
    $scope.myFunc = function(myE) {
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    }
});

angular.module("RamApps").controller("RamFormCtrl", function($scope) {
    $scope.master = {firstName:"Rama", lastName:"Nayak"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});

angular.module("RamApps").controller("RamApiCtrl", function($scope) {
    $scope.x1 = "RAMA";
	$scope.x3 = "nayak";    
    $scope.x2 = angular.lowercase($scope.x1);
	$scope.x4 = angular.uppercase($scope.x3);
	$scope.x5 = angular.isString($scope.x1);
	$scope.x6 = angular.isNumber($scope.x1);
});