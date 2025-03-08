// Add at the beginning of the script

document.addEventListener("DOMContentLoaded", function() {
  particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#00ff9d' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
  });
  
  // Add GSAP animation
  gsap.to(".quiz-container", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power4.out"
  });
  
  const questions = [
    {
      question: "Andi sedang mengerjakan proyek membuat aplikasi pemantau banjir Jakarta. Menurutmu, apa itu Computational Thinking dalam konteks ini?",
      answers: [
        { 
          text: "Cara main game PUBG biar jago", 
          correct: false,
          feedback: "Salah! Meskipun gaming butuh strategi, ini bukan hubungannya langsung dengan CT" 
        },
        { 
          text: "Metode pemecahan masalah dengan analisis logis dan langkah sistematis", 
          correct: true,
          feedback: "Benar! CT membantu Andi memecah masalah kompleks menjadi bagian yang bisa diatasi"
        },
        { 
          text: "Teknik merakit komputer gaming", 
          correct: false,
          feedback: "Hampir terkecoh? CT lebih tentang cara berpikir daripada perangkat fisik" 
        },
        { 
          text: "Cara menghafal syntax programming", 
          correct: false,
          feedback: "Bukan sekedar hafalan, tapi proses berpikir sistematis" 
        }
      ],
      explanation: "Computational Thinking adalah kerangka berpikir yang meliputi:<br>1. Memecah masalah kompleks (dekomposisi)<br>2. Mengenali pola data banjir (pattern recognition)<br>3. Menyusun algoritma prediksi<br>4. Mengabaikan data tidak relevan (abstraksi)<br>Contoh: Andi bisa analisis pola curah hujan, debit sungai, dan sejarah banjir daerah tertentu"
    },
    {
      question: "Rina mau buka usaha bakso Malang. Manakah contoh Dekomposisi yang tepat?",
      answers: [
        { 
          text: "Memecah persiapan usaha jadi: resep, modal, lokasi, dan promosi", 
          correct: true,
          feedback: "Tepat! Ini membagi masalah besar jadi bagian-bagian kecil" 
        },
        { 
          text: "Buka gerai tanpa riset pasar", 
          correct: false,
          feedback: "Ini malah contoh tidak melakukan perencanaan sama sekali" 
        },
        { 
          text: "Fokus hanya pada jenis sambal saja", 
          correct: false,
          feedback: "Ini contoh abstraksi, bukan dekomposisi" 
        },
        { 
          text: "Membuat 50 varian rasa sekaligus", 
          correct: false,
          feedback: "Ini justru overkompleks tanpa perencanaan" 
        }
      ],
      explanation: "Dekomposisi dalam bisnis bakso:<br>- Bahan baku: Analisis supplier daging terbaik<br>- Operasional: Pembagian tugas karyawan<br>- Keuangan: Pisahkan biaya produksi dan marketing<br>- Pemasaran: Bedakan strategi online/offline<br>Dengan breakdown ini, Rina bisa fokus tiap aspek secara detail"
    },
    {
      question: "Apa yang dilakukan Abstraksi saat kamu merencanakan liburan ke Jogja?",
      answers: [
        { 
          text: "Fokus pada budget utama & destinasi wajib, abaikan hotel bintang 5", 
          correct: true,
          feedback: "Yes! Abstraksi membantu filter info penting" 
        },
        { 
          text: "Catat semua detail sampai merk kamera yang dipakai", 
          correct: false,
          feedback: "Ini malah over-detail, bukan abstraksi" 
        },
        { 
          text: "Tidak peduli budget sama sekali", 
          correct: false,
          feedback: "Justru abstraksi perlu memperhatikan constraint penting" 
        },
        { 
          text: "Putuskan saat sudah di lokasi", 
          correct: false,
          feedback: "Ini improvisasi, bukan perencanaan" 
        }
      ],
      explanation: "Contoh abstraksi liburan Jogja:<br>- Fokus utama: Transportasi, penginapan murah, kuliner<br>- Abaikan: Hotel mewah, tur premium<br>- Prioritas: Candi Borobudur & Malioboro<br>- Abstrak dari: Detail menu restoran tertentu<br>Dengan ini, perencanaan jadi lebih efisien"
    },
    {
      question: "Apa contoh Pattern Recognition saat menjadi reseller skincare?",
      answers: [
        { 
          text: "Analisis bahwa produk ceramide laris saat musim kemarau", 
          correct: true,
          feedback: "Tepat! Ini menemukan pola dari data penjualan" 
        },
        { 
          text: "Stok produk random tanpa pertimbangan", 
          correct: false,
          feedback: "Ini kebalikan dari pattern recognition" 
        },
        { 
          text: "Jual semua produk dengan harga sama", 
          correct: false,
          feedback: "Tidak ada analisis pola harga vs permintaan" 
        },
        { 
          text: "Ikutin tren tanpa data", 
          correct: false,
          feedback: "Ini ikut-ikutan, bukan analisis pola" 
        }
      ],
      explanation: "Pattern recognition di bisnis skincare:<br>- Pola musiman: Sunscreen naik saat liburan<br>- Pola demografi: Produk anti-aging laris di usia 30+<br>- Pola wilayah: Masyarakat kota lebih suka packaging praktis<br>- Pola harga: Diskon 30% di akhir bulan meningkatkan konversi"
    },
    {
      question: "Budi mau membuat algoritma untuk menghitung zakat mal. Manakah yang tepat?",
      answers: [
        { 
          text: "1. Hitung total harta<br>2. Kurangi hutang<br>3. Jika mencapai nisab, kalikan 2.5%", 
          correct: true,
          feedback: "Langkah sistematis dan jelas!" 
        },
        { 
          text: "Tanya ke tetangga saja", 
          correct: false,
          feedback: "Ini bukan algoritma tapi trial error" 
        },
        { 
          text: "Pakai feeling saja", 
          correct: false,
          feedback: "Algoritma harus terukur dan logis" 
        },
        { 
          text: "Transfer random ke lembaga mana saja", 
          correct: false,
          feedback: "Tidak ada proses perhitungan valid" 
        }
      ],
      explanation: "Algoritma zakat yang baik meliputi:<br>1. Definisikan jenis harta (emas, uang, hasil pertanian)<br>2. Hitung periode kepemilikan (1 tahun qamariyah)<br>3. Tentukan nisab (85gr emas)<br>4. Hitung zakat = (Total harta - hutang) × 2.5%<br>5. Salurkan ke mustahiq"
    },
    {
      question: "Mana strategi CT yang baik untuk mengatur waktu ujian?",
      answers: [
        { 
          text: "Buat jadwal belajar per mata pelajaran + waktu istirahat", 
          correct: true,
          feedback: "Kombinasi dekomposisi dan algoritma!" 
        },
        { 
          text: "SKS (Sistem Kebut Semalam)", 
          correct: false,
          feedback: "Ini contoh buruk tanpa perencanaan" 
        },
        { 
          text: "Fokus pada 1 pelajaran saja", 
          correct: false,
          feedback: "Tidak ada dekomposisi materi ujian" 
        },
        { 
          text: "Belajar sambil nonton drama Korea", 
          correct: false,
          feedback: "Multitasking mengurangi efektivitas" 
        }
      ],
      explanation: "Aplikasi CT dalam belajar:<br>1. Dekomposisi: Pecah silabus per bab<br>2. Pattern Recognition: Identifikasi tipe soal yang sering muncul<br>3. Abstraksi: Fokus pada konsep inti bukan hafalan detail<br>4. Algoritma: Buat flow belajar 30 menit + 5 menit istirahat"
    },
    {
      question: "Apa langkah pertama menggunakan dekomposisi untuk acara syukuran kelulusan?",
      answers: [
        { 
          text: "Breakdown jadi: venue, catering, undangan, dan acara", 
          correct: true,
          feedback: "Tepat! Memecah masalah kompleks" 
        },
        { 
          text: "Booking venue termahal dulu", 
          correct: false,
          feedback: "Tanpa perencanaan budget, bisa tekor" 
        },
        { 
          text: "Undang semua teman SD-SMA", 
          correct: false,
          feedback: "Ini bagian dari sub-proses undangan" 
        },
        { 
          text: "Langsung pesan katering untuk 500 orang", 
          correct: false,
          feedback: "Harus hitung dulu jumlah undangan" 
        }
      ],
      explanation: "Dekomposisi acara syukuran:<br>1. Anggaran: Pisahkan biaya venue, makanan, dekor<br>2. Logistik: Transportasi, parkir, sound system<br>3. Acara: Susunan MC, durasi tiap segment<br>4. Kontinjensi: Persiapan cadangan untuk hujan dll"
    },
    {
      question: "Mengapa memecah masalah jadi bagian kecil lebih efektif?",
      answers: [
        { 
          text: "Memungkinkan fokus spesifik & mengurangi overwhelm", 
          correct: true,
          feedback: "Benar! Makan gajah harus sesuap-semuap" 
        },
        { 
          text: "Agar terlihat lebih profesional", 
          correct: false,
          feedback: "Bukan tentang penampilan tapi efektivitas" 
        },
        { 
          text: "Supaya bisa dikerjakan banyak orang sekaligus", 
          correct: false,
          feedback: "Ini bonus tambahan, bukan tujuan utama" 
        },
        { 
          text: "Membuat proses lebih lama", 
          correct: false,
          feedback: "Justru menghemat waktu jangka panjang" 
        }
      ],
      explanation: "Analogi memecah masalah:<br>Seperti merakit IKEA furniture:<br>1. Kelompokkan part berdasarkan jenis<br>2. Pasang sesuai urutan instruksi<br>3. Fokus per komponen (rak, pintu, lemari)<br>4. Hasil akhir terwujud tanpa kebingungan"
    },
    {
      question: "Bagaimana pattern recognition membantu ibu rumah tangga?",
      answers: [
        { 
          text: "Mengenali pola harga promo supermarket tiap akhir bulan", 
          correct: true,
          feedback: "Yes! Ini aplikasi praktis CT" 
        },
        { 
          text: "Belanja tanpa list dan budget", 
          correct: false,
          feedback: "Ini contoh tidak menggunakan pattern" 
        },
        { 
          text: "Masak dengan takaran sembarangan", 
          correct: false,
          feedback: "Resep masakan justru pakai algoritma" 
        },
        { 
          text: "Menyimpan semua struk belanja acak", 
          correct: false,
          feedback: "Data tanpa analisis tidak bermanfaat" 
        }
      ],
      explanation: "Contoh pattern recognition rumah tangga:<br>- Pola harga: Beras naik sebelum lebaran<br>- Pola konsumsi: Sabun cepat habis tiap 2 minggu<br>- Pola energi: Listrik boros jam 6-9 malam<br>- Pola nutrisi: Anak rewel kalau kurang protein"
    },
    {
      question: "Apa keuntungan algoritma untuk pedagang kaki lima?",
      answers: [
        { 
          text: "Memprediksi stok harian & mengatur proses masak", 
          correct: true,
          feedback: "Algoritma = resep sukses berjualan!" 
        },
        { 
          text: "Bikin proses lebih ribet", 
          correct: false,
          feedback: "Justru menyederhanakan pekerjaan" 
        },
        { 
          text: "Hanya untuk toko online", 
          correct: false,
          feedback: "CT berlaku universal semua skala bisnis" 
        },
        { 
          text: "Memaksa pakai aplikasi mahal", 
          correct: false,
          feedback: "Algoritma bisa manual tanpa teknologi" 
        }
      ],
      explanation: "Contoh algoritma pedagang nasi goreng:<br>1. 05.00: Belanja bahan segar<br>2. 06.00: Siapkan bumbu dasar<br>3. 11.00: Mulai goreng sesuai pesanan<br>4. 14.00: Evaluasi sisa stok<br>5. 15.00: Restok bahan habis<br>Dengan ini, operasional jadi lebih efisien"
    }
];

      // DOM elements
      const questionText = document.getElementById("question-text");
      const answerButtons = document.getElementById("answer-buttons");
      const nextButton = document.getElementById("next-button");
      const resultContainer = document.getElementById("result");
      const scoreDisplay = document.getElementById("score");
      const explanationsContainer = document.getElementById("explanations");
      const restartButton = document.getElementById("restart-button");
  
      let currentQuestionIndex = 0;
      let score = 0;
      let review = [];
      let isProcessing = false; // Debounce flag
  
      function startQuiz() {
          score = 0;
          currentQuestionIndex = 0;
          review = [];
          isProcessing = false;
          resultContainer.classList.add("hidden");
          document.getElementById("quiz").classList.remove("hidden");
          nextButton.disabled = true;
          showQuestion();
      }
  
      function showQuestion() {
          resetState();
          const currentQuestion = questions[currentQuestionIndex];
          questionText.innerText = currentQuestion.question;
          
          // Shuffle answers
          const shuffledAnswers = shuffleArray([...currentQuestion.answers]);
          
          shuffledAnswers.forEach(answer => {
              const button = document.createElement("button");
              button.innerText = answer.text;
              button.classList.add("btn");
              button.addEventListener("click", () => selectAnswer(answer, button));
              answerButtons.appendChild(button);
          });
      }
  
      function selectAnswer(answer, button) {
          if (isProcessing) return;
          
          // Remove previous selections
          Array.from(answerButtons.children).forEach(btn => {
              btn.classList.remove("selected");
              btn.disabled = false;
          });
          
          button.classList.add("selected");
          button.disabled = true;
          nextButton.disabled = false;
      }
  
      function resetState() {
          answerButtons.innerHTML = "";
          nextButton.disabled = true;
          isProcessing = false;
      }
  
      nextButton.addEventListener("click", () => {
          if (isProcessing) return;
          isProcessing = true;
          
          const selectedButton = answerButtons.querySelector(".selected");
          if (!selectedButton) return;
  
          const currentQuestion = questions[currentQuestionIndex];
          const correctAnswer = currentQuestion.answers.find(a => a.correct);
          const isCorrect = selectedButton.innerText === correctAnswer.text;
  
          // Show feedback
          Array.from(answerButtons.children).forEach(btn => {
              if (btn.innerText === correctAnswer.text) {
                  btn.classList.add("correct");
              }
              btn.disabled = true;
          });
          
          if (!isCorrect) {
              selectedButton.classList.add("wrong");
          } else {
              score++;
          }
  
          // Store review data
          review.push({
              question: currentQuestion.question,
              chosen: selectedButton.innerText,
              correct: correctAnswer.text,
              explanation: currentQuestion.explanation,
              isCorrect: isCorrect
          });
  
          // Move to next question or show results
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
              setTimeout(() => {
                  isProcessing = false;
                  showQuestion();
              }, 1000);
          } else {
              showResult();
          }
      });
  
      function showResult() {
          document.getElementById("quiz").classList.add("hidden");
          resultContainer.classList.remove("hidden");
          scoreDisplay.textContent = score;
          displayReview();
      }
  
      function displayReview() {
          explanationsContainer.innerHTML = "<h3>Review & Explanations:</h3>";
          review.forEach((item, index) => {
              const detail = document.createElement("details");
              detail.innerHTML = `
                  <summary class="${item.isCorrect ? 'correct-summary' : 'wrong-summary'}">
                      Q${index + 1}: ${item.question}
                  </summary>
                  <p><strong>Your Answer:</strong> ${item.chosen}</p>
                  <p><strong>Correct Answer:</strong> ${item.correct}</p>
                  <p><strong>Explanation:</strong> ${item.explanation}</p>
              `;
              explanationsContainer.appendChild(detail);
          });
      }
  
      // Utility function to shuffle array
      function shuffleArray(array) {
          return array.sort(() => Math.random() - 0.5);
      }
  
      restartButton.addEventListener("click", startQuiz);
      startQuiz();
});
