let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let h1 = document.getElementById("h1")
let h2 = document.querySelectorAll("h2")
let timer = document.getElementById("timer-box")


let x = setInterval(
    function countDown(){

        let countDownDate = new Date("Sep 2, 2022 00:00:00").getTime()

        let countDownDifference = countDownDate - new Date()

        let countDownDays = Math.floor(countDownDifference / (1000 * 60 * 60 * 24))
    
        let countDownHours = Math.floor((countDownDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
        let countDownMinutes= Math.floor((countDownDifference % (1000 * 60 * 60)) / (1000 * 60))

        let countDownSeconds= Math.floor((countDownDifference % (1000 * 60)) / 1000)

        days.innerHTML =  countDownDays < 10 ? "0" + countDownDays : countDownDays
        hours.innerHTML = countDownHours < 10 ? "0" + countDownHours : countDownHours
        minutes.innerHTML = countDownMinutes < 10 ? "0" + countDownMinutes : countDownMinutes
        seconds.innerHTML = countDownSeconds < 10 ? "0" + countDownSeconds : countDownSeconds




        if (countDownDifference < 0) {
            clearInterval(x)
            days.innerHTML = ""
            hours.innerHTML = ""
            minutes.innerHTML = ""
            seconds.innerHTML = ""
            timer.style.display = "none"
            h1.innerHTML = "Time Out!!";
        
        } if(countDownMinutes == "60"){
            minutes.innerHTML = "00"
        }
    }
, 1000)
