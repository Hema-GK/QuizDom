const quizData = [{
  question: "Who is known as the Father of Computers?",
  a: "Alan Turing",
  b: "Bill Gates",
  c: "Charles Babbage",
  d: "Steve Jobs",
  correct: "c",
},
{
  question: "Which gas is most abundant in the Earth's atmosphere?",
  a: "Oxygen",
  b: "Carbon Dioxide",
  c: "Hydrogen",
  d: " Nitrogen",
  correct: "d",
},
{
  question: "What is the smallest bone in the human body?",
  a: "Femur",
  b: " Tibia",
  c: "Stapes",
  d: " Humerus",
  correct: "c",
},
{
  question: "Which is the longest river in the world?",
  a: "Amazon",
  b: "Nile",
  c: " Yangtze",
  d: "Mississippi",
  correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
  return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
  const data = quizData[index]
  const ans = getAnswer()
  if (ans === data.correct) {
      correct++;
  } else {
      incorrect++;
  }
  index++;
  loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
  (inputEl) => {
      if (inputEl.checked) {
          ans = inputEl.value;
      }
  }
)
return ans;
}

const reset = () => {
allInputs.forEach(
  (inputEl) => {
      inputEl.checked = false;
  }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
  <div class="col">
      <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
  </div>
<div >
<button type="submit" class="col2"><a href="main.html">Close</a></button>
</div>
`
}
loadQuestion(index);