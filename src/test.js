// let a = new Map();
// a.set("Bob",88);
// console.log(a);
// console.log(typeof 5);
// console.log(typeof "Mukewang");
// console.log(typeof "5");
// let a = "5";
// let b = 123;
// let c = " ";
// console.log(a)
// console.log(typeof a)
// console.log(b)
// console.log(typeof b)
// console.log(c)
// console.log(typeof c)
// let a = 3e-4;
// let b = 3e-8;
// let c = 3e10;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(typeof b);
// let arr = "abcdefgh";
// let a = arr.indexOf("a");
// let b = arr.indexOf("d");
// let c = arr.indexOf("j");
// let a = arr.substring(2,3);
// let b = arr.substring(3,2);
// let c = arr.substring(4,1);
// let a = arr.substr(2,3);
// let b = arr.substr(3,2);
// let c = arr.substr(4,3);
// let a = arr.charAt(3);
// let b = arr.charAt(5);
// let c = arr.charAt(7);
// let a = typeof true;
// let b = 5>3;
// let c = 9< 100;
// let a = parseFloat(prompt("请输入您要计算加法的第一个数字！",10));
// let b = parseFloat(prompt("请输入您要计算加法的第二个数字！",10));
// let c = a + b;
// confirm("您输入的"+a+"+"+b+"相加的结果是"+c);
// let a = parseInt(prompt("请输入年份！",2023));
// let b = (a % 4 === 0)&&( (a % 100 !==0) );
// let c = (a%100 === 0) && ( a%400 === 0);
// if(b || c ) {
//     confirm("您输入的年份"+a+"是一个闰年");
// }else{
//     confirm("您输入的年份"+a+"不是闰年");
// }
// let a = 3;
// let b = 4 ;
// alert(a++ + b++ + ++a + ++b);  //18
// let c =a++ + b++ + ++a + ++b;
// let a = parseInt(prompt("请输入您的年龄！"));
//大于或等于18并且小于或等于70
// if(a>=18 && a<=70) {
//     confirm("您已成年，可以考取驾照！")
// }else{
//     confirm("您未成年，不可以考取驾照！")
// }
// let a = Number(prompt("请输入一个数字"));
// if(a > 5)  alert("这个数字大于5")
// if(a %2 ==0 )
//     alert("这个数字是偶数")
// alert("再见");
// let a = parseInt(prompt("请输入您的成绩!"));
// if(a >=85){
//     confirm("优秀！");
// }else if(a >=70){
//     confirm("良好！");
// }else if(a >=60){
//     confirm("及格！");
// }else {
//     confirm("未及格!");
// }
// let a = parseFloat(prompt("请输入您的体重：kg"));
// let b = parseFloat(prompt("请输入您的身高：m"));
// c = a / Math.pow(b,2);
// console.log(a);
// console.log(b);
// console.log(c);
// if(c >= 32){
//     alert("非常肥胖!");
// }else if(c >=28){
//     alert("肥胖！");
// }else if(c >=24){
//     alert("过胖！");
// }else if(c >=18.5){
//     alert("正常！");
// }else {
//     alert("过瘦！");
// }
// let a =prompt("请输入一个三位数");
// if(Math.pow(a[0],3)+Math.pow(a[1],3)+Math.pow(a[2],3)==a){
//     confirm(a+"是一个水仙花数字!");
// }else{
//     confirm(a+"不是水仙花数字!")
// }
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// let a = parseInt(prompt("请输入星期几,例如0，1，2，3，4，5，6"));
//0,1,2,3,4,5,6
// let b = parseInt(prompt("请输入年龄！"));
// if(b>=10){
//     if(a ==0 || a ==6 ) {
//         alert("500");
//     }else {
//         alert("300");
//     }
// }else{
//     if(a == 0|| a ==6){
//         alert("210");
//     }else{
//         alert("140");
//     }
// }
// let a = 10 ;
// switch(a){
//     case 10:console.log("a");
//     break;
//     case 20:console.log("b");
//     break;
//     case 30:console.log("c");
//     break;
//     case 40:console.log("d");
//     break;
//     default:console.log("e");
//     break;
// }
// let a = parseInt(prompt("请输入年份!"));
// let b = parseInt(prompt("请输入月份！"));
// switch (b) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12: alert("这个月有31天！");
//         break;
//     case 2:
//         if(a %4==0&&a%100!=0||a%400==0&&a%100==0){
//             alert("这个月有29天！");
//         }else{
//             alert("这个月有28天");
//         }
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11: alert("这个月有30天！");
//         break;
//     default:
//         alert("您输入的月份有误，请重新输入！");
// }
// let a = parseInt(prompt("请输入您的年龄！"));
// console.log(a>=18?"成年人":"未成年人");
// for(let i = 1 ;i<=1e3;i++){
//     console.log(i);
// }
// console.log("abcdef".charAt(3));
// let a = 18;
// for(a;a>=-6;a -=4){
// console.log(a);
// }
// let a = 0;
// for(a;a<=1;a += 0.2){
//     console.log(parseFloat(a.toFixed(1)));
// }
// let a,b;
// for( a = 0 ,b=1;b<=100;b++){
//     a += b;
// }
// console.log(a);
// for(a=1;a<=100;a++){
//    if(a%3===1&&a%4===2&&a%5===3){
//     console.log(a+"满足这三个条件！");
//    }
// }
// while(a<=100){
//     console.log(a);
//     a++;
// }
// let a =1;
// let b = 0;
// while(a<=100){
// b += a;
// a++;
// }
// console.log(b);
// document.getElementById("demo").innerHTML = a;
// document.getElementById("demo2").innerHTML = b;
//document.getElementById("demo3").innerHTML = c;
// let a = 1;
//大于456789的最小正整数
// while(Math.pow(a,2)<=456789){
//     a++;
// }
// console.log(a);
// let a = 1;
// let b =0;
// while (b<=500){
//  b += a;
//  a++;
// }
// console.log(a-1);
// let a = 1 ;
// let sum = 0;
// while(true){
//     if(sum>=500){
//         console.log(a);
//         break;
//     }
//     a++;
//     sum += a;
// }
// let a = 1 ;

