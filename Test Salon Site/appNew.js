(function(){
    
    
    var app = angular.module('mySite',['ngRoute']);
        
        
    
        

        app.config(['$routeProvider' ,'$locationProvider',function($routeProvider,$locationProvider){
            $routeProvider
            
            .when('/topSalons',{
                templateUrl: 'public/views/topSalons.html'
                
            })
            .when('/offers',{templateUrl: 'public/views/offers.html'})
            .when('/newTrends',{templateUrl: 'public/views/newTrends.html'})
            .when('/home',{templateUrl: 'public/views/home.html'})
            .when('/contact',{templateUrl: 'public/views/contact.html'})
            .when('/profile',{templateUrl: 'public/views/hairStylist.html'})
            .when('/booking',{templateUrl: 'public/views/booking.html'})
            .when('/imageGallery',{templateUrl: 'public/views/imageGallery.html'})
            .when('/searchResults',{templateUrl: 'public/views/searchResults.html'})
            .when('/customerRegistration',{templateUrl: 'public/views/customerRegistration.html'})
            .when('/ownerContact',{templateUrl: 'public/views/ownerContact.html'})
            .otherwise({redirectTo: '/home'});
            $locationProvider.html5Mode({enabled: true, requireBase: false});
        }]);
    
        app.controller('subController',function(){
            this.product =testProduct;
            this.offers = offers;
        });
        app.controller('searchController',function(){
            this.services =services;
        });
        app.controller('offerController', function() {
            this.offers = offers;
        });
    
    var offers = [
        {
            offerId: 001,
            offer: '15% off for Hair cuts',
            finishDate: '15th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
        
        },
        {
            offerId: 002,
            offer: '15% off for Hair cuts',
            finishDate: '5th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
            
        },
        {
            offerId: 003,
            offer: '5% off for Hair cuts',
            finishDate: '25th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
            
        },
        {
            offerId: 004,
            offer: '25% off for Hair cuts',
            finishDate: '1th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
                  
        },
        {
            offerId: 005,
            offer: '15% off for Hair cuts',
            finishDate: '15th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
        
        },
        {
            offerId: 006,
            offer: '15% off for Hair cuts',
            finishDate: '5th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
            
        },
        {
            offerId: 007,
            offer: '5% off for Hair cuts',
            finishDate: '25th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
            
        },
        {
            offerId: 008,
            offer: '25% off for Hair cuts',
            finishDate: '1th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
                  
        },
        {
            offerId: 009,
            offer: '15% off for Hair cuts',
            finishDate: '15th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
        
        },
        {
            offerId: 010,
            offer: '15% off for Hair cuts',
            finishDate: '5th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
            
        },
        {
            offerId: 011,
            offer: '5% off for Hair cuts',
            finishDate: '25th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
            
        },
        {
            offerId: 012,
            offer: '25% off for Hair cuts',
            finishDate: '1th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
                  
        },
        {
            offerId: 013,
            offer: '15% off for Hair cuts',
            finishDate: '15th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
        
        },
        {
            offerId: 014,
            offer: '15% off for Hair cuts',
            finishDate: '5th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
            
        },
        {
            offerId: 015,
            offer: '5% off for Hair cuts',
            finishDate: '25th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
            
        },
        {
            offerId: 016,
            offer: '25% off for Hair cuts',
            finishDate: '1th of August',
            imageLink: 'public/img/kess/profilePicture.jpg'
                  
        }
    ];
    
        
    
    
 
    
    
 
    
    
   var services  =[ {
       Service      : 'mens hair cut',
       description  : 'cut the hair in half an hour',
       SalonName    : 'kess' ,
       Price        : 3000,
       imageLink    :'public/img/kess/profilePicture.jpg'
    },
    {
       Service      : 'Womens hair cut',
       description  : 'cut the hair in an hour',
       SalonName    : 'kess' ,
       Price        : 4000,
       imageLink    :'public/img/kess/profilePicture.jpg'
    },
    {
       Service      : 'blow dry',
       description  : 'only 45 minutes wi bee taken',
       SalonName    : 'Anoma Salon' ,
       Price        : 5000
    },
    {
       Service      : 'Womens hair Tint',
       description  : 'cut the hair in an hour',
       SalonName    : 'Ramani' ,
       Price        : 6000
    },
    {
       Service      : 'Nail polish',
       description  : 'cut the hair in an hour',
       SalonName    : 'Nail Anotomy' ,
       Price        : 7000
    },
    {
       Service      : 'mens hair cut',
       description  : 'cut the hair in half an hour',
       SalonName    : 'kess' ,
       Price        : 8000
    },
    {
       Service      : 'Womens hair cut',
       description  : 'cut the hair in an hour',
       SalonName    : 'kess' ,
       Price        : 9000
    },
    {
       Service      : 'blow dry',
       description  : 'only 45 minutes wi bee taken',
       SalonName    : 'Anoma Salon' ,
       Price        : 10000
    },
    {
       Service      : 'Womens hair Tint',
       description  : 'cut the hair in an hour',
       SalonName    : 'Ramani' ,
       Price        : 11000
    },
    {
       Service      : 'Nail polish',
       description  : 'cut the hair in an hour',
       SalonName    : 'Nail Anotomy' ,
       Price        : 12000
    }
    ];
    
})();

