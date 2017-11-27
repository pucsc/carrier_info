// Dependencies
var fs = require('fs');

var start_directoryPath = "./Files" ; // directory name that holds various carrier FILE FOLDERS


// Retrieve ALL Carrier names which are Directory Folder names
// --------------------------------------------------------
exports.list_carriers = function(req, res) {

    var isFoldersOnly = true;  // we want only Directory Folder names
    var directoryPath = start_directoryPath ;
    var responseObject = retrive_carreir_Files(directoryPath, isFoldersOnly ) ;

    res.json(responseObject);
}


// Retrieve ALL FLIGHTS names for a given CarrierID
// --------------------------------------------------------
exports.list_flights = function(req, res) {

    var isFoldersOnly = false;
    var directoryPath = start_directoryPath + "/" + req.params.carrierID;
    var responseObject = retrive_carreir_Files(directoryPath, isFoldersOnly ) ;

    res.json(responseObject);
}


// Retrieve ALL FLIGHTS names for a given CarrierID
// --------------------------------------------------------
exports.get_flight_info = function(req, res) {

    var directoryPath = start_directoryPath + "/" + req.params.carrierID + "/" + req.params.flightID;

    if (directoryPath.indexOf(".json") == -1 ) {
        directoryPath = directoryPath + ".json" ;
    }
    function retrieve_contents() {
        // have defult returnObject which indicate HTTP code 404 meaning NOT successful operation
        var returnObject = {
            code : 404 ,
            data : [ ] ,
            message  : ""
        }

        try {
            var contents = fs.readFileSync(directoryPath, 'utf8');
            returnObject = contents;
        } catch(e) {
            returnObject.message = e.toString();
        }

        return (returnObject);

    }

    var responseObject = retrieve_contents() ;
    res.json(responseObject);
}


// This function return all Directory/File names for a given directoryPath
//  - isFoldersOnly : true (retrives only Directory Folders )
// --------------------------------------------------------
function retrive_carreir_Files(directoryPath, isFoldersOnly) {

    var fileList = [];

    findFile = function(dir)
    {
        fs.readdirSync(dir).forEach(function(file) {

            var isDirectory = fs.lstatSync(directoryPath + "/" + file).isDirectory() ;

            if (isFoldersOnly && isDirectory) {
                return fileList.push( file);      // append to list only if is Directory folder

            } else if (!isFoldersOnly && !isDirectory) {

                return fileList.push( file);
            }

        });
    };

    // have defult returnObject which indicate HTTP code 200 meaning successful operation
    var returnObject = {
        code : 200 ,
        data : [ ] ,
        message  : ""
    }

    try {
        findFile(directoryPath);
        returnObject.data = fileList ;
    }
    catch (e) {
        returnObject.code = 404 ,       // set HTTP 404 which is resource not found
        returnObject.message = e.toString();
    }

    console.log(returnObject) ;

    return (returnObject);
}