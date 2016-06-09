function dealsCtrl($scope, $state, $stateParams, $ionicSlideBoxDelegate, $http, $cordovaSocialSharing) {

  $http.get('http://goodil.ibangf.ovh/deals').then(function(res){
    console.log('deals');
    console.log(res.data);
    $scope.deals = res.data;
  });

	$scope.toggleStar = function(deal) {
                    deal.star = !deal.star;
                };

 $scope.goToMap = function(deal)  {
    console.log(deal);
    $state.go('tab.map', {lng: deal.shop.lng, lat: deal.shop.lat});
  };



   	if ($stateParams.aId){
   		var count;
	   	for (count = 0; count < $scope.deals.length; count ++){
	   		if ($scope.deals[count].id == $stateParams.aId)
	   			break;
	   	}
	   	setTimeout(function() {
                $ionicSlideBoxDelegate.slide(count);
                $ionicSlideBoxDelegate.update();
                $scope.$apply();
         });
 	}

}
