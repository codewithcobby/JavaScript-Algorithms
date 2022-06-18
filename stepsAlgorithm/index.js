const stepsAlgorithm = (steps) => {
	for (let i = 0; i < steps; i++) {
		let stringHash = "";

		stringHash += "#".repeat(i);
		stringHash += " ".repeat(steps - i);

		console.log(stringHash);
	}
};

stepsAlgorithm(8);
