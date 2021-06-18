let nowIndex = 1;


const imageSlider = document.querySelector('#imageSlider');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArroW');

;


leftArrow.addEventListener('click', moveLeft);
rightArroW.addEventListener('click', moveRight);


function moveA()
{
imageSlider. style.transform = 'translate(0px)'
nowIndex=1;
}

function moveB()
{
    imageSlider. style.transform = 'translate(-1050px)'
    nowIndex=2;
}
function moveC()
{
    imageSlider. style.transform = 'translate(-2120px)'
    nowIndex=3;
}
function moveD()
{
    imageSlider. style.transform = 'translate(-3150px)'
    nowIndex=4;
}



function moveLeft()
{
     if(nowIndex == 1)
     {
        nowIndex == 1;
     }
     else{
       nowIndex --; 
     } 
    moveSlider(nowIndex);
}

function moveRight()
{
    if (nowIndex == 4)
    {
        nowIndex == 4;
    }
    else{
        nowIndex ++;
    }
    moveSlider(nowIndex);
}

function moveSlider(index){
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
        case 4:
            moveD();
        break;
       
    }
}