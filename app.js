let display=document.querySelector('.container');

showTicTac();

function showTicTac(){
    let box='';
    for(let i=0; i<9; i++){
        box += '<div class="boxxx"></div>';
    }
    display.innerHTML=box;
}