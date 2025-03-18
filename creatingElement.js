let a =document.createElement('h1')
a.textContent="hello from js";
let bd= document.body
bd.append(a)
a.style.Color="blue"


let b = document.createElement('h2')
b.textContent="well done"
bd.append(b)
b.style.color="green"

bd.setAttribute('bgcolor','yellow')
a.setAttribute('align','center')
b.setAttribute('align','center')
a.setAttribute('style','background-color:red; color:white')

let h = document.getElementById('head')
h.removeAttribute('style')
h.setAttribute('align','center')