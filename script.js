const textInput = document.getElementById("input");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const listenBtn = document.getElementById("listen");


const selectNode = document.querySelector("#choose");
const choosedVoice = null;
console.log(selectNode)


// const populateVoices = () => {
//     const synth = window.speechSynthesis;
//     const voicesArray = synth.getVoices();
//     selectNode.innerHTML = ""; // Clear existing options
//     voicesArray.forEach(voice => {
//         const option = document.createElement("option");
//         option.value = voice.name;
//         option.textContent = `${voice.name} (${voice.lang})`;
//         selectNode.appendChild(option);
//     });
// };















const text = textInput.value;
let voicesArray = [];
const synth = window.speechSynthesis;

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
const getVoice = () => {
    voicesArray = synth.getVoices();
    // console.log(voicesArray);

    const voicesToFind = [
        'Google UK English Male',
        'Google UK English Female',
        'Microsoft David - US',
        'Microsoft Zira - US',
    ];


    let voice = voicesArray.find((x) => voicesToFind.includes(x.name));

    console.log(voice);
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