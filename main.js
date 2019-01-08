function playSound (e) {
	// console.log(e.keyCode);
	//check to see if there is an audio element that matches the event keyCode
	//use an attribute selector via ES6
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	// console.log(audio);

	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


	if(!audio) return; //stop the function from running all together.

	if(audio) {
	audio.currentTime = 0; // rewind to the start
	// console.log(key);
	audio.play();
	key.classList.add('playing');
	}

};

function removeTransition (e) {
	if(e.propertyName !== 'transform') return; // skip if it is not a transform
	// console.log(e.propertyName);
	// console.log(this);
	this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
// console.log(keys);
// attach an event Key Listener of transitionend on each key via a for each loop since keys is an array
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound); 