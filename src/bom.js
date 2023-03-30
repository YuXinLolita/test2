// var b = 10;
// console.log(window.b == b);
// console.log(document.documentElement.scrollTop);
// console.log(b); 
let btn = document.getElementById("btn");
let timer;
btn.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function() {
    document.documentElement.scrollTop -= 180;
        if (document.documentElement.scrollTop <= 0){
            clearInterval(timer);
        }
    }, 20);
}
