/* ------------------------while loop array------------------------- */

var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 93];
while(numbers.length) {
    var number = numbers[2];
    console.log(number);
    numbers++;
}


/* -------------------------for loop array------------------------- */

var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 93];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
}

var items = ['book', 'pen', 'papers', 'mouse', 'keyboard', 'sunglass', 'mobile'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item);
}