// Application module
var app =angular.module('crudApp', []);
    app.controller('portCtrl', function($scope,$http){
    getInfo();
    function getInfo() {
        $http.get('dbFiles/portDetails.php').success(function(data){
            $scope.details =data;
        });
    }

    $scope.insertInfo = function (info) {
        $http.post('dbFiles/insertDetails.php', { "name": info.name, "email": info.email, "address": info.address, "gender": info.gender }).success(function (data) {
            if (data == true) {
                getInfo();
                // Hide details insertion form
                $('#portForm').css('display', 'none');
            }
        });
    }
});