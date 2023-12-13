const quizData = [
	{
	  question: 'Berapakah hasil dari 8 + 5?',
	  options: {
		a: '10',
		b: '11',
		c: '13',
		d: '15',
	  },
	  correct: 'd',
	},
	{
	  question: 'Jika panjang sisi sebuah persegi adalah 6 cm, berapakah luasnya?',
	  options: {
		a: '24 cm²',
		b: '30 cm²',
		c: '36 cm²',
		d: '42 cm²',
	  },
	  correct: 'c',
	},
	{
	  question: 'Jika sebuah lingkaran memiliki jari-jari sepanjang 7 cm, berapakah kelilingnya? (Gunakan π = 3.14)',
	  options: {
		a: '14 cm',
		b: '22 cm',
		c: '44 cm',
		d: '154 cm',
	  },
	  correct: 'b',
	},
	{
	  question: 'Jika sebuah segitiga sama sisi memiliki panjang sisi 9 cm, berapakah kelilingnya?',
	  options: {
		a: '18 cm',
		b: '21 cm',
		c: '24 cm',
		d: '27 cm',
	  },
	  correct: 'c',
	},
	{
	  question: 'Sebuah tabung memiliki tinggi 12 cm dan jari-jari 4 cm. Berapakah volume tabung tersebut? (Gunakan π = 3.14)',
	  options: {
		a: '192 cm³',
		b: '256 cm³',
		c: '384 cm³',
		d: '512 cm³',
	  },
	  correct: 'a',
	},
	{
	  question: 'Jika panjang alas trapesium adalah 10 cm, tinggi trapesium adalah 6 cm, dan panjang sisi sejajar adalah 8 cm, berapakah luasnya?',
	  options: {
		a: '36 cm²',
		b: '42 cm²',
		c: '48 cm²',
		d: '54 cm²',
	  },
	  correct: 'b',
	},
	{
	  question: 'Berapakah hasil dari 15 - 9?',
	  options: {
		a: '4',
		b: '6',
		c: '9',
		d: '15',
	  },
	  correct: 'b',
	},
	{
	  question: 'Jika sebuah kubus memiliki panjang sisi 5 cm, berapakah luas permukaannya?',
	  options: {
		a: '25 cm²',
		b: '100 cm²',
		c: '125 cm²',
		d: '150 cm²',
	  },
	  correct: 'b',
	},
	{
	  question: 'Jika sebuah segitiga siku-siku memiliki panjang sisi-sisi pendek 3 cm dan 4 cm, berapakah panjang sisi miringnya?',
	  options: {
		a: '5 cm',
		b: '7 cm',
		c: '9 cm',
		d: '12 cm',
	  },
	  correct: 'a',
	},
	{
	  question: 'Jika sebuah balok memiliki panjang 8 cm, lebar 4 cm, dan tinggi 6 cm, berapakah volume balok tersebut?',
	  options: {
		a: '96 cm³',
		b: '144 cm³',
		c: '192 cm³',
		d: '288 cm³',
	  },
	  correct: 'c',
	},
	{
	  question: 'Sebuah jajaran genjang memiliki panjang alas 10 cm dan tinggi 7 cm. Berapakah luasnya?',
	  options: {
		a: '35 cm²',
		b: '45 cm²',
		c: '70 cm²',
		d: '90 cm²',
	  },
	  correct: 'a',
	},
	{
	  question: 'Berapakah hasil dari 6 × 9?',
	  options: {
		a: '42',
		b: '48',
		c: '54',
		d: '72',
	  },
	  correct: 'c',
	},
	{
	  question: 'Jika sebuah silinder memiliki tinggi 15 cm dan jari-jari 6 cm, berapakah luas permukaannya? (Gunakan π = 3.14)',
	  options: {
		a: '282.6 cm²',
		b: '360 cm²',
		c: '452.4 cm²',
		d: '565.2 cm²',
	  },
	  correct: 'a',
	},
	{
	  question: 'Jika sebuah trapesium memiliki panjang dua sisi sejajar 12 cm dan 8 cm, tinggi trapesium 5 cm. Berapakah luasnya?',
	  options: {
		a: '40 cm²',
		b: '48 cm²',
		c: '60 cm²',
		d: '72 cm²',
	  },
	  correct: 'b',
	},
	{
	  question: 'Berapakah hasil dari 25 ÷ 5?',
	  options: {
		a: '3',
		b: '4',
		c: '5',
		d: '6',
	  },
	  correct: 'c',
	},
	{
	  question: 'Jika sebuah persegi panjang memiliki panjang 14 cm dan lebar 6 cm, berapakah kelilingnya?',
	  options: {
		a: '20 cm',
		b: '32 cm',
		c: '36 cm',
		d: '40 cm',
	  },
	  correct: 'b',
	},
	{
	  question: 'Jika sebuah lingkaran memiliki diameter sepanjang 10 cm, berapakah kelilingnya? (Gunakan π = 3.14)',
	  options: {
		a: '10 cm',
		b: '15.7 cm',
		c: '31.4 cm',
		d: '62.8 cm',
	  },
	  correct: 'c',
	},
	{
	  question: 'Jika sebuah segitiga sama kaki memiliki panjang sisi kaki 6 cm, berapakah panjang sisi miringnya?',
	  options: {
		a: '6 cm',
		b: '7 cm',
		c: '8 cm',
		d: '9 cm',
	  },
	  correct: 'c',
	},
	{
	  question: 'Jika panjang sisi sebuah kubus adalah 7 cm, berapakah volume kubus tersebut?',
	  options: {
		a: '49 cm³',
		b: '98 cm³',
		c: '147 cm³',
		d: '196 cm³',
	  },
	  correct: 'a',
	},
	{
	  question: 'Sebuah trapesium siku-siku memiliki panjang alas 9 cm, tinggi trapesium 5 cm, dan panjang sisi sejajar 7 cm. Berapakah luasnya?',
	  options: {
		a: '28 cm²',
		b: '35 cm²',
		c: '45 cm²',
		d: '63 cm²',
	  },
	  correct: 'c',
	},
	{
	  question: 'Jika panjang sisi sebuah persegi panjang adalah 15 cm dan lebar 8 cm, berapakah luasnya?',
	  options: {
		a: '80 cm²',
		b: '112 cm²',
		c: '120 cm²',
		d: '240 cm²',
	  },
	  correct: 'b',
	},
  ];
  
  const questionEl = document.getElementById('question');
  const quizEl = document.getElementById('quiz');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  const answersEls = document.querySelectorAll('.answer');
  let currentQuiz = 0;
  let score = 0;
  loadQuiz();
  
  function loadQuiz() {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];
	questionEl.innerHTML = currentQuizData.question;
	a_text.innerHTML = currentQuizData.options.a;
	b_text.innerHTML = currentQuizData.options.b;
	c_text.innerHTML = currentQuizData.options.c;
	d_text.innerHTML = currentQuizData.options.d;
  }
  
  function getSelected() {
	let answer = undefined;
	answersEls.forEach((answerEl) => {
	  if (answerEl.checked) {
		answer = answerEl.id;
	  }
	});
  
	return answer;
  }
  
  function deselectAnswers() {
	answersEls.forEach((answerEl) => {
	  answerEl.checked = false;
	});
  }
  
  submitBtn.addEventListener('click', () => {
	const answer = getSelected();
	if (answer) {
	  if (answer == quizData[currentQuiz].correct) {
		score++;
	  }
	  currentQuiz++;
	  currentQuiz < quizData.length
		? loadQuiz()
		: (quizEl.innerHTML =
			"<h2>Your Score " +
			score +
			'/' +
			quizData.length +
			' Question.</h2><button onclick=\'location.reload()\'>Reload</button>');
	}
  });