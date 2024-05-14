import { React } from 'react';

export default function parseGPTMessage(obj){
    
    let responseText = Object.values(obj)[1][0].message.content;
    console.log(responseText);
    return(responseText);
}