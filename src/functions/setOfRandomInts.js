import calcRandomNumber from "./calcRandomNumber";
//x = total number of random integers, y = target sum
export default function setOfRandomInts(x, y){
    let randInts = [];
    
    while(x>0){
        if (y != 0 && x != 1){
            let n = calcRandomNumber(0, y);
            randInts.push(n);
            
            y -= n;
        }
        else if(x==1){
            //console.log("pushing 100-y which equals " + originalY-y);
            randInts.push(y);
            y-=y;
        }
        else if (y==0){
            randInts.push(0);
        }
        x-=1;
    }
    return(randInts);
}