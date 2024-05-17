import * as MUN from "@ironarachne/made-up-names";
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
const axios = require('axios')
    let data = null;
    //let url = "http://localhost:3000/get_file?address=https://names.ironarachne.com/race/"+race+"/"+gender+"/"+total;
    //let url = "https://names.ironarachne.com/race/"+race+"/"+gender+"/"+total;
    function setData(input){
        data = input;
    }
    function buffer(input){
        //console.log(input.message)
        data = input;
        //console.log(data);
    }
    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    /*
    React.useEffect(() => {
        fetch("/api")
        .then(res => res.json())
        .then((data) => setData(data.message, data.text, data.status))
    })
*/
    export default async function getNames(race, gender, total){
       try{
        const response = await fetch('/api')
        const data = await response.json()
        return data.message
       }
        catch(error){
            console.error(error)
        }
        
       
        
    }
    
       //let url = 'https://names.ironarachne.com/race/'+race+'/'+gender+'/'+total;
       /*     
       const response = fetch('/api')
            .then((response) => response.json())
            .then((data) => {
                return data
            })
            const returnResponse = async () => {
                const names = await response;
            };
            returnResponse();
            //console.log(parsedResponse);
            */
        
        //console.log(data);
    
    //console.log(data);
    
 

