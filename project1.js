const body=document.querySelector("body")
const button=document.querySelector("button")
const color=['red','green','pink',]

body.style.background="pink"

button.addEventListener("click",change)

function change()
{
    const colorChange=parseInt(Math.random()*color.length)
    body.style.background=color[colorChange]
}