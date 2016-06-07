function dealsCtrl($scope, $state, $stateParams, $ionicSlideBoxDelegate, $http, $cordovaSocialSharing) {

  $http.get('http://goodil.ibangf.ovh/deals').then(function(res){
    console.log('deals');
    console.log(res.data);
    $scope.deals = res.data;
  })
  $http.get('http://goodil.ibangf.ovh/category').then(function(res){
    console.log('categories');
    console.log(res.data);
  })
  $http.get('http://goodil.ibangf.ovh/shop').then(function(res){
    console.log('shops');
    console.log(res.data);
  })

	$scope.toggleStar = function(deal) {
                    deal.star = !deal.star;
                };

 $scope.goToMap = function(deal)  {
    console.log(deal);
    $state.go('tab.map', {lng: deal.shop.lng, lat: deal.shop.lat})
  };

  // $scope.deals = [{
  //   id: "1",
  //   name: "Offre de Noel",
  //   start_date: "25/12/2016",
  //   end_date: "26/12/2016",
  //   img: "./img/pub/but1.jpg",
  //   description: "super promo Noel",
  //   term: "les termes de l'offre",
  //   shop: {
  //     name: "But La Loupe",
  //     type:"Grande surface",
  //     city: "28240 La Loupe",
  //     logo: "./img/shop-logo/But.png",
  //     lng: "1.011",
  //     lat: "48.447",
  //     category:{
  //       name: "Ameublement",
  //       logo: "./img/pictos/ameublement-decoration@3x.png",
  //     },
  //     brand: {
  //       name: "But",
  //       description: " Magasin ameublement",
  //       logo: "./img/shop-logo/But.png",
  //       created_at: "12/05/2016",
  //     }
  //   },
  // },
  // {
  //   id: "2",
  //   name: "Offre Boulanger",
  //   start_date: "25/12/2016",
  //   end_date: "26/12/2016",
  //   img: "./img/pub/boulangerannonce1.jpg",
  //   description: "super promo paques",
  //   term: "les termes de l'offre",
  //   shop: {
  //     name: "Boulanger La Loupe",
  //     type:"Grande surface",
  //     city: "28240 La Loupe",
  //     logo: "./img/shop-logo/Boulanger.png",
  //     lng: "1.011",
  //     lat: "48.447",
  //     category:{
  //       name: "culture",
  //       logo: "./img/pictos/culture-hightech@3x.png",
  //     },
  //     brand: {
  //       name: "But",
  //       description: " Magasin ameublement",
  //       logo: "./img/shop-logo/Boulanger.png",
  //       created_at: "12/05/2016",
  //     }
  //   },
  // },
  // {
  //   id: "3",
  //   name: "Offre Bouygues immo",
  //   start_date: "25/12/2016",
  //   end_date: "26/12/2016",
  //   img: "./img/pub/bouyguesimmo1.jpg",
  //   description: "super promo Printemps",
  //   term: "les termes de l'offre",
  //   shop: {
  //     name: "But La Loupe",
  //     type:"Grande surface",
  //     city: "28240 La Loupe",
  //     logo: "./img/shop-logo/Carrefour.jpg",
  //     lng: "1.011",
  //     lat: "48.447",
  //     category:{
  //       name: "Ameublement",
  //       logo: "./img/pictos/ameublement-decoration@3x.png",
  //     },
  //     brand: {
  //       name: "But",
  //       description: " Magasin ameublement",
  //       logo: "./img/shop-logo/Carrefour.jpg",
  //       created_at: "12/05/2016",
  //     }
  //   },
  // },
  // {
  //   id: "4",
  //   name: "Offre ciné pathé",
  //   start_date: "25/12/2016",
  //   end_date: "26/12/2016",
  //   img: "./img/pub/cinepathe.jpg",
  //   description: "super promo été",
  //   term: "les termes de l'offre",
  //   shop: {
  //     name: "But La Loupe",
  //     type:"Grande surface",
  //     city: "28240 La Loupe",
  //     logo: "./img/shop-logo/E-Leclerc.jpg",
  //     lng: "1.011",
  //     lat: "48.447",
  //     category:{
  //       name: "Ameublement",
  //       logo: "./img/pictos/ameublement-decoration@3x.png",
  //     },
  //     brand: {
  //       name: "But",
  //       description: " Magasin ameublement",
  //       logo: "./img/shop-logo/E-Leclerc.jpg",
  //       created_at: "12/05/2016",
  //     }
  //   },
  // },
  // {
  //   id: "5",
  //   name: "Offre de maintenant",
  //   start_date: "25/12/2016",
  //   end_date: "26/12/2016",
  //   img: "./img/pub/but1.jpg",
  //   description: "super promo maintenant",
  //   term: "les termes de l'offre",
  //   shop: {
  //     name: "But La Loupe",
  //     type:"Grande surface",
  //     city: "28240 La Loupe",
  //     logo: "./img/shop-logo/Fnac.jpg",
  //     category:{
  //       name: "Ameublement",
  //       logo: "./img/pictos/ameublement-decoration@3x.png",
  //     },
  //     brand: {
  //       name: "But",
  //       description: " Magasin ameublement",
  //       logo: "./img/shop-logo/Fnac.jpg",
  //       created_at: "12/05/2016",
  //     }
  //   },
  // },
  // {
  //   id: "6",
  //   name: "Offre de demain",
  //   start_date: "25/12/2016",
  //   end_date: "26/12/2016",
  //   img: "./img/pub/but1.jpg",
  //   description: "super promo demain",
  //   term: "les termes de l'offre",
  //   shop: {
  //     name: "But La Loupe",
  //     type:"Grande surface",
  //     city: "28240 La Loupe",
  //     logo: "./img/shop-logo/Lidl_logo.png",
  //     category:{
  //       name: "Ameublement",
  //       logo: "./img/pictos/ameublement-decoration@3x.png",
  //     },
  //     brand: {
  //       name: "But",
  //       description: " Magasin ameublement",
  //       logo: "./img/shop-logo/Lidl_logo.png",
  //       created_at: "12/05/2016",
  //     }
  //   },
  // },
  // {
  //   id: "7",
  //   name: "Offre de apres-demain",
  //   start_date: "25/12/2016",
  //   end_date: "26/12/2016",
  //   img: "./img/pub/but1.jpg",
  //   description: "super promo apres-demain",
  //   term: "les termes de l'offre",
  //   shop: {
  //     name: "But La Loupe",
  //     type:"Grande surface",
  //     city: "28240 La Loupe",
  //     logo: "./img/shop-logo/McDonalds.png",
  //     category:{
  //       name: "Ameublement",
  //       logo: "./img/pictos/ameublement-decoration@3x.png",
  //     },
  //     brand: {
  //       name: "But",
  //       description: " Magasin ameublement",
  //       logo: "./img/shop-logo/McDonalds.png",
  //       created_at: "12/05/2016",
  //     }
  //   },
  // },
  // {
  //   id: "8",
  //   name: "Offre de la veille",
  //   start_date: "25/12/2016",
  //   end_date: "26/12/2016",
  //   img: "./img/pub/but1.jpg",
  //   description: "super promo veille",
  //   term: "les termes de l'offre",
  //   shop: {
  //     name: "But La Loupe",
  //     type:"Grande surface",
  //     city: "28240 La Loupe",
  //     logo: "./img/shop-logo/Peugeot.jpg",
  //     category:{
  //       name: "Ameublement",
  //       logo: "./img/pictos/ameublement-decoration@3x.png",
  //     },
  //     brand: {
  //       name: "But",
  //       description: " Magasin ameublement",
  //       logo: "./img/shop-logo/Peugeot.jpg",
  //       created_at: "12/05/2016",
  //     }
  //   },
  // }];


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

$cordovaSocialSharing
    .share(message, subject, file, link) // Share via native share sheet
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });

  $cordovaSocialSharing
    .shareViaTwitter(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  $cordovaSocialSharing
    .shareViaWhatsApp(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  $cordovaSocialSharing
    .shareViaFacebook(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  // access multiple numbers in a string like: '0612345678,0687654321'
  $cordovaSocialSharing
    .shareViaSMS(message, number)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

// toArr, ccArr and bccArr must be an array, file can be either null, string or array
  $cordovaSocialSharing
    .shareViaEmail(message, subject, toArr, ccArr, bccArr, file)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  $cordovaSocialSharing
    .canShareVia(socialType, message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  $cordovaSocialSharing
    .canShareViaEmail()
    .then(function(result) {
      // Yes we can
    }, function(err) {
      // Nope
    });
