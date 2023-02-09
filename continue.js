/* -----------------------------while loop continue------------------------ */

var roastGiven =1;
while(roastGiven < 20){
    console.log('roast den, please...');
    console.log(roastGiven);
    roastGiven++;
    if(roastGiven < 15){
        continue;
    }
}

/* -------------------------for loop continue----------------------- */

var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 93, 15, 20, 12, 140];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}