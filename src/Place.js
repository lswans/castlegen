import * as React from 'react';

export default function Place(props){
    let population = props.population;
    let keys = props.distributionKeys;
    let values = props.distributionValues;
    let includedDistricts = props.includedDistricts.map(district => {
        return(<h3>{district}</h3>)
    });
    
    let displayedValues = [];
    for (let i = 0; i < keys.length; i++){
        displayedValues.push(keys[i] + ": " + values[i] + " | ");
    }

    
    //console.log(population, values);
    //let distribution = Object.fromEntries(keys.map((key, index) => [key, values[index]]));

    return(
        <div>
            <h2 className="placeName">Insert CityName here</h2>
            <p>Population: {population}</p>
            <p>{displayedValues}</p>
            <h2>Districts</h2>
            {includedDistricts}

            
        </div>
    )

}