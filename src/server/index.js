
const express = require("express");
const http = require('http');
const https = require('https');
const axios = require('axios');




const PORT = process.env.PORT || 3001;

const app = express();
//const response = await apiRequest();
//app.use(require('body-parser').urlencoded({ extended: false }));
let requestParams = [];

app.post("/api/:race/:gender/:total", (req, res) =>  {
    console.log("entering app.post")
    requestParams.push(req.params.race);
    requestParams.push(req.params.gender);
    requestParams.push(req.params.total);
    //const names = fetch("https://names.ironarachne.com/race/elf/female/10")
    apiRequest(res);

     //console.log(response);
    
     //console.log(result);
     //apiRequest();
});
console.log(requestParams);
async function apiRequest(res) {
    console.log(requestParams);
    await axios.get('https://names.ironarachne.com/race/'
    +requestParams[0]+'/'+requestParams[1]+'/'+requestParams[2])
    .then(response => {
        //console.log(response.data.names)
        //console.log(response.data.names);
        res.json({message: response.data.names})
        })
        //console.log(data);
        //console.log(result);
        
    }  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

