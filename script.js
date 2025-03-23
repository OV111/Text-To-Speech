const textInput = document.getElementById("input");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const listenBtn = document.getElementById("listen");

const text = textInput.value;
let voicesArray = [];
const synth = window.speechSynthesis;

const playText = (text,voice) => {
    const lang = "en-US";
    
    // Setting SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.voice = voice;
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    console.log(utterance);
};
playText();
const getVoice = () => {
    voicesArray = synth.getVoices();
    console.log(voicesArray);
    let voice = voicesArray.find((x) => {
        x.name === "Microsoft David - English (United States)";
    });
    console.log(voice)
    if(voice) {
        console.log("voice founded");
        playText(text,voice);
    } else {
        console.log("voice not found");
    }
}
synth.onvoiceschanged = getVoice;


listenBtn.addEventListener("click", getVoice);




pauseBtn.addEventListener("click", () => {
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "inline";
});
resumeBtn.addEventListener("click", () => {
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline";
});