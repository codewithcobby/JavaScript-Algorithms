/*
Maximum character algorithm returns the maximum value in a sequence of characters;
*/

const maximumCharacterAlgorithm = (stringValue) => {
	let charCountObject = {};
	let counter = 0;
	let result = "";
	for (let i = 0, n = stringValue.length; i < n; i++) {
		let char = stringValue[i];
		charCountObject[char] = charCountObject[char] + 1 || 1;

		if (charCountObject[char] > counter) {
			result = char;
			counter = charCountObject[char];
		}
	}
	console.log(result);
    return result;
};

maximumCharacterAlgorithm("kwabena_abrokwa");
//result =  a
