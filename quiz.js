// This part adds the event listener to handle the quiz form submission
document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Doesn't let the page from refreshing

  let score = 0;
  let resultText = "";

  // Question 1 - Multiple Choice
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "a") {
      score++;
      resultText += "<p>Q1: Correct!</p>";
  } else {
      resultText += "<p>Q1: Incorrect. Correct answer: HyperText Transfer Protocol</p>";
  }

  // Question 2 - Multiple Choice
  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === "b") {
      score++;
      resultText += "<p>Q2: Correct!</p>";
  } else {
      resultText += "<p>Q2: Incorrect. Correct answer: 1995</p>";
  }

  // Question 3 - Multiple Choice
  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === "b") {
      score++;
      resultText += "<p>Q3: Correct!</p>";
  } else {
      resultText += "<p>Q3: Incorrect. Correct answer: Netscape Navigator</p>";
  }

  // Question 4 - Fill in the blank
  const q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
  if (q4 === "headers" || q4 === "metadata headers") {
      score++;
      resultText += "<p>Q4: Correct!</p>";
  } else {
      resultText += "<p>Q4: Incorrect. Correct answer: headers</p>";
  }

  // Question 5 - Multi-select (checkbox)
  const q5 = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(cb => cb.value);
  const correctQ5 = ["a", "c"]; // Correct answers
  const isCorrectQ5 = correctQ5.every(ans => q5.includes(ans)) && q5.length === 2;

  if (isCorrectQ5) {
      score++;
      resultText += "<p>Q5: Correct!</p>";
  } else {
      resultText += "<p>Q5: Incorrect. Correct answers: Metadata headers, Basic caching</p>";
  }

  // Shows total score and pass/fail message
  resultText += `<h3>Your Score: ${score}/5</h3>`;
  resultText += `<h3>${score > 3 ? "✅ Pass" : "❌ Fail"}</h3>`;
  document.getElementById("result").innerHTML = resultText;
});

// This part resets the quiz form and clears the result display
function restartQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("result").innerHTML = "";
}
