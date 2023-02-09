/* -----------------------------while loop break------------------------ */

var roastGiven =1;
while(roastGiven < 10){
    // console.log('roast den, please...');
    // console.log(roastGiven);
    roastGiven++;
    if(roastGiven > 5){
        break;
    }
}

/* -------------------------for loop break----------------------- */

var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 93];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        break;
    }
    // console.log(number);
}

/* -------------------------------------------------------- */

var myWorks = ['rat 8 ta baje module unlock koro', 'fota fot video dekhe practice koro', 'video dekte dekte nots naw', 'module ses hole puro module nije nije practice koro', 'kono kicu bujte na parle', 'support season a join koro'];

for (var i = 0; i < myWorks.length; i++){
    // console.log(i);

    var work = myWorks[i];
    // if (work == 'kono kicu bujte na parle'){
    //     continue;
    // }
    console.log(work);
}