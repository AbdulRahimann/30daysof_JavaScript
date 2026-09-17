// function play(keyCode) {
//     addEventListener('keydown', (event) => {
//         const audio = document.querySelector(`audio[data-key ="${event.keyCode}"]`);
//         const key = document.querySelector(`.key[data-key ="${event.keyCode}"]`);
//         console.log(key)
//         if (!audio) return;
//         audio.currentTime = 0;
//         audio.play()
//     })
// }


function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    // no matching sound for this key, do nothing
    if (!audio || !key) return;

    audio.currentTime = 0; // rewind so rapid presses replay from the start
    audio.play();

    key.classList.add('playing');
}

function removeTransition(event) {
    // only care about the transform transition, ignore the rest
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}

// Keyboard trigger
window.addEventListener('keydown', (event) => {
    playSound(event.keyCode);
    
});

// Click trigger
 const keys = document.querySelectorAll('.key');
 keys.forEach((key) => {
     key.addEventListener('click', () => {
         playSound(key.dataset.key);
        
     });
 });

// Clean up the animation class once it finishes
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
});
