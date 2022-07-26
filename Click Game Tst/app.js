let canvas = document.getElementById("gameBoard")
let ctx = canvas.getContext("2d")
let btn = document.getElementById("start")


btn.addEventListener("click" , ()=>{
let randX = Math.floor(Math.random() * 1280) /10
let randY = Math.floor(Math.random() * 1280) /10
ctx.fillStyle = "white";
ctx.fillRect(randX,randY, 40,20)
})






// btn.addEventListener("click" , setTimeout(()=>{
//     let randX = Math.floor(Math.random() * 640) /10
//     let randY = Math.floor(Math.random() * 640) /10
//     ctx.fillStyle = "white";
//     // ctx.clearRect(0,0, 640,640)
//     ctx.fillRect(randX,randY,40,20)
// } , 1000))