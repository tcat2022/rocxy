
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
        document.getElementById('equal').style.backgroundColor = 'darkblue';
        document.getElementById('equal1').style.backgroundColor = 'darkorange'; 
        document.getElementById('arrow').style.backgroundColor = 'purple'; 
        document.getElementById('cool').style.backgroundColor = 'black';
        document.getElementById('cool').style.color = 'white';
     let a =   document.getElementById('display');
     a.style.color = 'black'; a.style.backgroundColor = 'darkgrey';
     a.style.fontSize = '200%'
     document.querySelector('.buttons').style.backgroundColor = 'black';
     document.querySelector('.buttons').style.color = 'white';
   }
    function cub() {
 window.location.reload()
}
function cool() {
    document.getElementById('equal').style.backgroundColor = 'darkgreen';
    document.getElementById('equal1').style.backgroundColor = 'darkcyan'; 
    document.getElementById('arrow').style.backgroundColor = 'skyblue'; 
    document.getElementById('arrow').style.color = '';
    document.getElementById('cool').style.backgroundColor = 'aquamarine';
    document.getElementById('cool').style.color = 'chocolate';
 let a =   document.getElementById('display');
 a.style.color = 'chocolate'; a.style.backgroundColor = 'seagreen';
 a.style.fontSize = '200%'
 document.querySelector('.buttons').style.backgroundColor = 'aquamarine';
 document.querySelector('.buttons').style.color = 'chocolate';
}
function customAlert() {
        this.render = function () {
            var winW = window.innerWidth;
            var winH = window.innerHeight;
            var dialogoverlay = document.getElementById('dialogoverlay');
            var dialogbox = document.getElementById('dialogbox');
            dialogoverlay.style.display = "block";
            dialogoverlay.style.height = winH + "px";
            dialogbox.style.left = (winW/2) - (550 * .5)+"px";
            dialogbox.style.top = "90px";
            dialogbox.style.display = "block"
        }
        this.ok = function () {
            document.getElementById('dialogoverlay').style.display = 'none'   
            document.getElementById('dialogbox').style.display = 'none'
        };
    }
var Alert = new customAlert();
    function custoMalert() {
        this.render1 = function () {
            var winW1 = window.innerWidth;
            var winH1 = window.innerHeight;
            var dialogoverlay1 = document.getElementById('dialogoverlay1');
            var dialogbox1 = document.getElementById('dialogbox1');
            dialogoverlay1.style.display = "block";
            dialogoverlay1.style.height = winH1 + "px";
            dialogbox1.style.left = (winW1/2) - (550 * .5)+"px";
            dialogbox1.style.top = "90px";
            dialogbox1.style.display = "block"
        }
        this.ok1 = function () {
            document.getElementById('dialogoverlay1').style.display = 'none'   
            document.getElementById('dialogbox1').style.display = 'none'
        };
    }
    var Alert1 = new custoMalert()
    function custoMalert1() {
        this.render2 = function () {
            var winW2 = window.innerWidth;
            var winH2 = window.innerHeight;
            var dialogoverlay2 = document.getElementById('dialogoverlay2');
            var dialogbox2 = document.getElementById('dialogbox2');
            dialogoverlay2.style.display = "block";
            dialogoverlay2.style.height = winH2 + "px";
            dialogbox2.style.left = (winW2/2) - (550 * .5)+"px";
            dialogbox2.style.top = "90px";
            dialogbox2.style.display = "block"
        }
        this.ok1 = function () {
            document.getElementById('dialogoverlay2').style.display = 'none'   
            document.getElementById('dialogbox2').style.display = 'none'
        };
    }
    var Alert2 = new custoMalert1()