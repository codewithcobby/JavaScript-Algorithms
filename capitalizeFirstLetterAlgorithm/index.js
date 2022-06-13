//Capitalize First Letter Algorithm simply capilize the 
//first letter of every word in a sentence that is passed 
//to it

const capitalizeFirstLetterAlgorithm = (sentence) => {
	let word = sentence.split(" ");
	let results = "";

	for (let i = 0, n = word.length; i < n; i++) {
			let char = word[i].substring(0, 1).toUpperCase() + word[i].substring(1);
			results += char + " ";
	}

	console.log(results);
};

capitalizeFirstLetterAlgorithm("follow me on twitter @ kwabena_abrokwa");
//results = "Follow Me On Twitter @ Kwabena_abrokwa "

