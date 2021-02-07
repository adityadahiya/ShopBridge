var module = angular.module("myApp");
module.factory('requests', ['$http','$q', function($http,$q){
    var service = {
        base: 'http://localhost:8082/',

        addItem: function (dataset) {
        var def = $q.defer();
        var data = new FormData();
        data.append('name', dataset.name);
        data.append('description', dataset.description);
        data.append('price', dataset.price);
        data.append('fileData', dataset.file);

        $http.post(service.base + 'item', data, {
           transformRequest: angular.identity,
           headers: { 'Content-Type': undefined }
         }).then(function (results) {
         def.resolve(results);
        });
        return def.promise;
        },
        getAllItems: function () {
             $http.get(service.base + "item")
                .then(function (response) {
                service.ITEM.ITEM_LIST = response.data;
                    return response.data;
                });
        },
        getItemById: function (itemId) {
            return $http.get(service.base + "item/" + itemId)
                .then(function (response) {
                    service.ITEM.ITEM_DATA = response.data;
                    return response;
                });
        },
        deleteItem: function (itemId) {
        var def = $q.defer();
            $http.delete(service.base + "item/" + itemId)
                .then(function () {
                    def.resolve(true);
                });
                return def.promise;
        },
        ITEM: {
            ITEM_LIST: [],
            ITEM_DATA: {}
        }
    };
    return service;
}]);
