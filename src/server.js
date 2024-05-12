const express = require("express")
const cors = require("cors")
const bodyParser = require(bodyParser)

const { OpenAI } = require("openai");

const config = new Configuration({
    apiKey: process.env['REACT_APP_OPENAI_API_KEY'],

});

const openai = new OpenAIApi(config);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res)=>{
    const {prompt} = req.body;

    const completion = await openai
})