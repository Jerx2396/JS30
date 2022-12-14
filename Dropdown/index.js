const buttons = document.querySelectorAll('li')
const container = document.querySelector('.container')
let timer, adj = true, cont = false
let width = window.innerWidth
let containerLeft = (width - container.offsetWidth) / 2
container.style.left = containerLeft-150 + 'px'
window.addEventListener('resize',()=>{
    const height = window.innerHeight
    width = window.innerWidth
    containerLeft = (width - container.offsetWidth) / 2
    container.style.left = containerLeft-150 + 'px' 
})
buttons.forEach((value) => {
    value.addEventListener('mouseover',(e)=>{
        e.stopPropagation()
        clearTimeout(timer)
        if(adj==true)container.style.transition = "0s"
        else container.style.transition = "0.5s"
        container.style.visibility = "visible"
        container.classList.remove("container-out")
        const nextb = value.getBoundingClientRect()
        containerLeft = nextb.left + (nextb.width - container.offsetWidth)+530 / 2
        container.style.left = containerLeft-150 + 'px'
        container.classList.add("container-in")
        adj = false
    })  
})
container.addEventListener('mouseover',(e)=>{
    e.stopPropagation()
    clearTimeout(timer)
    adj = false
    cont = true
    container.addEventListener('mouseout',()=>{
        cont = false
    })
})
window.addEventListener('mouseover',(e)=>{
    e.stopPropagation()
    clearTimeout(timer)
    container.style.transition = "0.5s"
    timer = setTimeout(() => {
        if(cont==false){
            container.classList.remove("container-in")
            container.classList.add("container-out")
            container.style.visibility = "hidden"
            adj = true
        }
    }, 500)
})