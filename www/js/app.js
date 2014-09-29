// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('housemouth', ['ionic','ngCordova','starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
  
  
     .state('app.chome', {
      url: "/chome",
      views: {
        'menuContent' :{
          templateUrl: "templates/c_home.html"
        }
      }
    })
  
     .state('app.detail', {
      url: "/detail",
      views: {
        'menuContent' :{
          templateUrl: "templates/review_detail.html"
        }
      }
    })
  
       .state('app.yourreviews', {
      url: "/yourreviews",
      views: {
        'menuContent' :{
          templateUrl: "templates/yourreviews.html"
        }
      }
    })
       .state('app.yourfavorites', {
      url: "/yourfavorites",
      views: {
        'menuContent' :{
          templateUrl: "templates/yourfavorites.html"
        }
      }
    })
    .state('app.comments', {
      url: "/comments",
      views: {
        'menuContent' :{
          templateUrl: "templates/m_comments.html"
        }
      }
    })
  
   .state('app.postreview', {
      url: "/postreview",
      views: {
        'menuContent' :{
          templateUrl: "templates/postreview.html"
        }
      }
    })
  
   .state('app.share', {
      url: "/share",
      views: {
        'menuContent' :{
          templateUrl: "templates/m_share.html"
        }
      }
    })
  
   .state('app.addcomment', {
      url: "/addcomment",
      views: {
        'menuContent' :{
          templateUrl: "templates/m_add_comment.html"
        }
      }
    })
     .state('app.editaddress', {
      url: "/editaddress",
      views: {
        'menuContent' :{
          templateUrl: "templates/m_editaddress.html"
        }
      }
    })


    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })
  
    .state('app.maphome', {
      url: "/maphome",
      views: {
        'menuContent' :{
          templateUrl: "templates/map_home.html"
        }
      }
    })
  
   .state('app.mapthis', {
      url: "/mapthis",
      views: {
        'menuContent' :{
          templateUrl: "templates/map_property.html"
        }
      }
    })


    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
   .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    })
  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})
.controller('slideDetail', function($scope, $ionicSlideBoxDelegate) {
    $scope.ui="tim";
    $scope.nextSlide = function() {
            $scope.slideTotal=$ionicSlideBoxDelegate.slidesCount();
             $scope.ui="bob";
    $ionicSlideBoxDelegate.next();
  }
})
//swipe cards
.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
  var cardTypes = [
    { title: 'Swipe down to clear the card', image: 'img/pic.png' },
    { title: 'Where is this?', image: 'img/pic.png' },
    { title: 'What kind of grass is this?', image: 'img/pic2.png' },
    { title: 'What beach is this?', image: 'img/pic3.png' },
    { title: 'What kind of clouds are these?', image: 'img/pic4.png' }
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
    card.swipe();
  };
});
;

//swipe cards





