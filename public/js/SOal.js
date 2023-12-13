console.log("tesrajwrawidw")

const quizData = [
	{
	  question: 'Najwa: Good afternoon, Nayla\n\nNayla: …',
	  options: {
		a: 'Hi',
		b: 'Good afternoon, Najwa',
		c: 'I am fine',
		d: 'Thank you',
	  },
	  correct: 'b',
	},
	{
	  question: 'Arrange the words!\n\nIs - name - Reza - my',
	  options: {
		a: 'Reza is my name',
		b: 'Is my name Reza',
		c: 'Name my Reza is',
		d: 'My name is Reza',
	  },
	  correct: 'd',
	},
	{
	  question: 'Zeni: how are you?\n\nDaffa: …',
	  options: {
		a: 'How are you',
		b: "I'm fine",
		c: 'Thank you',
		d: 'Nice to meet you',
	  },
	  correct: 'b',
	},
	{
	  question: 'I will go to sleep and say…',
	  options: {
		a: 'Good morning',
		b: 'Good afternoon',
		c: 'Good night',
		d: 'Good bye',
	  },
	  correct: 'c',
	},
	{
	  question: 'Izla: thank you\n\nBilly: …',
	  options: {
		a: "I'm fine",
		b: 'Goodbye',
		c: "You're welcome",
		d: 'See you',
	  },
	  correct: 'c',
	},
	{
	  question: 'My sister is… She always helps me.',
	  options: {
		a: 'Kind',
		b: 'Cruel',
		c: 'Fat',
		d: 'Bad',
	  },
	  correct: 'a',
	},
	{
	  question: 'Ilma always tells the truth. She is an… girl',
	  options: {
		a: 'Honest',
		b: 'Young',
		c: 'Pretty',
		d: 'Old',
	  },
	  correct: 'a',
	},
	{
	  question: 'How do you go to Japan?',
	  options: {
		a: 'By a bus',
		b: 'By a plane',
		c: 'By a train',
		d: 'By a car',
	  },
	  correct: 'b',
	},
	{
	  question: "My grandpa's hobby is… newspaper",
	  options: {
		a: 'Like',
		b: 'Making',
		c: 'Helping',
		d: 'Reading',
	  },
	  correct: 'd',
	},
	{
	  question: 'Can you close the… , it feels so cold',
	  options: {
		a: 'Library',
		b: 'Book',
		c: 'Window',
		d: 'Clock',
	  },
	  correct: 'c',
	},
	{
	  question: 'Carrot, cucumber, and potato are kind of…',
	  options: {
		a: 'Fruits',
		b: 'Candies',
		c: 'Animals',
		d: 'Vegetables',
	  },
	  correct: 'd',
	},
	{
	  question: 'Rayhand: when did you make this beautiful picture?\n\nAlfa: I… it last night.',
	  options: {
		a: 'Took',
		b: 'Ran',
		c: 'Made',
		d: 'Wrote',
	  },
	  correct: 'c',
	},
	{
	  question: "My dad has a mother. She is my…",
	  options: {
		a: 'Uncle',
		b: 'Grandmother',
		c: 'Grandfather',
		d: 'Cousin',
	  },
	  correct: 'b',
	},
	{
	  question: 'An elephant is a big animal. Antonym of big is…',
	  options: {
		a: 'Small',
		b: 'Fat',
		c: 'Smell',
		d: 'Thin',
	  },
	  correct: 'a',
	},
	{
	  question: 'Lin Lin: Do you like watermelon?\n\nRidho: No, I don\'t like it\n\nThe words mean…',
	  options: {
		a: 'Like',
		b: 'Dislike',
		c: 'Need',
		d: 'Want',
	  },
	  correct: 'b',
	},
	{
	  question: 'There are many… in the road',
	  options: {
		a: 'Stars',
		b: 'Vehicles',
		c: 'Animals',
		d: 'Water',
	  },
	  correct: 'b',
	},
	{
	  question: 'I … to school every day',
	  options: {
		a: 'Go',
		b: 'Goes',
		c: 'Went',
		d: 'Going',
	  },
	  correct: 'a',
	},
	{
	  question: "Farel is lazy, he never… his bedroom",
	  options: {
		a: 'Clean',
		b: 'Play',
		c: 'Take',
		d: 'Ask',
	  },
	  correct: 'a',
	},
	{
	  question: 'I… up at 06.00 AM every morning',
	  options: {
		a: 'Run',
		b: 'Wake',
		c: 'Sleep',
		d: 'Walk',
	  },
	  correct: 'b',
	},
	{
	  question: 'Ratu works at the library. She always helps people for looking some books. She is…',
	  options: {
		a: 'Postman',
		b: 'Nurse',
		c: 'Librarian',
		d: 'Police woman',
	  },
	  correct: 'c',
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