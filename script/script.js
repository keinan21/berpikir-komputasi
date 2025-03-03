// Add at the beginning of the script

document.addEventListener("DOMContentLoaded", function() {
  particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#00ff9d' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
  });
  
  // Add GSAP animation
  gsap.to(".quiz-container", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power4.out"
  });
  
  const questions = [
    {
      question: "What is Computational Thinking?",
      answers: [
        { text: "A way to play video games", correct: false },
        { text: "A problem-solving method using logical steps", correct: true },
        { text: "A type of computer hardware", correct: false },
        { text: "A method to learn languages", correct: false }
      ],
      explanation: "Computational thinking is a problem-solving process that involves breaking down problems and devising a solution using a series of logical steps."
    },
    {
      question: "Which of these is an example of Decomposition?",
      answers: [
        { text: "Breaking a problem into smaller, manageable parts", correct: true },
        { text: "Ignoring details", correct: false },
        { text: "Combining unrelated tasks", correct: false },
        { text: "Overcomplicating simple issues", correct: false }
      ],
      explanation: "Decomposition involves breaking a complex problem into smaller, easier-to-solve pieces."
    },
    {
      question: "What does Abstraction allow you to do?",
      answers: [
        { text: "Focus on the most important details while ignoring unnecessary ones", correct: true },
        { text: "Record every detail without filtering", correct: false },
        { text: "Increase the complexity of the problem", correct: false },
        { text: "Skip the planning process", correct: false }
      ],
      explanation: "Abstraction filters out unnecessary details to focus on the essential parts of a problem."
    },
    {
      question: "Which is an example of Pattern Recognition?",
      answers: [
        { text: "Identifying trends in market data", correct: true },
        { text: "Randomly selecting data points", correct: false },
        { text: "Ignoring repeated elements", correct: false },
        { text: "Overloading with details", correct: false }
      ],
      explanation: "Pattern recognition involves identifying trends and repeated elements in data."
    },
    {
      question: "What is an Algorithm?",
      answers: [
        { text: "A step-by-step procedure to solve a problem", correct: true },
        { text: "A random guess", correct: false },
        { text: "A physical tool", correct: false },
        { text: "A set of vague guidelines", correct: false }
      ],
      explanation: "An algorithm is a defined set of instructions to solve a problem systematically."
    },
    {
      question: "When planning a daily schedule using computational thinking, what is a good strategy?",
      answers: [
        { text: "Divide your day into tasks and assign specific times", correct: true },
        { text: "Do everything at once", correct: false },
        { text: "Leave your schedule completely unplanned", correct: false },
        { text: "Focus only on work, ignoring rest", correct: false }
      ],
      explanation: "Dividing your day into tasks and scheduling them helps manage time efficiently."
    },
    {
      question: "If you are planning a trip to Bali, what is the first step using decomposition?",
      answers: [
        { text: "Break the trip into components: budget, itinerary, and logistics", correct: true },
        { text: "Book tickets without planning", correct: false },
        { text: "Decide the destination after traveling", correct: false },
        { text: "Avoid any planning", correct: false }
      ],
      explanation: "Decomposition in planning involves breaking down the trip into smaller, manageable parts."
    },
    {
      question: "What is the advantage of breaking a problem into parts?",
      answers: [
        { text: "It makes the problem more manageable and easier to solve", correct: true },
        { text: "It complicates the issue further", correct: false },
        { text: "It wastes time", correct: false },
        { text: "It creates confusion", correct: false }
      ],
      explanation: "Breaking a problem into parts reduces complexity and allows you to address each component individually."
    },
    {
      question: "How does pattern recognition help in daily life?",
      answers: [
        { text: "By identifying trends that can inform better decision-making", correct: true },
        { text: "By causing random decisions", correct: false },
        { text: "By ignoring useful information", correct: false },
        { text: "By complicating simple tasks", correct: false }
      ],
      explanation: "Pattern recognition helps you spot trends and make informed decisions, such as planning routes or budgeting."
    },
    {
      question: "What is the benefit of using algorithms in daily tasks?",
      answers: [
        { text: "They provide a systematic approach to solve problems efficiently", correct: true },
        { text: "They slow down the process", correct: false },
        { text: "They create ambiguity", correct: false },
        { text: "They have no practical use", correct: false }
      ],
      explanation: "Algorithms offer a clear, step-by-step approach that helps to solve tasks efficiently and consistently."
    }
  ];

      // DOM elements
      const questionText = document.getElementById("question-text");
      const answerButtons = document.getElementById("answer-buttons");
      const nextButton = document.getElementById("next-button");
      const resultContainer = document.getElementById("result");
      const scoreDisplay = document.getElementById("score");
      const explanationsContainer = document.getElementById("explanations");
      const restartButton = document.getElementById("restart-button");
  
      let currentQuestionIndex = 0;
      let score = 0;
      let review = [];
      let isProcessing = false; // Debounce flag
  
      function startQuiz() {
          score = 0;
          currentQuestionIndex = 0;
          review = [];
          isProcessing = false;
          resultContainer.classList.add("hidden");
          document.getElementById("quiz").classList.remove("hidden");
          nextButton.disabled = true;
          showQuestion();
      }
  
      function showQuestion() {
          resetState();
          const currentQuestion = questions[currentQuestionIndex];
          questionText.innerText = currentQuestion.question;
          
          // Shuffle answers
          const shuffledAnswers = shuffleArray([...currentQuestion.answers]);
          
          shuffledAnswers.forEach(answer => {
              const button = document.createElement("button");
              button.innerText = answer.text;
              button.classList.add("btn");
              button.addEventListener("click", () => selectAnswer(answer, button));
              answerButtons.appendChild(button);
          });
      }
  
      function selectAnswer(answer, button) {
          if (isProcessing) return;
          
          // Remove previous selections
          Array.from(answerButtons.children).forEach(btn => {
              btn.classList.remove("selected");
              btn.disabled = false;
          });
          
          button.classList.add("selected");
          button.disabled = true;
          nextButton.disabled = false;
      }
  
      function resetState() {
          answerButtons.innerHTML = "";
          nextButton.disabled = true;
          isProcessing = false;
      }
  
      nextButton.addEventListener("click", () => {
          if (isProcessing) return;
          isProcessing = true;
          
          const selectedButton = answerButtons.querySelector(".selected");
          if (!selectedButton) return;
  
          const currentQuestion = questions[currentQuestionIndex];
          const correctAnswer = currentQuestion.answers.find(a => a.correct);
          const isCorrect = selectedButton.innerText === correctAnswer.text;
  
          // Show feedback
          Array.from(answerButtons.children).forEach(btn => {
              if (btn.innerText === correctAnswer.text) {
                  btn.classList.add("correct");
              }
              btn.disabled = true;
          });
          
          if (!isCorrect) {
              selectedButton.classList.add("wrong");
          } else {
              score++;
          }
  
          // Store review data
          review.push({
              question: currentQuestion.question,
              chosen: selectedButton.innerText,
              correct: correctAnswer.text,
              explanation: currentQuestion.explanation,
              isCorrect: isCorrect
          });
  
          // Move to next question or show results
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
              setTimeout(() => {
                  isProcessing = false;
                  showQuestion();
              }, 1000);
          } else {
              showResult();
          }
      });
  
      function showResult() {
          document.getElementById("quiz").classList.add("hidden");
          resultContainer.classList.remove("hidden");
          scoreDisplay.textContent = score;
          displayReview();
      }
  
      function displayReview() {
          explanationsContainer.innerHTML = "<h3>Review & Explanations:</h3>";
          review.forEach((item, index) => {
              const detail = document.createElement("details");
              detail.innerHTML = `
                  <summary class="${item.isCorrect ? 'correct-summary' : 'wrong-summary'}">
                      Q${index + 1}: ${item.question}
                  </summary>
                  <p><strong>Your Answer:</strong> ${item.chosen}</p>
                  <p><strong>Correct Answer:</strong> ${item.correct}</p>
                  <p><strong>Explanation:</strong> ${item.explanation}</p>
              `;
              explanationsContainer.appendChild(detail);
          });
      }
  
      // Utility function to shuffle array
      function shuffleArray(array) {
          return array.sort(() => Math.random() - 0.5);
      }
  
      restartButton.addEventListener("click", startQuiz);
      startQuiz();
});
