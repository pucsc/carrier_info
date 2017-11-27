// Create the headerCtrl module and controller. Note that it depends on $location service
var headerCtrl = angular.module('headerCtrl', []);
headerCtrl.controller('headerCtrl', function($scope, $location) {

    $scope.formData = {} ;

    var fetchdata = this ;
    fetchdata.code = 200 ;
    fetchdata.data = "" ;

    $scope.getMoreDetails = function(id){
        alert('id value is:' + id);
        //fetchdata.data = [] ;
    } ;


    var apicall_result = "" ;
    // --------------- API call function
    var apiCall = function(url) {
        $.ajax({
            url: url,
            success: function (result) {
                //alert(result.code);
                apicall_result = result;   // set the result to external variable
            },
            async: false
        });

    }

    // ------------- API call function
    var getCarriers = function () {
        apiCall('/carriers');

        fetchdata.data = apicall_result.data ;
    };

    // ----------- make call
    getCarriers();


    // Sets the isActive value based on the current URL location
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});