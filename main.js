function playSound (e) {
	//check to see if there is an audio element that matches the event keyCode
	//use an attribute selector via ES6
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


	if(!audio) return; //stop the function from running all together.

	if(audio) {
	audio.currentTime = 0; // rewind to the start
	audio.play();
	key.classList.add('playing');
	}

};

function removeTransition (e) {
	if(e.propertyName !== 'transform') return; // skip if it is not a transform
	this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
// attach an event Key Listener of transitionend on each key via a for each loop since keys is an array
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound); 