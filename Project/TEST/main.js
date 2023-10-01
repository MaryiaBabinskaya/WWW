const questions = [
	{
		question: "Jaki człowiek nie jest związany z Grodno?",
		answers: ["Stefan Batory", "Eliza Orzeszkowa", "Adam Mickiewicz", "Stanisław Lem"],
		correct: 4,
	},
	{
		question: "Czy odbywał się w Grodnie sejm poświęcony podziału RP? /jeżeli tak, to kiedy",
		answers: [
			"Nie",
			"Tak, 1795",
			"Tak, 1793",
			"Tak, 1772",
		],
		correct: 2,
	},
	{
		question: "Kiedy powstał Grodno?",
		answers: [
			"1128",
			"966",
			"1313",
			"1067",
		],
		correct: 1,
	},
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0; //ile dobrych odpowiedzi
let questionIndex = 0; //terazPytanie

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage(){
	headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion(){
	const headerTemplate = '<h2 class="title">%title%</h2>';
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;
	let answerNumber = 1;
	for(answerText of questions[questionIndex]['answers']){
		const questionTemplate = 
		`<li>
			<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
			</label>
		</li>`;
		const answerHTML = questionTemplate.replace('%answer%', answerText).replace('%number%', answerNumber)
		listContainer.innerHTML += answerHTML;
		answerNumber++;
	}
}

function checkAnswer(){
		const checkedRadio = listContainer.querySelector('input:checked')
		if(!checkedRadio){ //if nie choose odpowiedz
			submitBtn.blur();
			return
		}
		const userAnswer = parseInt(checkedRadio.value)
		if(userAnswer === questions[questionIndex]['correct']){
			score++;
		}
		if(questionIndex !== questions.length - 1){
			questionIndex++;
			clearPage();
			showQuestion();
			return;
		} else {
			clearPage();
			showResults();
		}
}

function showResults(){
	const resultsTemplate =
	`<h2 class="title">%title%</h2>
	<h3 class="summary">%message%</h3>
	<p class="result">%result%</p>`;
	let title, message;
	if(score === questions.length){
		title = "Gratulacje!";
		message = "Odpowiedział na all questions!";
	} else{
		title = "It's okey";
		message = "Try again!";
	}
	let result = `${score} из ${questions.length}`;
	const finalMessage = resultsTemplate
	                    .replace('%title%',title)
						.replace('%message%',message)
						.replace('%result%',result)
    headerContainer.innerHTML = finalMessage;
	submitBtn.blur();
	submit.innerText = 'Try again';
	submitBtn.onclick = ()=> history.go();
}
