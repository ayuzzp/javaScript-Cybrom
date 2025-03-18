//basic syntax of arrow function
//()=>{return}  it is a anonous function ,function with no name
// let b=()=>{return "f"}
// console.log(b())

// //arrow function as a parameter 
// let a=(b,c)=>{return b+c}
// console.log(a(2,3))


// ///wap to take 1 input from user and find to take array of circle using arrow () with parameter
// //first type -- curly braces ke saat return lgta hai
// let i = parseInt(prompt("enter number :"))
// let c=(r)=>{
//     return 3.14*r*r
// }
// console.log(c(i))

//second type
// let arrow=(r)=>(
//     3.14*r*r
// )
// console.log(arrow(9))

//third type
// let c = a => (a+a)
// console.log(c(10))

// //fourth type
// let d=()=>{
//     return 2+2
// }
// console.log(d())

//what is ECMA script?
//
//what is ES6 and its features?
//

// let a = parseInt(prompt("enter a number :"))
// let z=(r)=>{
//     return 3.14*r*r
// }
// console.log(z(a))

// let greet =name=>`hello,${name}`;
// console.log(greet("jhon"))

// let aa =()=>{
//     return "ayush"
// }
// console.log(aa())

// let ss = (c,v) => {
//     return c+v
// }
// console.log(ss(4,6))

// let l = parseInt(prompt("enter a length :"));
// let b = parseInt(prompt("enter a breadth :"));
// let bb=(l,b)=>(
//     l*b
// )
// console.log(bb(l,b))

//if any function calls any function in its argument which is called callback function.
// let count=0;
// setInterval(()=>{document.write(count ++)
// },2000)
// -------------------------------------------
// let ct=0;
// function fun(){
//     let h=document.querySelector('h1')
//     setInterval(()=>{
//         h.innerHTML=ct++
//     },500)
// }
// --------------------------------------------------
// let st;
// let ct=0;
// function fun(){
//     let h=document.querySelector('h1')
//     st=setInterval(()=>{
//         h.innerHTML=ct++
//     },500)
 
// }

// function stop(){
//     clearInterval(st)
// }
//--------------------------------------------------------------------------------
//setTimeout()  sirf ek baar chalta hai

// setTimeout(()=>{
//  document.write("hello")
// },2000)

setTimeout(()=>{
    h=document.getElementById('head')
    document.write(h)
},5000)