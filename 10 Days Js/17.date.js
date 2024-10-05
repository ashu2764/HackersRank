function getDayName (daySrting){

    let dayname = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const date = new Date(daySrting);

    const dateIndex = date.getDay();

    return dayname[dateIndex];

}