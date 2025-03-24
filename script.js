const textInput = document.getElementById("input");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const listenBtn = document.getElementById("listen");
const selectNode = document.querySelector("#choose");

const synth = window.speechSynthesis;
let voicesArray = [];
let choosedVoice = null;

const populateVoice = () => {
    voicesArray = synth.getVoices();
    selectNode.innerHTML = "";

    voicesArray.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        selectNode.appendChild(option);
    })

    // Choosed Defaultly first voice
    if(voicesArray.length > 0) {
        choosedVoice = voicesArray[0].name;
        selectNode.value = choosedVoice;
    }
};

selectNode.addEventListener("change", (event) => {
    choosedVoice = event.target.value;
    // console.log(choosedVoice);
})



// const text = textInput.value;
const playText = (text,voiceName) => {
    const lang = "en-US"; 
    const voice = voicesArray.find(v => v.name === voiceName);
    // Setting SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.voice = voice;
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    console.log("vahe")
    synth.speak(utterance);
};


listenBtn.addEventListener("click", () => {
    const text = textInput.value.trim(); 
    playText(text,choosedVoice);
});


synth.onvoiceschanged = populateVoice;
populateVoice()



pauseBtn.addEventListener("click", () => {
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "inline";
});
resumeBtn.addEventListener("click", () => {
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline";
});
