let deadline = new Date("Jan 1, 2024 00:00:00").getTime();

let x = setInterval(function() { 

    let now = new Date().getTime();

    let distance = deadline - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName("days")[0].textContent = days;
    document.getElementsByClassName("hours")[0].textContent = hours;
    document.getElementsByClassName("minutes")[0].textContent = minutes;
    document.getElementsByClassName("seconds")[0].textContent = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementsByTagName("h1")[0].textContent = "EXPIRED";
    }

}, 1000);
