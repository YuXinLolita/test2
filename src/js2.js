let box2 = document.getElementById("box2");
let list = document.getElementById("list");
list.innerHTML += list.innerHTML;
left = 0;
let timer;
let lock = true;

function move(){
  timer =   setInterval(() => {
        left -= 4;
        if(left <=-990){
            left = 0;
        }
        list.style.left = left +"px";
    }, 20);
}
move();
box2.onmouseenter = (function(){
    clearInterval(timer);
})
box2.onmouseleave = (function(){
    move();
}
)




