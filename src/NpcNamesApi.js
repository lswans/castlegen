import * as MUN from "@ironarachne/made-up-names";
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
export default function NpcNamesApi(props){
    let race = props.race;
    let gender = props.gender;
    let total = props.total;
    //let url = "http://localhost:3000/get_file?address=https://names.ironarachne.com/race/"+race+"/"+gender+"/"+total;
    //let url = "https://names.ironarachne.com/race/"+race+"/"+gender+"/"+total;
    
    const [data, setData] = useState(null);
    const [showNames, setShowNames] = useState(false);
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
    async function getResponse(){
        setShowNames(true);
        fetch("/api")
        .then(res => res.json())
        .then((data) => setData(data.message, data.text, data.status))
    }
    console.log(data);
    return (
        <div>
            <Button onClick={getResponse} variant={"outlined"}>Get NPC Names</Button>
            {showNames && data}
        </div>
      );
    }

