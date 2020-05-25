function Question(question, answer, correct) {
  this.question = question;
  this.answer = answer;
  this.correct = correct;
}

Question.prototype.displayQuestion = function () {
  console.log(this.question);
  for (let i = 0; i < this.answer.length; i++) {
    console.log(i + ":" + this.answer[i]);
  }
};

Question.prototype.checkAnswer = function (answer) {
  console.log(this.correct === answer);
};

var q1 = new Question("Animal that has four legs?", ["dog", "human"], 0);
var q2 = new Question("What does dog eats?", ["pedigree", "grass"], 0);
var q2 = new Question("What is your dog name?", ["Rocky", "johnny"], 0);

var questions = [q1, q2, q2];

function nextQuestion() {
  var n = Math.floor(Math.random() * questions.length);
  questions[n].displayQuestion();
  var answer = prompt("Answer these question");
  if (answer === "exit") {
    //TODO
  } else {
    console.log("object", answer);
    questions[n].checkAnswer(parseInt(answer));
    nextQuestion();
  }
}

nextQuestion();
