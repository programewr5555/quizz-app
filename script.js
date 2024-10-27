const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

const questions = [
    {
        question: 'What is 5 + 3?',
        answers: [
            { text: '6', correct: false },
            { text: '7', correct: false },
            { text: '8', correct: true },
            { text: '9', correct: false }
        ]
    },
    {
        question: 'What is the boiling point of water?',
        answers: [
            { text: '50°C', correct: false },
            { text: '100°C', correct: true },
            { text: '150°C', correct: false },
            { text: '200°C', correct: false }
        ]
    },
    {
        question: 'What is 15 - 7?',
        answers: [
            { text: '6', correct: true },
            { text: '8', correct: false },
            { text: '7', correct: false },
            { text: '9', correct: false }
        ]
    },
    {
        question: 'Who is known as the Father of Science?',
        answers: [
            { text: 'Albert Einstein', correct: false },
            { text: 'Isaac Newton', correct: true },
            { text: 'Galileo Galilei', correct: false },
            { text: 'Charles Darwin', correct: false }
        ]
    },
    {
        question: 'What is the square root of 64?',
        answers: [
            { text: '6', correct: false },
            { text: '7', correct: false },
            { text: '8', correct: true },
            { text: '9', correct: false }
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    scoreContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.classList.add('hide');
    scoreText.innerText = score;
    scoreContainer.classList.remove('hide');
}

restartButton.addEventListener('click', startQuiz);

startQuiz();