// for(a;a<5;a++){
//     if(a===3){
//         continue;
//     }
//     console.log(a);
// }

//5  到8之间的整数

//1100 到9980之间

// -4 到 4 之间
// console.log();
// let a ;
// let b ;
// do{
//     a =   parseInt(Math.random()*(4- -4+1))+ -4 ;
//   b =   parseInt(Math.random()*(4- -4+1))+ -4 ;
// }
// while(a === 0 && b === 0)
// console.log(a);
// console.log(b);
//1 到 10000
// let c = 1;
// let d = 10000;
// let sum = 0 ;
// let min = 1;
// let max = 10000;
// let a = parseInt(prompt("请输入您猜测的数字！" + min +"~"+ max));
// let b = parseInt(Math.random()*(d-c+1))+c ;
// if(a){


//    do{
//     if(a < min || a > max){
//         confirm("您输入的数字超出范围了！");
//         a = parseInt(prompt("请输入您猜测的数字！" + min +"~"+ max));
//         continue;
//     }
//     if(a>b){
//         confirm("您输入的数字太大了！");
//         max = a;
//         a = parseInt(prompt("请输入您猜测的数字！" + min +"~"+ max));
//         sum++;
//     }else if(a<b){
//         confirm("您输入的数字太小了！");
//         min = a ;
//         a = parseInt(prompt("请输入您猜测的数字！" + min +"~"+ max));
//         sum++;
//     }else {

//         confirm("恭喜您猜对了！,您总共猜测"+sum+"次");

//         break;
//     }
//    }while(true)

// }else{
//     confirm("您输入有误！")
//     a = parseInt(prompt("请重新输入您猜测的数字！"));
//    }
// let a =parseInt(prompt("请输入一个数字！")) ;
// let b = 0 ;
// let sum = 2 ;
// for(sum;sum<=a;sum++){
//     b = (sum+1)/sum;
// }
// console.log(a);
// console.log(b);

// let a = parseInt(prompt(""));
// let c = 1;
// let b = 1;
// for(b;b<=a;b++){
//     c *= b ;
// }
// console.log(c);
// let sum = 0;
// let n = parseFloat(prompt("请输入一个整数!"));
// let item = 1;
// for (let i = 1; i <= n; i++) {
//     //item = item/(item+2)
//     item *= (i / (2 * i + 1));//不是很理解
//     sum += item;
// }
// sum = (sum + 1) * 2;
// document.getElementById("demo").innerHTML = sum;
// let a = parseInt(prompt("请输入一个整数！"));

// for(let i = 1;i<=a;i++){
//     if(a%i===0){
//         console.log(i);
//     }
// }

// for (i = 100; i <= 999; i++) {

