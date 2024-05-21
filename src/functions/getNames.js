import React from 'react';
import axios from 'axios';

export default async function getNames (url, pop, type){
    
    url+= pop+'/'+type+'/'+1;
    console.log(url);
    console.log(url);
    const response = await axios.post(url, {
    })
    
    
    //setData(response.data.message);
    //setShowData(true);
    return([response.data.message])
}