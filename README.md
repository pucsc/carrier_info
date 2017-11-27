# Carrier Flights Information System - a MEAN stack App
Basic application demonstrating MEAN (Mongo, Express, Angular, and Node) Integration . Application allows users to look at
 +  1. All the CARRIERS availble and  <br>
 +  2. all Flights with in the given Carrier  <br>
 +  3. detailed Flight information for a given FLIGHT number <br>

###  Part I  - REST API for the whole Application ( this is heart of the Appication )
 + 1. All the CARRIERS availble, URL:  http://localhost:3000/carriers <br>
 + 2. all Flights with in the given Carrier  URL:  http://localhost:3000/SouthWest <<br>
 + 3. detailed Flight information for a given FLIGHT number URL:  http://localhost:3000/SouthWest/SFO-DELHI <br>


###  Part II  - Angulra UI Web application using above REST API
 + This part will display Web pages using above API
 + Flights data supplied by instrucgtor is placed  under 'Files'  directory

## Instructions to run locally 

+ 1. Clone repository and download npm packages
```
git clone https://github.com/pucsc/carrier_info.git
npm install
```

 + 2. Launch Node Server run server.js
 ```
 node server.js
 ```

 + 3. Open browser `http://localhost:3000`



