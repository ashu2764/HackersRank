function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    secondInteger = Number(secondInteger);
    secondInteger += firstInteger;
    console.log(secondInteger);


    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    secondDecimal = Number(secondDecimal);
    secondDecimal += firstDecimal;
    console.log(secondDecimal)

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    let firstString = 'HackerRank ';


    firstString += secondString;
    console.log(firstString)

}
performOperation(8, 4.4, "is a goog platform")