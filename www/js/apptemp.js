// Code goes here

angular.module('demo', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})


.controller('slidesCtrl', function ($scope, $ionicSlideBoxDelegate, $firebase, $stateParams) {
  // This should come from the url. Faking it inside plunkr
  $stateParams.presentor = true;
  $scope.presentor = $stateParams.presentor !== undefined;
  
  // Initializing our presentation index to 0
  $scope.ui = {
    index: 0
  };
  
  $scope.nextSlide = function() {

    // When user clicks next, we programatically slide to the next slide using ionicSlideBoxDelegate
    $ionicSlideBoxDelegate.next();

    // Then we make sure we update our index to the current slides index. 
    $scope.ui.index = $ionicSlideBoxDelegate.currentIndex();
  }

  // Create a reference to our firebase pool
  var ref = new Firebase("https://sync-slides.firebaseio.com/");

  // Create a new object inside the pool and assign it to a local variable as an object
  var syncedSlidesIndex = $firebase(ref).$asObject();
  
  // Set up a three way binding between the firebase object and the ui object inside scope.
  syncedSlidesIndex.$bindTo($scope, "ui" ).then(function(){
    $scope.ui.index = 0;
  });
  
  // Set up a listener so that we are notified when this object changes - either from our instance or from firebase
  syncedSlidesIndex.$watch(function() {
    // When the object changes, we change the slide to the prper index
    $ionicSlideBoxDelegate.slide($scope.ui.index);
  });
  

})