function dealCtrl($scope, $state) {

  $scope.goToMap = function(deal)  {
    console.log(deal);
    $state.go('tab.map', {lng: deal.shop.lng, lat: deal.shop.lat})
  }

  $scope.deal = [{
    id: "1",
    name: "Offre de Noel",
    start_date: "25/12/2016",
    end_date: "26/12/2016",
    img: "./img/pub/but1.jpg",
    description: "super promo But",
    term: "les termes de l'offre",
    shop: {
      name: "But La Loupe",
      type:"Grande surface",
      city: "28240 La Loupe",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
      lng: "1.011",
      lat: "48.447",
      category:{
        name: "Ameublement",
        logo: "http://www.bassin-neufchateau.fr/images/Logo%20Mobilier.JPG",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
        created_at: "12/05/2016",
      }
    },
  }];
}

