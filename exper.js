var cat = document.getElementById('cat')
var block = document.getElementById('block')
let button = document.getElementById('start')
let button2 = document.getElementById('start2')
let game = document.getElementById('game');
let counter = document.getElementById('counter');
let box = document.getElementById('box');
function ox(){
    game.style.visibility = "inherit"
    game.style.width = "100%"
    game.style.height = "100%"
    game.style.transform = "rotate(360deg)"

}
function start(){
    setTimeout(    alert('lets play'),6000)
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
        }},8000)})
    document.body.addEventListener('click', function(){
        button.style.display = "none"
    })
    let count = 0
    document.body.addEventListener('click', function(){
     count+=1
     counter.innerHTML = count;
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
counter.innerHTML = 0
}
},5)
/*
document.body.addEventListener('click', function(){
    let a =
setInterval(function(){
  alert('u win')
block.classList.remove('animateb');
button2.style.display = "inherit"
clearInterval(a)
},20000)})*/


}
function red(){
    if(game.classList != 'ani'){
        game.classList.add('ani');
    }

}
