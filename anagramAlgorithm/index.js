//Anagrams are word or sentence which are form by 
//rearranging the initial word or phrase. 
//Follow me @kwabena_abrokwa (all platforms)

const anagramAlgorithm = (string1, string2) => {

	let stringWithoutSpecialChar1 = string1.toLowerCase().replace(/[\W_]+/g, "");
	let stringWithoutSpecialChar2 = string2.toLowerCase().replace(/[\W_]+/g, "");
	let string1ObjectCount = {};

	if (stringWithoutSpecialChar1.length !== stringWithoutSpecialChar2.length) {
		console.log("false");
		return false;
	}

	for (let i = 0, n = stringWithoutSpecialChar1.length; i < n; i++) {
		let char1 = stringWithoutSpecialChar1[i];
		string1ObjectCount[char1] = string1ObjectCount[char1] + 1 || 1;
	}

	for (let i = 0, n = stringWithoutSpecialChar2.length; i < n; i++) {
		let char2 = stringWithoutSpecialChar2[i];
		if (!string1ObjectCount[char2]) {
			console.log("false");
			return false;
		}else{
            string1ObjectCount[char2]--
        }
	}

    console.log("true");
    return true;
};


anagramAlgorithm("Brag", "grab");
//result = True
anagramAlgorithm("race", "care");
//result = True
anagramAlgorithm("part!!!", "trap");
//result = True
anagramAlgorithm("party!", "partey");
//result = False
