function getLetter(s) {

    let i = +(readLine());
    let letter;

    let firstChar = s[0];
    // Write your code here
    switch (true) {
        case "aeiou".includes(firstChar):
            letter = "A"
            break;

        case "bcdfg".includes(firstChar):
            letter = "B";
            break;

        case "hjklm".includes(firstChar):
            letter = "C"
            break;

        default:
            letter = "D"
            break;
    }

    return letter;
}


getLetter("gqwwdhhjbd")