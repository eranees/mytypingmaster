window.onload = function () {
  timer()
  wordList = ["this", "is", "cat", "rat", "mat", "wat", "This", "is", "cat", "rat", "mat", "wat"]
  let wordSection = document.getElementById('word-section')
  wordList.forEach(element => {
    wordSection.innerHTML += `<span class="text-primary">${element}</span>`;
  });

}

var i = 0;
var correct = 0;
var incorrect = 0;
function startTyping(e) {
  if (e.keyCode == 32) {
    let typing = document.getElementById('typing').value.toLowerCase().trim();
    console.log(typing)
    if (!typing.localeCompare(wordList[i])) {
      correct += 1
      document.getElementById('typing').value = ' ';
    } else {
      incorrect += 1
      document.getElementById('typing').value = ' ';
    }
    console.log(i)
    i++;
    if (i == wordList.length) alert(`Typing end print result   correct words ${Math.round((correct / wordList.length) * 100)} incorrect words ${incorrect}`)
  }
}




// timer function
function timer() {
  let remainingTime = 10; // set the initial time to 60 seconds
  let timer = document.getElementById('timer')
  setInterval(() => {
    remainingTime--; // decrement the remaining time
    let minutes = Math.floor(remainingTime / 60); // calculate the number of minutes
    let seconds = remainingTime % 60; // calculate the number of seconds
    timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} `; // update the display
  }, 1000);
}
