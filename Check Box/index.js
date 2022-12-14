const list = document.querySelector(".list")
list.innerHTML = ''
const add = document.getElementById("add")
const panel = document.getElementById("panel")
const block = document.getElementById("block")
const box = document.getElementById("box")
const input = document.getElementById("text")
const submit = document.getElementById("submit")
const jsonf = "./data.json"

fetch(jsonf).then((data) => {
    return data.json()
}).then((dataf) => {
    for(let i=0;i<dataf.length;i++){
        const element1 = document.createElement("div")
        element1.setAttribute("class","added")
        if(dataf[i].status=="removed")element1.setAttribute("style","display:none")
        const element2 = document.createElement("input")
        element2.setAttribute("class","checkbox")
        element2.setAttribute("type","checkbox")
        if(dataf[i].selected=="true")element2.checked = true
        else element2.checked = false
        const element3 = document.createElement("p")
        element3.innerHTML = (dataf[i].selected=="false")?dataf[i].name:`<del>${dataf[i].name}</del>`
        element1.appendChild(element2)
        element1.appendChild(element3)
        list.appendChild(element1)
    }
    if(list.innerHTML=='')list.style.visibility = 'hidden'
    const text = document.querySelectorAll("p")
    const checkbox = document.querySelectorAll(".checkbox")
    const added = document.querySelectorAll(".added")
    checkbox.forEach((value, index) => {
        value.addEventListener('click',()=>{
            if(value.checked==true){
                text[index].innerHTML = `<del>${text[index].innerText}</del>`
                dataf[index].selected = "true"
                $(document).ready(function(){
                    $.post("datahandler2.php",
                    {
                        name:dataf[index].name,
                        status:dataf[index].status,
                        selected:dataf[index].selected,
                        index:index
                    })
                })
            }else{
                text[index].innerHTML = `${text[index].innerText}`
                dataf[index].selected = "false"
                $(document).ready(function(){
                    $.post("datahandler2.php",
                    {
                        name:dataf[index].name,
                        status:dataf[index].status,
                        selected:dataf[index].selected,
                        index:index
                    })
                })
            }
        })
    })
    add.addEventListener('click',()=>{
        block.style.display = "block"
        panel.style.visibility = "visible"
        box.style.filter = "blur(3px)"
    })
    block.addEventListener('click',()=>{
        block.style.display = "none"
        panel.style.visibility = "hidden"
        box.style.filter = "none"
    })
    let last
    let first
    checkbox.forEach((value, index) => {value.addEventListener('click',(e)=>{
        let inw = false
        if(e.shiftKey&&value.checked){
            last = index
            checkbox.forEach((el, i) => {
                if(i>=first&&i<=last){
                    el.checked = true
                    dataf[i].selected = "true"
                    text[i].innerHTML = `<del>${text[i].innerText}</del>`
                    $(document).ready(function(){
                        $.post("datahandler2.php",
                        {
                            name:dataf[i].name,
                            status:dataf[i].status,
                            selected:dataf[i].selected,
                            index:i
                        })
                    }) 
                }
                if(i<=first&&i>=last){
                    el.checked = true
                    dataf[i].selected = "true"
                    text[i].innerHTML = `<del>${text[i].innerText}</del>`
                    $(document).ready(function(){
                        $.post("datahandler2.php",
                        {
                            name:dataf[i].name,
                            status:dataf[i].status,
                            selected:dataf[i].selected,
                            index:i
                        })
                    }) 
                }
            })
        }else{
            first = index
        }
    })})
    text.forEach((value, index) => {
        let timer
        value.addEventListener('mousedown',(e)=>{
            timer = setTimeout(()=>{
                value.innerHTML = `<del>${value.innerText}</del>`
                added[index].style.animationName = "fadeout"
                added[index].style.animationDuration = '2s'
                dataf[index].status = "removed"
                $(document).ready(function(){
                    $.post("datahandler2.php",
                    {
                        name:dataf[index].name,
                        status:dataf[index].status,
                        selected:dataf[index].selected,
                        index:index
                    })
                })
                clearTimeout(timer)
                setTimeout(()=>{
                    added[index].style.display = "none"
                    if(list.innerHTML=='')list.style.visibility = 'hidden'
                },1500)
            },1000)
        })
        value.addEventListener('mouseup',()=>{
            clearTimeout(timer)
        })
    })
    submit.addEventListener('click',()=>{
        location.reload()
    })
})
if(window.history.replaceState){
    window.history.replaceState(null, null, window.location.href);
}