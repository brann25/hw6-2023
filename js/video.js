var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

let clip = document.querySelector("#player1");

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	clip.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	clip.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video, rate =", clip.playbackRate);
	clip.playbackRate -= 0.15;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video, rate =", clip.playbackRate);
	clip.playbackRate += 1.35;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Curent Time:", clip.currentTime);
	clip.currentTime += 0.5;
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Audio: Muted!");
	clip.muted = true;
});

document.querySelector("#slider").addEventListener("input", function() {
	let vol = document.getElementById("volume");
	let slider = document.querySelector("#slider");
	console.log(slider.value/100);
	clip.volume = slider.value/100;
	vol.innerHTML = slider.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage Mode On!");
	clip.style.border = "double";
	clip.style.borderRadius = "1.5em";
	clip.style.borderWidth = "5px";
	clip.style.filter = "grayscale()";
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Mode On!");
	clip.style.filter = "none";
	clip.style.border = "solid";
	clip.style.borderRadius = "0em";
	clip.style.borderWidth = "nonw";
});
