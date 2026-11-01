let a = document.querySelector("h1")
a.innerHTML = "its html"
a.style.color = "green"
a.addEventListener("click",()=>{
    console.log("clicked")
    a.innerHTML = "make it for your ex, bcz he is a good actor"
    a.style.backgroundColor = "yellow"
})

let blink = document.querySelector("#bulb")
let press = document.querySelector("button")
let flag = 1
press.addEventListener("click",function(){
    if(flag == 1){
        blink.style.backgroundColor = "red"
        flag = 0
        press.innerHTML = "OFF"
    }
    else{
        blink.style.backgroundColor = "transparent"
        flag = 1
        press.innerHTML = "ON"
    }
})

let h = document.querySelectorAll("h2")
console.log(h)

h.forEach((info)=>{
    console.log(info)
})

let d = document.getElementById("hello")
d.innerHTML = "hello every one"
d.style.color = "blue"

let c = document.getElementById("cont")
c.innerHTML = "<h2>happy new year</h2>"
c.innercontent = "<h2>happy ne year</h2>"
