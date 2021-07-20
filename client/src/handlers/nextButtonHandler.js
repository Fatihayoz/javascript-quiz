import { data } from "../../data/quiz.js";
import { quizQuestionPanel } from "../components/pages/quiz/quiz-question-panel.js";
import { createHintPanel } from "../components/pages/quiz/hint-panel.js";
import { state } from "../init/state.js";

const nextButtonHandler = () => {
  const quizContainer = document.querySelector(".quiz");
  quizContainer.innerHTML = "";
  data.indexOfRenderedQuestion++;
  // render the question panel
  quizContainer.appendChild(quizQuestionPanel(data.indexOfRenderedQuestion));
  // render hint
  const hint = state.questions[state.indexOfRenderedQuestion].links;
  for (let i = 0; i < data.numberOfTotalQuestions; i++) {
    const hintContainer = document.getElementById("hint-panel");
    hintContainer.innerHTML = "";
    hintContainer.appendChild(createHintPanel(hint[i]));
  }
  // console.log(hint);
  // hintContainer.appendChild(createHintPanel(hint));
};

export { nextButtonHandler };
