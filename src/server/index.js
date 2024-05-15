
const express = require("express");
const http = require('http');
const https = require('https');
const axios = require('axios');




const PORT = process.env.PORT || 3001;

const app = express();
//const response = await apiRequest();

let result = [];

app.get("/api", (req, res) =>  {
    //const names = fetch("https://names.ironarachne.com/race/elf/female/10")
    apiRequest(res);

     //console.log(response);
     //res.json({ message: "hello!!!"});
     //console.log(result);
     //apiRequest();
});
async function apiRequest(res) {
    let data = await axios.get('https://names.ironarachne.com/race/elf/female/10')
    .then(response => {
        console.log(response.data.names)
        res.json({message: response.data.names})
        })
        //console.log(data);
        //console.log(result);
        
    }  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

