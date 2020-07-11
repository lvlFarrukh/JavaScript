var msec = 0;
var sec = 0;
var min = 0;
var interval;

var msechead = document.getElementById('msec');
var sechead = document.getElementById('sec');
var minhead = document.getElementById('min');
var startBtn = document.getElementById('strBtn');

function f_msec() {
    msec++;
    msechead.innerHTML = msec;
    if (msec == 100){
        sec++;
        sechead.innerHTML = sec;
        msec = 0;
    }else if (sec == 60){
        min++;
        msechead.innerHTML = 0;
        sechead.innerHTML = 0;
        minhead.innerHTML = min;
        sec = 0;
    }
}


function start() {
    interval = setInterval(f_msec, 10);
    startBtn.disabled = true;
}

function pause() {
    clearInterval(interval);
    startBtn.disabled = false;
}

function reset() {
    clearInterval(interval);
    msec = 0;
    sec = 0;
    min = 0;
    msechead.innerHTML = '00';
    sechead.innerHTML = sec;
    minhead.innerHTML = min;
}

function record() {
    console.log(min+" : "+sec+" : "+msec);
}
