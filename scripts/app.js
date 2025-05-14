// Map slider IDs to their corresponding audio files
const sounds = {
  rain: "sounds/rain.mp3",
  thunder: "sounds/thunder.mp3",
  "common-cuckoo": "sounds/common-cuckoo.mp3",
  "common-wood-pigeon": "sounds/common-wood-pigeon.mp3",
  "whooper-swan": "sounds/whooper-swan.mp3",
  "european-turtle-dove": "sounds/european-turtle-dove.mp3",
  "eurasian-collard-dove": "sounds/eurasian-collared-dove.mp3",
  "greater-white-fronted-goose": "sounds/greater-white-fronted-goose.mp3",
  "common-quail": "sounds/common-quail.mp3",
  magpie: "sounds/magpie.mp3",
};

// Create audio elements for each sound
const audioElements = {};
for (const [id, src] of Object.entries(sounds)) {
  const audio = new Audio(src);
  audio.loop = true; // Loop the audio
  audio.volume = 0; // Start with volume at 0
  audioElements[id] = audio;
}

// Wait for user interaction to start audio playback
document.addEventListener("click", () => {
  for (const audio of Object.values(audioElements)) {
    audio.play().catch((error) => {
      console.error("Audio playback error:", error);
    });
  }
}, { once: true }); // Ensure this runs only once

// Add event listeners to sliders
document.querySelectorAll("input[type='range']").forEach((slider) => {
  slider.addEventListener("input", (event) => {
    const id = event.target.id;
    const volume = parseFloat(event.target.value);
    if (audioElements[id]) {
      audioElements[id].volume = volume;
    }
  });
});