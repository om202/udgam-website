window.onload = function() {
    /* Countdown timer */
    display = document.getElementById("timer");
    const eventSTime = new Date("July 15,2018 10:00:00").getTime();

    let countDown = setInterval(function () {
        const currTime = new Date().getTime();
        const remTime = eventSTime - currTime;

        let days = Math.floor(remTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor(remTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remTime % (1000 * 60)) / 1000);

        var format = x => x < 10 ? "0" + x : x;
        days = format(days);
        hours = format(hours);
        minutes = format(minutes);
        seconds = format(seconds);

        // var timeLeft = new Object();
        // timeLeft.days = days;
        // timeLeft.hours = hours;
        // timeLeft.mins = minutes;
        // timeLeft.secs = seconds;

        display.textContent = days + "D " + hours + "H " + minutes + "M " + seconds + "S";

        // return timeLeft;
    },1000);
}