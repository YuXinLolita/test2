let box2 = document.getElementById("box2");
let list = document.getElementById("list");
let btnRight = document.getElementById("btnRight");
let btnLeft = document.getElementById("btnLeft");
let li = list.getElementsByTagName("li");
let idx = 0 ;
lock = true;
btnRight.onclick = function(){
    if(!lock)return;
    //老图淡出
    lock = false;
    li[idx].style.opacity = 0;
    //新图淡入
    idx++;
    if(idx >4){
        idx = 0;
    }
    li[idx].style.opacity = 1;
    setTimeout(() => {
        lock = true;
    }, 1000);
}
btnLeft.onclick = function(){
    if(!lock)return;
    //老图淡出
    lock = false;
    li[idx].style.opacity = 0;
    //新图淡入
    idx--;
    if(idx < 0){
        idx = 4;
    }
    li[idx].style.opacity = 1;
    setTimeout(() => {
        lock = true;
    }, 1000);
}