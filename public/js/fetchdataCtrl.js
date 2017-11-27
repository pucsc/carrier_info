// Create the headerCtrl module and controller. Note that it depends on $location service
var headerCtrl = angular.module('fetchdataCtrl', []);
fetchdataCtrl.controller('fetchdataCtrl', function($scope, $location) {

    var fetchdata = this ;
    fetchdata.data = "" ;

    var apicall_result = "" ;

    // ------------- API call function
    var getCarriers = function () {
        apiCall('/carriers');

        fetchdata.data = apicall_result.data ;
    };

    // --------------- API call function
    var apiCall = function(url) {
        jQuery.ajax({
            url: url,
            success: function (result) {
                //alert(result.code);
                apicall_result = result;   // set the result to external variable
            },
            async: false
        });

    }

    // ----------- make call
    getCarriers();

});