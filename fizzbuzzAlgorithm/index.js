/*
FizzBuzz algorithm is an algorithm that prints fizz for any inter which is a 
multiple of 3 and prints buzz for integers which are multiples of 5 and finally 
prints fizzbuzz if the inter is a multiple of both
*/
const fizzbuzzAlgorithm = (n) => {
	let numbers = 0;
	for (let i = 0; i < n; i++) {
		numbers = numbers + 1;
		if (numbers % 3 === 0 && numbers % 5 === 0) {
			console.log("fuzzbuzz");
		}else if (numbers % 5 === 0) {
			console.log("buzz");
		}else if (numbers % 3 === 0) {
			console.log("fuzz");
		}else if (numbers % 3 != 0 && numbers % 5 != 0) {
			console.log(numbers);
		}
	}
};

fizzbuzzAlgorithm(20);

/* 
result = 1, 2, fuzz, 4, buzz, fuzz, 7, 8, fuzz, 
         buzz, 11, fuzz, 13, 14, fuzzbuzz, 16,
		 17, fuzz, 19, buzz
*/
