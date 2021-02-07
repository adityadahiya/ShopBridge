var app = angular.module("myApp");

var DashboardController = function ($scope, requests, $state, $uibModal) {
        requests.getAllItems();
        $scope.itemList = requests.ITEM;
        $scope.deleteItem = function (itemId) {
            requests.deleteItem(itemId).then(function() {
                requests.getAllItems();
            });
        };
    $scope.openAddItemModal = function () {
       return $uibModal.open({
        templateUrl: 'app/modals/AddItem.html',
        controller: 'AddItemController',
        controllerUrl: 'app/modals/AddItemController.js',
       });
    }
    $scope.goToItem = function (itemId) {
        $state.go('dashboard.item', {itemId: itemId})
    }
};

app.controller("DashboardController", ["$scope", "requests", "$state", "$uibModal", DashboardController]);
