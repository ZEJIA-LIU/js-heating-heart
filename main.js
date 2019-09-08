let start = document.querySelector('#start')
let shift = true



start.addEventListener('click', () => {
    if (shift) {
        heart.style.animationPlayState = 'running'
        start.textContent = '停止'
        shift = false
    } else {
        heart.style.animationPlayState = 'paused'
        start.textContent = '跳动'
        shift = true
    }
})
