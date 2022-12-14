const player = document.getElementById("player_controls")
const vid = document.querySelector("video")
const firstp = document.querySelector(".first_progress")
const secondp = document.querySelector(".second_progress")
const playfb = document.getElementById("playfb")
const play = document.getElementById("play")
const range = document.getElementById("range")
const seek = document.getElementById("seek")
const fw = document.getElementById("forwards")
const bw = document.getElementById("backwards")
const volume = document.getElementById("volume")
const audio = document.querySelector("audio")
const speed = document.getElementById("speed")
const vol_ico = document.getElementById("vol_ico")
let timer,timer2,timer3,mouseover=false,click=false,ended=false,click2=false,vol=1,volr=100
player.addEventListener('mouseover',()=>{
    playfb.style.visibility = "visible"
    playfb.classList.add("animate1")
    playfb.classList.remove("animate2")
    secondp.style.visibility = "visible"
    secondp.classList.add("animate1")
    secondp.classList.remove("animate2")
    mouseover = true
    clearTimeout(timer)
    clearTimeout(timer2)
    clearTimeout(timer3)
    if(ended==false){
        firstp.style.visibility = "hidden"
        firstp.classList.remove("animate3")
        firstp.classList.remove("animate4")
    }  
})
if(range.value==0){
    document.documentElement.style.setProperty('--height',0+"px")
    document.documentElement.style.setProperty('--width',0+"px")
}
player.addEventListener('mouseout',()=>{
    playfb.classList.remove("animate1")
    playfb.classList.add("animate2")
    secondp.classList.remove("animate1")
    secondp.classList.add("animate2")
    timer = setTimeout(()=>{
        secondp.style.visibility = "hidden"
        playfb.style.visibility = "hidden"
        clearTimeout(timer)
    },500)
    if(ended==false){
        timer2 = setTimeout(()=>{
            firstp.style.visibility = "visible"
            firstp.classList.add("animate3")
            clearTimeout(timer2)
        },500)
    }  
    mouseover = false
})
window.addEventListener('keyup',(e)=>{
    if(e.keyCode==32){
        if(click){
            play.style.backgroundImage = "url('./img/NicePng_youtube-play-button-png_312658\ \(1\).png')"
            play.style.backgroundSize = "30px 30px"
            click = !click
        }else{
            play.style.backgroundImage = "url('./img/pngegg\ \(4\)\ \(1\).png')"
            play.style.backgroundSize = "36px 36px"
            click = !click
        }
        if(vid.paused)vid.play()
        else vid.pause()
    }
    if(e.keyCode==39)vid.currentTime += 10
    if(e.keyCode==37)vid.currentTime -= 10
})
play.addEventListener('click',()=>{
    if(click){
        play.style.backgroundImage = "url('./img/NicePng_youtube-play-button-png_312658\ \(1\).png')"
        play.style.backgroundSize = "30px 30px"
        click = !click
    }else{
        play.style.backgroundImage = "url('./img/pngegg\ \(4\)\ \(1\).png ')"
        play.style.backgroundSize = "36px 36px" 
        click = !click
    }
    if(vid.paused)vid.play()
    else vid.pause()
})
vid.addEventListener('play',()=>{
    if(mouseover==false)
    {firstp.classList.remove("animate4")
    timer2 = setTimeout(()=>{
        firstp.style.visibility = "visible"
        firstp.classList.add("animate3")
        clearTimeout(timer2)
    },500)}
    
    ended=false
})

vid.addEventListener('timeupdate',()=>{
    document.documentElement.style.setProperty('--progress',((vid.currentTime/vid.duration)*100)+"%")
    range.value = (vid.currentTime/vid.duration)*100
    if(range.value>=60)document.documentElement.style.setProperty('--margin',5+"px")
    else if(range.value<=20)document.documentElement.style.setProperty('--margin',-7+"px")
    else if(range.value<=60)document.documentElement.style.setProperty('--margin',-3+"px")

    if(range.value>=1){
        document.documentElement.style.setProperty('--height',20+"px")
        document.documentElement.style.setProperty('--width',20+"px")
        document.documentElement.style.setProperty('--transition',0.5+"s")
        const timer3 = setTimeout(() => {
            document.documentElement.style.setProperty('--transition',0+"s")
            clearTimeout(timer3)
        }, 100)
    }else if(range.value==0){
        document.documentElement.style.setProperty('--height',0+"px")
        document.documentElement.style.setProperty('--width',0+"px")  
    }
    if(range.value==100){
        
    }
})
vid.onpause = function() {
    firstp.classList.remove("animate3")
    firstp.classList.add("animate4")
    timer3 = setTimeout(() => {
        firstp.style.visibility = "hidden"
        clearTimeout(timer3)
    }, 500);
    ended = true
}
range.addEventListener('input',()=>{
    document.documentElement.style.setProperty('--progress',range.value+"%")
    if(range.value>=60)document.documentElement.style.setProperty('--margin',5+"px")
    if(range.value<=20)document.documentElement.style.setProperty('--margin',-7+"px")
    else if(range.value<=60)document.documentElement.style.setProperty('--margin',-3+"px")
    vid.currentTime = (((range.value*0.1)*0.1)*vid.duration)
})
fw.addEventListener('click',()=>{
    vid.currentTime += 10
})
bw.addEventListener('click',()=>{
    vid.currentTime -= 10
})
volume.addEventListener('input',()=>{
    vid.volume = ((volume.value*0.1)*0.1)
    volr = volume.value
    vol = ((volume.value*0.1)*0.1)
    if(volume.value==0){
        vol_ico.style.backgroundImage = "url('./img/mute-icon-png-19\ \(1\).png')"
        vol_ico.style.backgroundSize = "25px 25px"
        click2=true
    }else{
        vol_ico.style.backgroundImage = "url('./img/pngegg\ \(3\)\ \(1\).png')"
        vol_ico.style.backgroundSize = "20px 20px"
        click2=false
    }
})
vol_ico.addEventListener('click',()=>{
    if(click2==false){
        vol_ico.style.backgroundImage = "url('./img/mute-icon-png-19\ \(1\).png')"
        vol_ico.style.backgroundSize = "25px 25px"
        volume.value = 0
        vid.volume = 0
        click2=true
    }else{
        vol_ico.style.backgroundImage = "url('./img/pngegg\ \(3\)\ \(1\).png')"
        vol_ico.style.backgroundSize = "20px 20px"
        vid.volume = (vol==0)?0.06:vol
        volume.value = (volr==0)?6:volr
        click2=false
    }
})
speed.addEventListener('click',()=>{
    vid.playbackRate = speed.value
})
vid.addEventListener('ended',()=>{
    play.style.backgroundImage = "url('./img/NicePng_youtube-play-button-png_312658\ \(1\).png')"
    play.style.backgroundSize = "30px 30px"
    document.documentElement.style.setProperty('--height',0+"px")
    document.documentElement.style.setProperty('--width',0+"px")
    document.documentElement.style.setProperty('--transition',0.5+"s")
    const timer3 = setTimeout(() => {
        document.documentElement.style.setProperty('--transition',0+"s")
        clearTimeout(timer3)
    }, 100);
    ended = true
    click = !click
})
vid.addEventListener('beforeunload',()=>{
    vid.pause()
    play.style.backgroundImage = "url('./img/pngegg\ \(4\)\ \(1\).png')"
    play.style.backgroundSize = "36px 36px"
    click = !click
})