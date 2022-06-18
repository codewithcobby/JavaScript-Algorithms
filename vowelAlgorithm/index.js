//this algorithm returns the number of vowels in a phrase

const vowelAlgorithm = (phrase) => {
	let vowelsArray = "aeiou".split("");
    let vowelsObject = {}
    let numberOfVowels = 0;
    let covertPhraseToLowerCase = phrase.toLowerCase();

    for(let i =0, n = phrase.length; i < n; i++){
        let character = covertPhraseToLowerCase[i];

        indexOfCharacter = vowelsArray.indexOf(character);

        if(indexOfCharacter !== -1){
            vowelsObject[character] = vowelsObject[character] + 1 || 1;
            numberOfVowels += 1;
        }else{
            continue
        }
    }
    console.log(vowelsObject);
    console.log(numberOfVowels);
    return vowelsObject;
};

vowelAlgorithm("Frankie Kwabena Abrokwa");
//vowelsObject = { a: 5, i: 1, e: 2, o: 1 }
//numberOfVowels = 9;

vowelAlgorithm("Why?");
//vowelsObject = {}
//numberOfVowels = 0;

