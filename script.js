const main = new SpeechSynthesisUtterance();

const textInput = document.getElementById("input");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const listenBtn = document.getElementById("listen");

pauseBtn.addEventListener("click", () => {
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "inline";
});
resumeBtn.addEventListener("click", () => {
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline";
});


let voicesArray = [];
const synth = window.speechSynthesis;

function getVoice( ) {
    voicesArray = synth.getVoices();
    console.log(voicesArray);
}
synth.onvoiceschanged = getVoice;

const play = () => {
    const text = textInput.value;
    const lang = "en-US";
    main.text = text;
    main.lang = lang;
    console.log(main);
}

listenBtn.addEventListener("click", play);
