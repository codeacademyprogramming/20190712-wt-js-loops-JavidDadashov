"use strict"
//Task-2;
function creatNum(x, y){
if(x<0 && y<0){
 x= -x;
 y= -y;
}

else if(x<0 || y<0){
x= x + 0.5;
y= y + 0.5
}

else if((x>0 && y>0) && !((0.5 <=x && x<= 2) && (0.5 <= y && y<= 2))) {
x= x / 10;
y= y / 10;
}


console.log(x,y);

}

(creatNum(-5,3));
(creatNum(5,-3));
(creatNum(0.1,3))
//Task-2 end;