let currentStepId = 0;
let energyScore = 0;

// 12:15
let gameHour = 12;
let gameMinute = 15;

// refereces 
const storyContainer = document.getElementById("story");
const scoreBox = document.getElementById("scoreBox");

function formatTime(h, m) {
  const mm = m < 10 ? "0" + m : m;
  return `${h}:${mm}`;
}

function replaceTimePlaceholders(text) {
  const currentTimeStr = formatTime(gameHour, gameMinute);
  return text.replace(/\{time\}/g, currentTimeStr);
}

// click anywhere to advance

function enableClickAnywhere(nextStep) {
  // remove any existing onclick, so don't stack multiple
  document.body.onclick = null;
  // new handler
  document.body.onclick = () => {
    // so double-click won't skip multiple steps
    document.body.onclick = null;
    if (nextStep === "end") {
      endGame();
    } else {
      loadStep(nextStep);
    }
  };
}

function disableClickAnywhere() {
  // no global click
  document.body.onclick = null;
}

/** main loader function */
function loadStep(stepId) {
  const step = storySteps.find(s => s.id === stepId);
  if (!step) {
    endGame();
    return;
  }

  // fade out old line if any
  const oldLine = storyContainer.querySelector(".story-line:last-of-type");
  if (oldLine) {
    oldLine.classList.add("fading");
    setTimeout(() => {
      // optionally remove from DOM
      // storyContainer.removeChild(oldLine);
    }, 1000);
  }

  // new line
  const newLine = document.createElement("div");
  newLine.classList.add("story-line", "entering");

  // replacing {time} step text with current time
  const processedText = replaceTimePlaceholders(step.text);
  newLine.innerHTML = `<div>${processedText}</div>`;

  // CASE 1: If the step has multiple choices (buttons)
  if (step.choices && step.choices.length > 0) {
    // user must click a button => disable "click anywhere"
    disableClickAnywhere();

    // build choice buttons
    const btnContainer = document.createElement("div");
    step.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = choice.label;

      btn.onclick = (e) => {
        e.stopPropagation(); 
        // ^ to ensure the click won't bubble up and trigger "click anywhere"

        // update score
        energyScore += (choice.scoreChange || 0);
        console.log("Score:", energyScore);

        // update time if there's a minuteChange
        if (typeof choice.minuteChange === "number") {
          gameMinute += choice.minuteChange;
          // If minute >= 60, do hour rollover, etc., if needed
          if (gameMinute >= 60) {
            gameHour += Math.floor(gameMinute / 60);
            gameMinute = gameMinute % 60;
            // further 12-hour logic if you want
          }
        }

        loadStep(choice.nextId);
      };

      btnContainer.appendChild(btn);
    });
    newLine.appendChild(btnContainer);

  }
  // CASE 2: No choices => maybe autoNext
  else {
    if (step.autoNext === "end") {
      // Show a small note so user knows to click anywhere
      newLine.innerHTML += `<p style="color:#bbb; font-size:0.9rem;">
        <em>(click anywhere to see final score)</em></p>`;
      enableClickAnywhere("end");
    }
    else if (typeof step.autoNext === "number") {
      enableClickAnywhere(step.autoNext);
    }
    else {
      // If no autoNext and no choices, do nothing
      disableClickAnywhere();
    }
  }

  storyContainer.appendChild(newLine);
  currentStepId = stepId;

  // Auto-scroll to bottom
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

/** End of game: show final score */
function endGame() {
  // fade out last line
  const oldLine = storyContainer.querySelector(".story-line:last-of-type");
  if (oldLine) {
    oldLine.classList.add("fading");
  }

  // disable click anywhere
  disableClickAnywhere();

  // show final score
  scoreBox.style.display = "block";
  scoreBox.innerHTML = `
    <p>Your Score: <span>${score}</span></p>
      <p>The lower the score, the better!<br>
      The US wastes over 60% of its energy, etc...<br>
      In our everyday life, it is good to be mindful of how we use energy!</p>
      <p>
        Learn More: 
        <a href="https://habitsofwaste.org/call-to-action/energy/" target="_blank">
          habits of waste (energy)
        </a>
      </p>
  `;

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

loadStep(currentStepId);