//     let i_str = i.toString();
//     let a = i_str.charAt(0);
//     let b = i_str.charAt(1);
//     let c = i_str.charAt(2);
//     if (Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3) == i) {
//         console.log(i);
//     }
// }
// for (let i = 0 ;i<3;i++){
//     for(let j= 0;j<3;j++){
//         console.log(i,j);
//     }
// }
// outer: for(let i = 2;i<=100;i++){
//     for(let j= 2;j<i;j++){
//         if(i%j ==0)
//     continue outer;
// }
// console.log(i);
// }
// for (let a = 0;a<=35;a++){
//     for(let b = 0 ;b<=35;b++){
//         if(a+b===35&&2*a+4*b===94){
//             console.log("小鸡有"+a+"只"+",小兔有"+b+"只！");
//            }
//   }
// }
// let a ;  //鸡兔同笼的问题
// let b ;
// for(let a = 0;a<=35;a++){
//     let b = 35 - a ;
//     if(a+b===35&&2*a+4*b===94){
// console.log(a,b);
//     }
// }
// let arr = ["a","b","c","d"];
// console.log(arr[3]);
// console.log(arr[2]);
// console.log(arr[1]);
// console.log(arr[8]=9);
// for(let i = 0 ;i<arr.length;i++){
//     console.log(arr[i]);
// }
// let arr =[1,2,3];  
// arr.splice(2,2,33,33,55);
// console.log(arr);
// // arr.splice(2,3);
// // console.log(arr);
// let b = arr.slice(2,5);
// console.log(arr);
// console.log(b);
// let arr = [1,2,3];
// arr.splice(2,0,5,8);
// console.log(arr);
// let arr = [1,2,3,4,5];
// let arr_str= "abcdefgh";
// console.log(arr_str.split('').reverse());
// console.log(arr.join('☆'));
// console.log(arr.indexOf(3));
// console.log(arr_str.indexOf("d"));
// console.log(arr.concat(arr_str));
// let arr = [1,2,3,4,5];
// console.log(arr.includes(3));
// let arr = [1,2,3,4,5,6,7,8,9];
// let sum = 0;
// for(let i = 0 ;i < arr.length ;i++){
// sum += arr[i];
// }
// console.log(sum);
// console.log(sum/arr.length);
// let arr = [1,2,3,4,5,6,7,8,9,0,8,9,7,4,5,6,3,21,0,9,23,2,3,23,0,23,3,2323,332];
// let max = arr[0];
// let min = arr[0];
// let i =0;
// for( i;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//         max = arr[i];
//         min = arr[i+1]
//     }else if(arr[i]<arr[i+1]) {
//         max = arr[i+1];
//         min = arr[i];
//     }
// }
// for(i;i<arr.length;i++){
//     if(arr[i] > max ){
//         max  = arr[i];
//     }else if(arr[i]<min){
//         min = arr[i];
//     }
// }
// console.log(max,min);
// let arr = [1,1,2,3,3,2,2,3,3,1,1,1];
// let result = [];
// for(let i = 0;i<arr.length;i++){
//     if(!arr.includes(arr[i])){
//         result.push(arr[i]);
//     // }else{
//     //     console.log(8);
//     //     // console.log(arr[i]);

