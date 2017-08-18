var leftCol = document.getElementById('leftColumn');
var rightCol = document.getElementById('rightColumn');
var ogLeft = -190;
var ogRight = -190;
var timerL;
var timerR;

// 左边
leftCol.onmouseover = function(){
    clearInterval(timerL);

    timerL = setInterval(function() {
        if(ogLeft >= -100){
            clearInterval(timerL)
        } else{
            ogLeft += 10;
        }
        leftCol.style.left = ogLeft + 'px';
    }, 20) 
}
leftCol.onmouseout = function(){
    clearInterval(timerL);

    timerL = setInterval(function(){
        if(ogLeft <= -190){
            clearInterval(timerL)
        } else {
            ogLeft -= 10;
        }
        leftCol.style.left = ogLeft + 'px';
    },20)
}

// 右边
rightCol.onmouseover = function(){
    clearInterval(timerR);
    timerR = setInterval(function(){
        if(ogRight>=-100){
            clearInterval(timerR)
        } else {
                ogRight+=10;
        }
    rightCol.style.right = ogRight + 'px';
    },20);
}
rightCol.onmouseout = function(){
    clearInterval(timerR);

    timerR = setInterval(function(){
        if(ogRight <= -190){
            clearInterval(timerR)
        }else{
            ogRight-= 10;
        }
        rightCol.style.right = ogRight + 'px';
    },20)
}