var app = angular.module("myApp");

var AddItemController = function ($scope, $uibModalInstance, requests) {
    $scope.item = {
        name: null,
        description: null,
        price: 0,
        file: null
    };
    $scope.error = null;
    $scope.addItem = function () {
        $scope.item.file = $scope.$$childTail.item && $scope.$$childTail.item.file ? $scope.$$childTail.item.file : null;
        if ($scope.item.file && $scope.item.file.type && !$scope.item.file.type.includes("image")) {
            window.alert("You are only allowed to upload an image file");
        } else {
                requests.addItem($scope.item).then(function() {
                    requests.getAllItems();
                    $uibModalInstance.close();
                });
        }
    }

};

app.controller("AddItemController", ["$scope", "$uibModalInstance", "requests", AddItemController]);
