const text = document.querySelector("p")
window.addEventListener('mousemove',(event)=>{
    //For reference
    const rightX = text.offsetLeft + text.offsetWidth
    let parent = text.offsetParent;
    let leftX = text.offsetLeft;
    while (parent !== null) {
        leftX += parent.offsetLeft;
        parent = parent.offsetParent;
    }

    const bottomY = text.offsetTop + text.offsetHeight;
    let parent2 = text.offsetParent;
    let topY = text.offsetTop;
    while (parent2 !== null) {
        topY += parent2.offsetTop;
        parent2 = parent2.offsetParent;
    }

    const centerX = text.offsetLeft + text.offsetWidth / 2
    const centerY = text.offsetTop + text.offsetHeight / 2
    
    //Calculations
    let horizontal = event.clientX
    if(event.clientX>=813)horizontal = 813
    else if(event.clientX<=302) horizontal = 302

    let vertical = event.clientY
    if(event.clientY>=403)vertical = 403
    else if(event.clientY<=173)vertical = 173
    
    text.style.textShadow = `${(horizontal-557.5)/12.775}px ${(vertical-288)/11.5}px 2px rgba(0,0,0,0.6)`
})