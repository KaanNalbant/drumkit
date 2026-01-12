function playSound(e) {
    let keyCode;
    if (e.type === 'keydown') {
        keyCode = e.keyCode;
    } else if (e.type === 'click') {
        const keyElement = e.target.closest('.key');
        if (!keyElement) return;
        keyCode = keyElement.getAttribute('data-key');
    }

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('click', playSound));
