document.addEventListener("DOMContentLoaded", function () {
  const quizLine = document.querySelector(".main__progress-line");

  const questionBtnNext = document.querySelectorAll(".question-btn-next");

  const firstQuestion = document.querySelector("#question-first");
  const secondQuestion = document.querySelector("#question-second");
  const thirdQuestion = document.querySelector("#review-js");

  questionBtnNext.forEach((e) => {
    if (quizLine) {
      quizLine.style.setProperty("--progress-width", "20%");
    }
    e.addEventListener("click", () => {
      if (firstQuestion.classList.contains("showed")) {
        firstQuestion.classList.remove("showed");
        secondQuestion.classList.add("showed");
        if (quizLine) {
          quizLine.style.setProperty("--progress-width", "40%");
        }

        console.log(23);
      } else if (secondQuestion.classList.contains("showed")) {
        firstQuestion.classList.remove("showed");
        secondQuestion.classList.remove("showed");
        secondQuestion.classList.remove("showed");
        thirdQuestion.classList.add("showed");
        console.log(23);
        checkPass();

        if (quizLine) {
          quizLine.style.setProperty("--progress-width", "60%");
        }
      } else if (thirdQuestion.classList.contains("showed")) {
        const reviewOne = document.querySelector(".main__review-one");

        reviewOne.classList.add("showed");
      } else {
        console.log("??");
      }
    });
  });

  function checkPass() {
    if (thirdQuestion.classList.contains("showed")) {
      const reviewOne = document.querySelector(".main__review-one");
      reviewOne.classList.add("showed");
      switchSlide()
    } else {
      console.log("NO");
    }
  }

  function switchSlide () {

    const reviewOne = document.querySelector("#review-js");
    const reviewDone = document.querySelector("#reviewDone-js");

    if (reviewOne.classList.contains("showed")) {
    const reviewTwo = document.querySelector("#reviewTwo-js");
    const firstSlide = document.querySelector(".main__review-one");


      setTimeout (function(){
        // reviewOne.classList.remove("showed");
        reviewTwo.classList.add("showed");
        firstSlide.classList.remove("showed");
        quizLine.style.setProperty("--progress-width", "80%");

        setTimeout(function() {
          reviewTwo.classList.remove("showed");
          reviewDone.classList.add("showed");
          quizLine.style.setProperty("--progress-width", "100%");

        }, 1500);
      }, 1500)
    }
  }
});


