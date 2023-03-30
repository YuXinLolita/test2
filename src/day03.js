let box2 = document.getElementById("box2");
let list = document.getElementById("list");
let lastChild = list.firstElementChild.cloneNode(true);
list.appendChild(lastChild);
let btnLeft = document.getElementById("btn-left")
let btnRight = document.getElementById("btn-right");
let idx = 0;
let lock = true;
btnLeft.onclick = function(){
    if(!lock)return;
    if(idx ===0){
        list.style.transition = "none";
        list.style.left = -5*650 +"px";
        setTimeout(function(){
            list.style.transition ="left .5s ease 0s";
            idx = 4;
            list.style.left = -idx*650+"px";
        },0);
    }else{
        idx--;
        list.style.left = -idx*650+"px";
    }
    lock = false;
    setTimeout(function(){
        lock = true
    }, 500);
}
btnRight.onclick = function(){
    if(!lock)return;
    
    idx++;
    if(idx>4){
        setTimeout(function(){
            list.style.left = 0;
            list.style.transition = "none";
            idx = 0;
        },500)  
    }
    list.style.transition = "left .5s ease 0s"
    list.style.left = -idx *650 + "px";
    lock = false;
    setTimeout(function(){
        lock = true;
    },500);
}