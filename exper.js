var cat = document.getElementById('cat')
var block = document.getElementById('block')
function jump() {
    if(cat.classList != 'animate'){
cat.classList.add('animate');
    }
setTimeout(function(){
    cat.classList.remove('animate');  
},500)
}

var checkDead = setInterval(function(){
    var catTop =
parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
var blockLeft =
parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if(blockLeft<20 && blockLeft>0 && catTop>=130){
    alert('you lose')
}
},10)