let milliseconds=0,seconds=0,minutes=0,hours=0;
let timeshow = document.getElementById("timeshow")
let timeref
let running = false

document.getElementById("start").onclick=function(){
    if (!running) {
        timeref = setInterval(updatetime,1)
        running = true
    }
}

function updatetime(){
    milliseconds += 10
    if(milliseconds==1000){
        seconds += 1;
        milliseconds=0;
        if(seconds==60){
            minutes+= 1;
            seconds=0;
            if(minutes==60){
                hours+=1;
                minutes=0;
            }
        }
    }
    let ms,s,m,h
    if(milliseconds<100){
        ms = '00'+milliseconds
    }
    else if(milliseconds<10){
        ms = '0'+milliseconds
    }
    else{
        ms = milliseconds
    }
    if(seconds<10){
        s = '0'+seconds
    }
    else{
        s = seconds
    }
    if(minutes<10){
        m = '0'+minutes
    }
    else{
        m = minutes
    }
    if(hours<10){
        h = '0'+hours
    }
    else{
        h = hours
    }
    timeshow.innerHTML = `${h} : ${m} : ${s}`;
}

document.getElementById("stop").onclick=function(){
    clearInterval(timeref)
    running = false
}

document.getElementById("reset").onclick=function(){
    clearInterval(timeref)
    milliseconds=0;
    seconds=0;
    hours=0;
    minutes=0;
    timeshow.innerHTML = "00 : 00 : 00"
    running = false
}
