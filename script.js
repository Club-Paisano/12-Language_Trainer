//jshint esversion: 6


/*
Author: Anthony Noel

This page is a language trainer where it will give you a sentence to fill in the Blank,

Future Development:
-Extend functionality to where the sentences aren't hardcoded and a random part of the sentence is chose to fill in the blank for
-Switch span's for outputs or inputs
-Refactor the code it's very fragil
*/
const sentenceHolder = document.querySelector("p");

const exampleSentences = [
    ["Je","<span></span>","docteur"],
    ["Andas","<span></span>","mi","cabeza"],
    ["I'm","that","<span></span>"]

];
const answers = ["suis","en","NIGGA"];
let currentSentenceIndex = 0;


const initPage = () => {
  //Display the array with a span in it
  displayArray(exampleSentences[currentSentenceIndex]);
  currentSentenceIndex = 0;
 // Add an event listener for the keyboard
  document.addEventListener("keydown", (e) => (e.key === "Backspace")? document.querySelector("span").textContent = document.querySelector("span").textContent.slice(0,document.querySelector("span").textContent.length-1) : console.log(e.key));
 document.addEventListener("keypress",keyPressed);



};


const displayArray = (sentenceArr) => {
  //Display the array to the p tag with the empty array item being a span highlighted yellow
  //sentenceHolder.innerT
  sentenceHolder.innerHTML = "";
  sentenceArr.forEach(word => {

      sentenceHolder.innerHTML += word+" ";
  });
};

const keyPressed = (e) => {
  //Input it into the span
  answerInput = document.querySelector("span");
  answerInput.textContent+=e.key;
  //If the current length and text of the span = the answer add a class of green
    //If its the same length but doesn't equal, add a class of red
  if(answerInput.textContent.length === answers[currentSentenceIndex].length) {
    const classname = (answerInput.textContent === answers[currentSentenceIndex])? "green" : "red";
    answerInput.classList.add(classname);
  } else {
      console.log("They aren't equal");
      if(answerInput.classList.contains("red") ) answerInput.classList.remove("red");

  }

  //Display the next item in the array
  if(answerInput.classList.contains("green")&& currentSentenceIndex != exampleSentences.length-1) {
    currentSentenceIndex++;
    displayArray(exampleSentences[currentSentenceIndex]);
  }
};


initPage();
