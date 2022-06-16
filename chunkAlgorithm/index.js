//The Chunk Algorithm

const chunkAlgorithm = (arr, chunkSize) => {
    let results = [];

    for (let i = 0, n = arr.length; i < n; i++ ){
       let lastArray = results[results.length - 1];

        if(!lastArray || lastArray.length === chunkSize){
            results.push([arr[i]])
        }else{
            lastArray.push(arr[i])
        }
    }
    console.log(results);
    return results;
}

chunkAlgorithm([2,3,2,3,3,4], 3);
//result = [ [ 2, 3, 2 ], [ 3, 3, 4 ] ];

