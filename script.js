
let display = document.getElementById('display');  

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
button.addEventListener(
 'click', (e) => {
switch(e.target.innerText){
    case 'C': 
    display.innerText ='';
    break;
    case '←':
        if(display.innerText) {
            display.innerText = display.innerText.slice(0, -1);
        }
        break;
        case '=': 
        try{
            display.innerText = eval(display.innerText);
        } catch{
            let b =
            display.innerText = 'invaled expresion' 
        }
        break;
    default:display.innerText += e.target.innerText
    }
});
});
function cat() {
    let red;
    if(confirm('do you want to change the font to dark theme') == true) {
        document.getElementById('equal').style.backgroundColor = 'darkblue';
        document.getElementById('equal1').style.backgroundColor = 'darkorange'; 
        document.getElementById('arrow').style.backgroundColor = 'purple'; 
        document.getElementById('cool').style.backgroundColor = 'black';
        document.getElementById('cool').style.color = 'white';
     let a =   document.getElementById('display');
     a.style.color = 'black'; a.style.backgroundColor = 'darkgrey';
     document.querySelector('.buttons').style.backgroundColor = 'black';
     document.querySelector('.buttons').style.color = 'white';
    }else {
        event.preventDefault
    } }
    function fub() {
 window.location.reload()
}

