const quizData = [
	{
	  question: 'Apa yang dimaksud dengan Sejarah?',
	  options: {
		a: 'Cerita-cerita kuno',
		b: 'Catatan kehidupan manusia pada masa lalu',
		c: 'Cerita fiksi',
		d: 'Rekaman kejadian masa depan',
	  },
	  correct: 'b',
	},
	{
	  question: 'Siapa yang dianggap sebagai Bapak Sejarah?',
	  options: {
		a: 'Sultan Hasanuddin',
		b: 'Bung Karno',
		c: 'Herodotus',
		d: 'Simone de Beauvoir',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang dimaksud dengan arkeologi?',
	  options: {
		a: 'Ilmu tentang peradaban',
		b: 'Ilmu yang mempelajari benda-benda purbakala',
		c: 'Ilmu hitungan matematika',
		d: 'Ilmu yang mempelajari kebudayaan modern',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa peran sejarah dalam kehidupan sehari-hari?',
	  options: {
		a: 'Menghibur',
		b: 'Memberikan informasi tentang kehidupan manusia pada masa lalu',
		c: 'Menciptakan cerita fiksi',
		d: 'Menunjukkan ramalan masa depan',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa yang dimaksud dengan peradaban?',
	  options: {
		a: 'Kehidupan modern',
		b: 'Keadaan sebuah masyarakat yang tinggi',
		c: 'Kondisi masyarakat yang masih primitif',
		d: 'Paham kepercayaan pada suatu agama',
	  },
	  correct: 'b',
	},
	{
	  question: 'Kapankah periode Zaman Batu berakhir?',
	  options: {
		a: '3000 SM',
		b: '1000 SM',
		c: '500 SM',
		d: '0 Masehi',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa yang dimaksud dengan Zaman Logam?',
	  options: {
		a: 'Masa ketika manusia hidup di gua-gua',
		b: 'Masa penggunaan logam sebagai perkakas dan senjata',
		c: 'Masa saat manusia belum mengenal logam',
		d: 'Masa modern',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apakah yang menjadi ciri-ciri masyarakat Mesir Kuno?',
	  options: {
		a: 'Pertanian dan peternakan',
		b: 'Pembangunan piramida',
		c: 'Penggunaan roda',
		d: 'Transportasi laut yang maju',
	  },
	  correct: 'b',
	},
	{
	  question: 'Siapa tokoh terkenal dari Kekaisaran Romawi?',
	  options: {
		a: 'Sultan Agung',
		b: 'Julius Caesar',
		c: 'Sunan Kalijaga',
		d: 'Gajah Mada',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa yang menjadi penyebab berdirinya Dinasti Ming di Tiongkok?',
	  options: {
		a: 'Perang Dunia I',
		b: 'Pembangunan Tembok Besar Tiongkok',
		c: 'Pemberontakan petani',
		d: 'Pembangunan Armada',
	  },
	  correct: 'c',
	},
	{
	  question: 'Siapa penemu mesin cetak?',
	  options: {
		a: 'James Watt',
		b: 'Gutenberg',
		c: 'Thomas Edison',
		d: 'Alexander Graham Bell',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa yang menjadi akibat dari Revolusi Industri?',
	  options: {
		a: 'Peningkatan produksi dan perkembangan industri',
		b: 'Penggunaan batu sebagai alat produksi',
		c: 'Pembangunan kota-kota modern',
		d: 'Penggunaan mesin hitung',
	  },
	  correct: 'a',
	},
	{
	  question: 'Apakah yang menjadi ciri utama Perang Dunia I?',
	  options: {
		a: 'Pertempuran laut yang besar',
		b: 'Pemboman kota-kota besar',
		c: 'Pertempuran di medan perang terbuka',
		d: 'Pertempuran menggunakan senjata biologis',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang menjadi akibat dari Perang Dunia II?',
	  options: {
		a: 'Pembentukan Liga Bangsa-Bangsa',
		b: 'Pembentukan Perserikatan Bangsa-Bangsa (PBB)',
		c: 'Munculnya Kekuatan Poros',
		d: 'Pembagian Jerman menjadi dua',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa yang dimaksud dengan Perjanjian Bretton Woods?',
	  options: {
		a: 'Perjanjian perdagangan dunia',
		b: 'Perjanjian perdamaian setelah Perang Dunia II',
		c: 'Perjanjian pembentukan PBB',
		d: 'Perjanjian ekonomi internasional',
	  },
	  correct: 'd',
	},
	{
	  question: 'Apa yang menjadi ciri Perang Dingin?',
	  options: {
		a: 'Pertempuran terbuka antara negara-negara besar',
		b: 'Tidak ada perang yang terjadi',
		c: 'Persaingan antara Blok Barat dan Blok Timur',
		d: 'Pertempuran menggunakan senjata nuklir',
	  },
	  correct: 'c',
	},
	{
	  question: 'Kapan terjadinya Revolusi Prancis?',
	  options: {
		a: '1789',
		b: '1815',
		c: '1830',
		d: '1848',
	  },
	  correct: 'a',
	},
	{
	  question: 'Apa yang dimaksud dengan Traktat Versailles?',
	  options: {
		a: 'Perjanjian perdamaian setelah Perang Dunia II',
		b: 'Perjanjian yang mengakhiri Perang Seratus Tahun',
		c: 'Perjanjian pembentukan PBB',
		d: 'Perjanjian perdamaian setelah Perang Dunia I',
	  },
	  correct: 'd',
	},
	{
	  question: 'Apa yang menjadi penyebab runtuhnya Uni Soviet?',
	  options: {
		a: 'Invasi ke Afghanistan',
		b: 'Tekanan ekonomi',
		c: 'Glasnost dan Perestroika',
		d: 'Pemberontakan di Estonia',
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