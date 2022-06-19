//Linear search algorithm finds items by
//iterating over all the array of items passed

const linearSearchIndexOfAlgorithm = (itemArr, value) => {
	let indexOfNumber = "";
	for (let i = 0, n = itemArr.length; i < n; i++) {

		let singleValue = itemArr[i];

		if (singleValue === value) {
			indexOfNumber += i;
		}

	}

	let finalResult = indexOfNumber.split("").join(",");
	if (finalResult) {

		console.log(finalResult);
		return finalResult;
	}
	console.log("-1");
	return -1;
};

linearSearchIndexOfAlgorithm(["Kwame", "Frank", "Frank"], "Frank");
//finalResult = 1,2;
linearSearchIndexOfAlgorithm(["orange", "mango"], "yam");
//finalResult = -1;


const linearSearchIncludesAlgorithm = (itemArr, value) => {

	for (let i = 0, n = itemArr.length; i < n; i++) {
		let singleValue = itemArr[i];

		if (singleValue === value) {
			console.log(true);
			return true;
		}
	}

    console.log(false);
    return false;
};

linearSearchIncludesAlgorithm(["Kwame", "Frank", "Frank"], "Frank");
//returns true

linearSearchIncludesAlgorithm(["orange", "mango"], "yam");
//returns false

const linearSearchFindAlgorithm = (itemArr, value) => {
	let foundValue = "";

	for (let i = 0, n = itemArr.length; i < n; i++) {
		singleValue = itemArr[i];

		if (singleValue === value) {
			foundValue += singleValue + " ";
		}
	}

	let finalResult = foundValue.split(" ").join(", ");

	if (finalResult) {
		console.log(finalResult);
		return finalResult;
	}
    
    console.log(undefined);
    return undefined;
};

linearSearchFindAlgorithm(["Kwame", "Frank", "Frank"], "Frank");
//finalResult = "Frank, Frank"

linearSearchFindAlgorithm(["orange", "mango"], "yam");
//returns undefind
