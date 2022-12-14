const canvas = document.getElementById("draw")
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gradient = context.createLinearGradient(500, 0, 170, 0);
gradient.addColorStop(1, "black");
gradient.addColorStop(0, "white");

//context.strokeStyle = gradient //Stroke color
//context.globalCompositeOperation = 'multiply' //blend mode
let hue = 0
context.lineJoin = "round" //When to lines meet
context.lineCap = "round" //Stroke style

let isDrawing = false
var direction = true
context.lineWidth = 0

canvas.addEventListener('mousemove', (e)=>{
    
    context.strokeStyle = `hsl(${hue}, 93%, 50%)`
    if(!isDrawing){
        return
    }
    [lastX,lastY]=[e.offsetX,e.offsetY]
    context.beginPath()
    context.moveTo(lastX,lastY)//start from
    context.lineTo(e.offsetX,e.offsetY)//go to
    context.stroke()
    hue++
    if(hue>=50)return
    context.lineWidth++
})
canvas.addEventListener('mousedown',()=>{isDrawing=true})
canvas.addEventListener('mouseup',()=>{
    isDrawing=false
    hue = 0
    context.lineWidth = 1
})
canvas.addEventListener('mouseout',()=>{
    isDrawing=false
    hue = 0
    context.lineWidth = 1
})