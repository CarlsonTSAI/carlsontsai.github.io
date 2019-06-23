let redId
let whitId 
let delay = 3000
let i = 0;
let Timer
let rand
let result = document.getElementById('result')

function Start() {
    whitId = 24
    redId = 1

    document.getElementById('btn').disabled = true
    rand = parseInt(Math.random() * 24 + 1)
    run()
}

function run() {
    let red = document.getElementById(`n${redId}`)
    let whit = document.getElementById(`n${whitId}`)

    red.style = 'background:red'
    whit.style = 'background:whit'

    whitId == 24 ? whitId = 1 : whitId++
    redId == 24 ? redId = 1 : redId++

    Speed(whitId)
}

function Speed(whitId) {
    i++ >= 200 ? delay = 500 : delay < 50 ? delay = 30 : delay = delay / 2;
    Timer = setTimeout(run, delay);

    if (i > 200 && rand == whitId) {
        clearTimeout(Timer);
        setTimeout(function () {
            clearTdColor(rand)
        }, 2000)
        i = 0;
        delay = 3000;
    }

}

function clearTdColor(rand) {
    document.getElementById(`n${rand}`).style = 'background:whit'
    result.src = document.getElementById(`nn${rand}`).src;
    document.getElementById('btn').disabled = false;
}





















