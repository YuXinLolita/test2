// oList = document.getElementById("list");
// oList.onclick = function (e) {
//     e.target.style.color = "red";
// };
// // oList.style.color = "red";
// let btn = document.getElementById("btn");
// btn.onclick = function () {
//     let oli = document.createElement("li");
//     oli.innerHTML = "我来啦！";
//     oList.appendChild(oli); 
// }
// let image2 = document.createElement("img");
// let box2 = document.getElementById("box2");
// image2.src = "image/photo_2021-10-06_15-12-08.jpg";
// let oimg = box2.getElementsByTagName("img");
// let btn = document.getElementById("btn");
// btn.onclick = function() {
// box2.insertBefore(image2,oimg[0]);
// }
// let a = 0 ;
// function fun() {
//     console.log (a++);
// }
// setInterval(
//    fun , 1000);
// setTimeout(() => {
//     console.log("你好")  
// }, (2000));
// console.log("海");
// let img2 = document.getElementById("");
// let img3 = document.createElement("img");
// let list = document.getElementById("list");
// let li = document.createElement("li");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// li.innerText = "hallo,i'm new";
// let temer = setTimeout(() => {
//       { list.appendChild(li);
//     alert("i'm hearing")
// }}, 3000);
// let timer;
// btn3.onclick = function() {
//      timer  = setTimeout(() => {
//         alert("hallo");
//     },2000);
// }
// btn2.onclick = function() {
//     clearTimeout(timer);
// }\
// let timer;
// btn2.onclick = function() {
//     clearInterval(timer);
//  timer  =  setInterval(() => {
//         alert("i'm hearing");
//         console.log("hallo");
//     }, 2000);
// }
// btn3.onclick = function() {
//     clearInterval(timer);
// }
// let list = document.getElementById("list");
// let btn4 = document.getElementById("btn4");
// let left = 100;
// let timer
// btn4.onclick = function() {
//   timer =  setInterval(() => {
//         left += 2;
//         if(left>=1000){
//             clearInterval(timer);
//         }
//         list.style.left = left + "px";
//     }, 20);
// }
// let btn3 = document.getElementById("btn3");
// btn3.onclick = function() {
//     clearInterval(timer);
// }
// let box3 = document.getElementById("box3");
// let btn5 = document.getElementById("btn5");
// let list = document.getElementById("list");
// let pup = 1;
// let lock = true;
// btn5.onclick = function() {
//   if(!lock)return;
//   console.log("hallo");
//     list.style.transition = "all 2s linear 0s";
//     if(pup ==1){
//         list.style.left = "1100px";
//         pup =2;
//     }else if(pup ==2){
//     list.style.left = "100px";
//     pup =1;
//     }
//     lock = false;
//     setTimeout(() => {
//         lock = true;
//     }, 2000);
// }
// let btn5 = document.getElementById("btn5");
// let list = document.getElementById("list");
// let lock = true;
// let push = 1;
// btn5.onclick = function() {
//     if(!lock)return;
//     list.style.transition = "all 2s linear 0s";
//     if(push ===1){
//          list.style.left = "1100px";
//          push = 2;
//     }else if (push ===2){
//         list.style.left = "100px";
//         push =1 ;
//     }
//     lock = false;
//     setTimeout (function(){
//         lock = true;
//     },2000);  
// }
// let box2 = document.getElementById("box2");
// let list = document.getElementById("list");
// list.innerHTML  += list.innerHTML;
// let left = 0 ;
// let timer
// function move(){
//     clearInterval(timer);
//   timer =  setInterval(() => {
//         left -= 3;
//         if(left <=-990){
//             left = 0;
//         }
//         list.style.left = left+"px";
//     }, 25);
// }
// move();
// box2.onmouseenter =function(){
//     clearInterval(timer);
// };
// box2.onmouseleave=function(){
//     move();
// }






