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
            <MenuItem value={1}>Commune (1-75)</MenuItem>
            <MenuItem value={2}>Settlement (76-200)</MenuItem>
            <MenuItem value={3}>Town (201-600)</MenuItem>
            <MenuItem value={4}>City (600-2k)</MenuItem>
            <MenuItem value={5}>Stronghold (2k+)</MenuItem>
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
                <MenuItem value={1}>Forest</MenuItem>
                <MenuItem value={2}>Mountain</MenuItem>
                <MenuItem value={3}>Grassland</MenuItem>
                <MenuItem value={4}>Coast</MenuItem>
                <MenuItem value={5}>Underground</MenuItem>
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
                <MenuItem value={1}>Human</MenuItem>
                <MenuItem value={2}>Elf</MenuItem>
                <MenuItem value={3}>Dwarf</MenuItem>
                <MenuItem value={4}>Tiefling</MenuItem>
                <MenuItem value={5}>Gnome</MenuItem>
                <MenuItem value={6}>Random</MenuItem>
              </Select>
          </div>
        </div>
        
        <div>
          <h2>Secondary Flags</h2>
          <ReactSelect
            onChange={(selectedValue) => setSecondaryFlags(selectedValue)}
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
        <Button variant="outlined" endIcon={<SendIcon/>}>Generate</Button>
      </div>
    );
}