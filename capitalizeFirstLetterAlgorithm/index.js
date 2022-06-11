//Capitalize First Letter Algorithm simply capilize the first letter of every word in a sentence that is passed to it

const capitalizeFirstLetterAlgorithm = (sentence) => {
	let word = sentence.split(" ");
	let results = "";

	for (let i = 0, n = word.length; i < n; i++) {
		for (let j = 0, n = word[i].length; j < n; j++) {
                results = results + word[i][j].toUpperCase()
		}
	}
    let final = results.join(" ")
    console.log(final);
};

capitalizeFirstLetterAlgorithm("this is Frank Jes");
