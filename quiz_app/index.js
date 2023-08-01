let questions = [
  {
    question: "what is the capital of Nigeria ?",
    a: "abuja",
    b: "johannesburg",
    c: "london",
    d: "washington",
    answer: "a",
  },
  {
    question: "what is the capital of the United State ?",
    a: "abuja",
    b: "johannesburg",
    c: "london",
    d: "washington",
    answer: "d",
  },
  {
    question: "what is the capital of South Africa ?",
    a: "abuja",
    b: "johannesburg",
    c: "london",
    d: "washington",
    answer: "b",
  },
  {
    question: "what is the capital of England ?",
    a: "abuja",
    b: "johannesburg",
    c: "london",
    d: "washington",
    answer: "c",
  },
];
/* for (let i = 0; i < questions.length; i++) {
  console.log(questions[i].answer);
} */

//let container = document.querySelector(".container")
let container = document.querySelector("container")
// console.log(container)
let quiz = document.querySelector(".quiz")
let question = document.querySelector(".question")
let radio_btn = document.querySelector(".radio_btn")
let answer_options = document.querySelector(".answer_options")
let answer = document.querySelector(".answer")
let submit_btn = document.querySelector(".submit_btn")
let radio_btns = document.querySelectorAll(".radio_btn")
let answers = document.querySelectorAll(".answer")
let option_a = document.querySelector(".option_a")
let option_b = document.querySelector(".option_b")
let option_c = document.querySelector(".option_c")
let option_d = document.querySelector(".option_d")
// console.log(quiz,radio_btn,answer_options,answer,submit_btn,radio_btns,answers)
// console.log(option_a,option_b,option_c,option_d)
// console.log(questions[0])
// console.log(questions[0].question)
// console.log(questions[0].a)
// console.log(questions[0].b)
// console.log(questions[0].c)
// console.log(questions[0].d)
// console.log(questions[0].answer)
let next_number = 0
let score = 0
function load_questions(){
  uncheck_radio_btn()
  question.textContent = questions[next_number].question
  option_a.textContent = questions[next_number].a
  option_b.textContent = questions[next_number].b
  option_c.textContent = questions[next_number].c
  option_d.textContent = questions[next_number].d
}
function uncheck_radio_btn() {
  // radio_btns.forEach(btn => {
  //   btn.checked = false
  // })
  for (let i = 0; i < radio_btns.length; i++) {
    radio_btns[i].checked = false
  }
}
load_questions()
function selected_answer() {
  let answer = ""
  radio_btns.forEach(btn => {
    // console.log(btn.id)
    if (btn.checked) {
      answer = btn.id
    }
  });
  return answer
}
selected_answer()
submit_btn.addEventListener("click",next_question)

function next_question(event) {
  // console.log("23")
  let answer = selected_answer()
  console.log(answer)
  if (answer) {
    if(answer === questions[next_number].answer) {
      score++
      console.log(answer,questions[next_number].answer,score)
    }
    next_number++
    
    if (next_number < questions.length) {
      load_questions()
    }
    else {
      console.log("last question")
      quiz.innerHTML = `You got ${score} out of ${next_number} questions correctly.
                        <button onclick="location.reload()">RESTART</button>`
    }
  }
  
}
console.log(score)