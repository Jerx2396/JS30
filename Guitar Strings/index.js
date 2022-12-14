window.addEventListener("keyup",function(e){
    console.log(e)
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    var button = document.querySelector(`button[data-key="${e.keyCode}"]`)
    if(!audio)return
    audio.currentTime = 0
    audio.volume = 1
    audio.play()
    button.classList.add("playing")
    button.addEventListener("transitionend",(e)=>{
        if(e.propertyName!="background-color")return
        console.log(e.propertyName)
        button.classList.remove("playing")
    })
})
$(document).ready(function(){
    $("button[data-key='81']").click(function(){
        $("audio[data-key='81']")[0].currentTime = 0
        $("audio[data-key='81']")[0].play()
    })
    $("button[data-key='65']").click(function(){
        $("audio[data-key='65']")[0].currentTime = 0
        $("audio[data-key='65']")[0].play()
    })
    $("button[data-key='68']").click(function(){
        $("audio[data-key='68']")[0].currentTime = 0
        $("audio[data-key='68']")[0].play()
    })
    $("button[data-key='71']").click(function(){
        $("audio[data-key='71']")[0].currentTime = 0
        $("audio[data-key='71']")[0].play()
    })
    $("button[data-key='66']").click(function(){
        $("audio[data-key='66']")[0].currentTime = 0
        $("audio[data-key='66']")[0].play()
    })
    $("button[data-key='69']").click(function(){
        $("audio[data-key='69']")[0].currentTime = 0
        $("audio[data-key='69']")[0].play()
    })
})