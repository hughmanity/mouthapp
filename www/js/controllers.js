angular.module('starter.controllers', ['ionic'])

//*********************************add View Comments Modal

.controller('AppCtrl', function($scope, $ionicModal) {    

  // Create the  modal that we will use later
  $ionicModal.fromTemplateUrl('templates/m_comments.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeComments = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openComments = function() {
    $scope.modal.show();
  };

})

.controller('shareCtrl', function($scope, $ionicModal) {    

  // Create the  modal that we will use later
  $ionicModal.fromTemplateUrl('templates/m_share.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeShare = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openShare = function() {
    $scope.modal.show();
  };

})

.controller('searchCtrl', function($scope, $ionicModal) {    

  // Create the  modal that we will use later
  $ionicModal.fromTemplateUrl('templates/m_search.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeSearch = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openSearch = function() {
    $scope.modal.show();
  };

})
.controller('addressCtrl', function($scope, $ionicModal) {    

  // Create the  modal that we will use later
  $ionicModal.fromTemplateUrl('templates/m_editaddress.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeAddress = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openAddress = function() {
    $scope.modal.show();
  };

})
   


//*********************************end View Comments modal

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Blowme', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('StatusBarCtrl', function($scope) {
  ionic.Platform.ready(function() {
    // hide the status bar using the StatusBar plugin
    StatusBar.hide();
  });
})

//start google map controller

    .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
    });

//end google map controler