const Multiple = {
    'м': 1,
    'см': 0.01,
    'т': 1000,
    'км': 1000,
    'км/ч': 1,
    'мин': 0.01666,
    'кг': 1,
    'ч': 1
}
export const getCompareChars = (char1, char2) => {
    let results = [];
    console.log('char1, char2', char1, char2);
    results.push(Compare(char1.wing, char2.wing, false));
    results.push(Compare(char1.weight, char2.weight, false));
    results.push(Compare(char1.vel, char2.vel, true));
    results.push(Compare(char1.radius, char2.radius, true));
    results.push("'',''");
    results.push(Compare(char1.length, char2.length, false));
    results.push(Compare(char1.duration, char2.duration, true));
    //console.log('results', results);
    return results;
    // if (char1.wing < char2.wing) {
    //     results.push('green,red');
    // }
    // else
    //     results.push('red,green');

    // if (char1.weight < char2.weight) {
    //     results.push('green,red');
    // }
    // else
    //     results.push('red,green');

    // if (char1.vel < char2.vel) {
    //     results.push('red,green');
    // }
    // else
    //     results.push('green,red');

    // if (char1.radius < char2.radius) {
    //     results.push('red,green');
    // }
    // else
    //     results.push('green,red');
    
    // results.push('"",""');
    // if (char1.length < char2.length) {
    //     results.push('green,red');
    // }
    // else
    //     results.push('red,green');
    
    // if (char1.duration < char2.duration) {
    //     results.push('red,green');
    // }
    // else
    //     results.push('green,red');
    // //setCompareMode(results);
    // return results;
}

const Compare = (wing1, wing2, leftMore) => {
    /*leftMore - если левая часть больше, то это хорошо*/
    if (wing1 == '-' && wing2 == '-') {
        return "red,red"
    }
    if (wing1 == '-') {
        return "red,green"
    }
    if (wing2 == '-') {
        return "green,red"
    }
    console.log('wing1, wing2', wing1, wing2);
    let val1 = wing1.split(' ')[0];
    let val2 = wing2.split(' ')[0];

    let unit1 = wing1.split(' ')[1];
    let unit2 = wing2.split(' ')[1];

    val1 *= Multiple[unit1];
    val2 *= Multiple[unit2];

    if (leftMore && val1 > val2) {
        return "green,red"
    }
    else if (leftMore && val1 < val2)
        return "red,green"
    else if (!leftMore && val1 < val2)
        return "green,red"
    else
        return "red,green"
}