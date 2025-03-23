const textInput = document.getElementById("input");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const listenBtn = document.getElementById("listen");



let voicesArray = [];
const synth = window.speechSynthesis;



function getVoice() {
    voicesArray = synth.getVoices();
    console.log(voicesArray);
    let voice = voicesArray.find((x) => {
        x.name = "Microsoft David - English (United States)";
    });
    if(voice) {
        playText(text,voice);
    }
}
synth.onvoiceschanged = getVoice;




const playText = (text,voice) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const text = textInput.value;
    const lang = "en-US";
    utterance.text = text;
    utterance.lang = lang;
    console.log(utterance);
};
listenBtn.addEventListener("click", playText);







pauseBtn.addEventListener("click", () => {
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "inline";
});
resumeBtn.addEventListener("click", () => {
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline";
});