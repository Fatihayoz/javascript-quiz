import { data } from "../../../../data/quiz.js";

const showQuestion = (index) => {
  const section = document.createElement("section");
  document.body.appendChild(section);
  const questionText = document.createElement("div");
  section.appendChild(questionText);
  const optionList = document.createElement("div");
  section.appendChild(optionList);
  const questionTag = `<span>${data.questions[index].question}</span>`;
  // Standardize the code
  // const optionTagDiv = createElement("div");
  // optionTagDiv
  const optionTag =
    `<div class= 'option'><span>${data.questions[index].answers[0].text}</span></div>` +
    `<div class="option"><span>${data.questions[index].answers[1].text}</span></div>` +
    `<div class="option"><span>${data.questions[index].answers[2].text}</span></div>` +
    `<div class="option"><span>${data.questions[index].answers[3].text}</span></div>`;
  questionText.innerHTML = questionTag;
  optionList.innerHTML = optionTag;
  const option = optionList.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("click", "optionSelected");
  }
};

let questionCounter = 0;

const nextButtonHandler = () => {
  if (questionCounter < data.questions.length) {
    questionCounter++;
    // function to show the question
    showQuestion(questionCounter);
  } else {
    console.log("errror");
  }
};

export { nextButtonHandler };
