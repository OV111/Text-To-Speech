const textInput = document.getElementById("input");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const listenBtn = document.getElementById("listen");



const synth = window.speechSynthesis;
const selectNode = document.querySelector("#choose");


const populateVoice = () => {
    let voicesArray = synth.getVoices();
    selectNode.innerHTML = "";

    voicesArray.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        selectNode.appendChild(option);
    })
    console.log(selectNode);
};

populateVoice();

selectNode.addEventListener("change", (event) => {
    let choosedVoice = event.target.value;
    console.log(choosedVoice);
})



const text = textInput.value;


const playText = (text,voiceName) => {
    const lang = "en-US"; 
    // Setting SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.voice = voiceName;
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    // console.log(utterance);
};

synth.onvoiceschanged = populateVoice;

listenBtn.addEventListener("click", populateVoice);

pauseBtn.addEventListener("click", () => {
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "inline";
});
resumeBtn.addEventListener("click", () => {
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline";
});