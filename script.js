// const audio = new Audio("mixkit-doorbell-single-press-333.wav");
const audio = new Audio("Silent1s.wav");

setInterval((e) => {
  audio.play();
}, 300000);

//300000 is 5 minutes in ms
