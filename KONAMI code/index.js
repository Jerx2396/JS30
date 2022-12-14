const pressed = []
const secret_code = "wesbos"
const notif = document.querySelector(".notif")
const text = document.querySelector(".text")
const regex1 = /^.{2,}$/g
const regex2 = /[a-zA-Z0-9]/g
window.addEventListener('keyup',(e)=>{
    if(regex1.test(e.key))return
    else{
        if(regex1.test(e.key))return
        pressed.push(e.key)
        pressed.splice(-secret_code-1,pressed.length-secret_code.length)
        text.innerHTML = pressed.join('')
        text.style.color = "black"
        if(pressed.join('').includes(secret_code))notif.style.visibility = "visible"
        else notif.style.visibility = "hidden"
    }
    
})