import * as MUN from "@ironarachne/made-up-names";
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import NPCList from './NPCList.js';
import Place from "./Place.js";
import calcRandomNumber from "./functions/calcRandomNumber.js";


export default function NPC(props){
    const name = props.name;
    //console.log(props.districts);
    let district = props.districts[calcRandomNumber(0, props.districts.length - 1)]
    return(
        <div>
            <h3>{name}</h3>
            <p>{district}</p>
        </div>
    );
       }
        
       
    
    