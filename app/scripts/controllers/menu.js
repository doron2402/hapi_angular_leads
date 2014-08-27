'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp').controller('MenuCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
