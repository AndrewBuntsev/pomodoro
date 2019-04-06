const soundElement = document.getElementById('beep');

export function PlayBeep(){
    soundElement.play();
}

export function StopBeep(){
    soundElement.pause();
    soundElement.currentTime = 0;
}
