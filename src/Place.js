import * as React from 'react';
import useState from 'react';
import RequestLLM from './RequestLLM.tsx';
import NpcNamesApi from './NpcNamesApi.js';


export default function Place(props){
    let population = props.population;
    let keys = props.distributionKeys;
    let values = props.distributionValues;

    let includedDistricts=props.includedDistricts.map(x => {
        return(
            <div>
                <h3>{x}</h3>
                {<RequestLLM userInput={x}/>}
                {<NpcNamesApi race={"elf"} gender={"male"} total={10}/>}
            </div>
        )
    })
    
    let districtDescriptions = props.districtDescriptions;
    
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
            
            
        </div>
    )

}