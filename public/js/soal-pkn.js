const quizData = [
	{
	  question: 'Apa singkatan dari PKN?',
	  options: {
		a: 'Pendidikan Kewarganegaraan',
		b: 'Pendidikan Keuangan Negara',
		c: 'Pendidikan Kesejahteraan Nasional',
		d: 'Pendidikan Kependudukan Nusantara',
	  },
	  correct: 'a',
	},
	{
	  question: 'Siapa yang menjadi presiden Indonesia pertama?',
	  options: {
		a: 'Soeharto',
		b: 'Ir. Soekarno',
		c: 'Susilo Bambang Yudhoyono',
		d: 'Joko Widodo',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa lambang dari Pancasila yang kedua?',
	  options: {
		a: 'Ketuhanan Yang Maha Esa',
		b: 'Kemanusiaan yang Adil dan Beradab',
		c: 'Persatuan Indonesia',
		d: 'Keadilan Sosial bagi seluruh Rakyat Indonesia',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apakah Bendera Merah Putih?',
	  options: {
		a: 'Merah dan Hijau',
		b: 'Merah dan Putih',
		c: 'Biru dan Putih',
		d: 'Hitam dan Merah',
	  },
	  correct: 'b',
	},
	{
	  question: 'Berapakah jumlah provinsi di Indonesia saat ini?',
	  options: {
		a: '30',
		b: '32',
		c: '34',
		d: '36',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang menjadi dasar hukum bagi negara Indonesia?',
	  options: {
		a: 'Undang-Undang Dasar Negara Republik Indonesia',
		b: 'Undang-Undang Kewarganegaraan',
		c: 'Kitab Undang-Undang Hukum Pidana',
		d: 'Peraturan Pemerintah',
	  },
	  correct: 'a',
	},
	{
	  question: 'Siapa yang bertanggung jawab atas keamanan dan pertahanan negara?',
	  options: {
		a: 'Kepala Kepolisian',
		b: 'Menteri Pertahanan',
		c: 'Presiden',
		d: 'Menteri Dalam Negeri',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang dimaksud dengan negara demokrasi?',
	  options: {
		a: 'Negara yang dipimpin oleh seorang diktator',
		b: 'Negara yang dipimpin oleh seorang raja',
		c: 'Negara yang kepala negaranya dipilih oleh rakyat',
		d: 'Negara yang dipimpin oleh seorang presiden seumur hidup',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang dimaksud dengan gotong royong?',
	  options: {
		a: 'Sikap saling membantu dan bekerja sama',
		b: 'Konflik dan pertikaian antar individu',
		c: 'Tindakan saling bersaing untuk mencapai tujuan',
		d: 'Sikap acuh tak acuh terhadap sesama',
	  },
	  correct: 'a',
	},
	{
	  question: 'Siapa yang menjadi kepala pemerintahan di tingkat kabupaten/kota?',
	  options: {
		a: 'Gubernur',
		b: 'Presiden',
		c: 'Walikota/Bupati',
		d: 'Camat',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apakah lambang dari Garuda Pancasila?',
	  options: {
		a: 'Burung Elang',
		b: 'Harimau',
		c: 'Kuda',
		d: 'Singa',
	  },
	  correct: 'a',
	},
	{
	  question: 'Apa yang dimaksud dengan hak asasi manusia (HAM)?',
	  options: {
		a: 'Hak milik negara',
		b: 'Hak-hak yang dimiliki oleh setiap manusia',
		c: 'Hak milik pribadi',
		d: 'Hak milik kelompok tertentu',
	  },
	  correct: 'b',
	},
	{
	  question: 'Apa tujuan dari pembentukan Negara Kesatuan Republik Indonesia (NKRI)?',
	  options: {
		a: 'Mewujudkan keadilan sosial bagi seluruh rakyat Indonesia',
		b: 'Mewujudkan kedaulatan rakyat',
		c: 'Mewujudkan kekuatan ekonomi negara',
		d: 'Mewujudkan persatuan dan kesatuan bangsa Indonesia',
	  },
	  correct: 'd',
	},
	{
	  question: 'Bagaimana cara kita menjaga kelestarian lingkungan hidup?',
	  options: {
		a: 'Membuang sampah sembarangan',
		b: 'Menggunakan bahan-bahan kimia berbahaya',
		c: 'Menanam pohon dan mengurangi penggunaan plastik',
		d: 'Menggunduli hutan untuk kepentingan bisnis',
	  },
	  correct: 'c',
	},
	{
	  question: 'Apa yang dimaksud dengan pelestarian budaya?',
	  options: {
		a: 'Upaya menjaga kelestarian lingkungan hidup',
		b: 'Upaya melestarikan kearifan lokal dan tradisi budaya',
		c: 'Upaya menjaga kelestarian tumbuhan dan hewan',
		d: 'Upaya menjaga kelestarian sejarah dunia',
	  },
	  correct: 'b',
	},
	{
	  question: 'Siapa yang menjadi wakil rakyat di tingkat desa/kelurahan?',
	  options: {
		a: 'Anggota DPR',
		b: 'Camat',
		c: 'Lurah/Kepala Desa',
		d: 'Anggota DPRD',
	  },
	  correct: 'd',
	},
	{
	  question: 'Apa yang dimaksud dengan toleransi?',
	  options: {
		a: 'Sikap saling menghargai dan menerima perbedaan',
		b: 'Sikap acuh tak acuh terhadap sesama',
		c: 'Sikap mengekang kebebasan individu',
		d: 'Sikap memaksakan kehendak kepada orang lain',
	  },
	  correct: 'a',
	},
	{
	  question: 'Bagaimana kita bisa berperan aktif dalam pembangunan negara?',
	  options: {
		a: 'Dengan menentang dan mengkritik pemerintah',
		b: 'Dengan menjalankan tugas dan tanggung jawab masing-masing',
		c: 'Dengan menghindari keterlibatan dalam urusan negara',
		d: 'Dengan menuntut hak tanpa kewajiban',
	  },
	  correct: 'b',
	},
	{
	  question: 'Siapakah pahlawan nasional yang memimpin pergerakan kemerdekaan Indonesia?',
	  options: {
		a: 'Raden Ajeng Kartini',
		b: 'Soekarno',
		c: 'Mohammad Hatta',
		d: 'Dewi Sartika',
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