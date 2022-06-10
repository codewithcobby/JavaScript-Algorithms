/*
Palindrome Algorithm is an algorithm that checks a phrase or a word and compare its initial value with the reversed value and returns whether the word or phrase is a Palindrome.
Palindrome is a word or a phrase or sequence that reads the same when reversed.
Example: mum is the same as mum when reversed.
*/

const palindromeAlgorithm = (phrase) => {
	let result = "";

	for (let i = 0, n = phrase.length; i < n; i++) {
		let char = phrase[i];
		result = char + result;
	}

	if (result.toLowerCase() == phrase.toLowerCase()) {
		console.log(
			`${result} is the same as ${phrase}, therefore it is a Palindrome`
		);
	} else {
		console.log(
			`${result} is not the same as ${phrase}, therefore it is not a Palindrome`
		);
	}
	return result;
};

palindromeAlgorithm("hello world");
//"dlrow olleh "is not the same as "hello world", therefore it is not a Palindrome

palindromeAlgorithm("wow");
// "wow" is the same as wow, therefore it is a Palindrome
