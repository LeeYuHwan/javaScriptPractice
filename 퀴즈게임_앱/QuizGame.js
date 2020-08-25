function Question(text, choice, answer){
	this.text = text;
	this.choice = choice;
	this.answer = answer;
}

function Quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.correctAnswer = function(answer){
	return answer == this.questions[this.questionIndex].answer;
}

var questions = [
	new Question('다음 중 메이플 몬스터가 아닌것은?', ['주황버섯', '슬라임', '예티', '저글링'], '저글링'),
	new Question('웹 문서에서 스타일을 작성하는 언어는?', ['HTML', 'JAVA', 'CSS', 'C++'], 'CSS'),
	new Question('스타크래프트에서 인간으로 이루어진 종족은?',['테란','저그','프로토스','오크'], '테란'),
	new Question('이딴걸 만든 인간의 이름은?',['이유환','이진우','전성만','정민수'], '이유환')
];

var quiz = new Quiz(questions);

function update_quiz(){
	var question = document.getElementById('question');
	var idx = quiz.questionIndex + 1;
	var choice = document.querySelectorAll('.btn');

	question.innerHTML = '문제' + idx + ') ' + quiz.questions[quiz.questionIndex].text;

	for(var i = 0; i < 4; i++){
		choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
	}

	progress();
}

var btn = document.querySelectorAll('.btn');

function progress(){
	var progress = document.getElementById('progress');
	progress.innerHTML = '문제' + (quiz.questionIndex + 1) + ' / ' + quiz.questions.length;
}

function result(){
	var quiz_div = document.getElementById('quiz');
	var per = parseInt((quiz.score*100) / quiz.questions.length);

	var txt = '<h1>결과</h1> <h2 id="score"> 당신의 점수: '+ quiz.score + '/' +  quiz.questions.length + '<br><br>' + per +'점</h2>';

	quiz_div.innerHTML = txt;

	if(per < 60){
		txt += '<h2 style="color:red">더 분발하세요</h2>';
		quiz_div.innerHTML = txt;
	}
	else if(per >= 60 && per < 80){
		txt += '<h2 style="color:red">무난한 점수네요</h2>';
		quiz_div.innerHTML = txt;
	}
	else if(per >= 80){
		txt += '<h2 style="color:red">훌륭합니다.</h2>';
		quiz_div.innerHTML = txt;
	}
}

function checkAnswer(i){
	btn[i].addEventListener('click', function(){
		var answer = btn[i].innerText;

		if(quiz.correctAnswer(answer)){
			alert('정답입니다.');
			quiz.score++;
		}
		else{
			alert('틀렸습니다.');
		}

		if(quiz.questionIndex < quiz.questions.length - 1){
			quiz.questionIndex++;
			update_quiz();
		}
		else{
			result();
		}
	});
}

for(var i = 0; i < btn.length; i++){
	checkAnswer(i);
}

update_quiz();
