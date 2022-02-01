let display=document.querySelector('.container');
let symbol='O';

showTicTac();

let boxes=document.querySelectorAll('.boxxx');

for(let i=0; i<boxes.length; i++){
    const box2=boxes[i];
    box2.addEventListener('click', insertSymbol);
}



function insertSymbol(){
    if(symbol==='O'){
        symbol='X'
    }else{
        symbol='O'
    }
    this.innerHTML=symbol;
    this.removeEventListener('click', insertSymbol)
}

function showTicTac(){
    let box='';
    for(let i=0; i<9; i++){
        box += '<div class="boxxx"></div>';
    }
    display.innerHTML=box;
}
