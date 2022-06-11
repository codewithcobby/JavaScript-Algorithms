/*
Reverse Int is an algorithm that takes in a number as an input and return a reversed value of the number pass as an argument to the funtion whether negative or positive.
*/

const reverseIntAlgorithm = (intValue) => {
    let stringInt = `${intValue}`
    let reversedInt = "";
    for(let i = 0, n = stringInt.length ; i < n; i++){
        let singleInt = stringInt[i];
        reversedInt = singleInt + reversedInt;
    }

    if(intValue < 0){
        console.log(parseInt(reversedInt)  * -1);
        return parseInt(reversedInt) * -1
    }

    console.log(parseInt(reversedInt));
    return parseInt(reversedInt)

}

reverseIntAlgorithm(-167);
//returns -761


reverseIntAlgorithm(256738);
//returns 837652
