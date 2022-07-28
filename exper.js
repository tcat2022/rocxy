var cat = document.getElementById('cat')
var block = document.getElementById('block')
let button = document.getElementById('start')
let button2 = document.getElementById('start2')
let game = document.getElementById('game')

function start(){
    document.body.addEventListener('keypress', (e) =>{
if(e.keyCode === 32){
    if(cat.classList != 'animate'){
cat.classList.add('animate');
    }
setTimeout(function(){
    cat.classList.remove('animate');  
    if(block.classList != 'animateb'){
        block.classList.add('animateb');
    }
},500)}})
document.body.addEventListener('click', function(){
        if(cat.classList != 'animate'){
    cat.classList.add('animate');
        }
    setTimeout(function(){
        cat.classList.remove('animate');  
        if(block.classList != 'animateb'){
            block.classList.add('animateb');
        }
    },500)})
    document.body.addEventListener('click', function(){
        button.style.display = "none"
    })
    document.body.addEventListener('click', function(){
  
    })
    document.body.addEventListener('click', function(){
        button2.style.display = "none"
    })
var checkDead = setInterval(function(){
    var catTop =
parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
var blockLeft =
parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if(blockLeft<20 && blockLeft>0 && catTop>=130){
alert('you lost')
block.classList.remove('animateb');
button2.style.display = "inherit"
}
},5)

/*document.body.addEventListener('click', function(){
setInterval(function(){
alert('you win')
block.classList.remove('animateb');
button2.style.display = "inherit"
},24000)})*/
}
function red(){
    if(game.classList != 'ani'){
        game.classList.add('ani');
    }

}
