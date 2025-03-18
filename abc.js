// let a=10;
// let b=20;
// let c=a+b;
// console.log(c);
// document.write("this is javaScript ")
//alert(c)
//in var we can re-declare and re-assign the variable. (global store)

//let - we cannot re-declare variable (Local store) 

//const - we cannot re-declare and re-assign variable and value. (local storage)

// var z=20;
// var l=40;
// x=z+l;
// console.log(x) 
// //alert(x)
  
// var name = "ayush"
// document.write(name)

//------------------------------------------------------------------------------------------------------------------------------------

//  types of operators  (two operands)
//   1- binary
//   arthemetic ... + - / * % 
//   relational   ==,===,>,<,>=,<=,!=
//   Assignment  =,+=,-=,*=,/=

//2- unary (single operands)  ++ --, ++a a++ 
//   logical  AND,OR,NOT &&,||,!

//3- ternary  (three operands) ? :

// let num= prompt("enter first number");
// let num2= prompt("enter second number");
// let ans=(num+num2);
// alert(ans)

// let nu= parseInt(prompt("enter first number"))
// let nu2= parseInt(prompt("enter first number"))
// let an=(nu+nu2);
// alert(an)

//wap to find area of circle, radius should be taken from user
//wap to swap two values using third values ,,,,values taken from user
//wap to add two numbers and find square of its answer

//------------------------------------------------------------------------------------------------------------------------------

// let area = parseInt(prompt("enter the radius of circle"));
// let ans = (3.14 * area * area);
// alert("area of circle is :" + ans);

// let a = parseInt(prompt("enter first number"));
// let b = parseInt(prompt("enter second number"));
// let c = a;
// a = b;
// b = c;
// alert("first number is " + a + " second number is " + b);

// let num1 = parseInt(prompt("enter first number"));
// let num2 = parseInt(prompt("enter second number"));
// let sum = num1 + num2;
// alert("square of sum is :" + sum*sum);

// -----------------------------------------------------------------------------------------------------------------------------
// let num = parseInt(prompt("enter a number : "))
// if (num%2!=0){
//     document.write("number is odd  " + num + 3.14*num*num);
// }
// else{
//     document.write("number is even " + num*num*num);
// }

// let n1= parseInt(prompt("enter a number:"));
// let n2= parseFloat(prompt("enter a number :"));
// if (n1>n2){
//     alert( n1 + " is greater ")
// }
// else{
//     alert(n2 + " is greater ");
// }

// let num;
// for(i=0;i<=10;i++){
//    num=i;
// document.write("numbers are : ",num)
// }

//wap to print only odd numbers between 1 to 20

// for (let i=1;i<=20;i++){
//    if(i%2!=0){
//       document.write("<h1>"+i+"</h1>")
//    }
// }

// -------------------------------------FUNCTIONS-------------------------------------------------------------------------------

// 1> Function declaration
// 2> functtion definition
// 3> function calling

// function Sum(){
//    let a=10;
//    let b=20;
//    document.write(a+b +"</br>")
//    let c=20;
   
//    document.write(c*c +"</br>")
// }
// Sum();
// Sum();

// function Table(){
//  let num=parseInt(prompt("enter a number :"))
//  for (i=1;i<=10;i++){
//       document.write(num*i +"<br>")
//  }
// }
// Table();

// -----------------------------FUNCTION NO ARGUMENT--------------------------------------------------
// -TYPE 1
function ayush(){
    return "patel"
}
document.write("<h1>" + ayush() + "</h1>");
// --TYPE 2
function ayush(){
    return "patel"
}
let a=ayush()
document.write("<h1>" + a + "</h1>");