function categoriesCtrl ($scope, $state, $stateParams, $http) {


	$http.get('http://goodil.ibangf.ovh/deals').then(function(res){
    console.log(res.data);
    $scope.deals = res.data;
  	})
 	$http.get('http://goodil.ibangf.ovh/category').then(function(res){
    $scope.categories = res.data;
  	})
  	$http.get('http://goodil.ibangf.ovh/shop').then(function(res){

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

$scope.goToTabCategory = function(category){
$state.go('tab.category', {aId: category.name})
}



$scope.CategoryFilter = $stateParams.aId;

// if ($stateParams.aId){
//       var count;
//       for (count = 0; count < $scope.categories.length; count ++){
//         if ($scope.categories[count].id == $stateParams.aId)
//           break;
//       }
//       setTimeout(function() {
//                 $ionicSlideBoxDelegate.slide(count);
//                 $ionicSlideBoxDelegate.update();
//                 $scope.$apply();
//          });
//   }




}

