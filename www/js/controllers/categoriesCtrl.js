function categoriesCtrl ($scope, $state, $stateParams, $http) {


	$http.get('http://goodil.ibangf.ovh/deals').then(function(res){
    console.log('deals');
    console.log(res.data);

  	})
 	$http.get('http://goodil.ibangf.ovh/category').then(function(res){
    console.log('categories');
    console.log(res.data);
    $scope.categories = res.data;
  	})
  	$http.get('http://goodil.ibangf.ovh/shop').then(function(res){
    console.log('shops');
    console.log(res.data);
  	})


// 	$scope.categories=
// 	[{
// 	id: "001",
// 	logo: "./img/pictos/ameublement-decoration@3x.png",
// 	name: "Ameublement",
// 	SubCategory: "Agences",

// 	},
// 	{
// 	id: "002",
// 	logo:"./img/pictos/culture-hightech@3x.png",
// 	name: "Culture",
// 	SubCategory: "Informatique",

// }];
}

