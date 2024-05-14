//RequestLLM.tsx is a TypeScript file which handles the API calls to OpenAI.

import React, {useState} from 'react';
import axios from 'axios';
import { OpenAI } from 'openai';
import Button from '@mui/material/Button';
import parseGPTResponse from './functions/parseGPTResponse.js';


function RequestLLM(props){
  let input = props.userInput;
  const [status, setStatus] = useState("Get ChatGPT Description");
  const [message, setMessage]= useState("You are describing a settlement in a fantasy realm, such as those common in the Dungeons and Dragons universe. Describe the part of the city containing the following: " + input + ". Your response should be no longer than 2 sentences.");
  const [allMessages, setAllMessages] = useState<any[]>([]);
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;


  const sendMessage = async () => {
    setStatus("Loading...");
    let url = 'https://api.openai.com/v1/chat/completions'
    let token = 'Bearer ' + apiKey
    let model = 'gpt-3.5-turbo'

    let messagesToSend = [
      ...allMessages, 
      {
        role: 'user',
        content: message
      }
    ]

    let res = await fetch(url, {
      method: 'POST',
      headers:{
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model,
        messages : messagesToSend
      })
    })
    let resjson = await res.json();
    if(resjson){
      console.log(resjson)

      let newAllMessages = [
        ...messagesToSend,
        resjson.choices
      ]
      setAllMessages(newAllMessages);
      setMessage('')
      setStatus("Done");
    }
   
  }
  let responseText = "";
  if(allMessages[0]){
    responseText = parseGPTResponse(allMessages);
    
  }
  
  return(
    <div>
      {status != "Done" && <Button onClick={sendMessage}>{status}</Button>}
      {responseText}
      
  </div>    
 
  )
}

export default RequestLLM
/*
const url = "https://api.openai.com/v1/chat/completions";
const client = axios.create();
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
client.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
const params = {
  prompt: "How are you?",
  model: "text-davinci-003",
  maxTokens: 30,
  temperature: 0
};

client.post("https://api.OpenAI.com/v1/chat/completions", params)
  .then(response => {
    const answer = response.data.choices[0].text;
    console.log("Response:", answer);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
}

export default requestLLM;
/*
const limiter = new RateLimiter({ tokensPerInterval: 40000, interval: "minute" });
const openai = new OpenAI({
  
});
async function RequestLLM() {
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Who won the world series in 2020?"},
          {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
          {"role": "user", "content": "Where was it played?"}],
      model: "gpt-3.5-turbo",
      stream: true
    });
    for await (const chunk of stream) {
      process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
    console.log(completion.choices[0]);
  }
RequestLLM();
export default RequestLLM;

//const path = require("path");


/*const { OpenAI } = require("openai");

export default function requestLLM(props){
  console.log("entering RequestLLM");
  let input=props.input;
  let result = llmResponse(input);
  return(result);
}


async function llmResponse(input){
  const openAIClient = new OpenAI({
    apiKey: process.env['REACT_APP_OPENAI_API_KEY'],
    dangerouslyAllowBrowser: true
  });
  
  const headers = {
    'Retry-After': 60, // Set the delay in seconds (e.g., 1 minute)
    // Other headers as needed
  };

  const chatCompletion = await openAIClient.chat.completions.create({
    headers:{
      'Authorization': 'Bearer ' + process.env['REACT_APP_OPENAI_API_KEY'],
      'Retry-After': 60
    },  
    model: "gpt-3.5-turbo",
      messages: [{ 
        role: "user", 
        content: "Say this is a test" }],
      stream: true,
      max_tokens: 1,
      n: 1,
      stop: "."
      
  })
  
  return(chatCompletion);
}

/*
const openai = new OpenAI({
  apiKey: process.env['REACT_APP_OPENAI_API_KEY'], // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

app.use(express.json())
app.use(express.static(path.join(__dirname, '../../dist')));

app.post('/api/message', (req, res) => {
  console.log("Receieved message: ", req.body.message);
  const { message } = req.body;
  res.json({ reply: 'Echo: ${message}'});
});

app.post('/api/statistics', async (req, res) => {
  
  const { query } = req.body;
  console.log("Receieved statistics request for ", query);

  try {
    const prompt = "You are describing a settlement in a fantasy realm, such as those common in the Dungeons and Dragons universe. Describe the part of the city containing the following: ";
    console.log("Constructed prompt for OpenAI");

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [{"role": "user", "content": prompt}],
      max_tokens: 1024
    });

    if(completion.choices[0].message && completion.choices[0].message.content){
      const messageContent = completion.choices[0].message.content;
      console.log("Message content:", messageContent);
      const data = JSON.parse(messageContent);
      res.json(data);
      
    }else{
      console.error("No valid data in openai response");
      res.status(500).json({error: "No valid data in openai response"})
    }
    
  }catch(error){
    console.log("ERROR");
  }
});

app.get('*', (req, res) => {
  console.log("Serving static file or SPA fallback");
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
})


export default async function requestLLM() {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Say this is a test' }],
      n: 1
    },
  );

    // Handle the response here (e.g., log it or use the content)
    console.log(response.choices[0]?.message?.content || '');
  } catch (error) {
    console.error('Error:', error.message);
  }
}
*/


/*
export default async function requestLLM(){
  const prompt = "You are describing a settlement in a fantasy realm, such as those common in the Dungeons and Dragons universe. Describe the part of the city containing the following: ";
  const response = await OpenAI.createCompletion({
    model:"gpt-3.5-turbo",
    prompt: prompt,
    max_tokens: 1000,
    temperature: 0
  });

  console.log(response.data);
}
requestLLM();
*/



