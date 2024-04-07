let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let period = document.getElementById("period")
let zero = "0"
setInterval(function(){
    let getDate = new Date()
    let getHours = getDate.getHours()
    let getPeriod = getHours > 12 ? "PM" : "AM"
    let get12hours = getHours % 12 || 12
    hours.innerHTML = get12hours < 10 ? zero + get12hours : get12hours
    let getMinutes = getDate.getMinutes()
    minutes.innerHTML = getMinutes < 10 ? zero + getMinutes : getMinutes
    let getSeconds = getDate.getSeconds()
    seconds.innerHTML = getSeconds < 10 ? zero + getSeconds : getSeconds
    period.innerHTML = getPeriod
}, 1000)