//     // }
//     }
//     // console.log(!result.includes(arr[i]));
// }
// for(let i = 0 ;i < arr.length ; i++) {
//     if(!result.includes(arr[i])){
//         result.push(arr[i]);
//         console.log(389);
//     }else{
//         console.log("else");
//     }
// }
// console.log(result);
// let arr = [8,9,10,11,12,13,14,15,88,99];
// let result = [];
// for (let i = 0 ; i< 3; i++){
//     n = parseInt(Math.random()*arr.length);
//     result.push(arr[n]);
//     arr.splice(n,1);
// }
// console.log(result);
// let arr = [3, 6, 9, 12, 33, 89, 70, 53, 55, 0];
// // let min = arr[0];
// // let max = arr[0];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     for(let j = arr.length-1;j >= i;j--){
//         //判断项的大小
//         if(arr[j]<arr[j-1]) {
//             //满足条件的话，就要交换两个变量的位置
//             let temp = arr[j];
//             arr[j] = arr[j-1];
//             arr[j-1]=temp;
//         }
//     }
//     console.log(arr);
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] > max) {
//     //         max = arr[i];
//     //     } else if (arr[i] < max) {
//     //         min = arr[i];
//     //     }
//     // }
//     // result.push(min);
//     // arr.splice(arr.indexOf([min]),1);
// }
// console.log(arr);
// console.log(min, max);
// console.log(result);
// let arr = [[33, 45, 67],
// [88, 99, 67],
// [33, 45, 67],
// [88, 99, 10]];

// console.log(arr.length);
// for(let i = 0;i<arr.length;i++){
//     for(let j = 0;j<arr.length-1;j++){
//        console.log(arr[i][j]);
//     }
// }
// console.log(333 === 333);
// console.log([1,2,3]===[1,2,3])
// let a = [1,2,3];
// let b = [];
// console.log(a===a);
// console.log(b==0);
//重新计算一下最小数到最大数的排序，即冒泡排序
// let arr2= [9,8,7,6,5,4];
// for(let i = 0;i<arr2.length;i++){
//     for(let j =arr2.length-1;j>=i;j--){
//         if(arr2[j]>arr2[j-1]){
//             let temp = arr2[j-1];
//             arr2[j-i] = arr2[j];
//             arr2[j]=temp;
//         }
//     }
// }
// console.log(arr2);
// let arr=[1,2,3,5,7,9,3,4,3,2];
// for(let i = 0 ;i<arr.length;i++){
//     for(let j = arr.length-1;j>=i;j--){
//         if(arr[j]<arr[j-1]){
//             let temp = arr[j];
//             arr[j]= arr[j-1];
//             arr[j-1]= temp;
//         }
//     }
// }
// console.log(arr);
//斐波那契数列
// 0，1，1，2，3，5，8，13，21，34，55，89，144，233
// let i = 1;
// sum = 0 ;
// let result = [];
// while( i <= 5000){
// sum = sum+sum;
// i++;
// result.push(sum);
// }
// console.log(result);
// 0 + 1 = 1;1+1 = 2;2+1=3;3+2+5
// let result = [];
// let sum  = 1;
// for(let i = 1;i<=10;i++){
// sum += i;
// }
// for(let i = 1,sum = 0;i<=10;i++){
//     sum +=i;
//     console.log(sum);
// }
// for(let i = 5,sum = 0;i<=12;i++){
//     sum += i;
//     console.log(sum);
// }
// for(let i = 12,sum = 0;i<=35;i++){
//     sum += i;
//     console.log(sum);
// }
// function fun(){
//     console.log("a");
//     console.log("a");
//     console.log("a");
// }

// console.log(1);
// console.log(1);
// console.log(1);
// fun();
// console.log(2);
// console.log(2);
// console.log(2);
// fun();
// var fun = function () {
//     alert("a");
// }
// function fun() {
//     alert("b");
// }
// fun();
// function fun(a,b){
//     let sum = 0;
//     for(let i = a;i<=b;i++){
//         sum+=i;
//     }
//     console.log(sum);
// }
// fun(3,4);
// fun(1,3);
// fun(1,100);
// function fun(a,b,c) {
//     let sum = a+b+c;
//     console.log(a+"+"+b+"+"+c+"的值是"+sum);
// }
// console.log(3,4);
// console.log(5,7,9);
// fun(3,4);
// fun(5,7,9);
// function fun(){
//     let sum = 0 ;
//     for(let i = 0;i<arguments.length;i++){
//         sum +=  arguments[i];
//     }
//     console.log(sum);
// }
// fun();
// fun(3,5);
// fun(7,100,3);
// function sum(a,b) {
//     return a+b;
// }
// let result = sum(5,sum(9,5));
// console.log(result);
// console.log(sum(8,9)*sum(7,8));
// console.log(sum(3,4));
// let functionnew = function(a,b) {
//     return a+b;
// }
// function sum(){
//     console.log("a");
//     return "b";
//     console.log(c);
// }
// console.log("e");
// console.log("d");
// sum();
// console.log(char);
// function even(a) {
//     if(a %2===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// let result = even(8);
// result = even(9);
// console.log(result);
// function even(a) {
//     if(a%2===0){
//         return true;
//     }
//     return false;
// }
// let result = even(8);
// let b = even(9);
// console.log(result);
// console.log(b);
// function result(a){
//     let sum = 1;
//     for(let i = 1;i<=a;i++){
//         sum  *= i;
//         // console.log(sum);
//     }
//     return sum;
// }
// for(let i =100  ;i<=999;i++){
//     let result2 = i.toString();
//     let a = result2[0];
//     let b = result2[1];
//     let c = result2[2];
//     // console.log(a,b,c);
//     if(result(a)+result(b)+result(c)=== i){
//         console.log(i);
//     }
// }
// console.log(result(8));
// let arr = [11,22,33,4,66];
// arr.sort(function(a,b){
//     if(a>b){
//         return 1;
//     }else{
//         return -1;
//     }
// })
// console.log(arr);
// arr.sort(function(a,b){
//     if(a<b){
//         return 1;
//     }
//     return -1;
// })
// console.log(arr);
// function a(n) {
//     if(n===1){
//         return 1;
//     }
//     return n*a(n-1);
// }
// let result = a(4);
// confirm(result);
// function fbna(n){
//     if(n==0||n==1){
//         return 1;
//     }
//     return fbna(n-1)+fbna(n-2);
// }
// console.log(fbna(6));
// for(let i = 0;i<=15;i++){
//     console.log(fbna(i));
// }
// let  a = 10;
// function b(){

//     a++;
//     var a = 5;
//     console.log(a);
// }
// b();
// console.log(a);
// let arr= [1,3,5,7,9];
// let result = [];
// for(let i = 0 ;i<arr.length;i++){
//     result.push(arr[i]);
// }
// console.log(arr);
// // console.log(result);
// // let result = arr;
// console.log(result);
// console.log(arr);
// console.log(result==arr);
// let arr= [1,2,3,5,7,9,[2,3,4,7]];
// let result = [];
// for(let i = 0; i<arr.length;i++){
//     result.push(arr[i]);
// }
// console.log(arr);
// console.log(result);
// console.log(arr==result);
// let arr = [1, 2, 3, 4, 5, [7, 9, 8]];
// let arr2 = [];
// function fun(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result.push(fun(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// arr2 = fun(arr);
// console.log(arr2 == arr);
// console.log(arr2);
// console.log(arr);
// console.log(arr[5]==arr2[5]);
// console.log(arr[5],arr2[5]);
// arr[5].push(58)
// console.log(arr);
// console.log(arr2);
// let Odemo = document.getElementById("box2");
// //Odemo.innerHTML = "慕课网";
// //Odemo.innerHTML = "<ul><li>牛奶</li><li>咖啡</li></ul>"
// //Odemo.innerText = "<ul><li>牛奶</li><li>咖啡</li></ul>";
// let oPs =Odemo.getElementsByTagName("p");
// let oP = document.createElement("p");
// oP.innerHTML = "春风吹又生";
// // Odemo.appendChild(oP);
// Odemo.insertBefore(oP,oPs[3]);
// let newTable = document.getElementById("myTable");
// let oP = document.createElement("p");
// oP.innerText = "春风吹又生";
// newTable.appendChild(oP);
// for(let i = 1;i<=9;i++){
//     let tr = document.createElement("tr");
//    for(let j = 1;j<=i;j++){
//     let td= document.createElement("td");
//     td.innerText=j+"乘以 "+i+"得 "+(i*j);
//     tr.appendChild(td);

//    } 
//    newTable.appendChild(tr);
// }
// let newbox2 = document.getElementById("box2");
// let demo4 = document.getElementById("demo3");
// let demo3 = document.getElementById("box3");
// let newP = document.createElement("p");
// newP.innerHTML = "春风吹又生!";
// newbox2.appendChild(newP);
// demo3.appendChild(demo4)
// let newbox2 = document.getElementById("box2");
// let newbox3 = document.getElementById("box3");
// let newDemo2 = document.getElementById("demo2");
// let newvalue = document.createElement("p");
// let ptag = newbox3.getElementsByTagName("p");
// newbox3.insertBefore(newDemo2,ptag[0]);
// let newValue2 = document.createElement("p");
// newValue2.innerHTML = "春风吹又生!";
// newbox2.appendChild(newValue2);
// let newBox2 = document.getElementById("box2");
// let newValue = document.createElement("p");
// let newtest = document.getElementById("demo2");
// newValue.innerhtml= "春风吹又生";
// let pTag = newBox2.getElementsByTagName("p");
// newBox2.insertBefore(newtest,pTag[2]);
// let box2 = document.getElementById("box2");
// let first_p_tag = box2.getElementsByTagName("p")[1];
// box2.removeChild(first_p_tag);
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// let oldvalue = box2.getElementsByTagName("p")[0];
// let newValue = oldvalue.cloneNode(true);
// box3.appendChild(newValue);
// let newP = document.createElement("p");
// newP.innerHTML= "春风吹又生";
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// box2.appendChild(newP);
// let ptag = box2.getElementsByTagName("p")[2];
// box2.insertBefore(newP,ptag[3]);
// let newclone = ptag.cloneNode(true);
// box2.appendChild(newclone);
// let box2 = document.getElementById("box2");
// let p = box2.getElementsByTagName("p");
// let newP = document.createElement("p");
// newP.innerHTML ="春风吹又生";
// box2.insertBefore(newP,p[0]);


