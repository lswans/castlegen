
export default function processCity(town, biome, pop, secflags){
    
    town = town.toLowerCase();
    //population ranges by town type
    const populationRanges = {
        'commune':[1, 75],
        'settlement':[76, 200],
        'town':[201, 600],
        'city':[601, 2000],
        'stronghold':[2001, 10000]
    } 
    
    //set attributes for Place object: population, biome, races and flags
    const popRange = populationRanges[town];
    let finalPop = Math.floor(Math.random() * popRange[1] + popRange[0]);
    console.log(finalPop);
    return("")
    
}