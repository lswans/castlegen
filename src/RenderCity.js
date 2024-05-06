
export default function RenderCity(props){
    let townType = props.town;
    let biomeType=props.biome;
    let majorityPop = props.pop;

    let secflags = props.secondaryFlagsValues;

    console.log(townType, biomeType, majorityPop, secflags);


    return(townType, biomeType, majorityPop, secflags);
}