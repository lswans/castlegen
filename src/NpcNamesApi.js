import * as MUN from "@ironarachne/made-up-names";
import React, { useState, useEffect } from 'react';
export default function NpcNamesApi(props){
    let race = props.race;
    let gender = props.gender;
    let total = props.total;
    //let url = "http://localhost:3000/get_file?address=https://names.ironarachne.com/race/"+race+"/"+gender+"/"+total;
    //let url = "https://names.ironarachne.com/race/"+race+"/"+gender+"/"+total;
    
    const [data, setData] = useState(null);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    React.useEffect(() => {
        fetch("/api")
        .then(res => res.json())
        .then((data) => setData(data.message, data.text, data.status))
    })
    return (
        <div>
            <p>{data}</p>
        </div>
      );
    }

