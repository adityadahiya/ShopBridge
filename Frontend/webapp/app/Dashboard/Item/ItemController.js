var app = angular.module("myApp");

var ItemController = function ($scope, requests, $location, $http, $state, $stateParams) {

    requests.getItemById($stateParams.itemId);
    $scope.item = requests.ITEM
};

app.controller("ItemController", ["$scope", "requests", "$location", '$http', '$state', '$stateParams',  ItemController]);

