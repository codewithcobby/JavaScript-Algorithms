/*
Reversed Algorithm is an algorithm that takes in a string input and return a reversed value of the string pass as an argument to the funtion.
*/

//Create a function and pass an arguemnt of stringToReverse as a parameter
const reverseStringAlgorithm = (stringToReverse) => {

    //Declare a variable results to store the reverse value of stringToReverse and set it to an empty string
	let result = "";

    //Iterate through stringToReverse a number of n times, thus, the length of the string stringToReverse
	for (let i = 0, n = stringToReverse.length; i < n; i++) {

       //Declare a variable char to store each value of stringToReverse in the iteration
		let char = stringToReverse[i];

        //Store the char in front of the previous value stored in result
        result = char + result;
	}

    //Display the value of the reversed string and return it to end the function.
    console.log(result);
    return result;
};


//Call the function and pass in an argument with a type of String data
reverseStringAlgorithm("Hello World");
//result = "dlroW olleH"
