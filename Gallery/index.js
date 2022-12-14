var el
var ind
var element
const panels = document.querySelectorAll(".panels")
panels.forEach((value, index) => {value.addEventListener('click',()=>{
    el = value.classList.toggle("open")
    if(element!=null){
        if(element!=value){
            panels[ind].classList.remove("open")
            panels[ind].children[1].style.fontSize = "40px"
            panels[ind].children[0].style.transform = "translateY(-600%)"
            panels[ind].children[2].style.transform = "translateY(600%)"
        }
    }
    if(el){
        value.children[1].style.fontSize = "80px"
        value.children[0].style.transform = "translateY(0)"
        value.children[2].style.transform = "translateY(0)"
    }else{
        value.children[1].style.fontSize = "40px"
        value.children[0].style.transform = "translateY(-600%)"
        value.children[2].style.transform = "translateY(600%)"
    }
    element = value
    ind = index
})})

