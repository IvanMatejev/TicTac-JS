let display=document.querySelector('.container');
let symbol='O';
let lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

showTicTac();

let boxes=document.querySelectorAll('.boxxx');

for(let i=0; i<boxes.length; i++){
    const box2=boxes[i];
    box2.addEventListener('click', insertSymbol);
}

function checkForMach(){
    lines.forEach(function(line){
        let box1=boxes[line[0]];
        let box2=boxes[line[1]];
        let box3=boxes[line[2]];
        if(box1.innerHTML===box2.innerHTML && box1.innerHTML===box3.innerHTML && box1.innerHTML!==""){
            box1.style.background='tomato';
            box2.style.background='tomato';
            box3.style.background='tomato';

            stopClicks();
        }
    })
}

function stopClicks(){
    for(let i=0; i<boxes.length; i++){
        boxes[i].removeEventListener('click', insertSymbol);
    }
}

function insertSymbol(){
    if(symbol==='O'){
        symbol='X'
    }else{
        symbol='O'
    }
    this.innerHTML=symbol;
    this.removeEventListener('click', insertSymbol);

    checkForMach();
}

function showTicTac(){
    let box='';
    for(let i=0; i<9; i++){
        box += '<div class="boxxx"></div>';
    }
    display.innerHTML=box;
}
