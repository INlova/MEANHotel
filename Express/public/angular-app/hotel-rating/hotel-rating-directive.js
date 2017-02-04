// angular.module('meanhotel')
//     .directive('hotelRating', hotelRating);
// // <hotel-rating>

// function hotelRating() {
//     return {
//         restrict: 'E',
//         template: '<span ng-repeat="stars in vm.stars track by $index" class="fa fa-star">{{ star }}}</span>',
//         bindToController: true,
//         controller: 'hotelController',
//         controllerAs: 'vm',
//         scope: {
//             stars: '@'
//         }
//     }
// }    

angular.module('meanhotel').component('hotelRating',{
    bindings: {
        stars: '='
    },

    template: '<span ng-repeat="stars in vm.stars track by $index">♥</span>',
    controller: 'HotelController',
    controllerAs: 'vm',    

});