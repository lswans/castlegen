import * as React from 'react';
import useState from 'react';
import requestLLM from './RequestLLM.tsx';

export default function Place(props){
    let population = props.population;
    let keys = props.distributionKeys;
    let values = props.distributionValues;
    let includedDistricts=props.includedDistricts;
    
    let districtDescriptions = props.districtDescriptions;
    /*let includedDistricts = props.includedDistricts.map(district => {
    let districtText = llmResponse(district);
        //console.log(districtText);
        return(<h3>{district}</h3>);
        });
    */
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