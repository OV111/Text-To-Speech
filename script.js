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


const play = () => {
    const text = textInput.value;
    main.text = text;
    const lang = "en-US";
    main.lang = lang;
    console.log(main);
}

listenBtn.addEventListener("click", play);
