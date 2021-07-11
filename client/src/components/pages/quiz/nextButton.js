import { nextButtonHandler } from "./nextButtonHandler.js";

// Create "Next" Button
const nextButton = () => {
  const nextBtn = document.createElement("button"); // This button will be created under quiz_questions
  nextBtn.id = "next-btn";
  nextBtn.className = "next-btn";
  nextBtn.innerHTML = "Next";
  document.body.appendChild(nextBtn); // This button will be appended to the questions

  // The code below shows it is working
  // document
  //   .getElementById("next-btn")
  //   .addEventListener("click", (e) => console.log(e));

  // If button is clicked;
  nextBtn.addEventListener("click", nextButtonHandler);

  return nextBtn;
};

export { nextButton };
