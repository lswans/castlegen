const express = require("express");
const http = require('http');
const https = require('https');

const PORT = process.env.PORT || 3001;

const app = express();

const sendRequest = async () => {
    app.get("/api", (req, res) => {
        //const names = fetch("https://names.ironarachne.com/race/elf/female/10")
        res.json({ message: "Hello from Express backend!"});
      });
}


sendRequest()

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

