const wordList = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
const wordList1 = ["abacus", "benevolent", "capricious", "diligent", "ephemeral", "felicity", "garrulous", "haughty", "ignominious", "jubilant", "kinetic", "luminous", "mendacious", "nefarious", "obsequious", "panacea", "quintessential", "reclusive", "sycophant", "tenacious", "ubiquitous", "vexatious", "wistful", "xenophobia", "yokel", "zealot", "acerbic", "blithe", "candor", "delineate", "ebullient", "fastidious", "gregarious", "histrionic", "impetuous", "juxtapose", "kaleidoscope", "laconic", "mercurial", "nonplussed", "ostentatious", "prevaricate", "quagmire", "rancorous", "stalwart", "taciturn", "unctuous", "vicarious", "whimsical", "xeric", "yielding", "zenith"];

let wordSection = document.getElementById('word-section')
window.onload = function () {
  timer()
  wordSection.innerHTML = `<span class="text-primary">${wordList[0]}</span>`;
}

var i = 0;
var correct = 0;
var incorrect = 0;
function startTyping(e) {
  if (e.keyCode == 32) {
    let typing = document.getElementById('typing').value.toLowerCase().trim();
    if (!typing.localeCompare(wordList[i])) {
      correct += 1
      document.getElementById('typing').value = ' ';
    } else {
      incorrect += 1
      document.getElementById('typing').value = ' ';
    }
    i++;
    wordSection.innerHTML = `<span class="text-primary">${wordList[i]}</span>`;
    if (i == wordList.length) {
      let result = document.getElementById('result');
      result.style.display = "block";
      result.innerHTML = `
      correct words ${Math.round((correct / wordList.length) * 100)} <br>
      incorrect words ${Math.round((incorrect / wordList.length) * 100)}
      `
      wordSection.innerHTML = `<span class="text-primary">Click on restart button and do it again</span>`;
    }
  }
  document.getElementById('words-left').innerHTML = `Words Left ${wordList.length - i}`;
}




// timer function
function timer() {
  let remainingTime = 10; // set the initial time to 60 seconds
  let timer = document.getElementById('timer')
  setInterval(() => {
    remainingTime--; // decrement the remaining time
    let minutes = Math.floor(remainingTime / 60); // calculate the number of minutes
    let seconds = remainingTime % 60; // calculate the number of seconds
    // timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} `; // update the display
  }, 1000);
}

// restart
function restart() {
  location.reload()
}