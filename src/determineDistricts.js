
export default function determineDistricts(town, biome, secflags, popDistribution){
    //associate each place size classification with a baseline number of districts
    let townToDistrictNum = {
        "commune": 1,
        "settlement":2,
        "town": 3,
        "city": 4,
        "stronghold": 6
    }
    //calculate the number of districts to be associated with this Place
    let totalDistricts = Math.round(Math.random() * ((townToDistrictNum[town]-1))+1);
    if(totalDistricts == 0){
        totalDistricts = 1;
    }
    console.log("DISTRICTS TO PICK: " + totalDistricts);
    //associate districts with biome types
    let districts = {"Farming":["Grassland", "Forest", "Coast", "Mountains"],
                        "Logging": ["Forest"],
                        "Fishing": ["Coast"],
                        "Trading" : ["Grassland", "Forest", "Coast", "Mountains", "Underground"],
                        "Wineries":["Grassland", "Coast", "Mountains", "Underground"],
                        "Mines": ["Grassland", "Mountains", "Underground"],
                        "Drydocks": ["Coast"],
                        "Forges": ["Grassland", "Forest", "Coast", "Mountains", "Underground"],
                        "Barracks": ["Grassland", "Forest", "Coast", "Mountains", "Underground"],
                        "Scholar's Residence": ["Grassland", "Forest", "Coast", "Mountains", "Underground"],
                        "Circus": ["Grassland", "Forest", "Coast"]
                        
        };
    
    //form list of possible districts to choose from given the parameters
    let possibleDistricts = [];
    for (let [key, value] of Object.entries(districts)){
        if(value.includes(biome)){
            possibleDistricts.push(key);
        }
    }
    
    //randomly select the districts
    let finalDistricts = [];
    
    while (totalDistricts != 0 || possibleDistricts == []){
        //console.log(possibleDistricts);
        let index = Math.floor(Math.random() * possibleDistricts.length  - 1) + 1;
        finalDistricts.push(possibleDistricts[index]);
        possibleDistricts.splice(index, 1);
        totalDistricts -= 1;
    }
    //handle secondary flags
    if(secflags.includes("requirescholars") && !finalDistricts.includes("Scholar's Residence")){
        finalDistricts.push("Scholar's Residence");
    }

 
    return(finalDistricts);

}