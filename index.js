//Selecionando os elementos
const minutesElement = document.querySelector("#minutes")
const secondsElement = document.querySelector("#seconds")
const millisecondsElement = document.querySelector("#milliseconds")
const playerBtn = document.querySelector("#playerBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false

//Acionando as funções através de um clique
playerBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resumeBtn.addEventListener("click", resumeTimer)
resetBtn.addEventListener("click", resetTimer)

function startTimer(){
    interval = setInterval(() => {
        if(!isPaused){
            milliseconds += 10

            if(milliseconds === 1000){
                seconds++
                milliseconds = 0
            }

            if(seconds === 60){
                minutes++
                seconds = 0
            }

            minutesElement.textContent = formatTime(minutes)
            secondsElement.textContent = formatTime(seconds)
            millisecondsElement.textContent = formatMilliseconds(milliseconds)
        }
    }, 10);

    //Alternando o botão de iniciar e pausar
    playerBtn.style.display ="none"
    pauseBtn.style.display ="block"
} 
function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display="none"
    resumeBtn.style.display="block"
}
function resumeTimer(){
    isPaused = false;
    pauseBtn.style.display="block"
    resumeBtn.style.display="none"
}
function resetTimer(){
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliseconds = 0

    minutesElement.textContent = "00"
    secondsElement.textContent = "00"
    millisecondsElement.textContent = "000"

    playerBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"

}

function formatTime(time){
    return time < 10 ? `0${time}` : time; 
}
function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}
