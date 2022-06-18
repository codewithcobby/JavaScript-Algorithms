const pyramidAlgorithm = (n) => {
    for (i = 1; i <= n; i++){
        let padding = " ".repeat(n - 1);
        let string = "#".repeat(i * 2 - 1);
        console.log(padding + string + padding);
    }
};


pyramidAlgorithm(8);