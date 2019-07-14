"use strict"
// Task-3

function inputNumber(x, y){
    y > x
    for(let i = x; i < y; i++){
        if(i % 2 == 0){
    console.log(i);
     }
    
    }
    let amount = 0;
    for( let c = x; c < y; c++ ){
        amount = amount + c;
    }
    console.log(amount);
    
    }
    inputNumber( 0, 6);  