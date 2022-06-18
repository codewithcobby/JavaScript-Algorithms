//This is the Caesar Cipher Algorithm. It is used to encode strings
//passed to it as argument.

const caesarCipherAlgorithm = (stringToCipher, shift) => {
	const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
	let cipherResult = "";

	for (let i = 0, n = stringToCipher.length; i < n; i++) {
		let character = stringToCipher[i];
		let indexOfCharacter = alphabetArray.indexOf(character);

		if (indexOfCharacter === -1) {
			cipherResult += character;
			continue;
		}

		const encodedindexOfCharacter = (indexOfCharacter + shift) % 26;
		cipherResult += alphabetArray[encodedindexOfCharacter];
	}

	console.log(cipherResult);
	return cipherResult;
};

caesarCipherAlgorithm("@kwabena_abrokwa12", 100);
//cipherResult = @gswxajw_wxnkgsw12

