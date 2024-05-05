import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Parameters } from './Parameters.js'

function App() {
  return (
    <div>
      <div>
        <h1 style={{display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'}}>Castlegen: Town Generation for 5e</h1>
      </div>
      <Parameters/>
    </div>
    
    
  );
}

export default App;
