const questions=[{
    'ques':'What does CPU stand for?',
    'a':'Central Processing Unit',
    'b':' Computer Personal Unit',
    'c':'Central Programming Unit',
    'd':'Computer Power Unit',
    'ans':'a'
},
{
    'ques':'Which of the following is an operating system?',
    'a':'Microsoft Word',
    'b':'Linux',
    'c':'Google Chrome',
    'd':' Adobe Photoshop',
    'ans':'b'

},
{
    'ques':'What is the main function of RAM in a computer?',
    'a':'Store data permanently',
    'b':'Execute instructions',
    'c':'Provide temporary storage for data being used',
    'd':' Manage hardware resources',
    'ans':'c'

},
{
    'ques':'Which of the following is a type of computer memory?',
    'a':'ROM',
    'b':'CPU',
    'c':'SSD ',
    'd':' Monitor',
    'ans':'a'

},
{
    'ques':'What does HTTP stand for?',
    'a':' HyperText Transfer Protocol',
    'b':'High Text Transfer Protocol',
    'c':' HyperText Transmission Protocol',
    'd':'  High Text Transmission Protocol',
    'ans':'a'

},

{
    'ques':'Which of the following is a programming language?',
    'a':' HTML',
    'b':'CSS',
    'c':' JS',
    'd':'XML',
    'ans':'c'

},
{
    'ques':'What is the main function of a motherboard?',
    'a':' To provide power to the computer',
    'b':'To store data permanently',
    'c':' To connect all components of the computer',
    'd':' To display images on the screen',
    'ans':'c'

},
{
    'ques':'What is the primary purpose of an operating system?',
    'a':'To provide network security',
    'b':'To manage computer hardware and software resources',
    'c':' To run applications',
    'd':' To store files',
    'ans':'b'

},
{
    'ques':'Which of the following is considered volatile memory?',
    'a':' Hard Drive',
    'b':'To store data permanently',
    'c':' To connect all components of the computer',
    'd':' To display images on the screen',
    'ans':'c'

},
{
    'ques':'What is the main function of a motherboard?',
    'a':' To provide power to the computer',
    'b':'To store data permanently',
    'c':' To connect all components of the computer',
    'd':' To display images on the screen',
    'ans':'c'



}]


let index = 0;

let userAnswers = {}; // To store the user's answers

const quesbox = document.getElementById('quesbox');
const option = document.querySelectorAll('.option');
const nextButton = document.querySelector('.button button:nth-child(3)');
const prevButton = document.querySelector('.button button:nth-child(1)');
const submitButton = document.querySelector('.button button:nth-child(2)');

const loadques = () => {
    const data = questions[index];
    quesbox.innerText = `${index + 1}) ${data.ques}`; // Update the question text
    option[0].nextElementSibling.innerText = data.a;
    option[1].nextElementSibling.innerText = data.b;
    option[2].nextElementSibling.innerText = data.c;
    option[3].nextElementSibling.innerText = data.d;
    
    // Clear previously checked radio buttons
    option.forEach(opt => opt.checked = false);

    // If the user has already answered this question, show their previous selection
    if (userAnswers[index]) {
         document.getElementById(userAnswers[index]).checked = true;
        
    }
};

const getSelectedAnswer = () => {
    let answer;
    option.forEach(opt => {
        if (opt.checked) {
            answer = opt.id;
            console.log(answer)
        }
    });
    return answer;
};

nextButton.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer) {
        userAnswers[index] = selectedAnswer; // Save the user's answer
        if (index < questions.length - 1) {
            index++; // Move to the next question
            loadques(); // Load the next question
        } else {
            nextButton.style.display = 'none';   // Hide Next button on last question
            submitButton.style.display = 'inline';  // Show Submit button on last question
        }
    } else {
        alert("Please select an answer before moving to the next question.");
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--; // Move to the previous question
        loadques(); // Load the previous question
    } else {
        alert("You're at the first question!");
    }
});

submitButton.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer) {
        userAnswers[index] = selectedAnswer; // Save the last answer
        calculateScore(); // Calculate and display the score
        location.reload();
    } else {
        alert("Please select an answer before submitting.");
    }
});

const calculateScore = () => {
    let score = 0;
    questions.forEach((question, idx) => {
        if (userAnswers[idx] === question.ans) {
            score++;
        }
    });
    alert(`You scored ${score} out of ${questions.length}`);
};

// Load the first question when the page is ready
loadques();




