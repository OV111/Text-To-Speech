const textInput = document.getElementById("input");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const listenBtn = document.getElementById("listen");
const selectNode = document.querySelector("#choose");

const synth = window.speechSynthesis;
let voicesArray = [];
let choosedVoice = null;

synth.cancel();

const populateVoice = () => {
    voicesArray = synth.getVoices();
    selectNode.innerHTML = "";

    voicesArray.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        selectNode.appendChild(option);
    });
    // Choosed Defaultly first voice
    if(voicesArray.length > 0) {
        choosedVoice = voicesArray[0].name;
        selectNode.value = choosedVoice;
    }
};

selectNode.addEventListener("change", (event) => {
    choosedVoice = event.target.value;
});

const playText = (text,voiceName) => {
    const lang = "en-US"; 
    const voice = voicesArray.find(v => v.name === voiceName);

    // Cancelling past text
    synth.cancel();
    // Setting SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.voice = voice;
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    synth.speak(utterance);
};

listenBtn.addEventListener("click", () => {
    const text = textInput.value.trim(); 
    if(text.length > 0) {
        playText(text,choosedVoice);
    } else {
        alert("No Text to speak!");
    }
});

pauseBtn.addEventListener("click", () => {
    synth.pause();
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "inline";
});
resumeBtn.addEventListener("click", () => {
    synth.resume();
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline";
});

synth.onvoiceschanged = populateVoice;
setTimeout(populateVoice,100);