
const express = require('express');
const http = require('http');
const https = require('https');
const axios = require('axios');
const PORT = process.env.PORT || 3001;
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
//
const app = express();
//const response = await apiRequest();
//app.use(require('body-parser').urlencoded({ extended: false }));
let requestParams = [];

app.get('/api', (req, res) => {
    res.send("Hello from firebase!")
})

//exports.app = functions.https.onRequest(app);
export const api = functions.https.onRequest(app);

/*


app.post("/api/:race/:gender/:total", (req, res) =>  {
    requestParams.push(req.params.race);
    requestParams.push(req.params.gender);
    requestParams.push(req.params.total);
    //const names = fetch("https://names.ironarachne.com/race/elf/female/10")
    let result = apiRequest(res);
    result.send();
     //console.log(response);
    
     //console.log(result);
     //apiRequest();
});

async function apiRequest(res) {
    await axios.get('https://names.ironarachne.com/race/'
    +requestParams[0]+'/'+requestParams[1]+'/'+requestParams[2])
    .then(response => {
        requestParams=[];
        return(res.json({message: response.data.names}))
        })
        
       
    }  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

exports.getCharacterName = functions.https.onrequest(app);
*/