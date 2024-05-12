import calcRandomNumber from "./calcRandomNumber";
import setOfRandomInts from "./setOfRandomInts";
export default function calcPopDistributions(dominant, total, exclusions){
    const races = ["Human", "Elf", "Dwarf", "Tiefling", "Gnome"];
    
    //shift dominant population to the front of the array
    /*const index = races.indexOf(dominant);
    if (index !== -1){
        races.splice(index, 1);
        races.unshift(dominant);
    }
    */
   function randomlyDistributeValues(){
    
  
   }
    let humanPercent = 20, elfPercent = 20, dwarfPercent = 20, tieflingPercent = 20, gnomePercent = 20; 
    const percentages = {
        "Human": humanPercent,
        "Elf": elfPercent,
        "Dwarf": dwarfPercent,
        "Tiefling": tieflingPercent,
        "Gnome": gnomePercent
    }
    let popDistribution = {};
    function setPopDistribution(key){//key = race being set (e.g. "Human")
        let totalPeople = Math.round(percentages[key]/ 100 * total);
        popDistribution[key] = totalPeople;
    }

    let placeholder = 25
    //set all populations to an equal value adding up to the total population
    if(dominant == "Equal" || dominant == null){
        for (let [key, value] of Object.entries(percentages)){
            setPopDistribution(key);
        }
    //set random populations while ensuring the dominant population is the largest number.
    }else if(dominant == "Random"){
        let unassignedRaces = Object.keys(percentages);
        let populations = setOfRandomInts(unassignedRaces.length, total);
        
        for(let i = 0; i < Object.keys(percentages).length; i++){
            let index = calcRandomNumber(0, unassignedRaces.length-1);
            popDistribution[Object.keys(percentages)[i]] = populations[index];
            //remove the used values for population and race from their respective arrays
            unassignedRaces.splice(index, 1);
            populations.splice(index, 1);
            
        }
    }else{
        //set percentages
        let totalPercent = 0;
        for (let [key, value] of Object.entries(percentages)){

            if(key == races[races.length-1]){
                percentages[key] = 100 - totalPercent;
                totalPercent += 100 - totalPercent;
            }
            
            else if(key != dominant){
                //percentages[key] -= 5;
                let result = (Math.random() * (15 - 5) + 5);
                percentages[key] = result;
                totalPercent += result;
               
            }
            else if(key == dominant){
                //percentages[key] += 20;
                let result = (Math.random() * (50 - 40) + 40);
                percentages[key] = result;
                totalPercent += result;
            }
            let totalPeople = Math.round(percentages[key]/ 100 * total);
            popDistribution[key] = totalPeople;
            
          }
         
          
    }
    
    return(popDistribution);
}