

export default function calcPopDistributions(dominant, total, exclusions){
    const races = ["Human", "Elf", "Dwarf", "Tiefling", "Gnome"];
    
    //shift dominant population to the front of the array
    /*const index = races.indexOf(dominant);
    if (index !== -1){
        races.splice(index, 1);
        races.unshift(dominant);
    }
    */
    let humanPercent = 20, elfPercent = 20, dwarfPercent = 20, tieflingPercent = 20, gnomePercent = 20; 
    const percentages = {
        "Human": humanPercent,
        "Elf": elfPercent,
        "Dwarf": dwarfPercent,
        "Tiefling": tieflingPercent,
        "Gnome": gnomePercent
    }
    let popDistribution = {};
    let placeholder = 25
    if(dominant == "Random" || dominant == null){
        //humanPercent, elfPercent, dwarfPercent, tieflingPercent, gnomePercent = 20;
    }else{
        //set percentages
        let totalPercent = 0;
        for (let [key, value] of Object.entries(percentages)){
            //console.log(key);
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
    //console.log(percentages);
    return(popDistribution);
}