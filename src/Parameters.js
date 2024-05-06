import './App.css';
import React from 'react';
//import Select from "react-dropdown-select";
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ReactSelect from "react-select";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import processCity from './processCity.js';
import RenderCity from './RenderCity.js';

export function Parameters(){
// primary flag handlers

  const [town, setTown] = useState('');
  const handleTownChange = (event) => {
    setTown(event.target.value);
  };

  const [biome, setBiome] = useState('');
  const handleBiomeChange = (event) => {
    setBiome(event.target.value);
  };

  const [pop, setPop] = useState('');
  const handlePopChange = (event) => {
    setPop(event.target.value);
  };
//secondary flag handlers
  const [secondaryFlags, setSecondaryFlags] = useState([]);
  let secondaryFlagsValues = [];
//manage display of rendered city

  
    return(
    <div>
      <div className="dropdown-container">
        <h2>Primary Flags</h2>
        <div className="dropdown">
        <InputLabel id="demo-simple-select-label">Town Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={town}
            label="Town"
            onChange={handleTownChange}
          >
            <MenuItem value={"Commune"}>Commune (1-75)</MenuItem>
            <MenuItem value={"Settlement"}>Settlement (76-200)</MenuItem>
            <MenuItem value={"Town"}>Town (201-600)</MenuItem>
            <MenuItem value={"City"}>City (600-2k)</MenuItem>
            <MenuItem value={"Stronghold"}>Stronghold (2k+)</MenuItem>
          </Select>
        </div>
        <div className="dropdown">
            <InputLabel id="demo-simple-select-label">Town Biome</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={biome}
                label="Biome"
                onChange={handleBiomeChange}
              >
                <MenuItem value={"Forest"}>Forest</MenuItem>
                <MenuItem value={"Mountain"}>Mountain</MenuItem>
                <MenuItem value={"Grassland"}>Grassland</MenuItem>
                <MenuItem value={"Coast"}>Coast</MenuItem>
                <MenuItem value={"Underground"}>Underground</MenuItem>
              </Select>
          </div>
          <div className="dropdown">
            <InputLabel id="demo-simple-select-label">Dominant Population</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pop}
                label="Dominant Population"
                onChange={handlePopChange}
              >
                <MenuItem value={"Human"}>Human</MenuItem>
                <MenuItem value={"Elf"}>Elf</MenuItem>
                <MenuItem value={"Dwarf"}>Dwarf</MenuItem>
                <MenuItem value={"Tiefling"}>Tiefling</MenuItem>
                <MenuItem value={"Gnome"}>Gnome</MenuItem>
                <MenuItem value={"Random"}>Random</MenuItem>
              </Select>
          </div>
        </div>
        
        <div>
          <h2>Secondary Flags</h2>
          <ReactSelect
            onChange={(secondaryFlags) => setSecondaryFlags(secondaryFlags)}
            isMulti
            isSearchable
            options={[
              { label: "Walled City", value: "walls" },
              { label: "Haunted", value: "haunted" },
              { label: "RequireScholars", value: "requirescholars" },
              { label: "MilitaryInstallation", value: "militaryinstallation" }
            ]}
            className="multiselect"
          ></ReactSelect>
        </div>
        <Button onClick={() => {
          
          for (let i = 0; i < secondaryFlags.length; i++){
             secondaryFlagsValues.push(secondaryFlags[i].value);
          }
          processCity(town, biome, pop, secondaryFlagsValues);
        }}variant="outlined" endIcon={<SendIcon/>}>Generate</Button>
        
        
        
      </div>
    );
}