

import RequestLLM from './RequestLLM.tsx';
import NPC from './NPC.js';
import React, { useState } from 'react';
import NPCList from './NPCList.js';

export default function Place(props){
    let population = props.population;
    let keys = props.distributionKeys;
    let values = props.distributionValues;
    let [data, setData] = useState('');    
    console.log(props.includedDistricts)
    let npcs = <NPCList status={false} districts={props.includedDistricts}/>
    let includedDistricts = props.includedDistricts.map(x => {
        return(
            <div>
                <h3>{x}</h3>
                {<RequestLLM userInput={x}/>}
                {}
            </div>
        )
    })
    
    
    
    let popDistribution = [];
    for (let i = 0; i < keys.length; i++){
        popDistribution.push(keys[i] + ": " + values[i] + " | ");
    }

    
    //console.log(population, values);
    //let distribution = Object.fromEntries(keys.map((key, index) => [key, values[index]]));

    return(
        <div>
            <h2 className="placeName">Insert CityName here</h2>
            <p>Population: {population}</p>
            <p>{popDistribution}</p>
            <h2>Districts</h2>
            {includedDistricts}
            <h2>NPCs</h2>
            {npcs}
            
        </div>
    )

}