const milFormat = document.getElementById("mil");
const amFormat = document.getElementById("amformat");
const milSubmit = document.getElementById("submit-mil");
const regSubmit = document.getElementById("submit-reg");
const milAnswerBox = document.getElementById("mil-answer-box");
const regAnswerBox = document.getElementById("amformat-answer-box");
const errMessage = document.getElementById("err-msg");

milSubmit.addEventListener("click", milTime);


function milTime() {
  
  time = milFormat.value.split(":");
  
  
  if (time.length !== 3) {
    errMessage.innerHTML = "please enter a valid number in 24-hour format!";

    return;
  }

  let hour = time[0];
  let min = time[1];
  let part = hour >= 12 ? "PM" : "AM";
  
  min = (min+'').length == 1 ? `0${min}` : min;
  hour = (hour > 12 && hour <= 23) ? hour - 12 : hour == 0 ? hour = 12 : (hour < 12 && hour !== 0) ? hour = hour : hour;
  hour = (hour+'').length == 1 ? `0${hour}` : hour;
 
  time = (`${hour}:${min} ${part}`);
     
  milAnswerBox.innerHTML = time;
}


milFormat.oninput = function() {
  if (this.value.length++) {
    errMessage.innerHTML = "";
    milAnswerBox.innerHTML = "";
  }
}




