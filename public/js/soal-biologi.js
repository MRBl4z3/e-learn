const quizData = [
	{
	  question: 'Apa yang dimaksud dengan biologi?',
	  options: {
		a: 'Ilmu tentang bumi',
		b: 'Ilmu tentang kehidupan',
		c: 'Ilmu tentang hewan',
		d: 'Ilmu tentang manusia',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa yang menjadi ciri-ciri makhluk hidup?',
	  options: {
		a: 'Bisa bergerak',
		b: 'Bisa bernafas',
		c: 'Bisa merasakan rangsangan',
		d: 'Bisa tumbuh dan berkembang',
	  },
	  correct: 'd',
	},
	{
	  question: 'Apakah virus termasuk makhluk hidup?',
	  options: {
		a: 'Ya',
		b: 'Tidak',
		c: 'Bergantung pada jenis virus',
		d: 'Hanya yang bermanfaat bagi manusia',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa fungsi organel sel ribosom?',
	  options: {
		a: 'Tempat penyimpanan zat',
		b: 'Tempat pembuatan energi',
		c: 'Tempat sintesis protein',
		d: 'Tempat pembuatan enzim',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apakah fungsi jantung pada manusia?',
	  options: {
		a: 'Pencernaan makanan',
		b: 'Pembuangan limbah',
		c: 'Peredaran darah',
		d: 'Pernapasan',
	  },
	  correct: 'c',
	},
	{
	  question: 'Bagaimana proses fotosintesis pada tumbuhan?',
	  options: {
		a: 'Pengeluaran oksigen',
		b: 'Pengeluaran karbon dioksida',
		c: 'Penyerapan oksigen',
		d: 'Penyerapan karbon dioksida',
	  },
	  correct: 'a',
	},
	{
	  question: 'Apa yang dimaksud dengan rantai makanan?',
	  options: {
		a: 'Urutan berjalannya waktu',
		b: 'Alat bantu makan',
		c: 'Urutan pemakan dan yang dimakan dalam ekosistem',
		d: 'Jalur transportasi makanan',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang dimaksud dengan regenerasi pada hewan?',
	  options: {
		a: 'Proses pernapasan',
		b: 'Proses pembentukan embrio',
		c: 'Proses regenerasi sel yang rusak',
		d: 'Proses pertumbuhan tubuh',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang dimaksud dengan reproduksi aseksual?',
	  options: {
		a: 'Reproduksi melibatkan dua individu',
		b: 'Reproduksi tanpa melibatkan sel kelamin',
		c: 'Reproduksi hanya pada tumbuhan',
		d: 'Reproduksi dengan melibatkan sel kelamin',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apakah fungsi ginjal dalam tubuh manusia?',
	  options: {
		a: 'Pencernaan',
		b: 'Pengeluaran hormon',
		c: 'Pembuangan limbah metabolisme',
		d: 'Pertumbuhan tulang',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang dimaksud dengan ekosistem?',
	  options: {
		a: 'Lingkungan yang tercemar',
		b: 'Komunitas makhluk hidup dalam suatu wilayah',
		c: 'Pusat penelitian biologi',
		d: 'Pertanian organik',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa yang dimaksud dengan klorofil pada tumbuhan?',
	  options: {
		a: 'Pigmen yang memberikan warna pada daun',
		b: 'Zat yang menyebabkan pertumbuhan batang',
		c: 'Zat yang menyerap air',
		d: 'Zat penyusun sel tubuh tumbuhan',
	  },
	  correct: 'a',
	},
	{
	  question: 'Apa peran mitokondria dalam sel?',
	  options: {
		a: 'Tempat penyimpanan zat',
		b: 'Tempat pembuatan energi',
		c: 'Tempat sintesis protein',
		d: 'Tempat pembuatan enzim',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa yang dimaksud dengan polusi udara?',
	  options: {
		a: 'Pencemaran air',
		b: 'Pencemaran tanah',
		c: 'Pencemaran udara oleh zat berbahaya',
		d: 'Pencemaran suara',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang menjadi ciri-ciri makhluk hidup?',
	  options: {
		a: 'Bisa bergerak',
		b: 'Bisa bernafas',
		c: 'Bisa merasakan rangsangan',
		d: 'Bisa tumbuh dan berkembang',
	  },
	  correct: 'd',
	},
	{
	  question: 'Apakah semua tumbuhan memiliki bunga?',
	  options: {
		a: 'Ya',
		b: 'Tidak',
		c: 'Hanya tumbuhan tertentu',
		d: 'Hanya tumbuhan di daerah tropis',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang dimaksud dengan habitat?',
	  options: {
		a: 'Tempat tinggal dan mencari makan',
		b: 'Pusat kegiatan manusia',
		c: 'Lingkungan alami makhluk hidup',
		d: 'Tempat pembuangan sampah',
	  },
	  correct: 'a',
	},
	{
	  question: 'Apa yang dimaksud dengan hibernasi pada hewan?',
	  options: {
		a: 'Proses pernapasan',
		b: 'Proses pertahanan diri',
		c: 'Proses istirahat panjang pada musim dingin',
		d: 'Proses regenerasi sel',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apakah virus dapat dianggap sebagai makhluk hidup?',
	  options: {
		a: 'Ya',
		b: 'Tidak',
		c: 'Bergantung pada jenis virus',
		d: 'Hanya virus tertentu',
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