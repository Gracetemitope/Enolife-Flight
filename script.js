function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    if(minutes.length < 2) {
        minutes = '0' + minutes
    }
    let time = hours + ":" + minutes;
    document.getElementById("date").innerHTML = time;

}
digitalClock();
setInterval(digitalClock, 1000);