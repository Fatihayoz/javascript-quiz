
const nextQuestion = () => {
    
}



const nextButtonHandler = () => {
    data.indexOfRenderedQuestion++;
    data.numberOfTotalQuestions++;
    nextQuestion();
};




const nextButton = () => {
    const nextBtn = document.createElement("button");
    nextBtn.id = "next-btn";
    nextBtn.className = "next-btn";
    document.getElementById("next-btn").addEventListener("click", nextButtonHandler);    
};