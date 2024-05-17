import * as MUN from "@ironarachne/made-up-names";
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import NPC from './NPC.js';


export default function NPCList(props){
    let [data, setData] = useState(['']);
    let [status, setStatus] = useState(props.status);
    let [pop, setPop] = useState('human')
    let [type, setType] = useState('male')
    let [total, setTotal] = useState(1);
    let [showData, setShowData] = useState(false);


    let url = '/api/';
    const handlePopChange = (event) => {
        setPop(event.target.value);
      };
      const handleTypeChange = (event) => {
        setType(event.target.value);
      };
      const handleTotalChange = (event, val) => {
        setTotal(val);
      };   
    //let url = '/api/'+props.race+'/'+props.gender+'/'+props.total;
    
    console.log(url);
    async function getNames (){
        url+= pop+'/'+type+'/'+total;
        const response = await axios.post(url, {
        })
        
        
        setData(response.data.message);
        setShowData(true);
    }
    
    console.log(data);
    
    
    return(
        <div>
            <div className="dropdown">
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pop}
                label="Dominant Population"
                onChange={handlePopChange}
              >
                <MenuItem value={"human"}>Human</MenuItem>
                <MenuItem value={"elf"}>Elf</MenuItem>
                <MenuItem value={"dwarf"}>Dwarf</MenuItem>
                <MenuItem value={"tiefling"}>Tiefling</MenuItem>
                <MenuItem value={"gnome"}>Gnome</MenuItem>
                <MenuItem value={"dragonborn"}>Dragonborn</MenuItem>
                <MenuItem value={"orc"}>Orc</MenuItem>
              </Select>
              </div>
              <div className="dropdown">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Dominant Population"
                onChange={handleTypeChange}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"family"}>Family</MenuItem>
                
              </Select>
              <NumberInput
                    min={1}
                    max={10}
                    aria-label="Demo number input"
                    placeholder="Type a number..."
                    value={total}
                    onChange={handleTotalChange}
                    className='numberInput'
                />
              </div>
            <Button variant ={"outlined"} onClick={getNames}>Build NPCs</Button>
            
            {showData && <NPC name={data} districts={props.districts}/>}
        </div>
    );
}