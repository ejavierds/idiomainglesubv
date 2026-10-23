/**
 * English Interactive Learning SPA - UBV Lara
 * Advanced Studies in English - Class #1
 * Author: ejavierds | Teacher: David Miranda
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initNavigation();
  initTextToSpeech();
  initFlipCards();
  initQuizModule();
  initDialogueStudio();
  initBilingualToggle();
  initScrollTop();
});

/* ==========================================================================
   Data Stores
   ========================================================================== */

const QUIZ_DATA = [
  // Technical English Questions
  {
    id: 'tech-1',
    category: 'technical',
    categoryLabel: 'Technical English 🛠️',
    num: 1,
    question: 'What is Technical English?',
    questionEs: '¿Qué es el inglés técnico?',
    answer: 'Technical English is the English language used in professional and academic fields.',
    answerEs: 'El inglés técnico es el idioma inglés utilizado en campos profesionales y académicos.',
    keyTakeaway: 'Focuses on precision, specialized vocabulary, and professional communication.'
  },
  {
    id: 'tech-2',
    category: 'technical',
    categoryLabel: 'Technical English 🛠️',
    num: 2,
    question: 'Is Technical English used in professional and academic fields?',
    questionEs: '¿Se utiliza el inglés técnico en campos profesionales y académicos?',
    answer: 'Yes, Technical English is used in professional and academic fields.',
    answerEs: 'Sí, el inglés técnico es utilizado en campos profesionales y académicos.',
    keyTakeaway: 'Used extensively in engineering, medicine, computing, economics, and science.'
  },
  {
    id: 'tech-3',
    category: 'technical',
    categoryLabel: 'Technical English 🛠️',
    num: 3,
    question: 'Is specialized vocabulary an important characteristic of Technical English?',
    questionEs: '¿Es el vocabulario especializado una característica importante del inglés técnico?',
    answer: 'Yes, specialized vocabulary is an important feature of Technical English.',
    answerEs: 'Sí, el vocabulario especializado es una característica importante del inglés técnico.',
    keyTakeaway: 'Provides standardized terminology for clear international consensus.'
  },
  {
    id: 'tech-4',
    category: 'technical',
    categoryLabel: 'Technical English 🛠️',
    num: 4,
    question: 'Is Technical English useful for understanding manuals and instructions?',
    questionEs: '¿Es útil el inglés técnico para comprender manuales e instrucciones?',
    answer: 'Yes, Technical English is useful for understanding manuals and instructions.',
    answerEs: 'Sí, el inglés técnico es útil para entender manuales e instrucciones.',
    keyTakeaway: 'Facilitates operating equipment, configuring software, and following protocols.'
  },
  {
    id: 'tech-5',
    category: 'technical',
    categoryLabel: 'Technical English 🛠️',
    num: 5,
    question: 'Are clarity and precision important characteristics of Technical English?',
    questionEs: '¿Son la claridad y la precisión características importantes del inglés técnico?',
    answer: 'Yes, clarity and precision are important characteristics of technical English.',
    answerEs: 'Sí, la claridad y la precisión son características importantes del inglés técnico.',
    keyTakeaway: 'Avoids ambiguity and misinterpretation in critical academic & technical contexts.'
  },
  {
    id: 'tech-6',
    category: 'technical',
    categoryLabel: 'Technical English 🛠️',
    num: 6,
    question: 'Are science, technology, medicine, and engineering areas related to Technical English?',
    questionEs: '¿Son la ciencia, la tecnología, la medicina y la ingeniería áreas relacionadas con el inglés técnico?',
    answer: 'Yes, science, technology, medicine, and engineering are areas related to technical English.',
    answerEs: 'Sí, la ciencia, la tecnología, la medicina y la ingeniería son áreas relacionadas con el inglés técnico.',
    keyTakeaway: 'These disciplines produce the majority of global technical literature.'
  },
  {
    id: 'tech-7',
    category: 'technical',
    categoryLabel: 'Technical English 🛠️',
    num: 7,
    question: 'Is Technical English important for students\' academic and professional development?',
    questionEs: '¿Es importante el inglés técnico para el desarrollo académico y profesional de los estudiantes?',
    answer: 'Yes, technical English is important for the academic and professional development of students.',
    answerEs: 'Sí, el inglés técnico es importante para el desarrollo académico y profesional de los estudiantes.',
    keyTakeaway: 'Expands postgraduate research access, international journals, and career opportunities.'
  },

  // Interactive English Questions
  {
    id: 'inter-1',
    category: 'interactive',
    categoryLabel: 'Interactive English 🗣️',
    num: 1,
    question: 'What is the definition of Interactive English?',
    questionEs: '¿Cuál es la definición de inglés interactivo?',
    answer: 'Interactive English is the use of the English language for active communication with other people. It includes everyday language and various types of communication.',
    answerEs: 'El inglés interactivo es el uso del idioma inglés para la comunicación activa con otras personas. Incluye el lenguaje cotidiano y varios tipos de comunicación.',
    keyTakeaway: 'Encompasses speaking, active listening, debating, and collaborative exchange.'
  },
  {
    id: 'inter-2',
    category: 'interactive',
    categoryLabel: 'Interactive English 🗣️',
    num: 2,
    question: 'Is Interactive English important for your communication skills?',
    questionEs: '¿Es importante el inglés interactivo para tus habilidades comunicativas?',
    answer: 'Yes, interactive English is important for your communication skills.',
    answerEs: 'Sí, el inglés interactivo es importante para tus habilidades de comunicación.',
    keyTakeaway: 'Bridges theoretical knowledge and real-time verbal fluency.'
  },
  {
    id: 'inter-3',
    category: 'interactive',
    categoryLabel: 'Interactive English 🗣️',
    num: 3,
    question: 'Are group discussions a good way to practice Interactive English?',
    questionEs: '¿Son las discusiones en grupo una buena manera de practicar el inglés interactivo?',
    answer: 'Yes, discussion groups are a good way to practice interactive English.',
    answerEs: 'Sí, los grupos de discusión son una buena forma de practicar el inglés interactivo.',
    keyTakeaway: 'Encourages spontaneous dialogue, active feedback, and collaborative viewpoints.'
  },
  {
    id: 'inter-4',
    category: 'interactive',
    categoryLabel: 'Interactive English 🗣️',
    num: 4,
    question: 'Is confidence a result of using Interactive English in class?',
    questionEs: '¿Es la confianza el resultado de usar el inglés interactivo en clase?',
    answer: 'Yes, the confidence is a result of using interactive English in the class.',
    answerEs: 'Sí, la confianza es el resultado de usar el inglés interactivo en clase.',
    keyTakeaway: 'Helps overcome the psychological barrier and fear of speaking.'
  },
  {
    id: 'inter-5',
    category: 'interactive',
    categoryLabel: 'Interactive English 🗣️',
    num: 5,
    question: 'Are speaking and listening the main skills in Interactive English?',
    questionEs: '¿Son el hablar y el escuchar las únicas habilidades principales en el inglés interactivo?',
    answer: 'No, speaking and listening are not the main skills in interactive English.',
    answerEs: 'No, hablar y escuchar no son las únicas habilidades principales en el inglés interactivo.',
    keyTakeaway: 'Doc Note: It goes beyond isolated listening/speaking; it integrates two-way synergy, negotiation of meaning, body language, adaptability, and active feedback.'
  },
  {
    id: 'inter-6',
    category: 'interactive',
    categoryLabel: 'Interactive English 🗣️',
    num: 6,
    question: 'Is it true that Interactive English is useful for real-life situations?',
    questionEs: '¿Es cierto que el inglés interactivo es útil para situaciones de la vida real?',
    answer: 'Yes, it is true that interactive English is useful for real-life situations.',
    answerEs: 'Sí, es verdad que el inglés interactivo es útil para situaciones de la vida real.',
    keyTakeaway: 'Prepares students for academic symposia, video calls, interviews, and networking.'
  },
  {
    id: 'inter-7',
    category: 'interactive',
    categoryLabel: 'Interactive English 🗣️',
    num: 7,
    question: 'Are interactive activities helpful for students at all levels?',
    questionEs: '¿Son útiles las actividades interactivas para estudiantes de todos los niveles?',
    answer: 'Yes, interactive activities are useful for students of all levels.',
    answerEs: 'Sí, las actividades interactivas son útiles para estudiantes de todos los niveles.',
    keyTakeaway: 'Tailors to foundational practice (greetings/numbers) and advanced academic discourse.'
  }
];

const DIALOGUE_LINES = [
  {
    speakerKey: 'A',
    role: 'Student A (Systems Lead)',
    roleEs: 'Estudiante A (Líder de Sistemas)',
    avatar: '👨‍💻',
    text: "Good morning! Can you help me check the server hardware in the laboratory?",
    textEs: "¡Buenos días! ¿Puedes ayudarme a revisar el hardware del servidor en el laboratorio?"
  },
  {
    speakerKey: 'B',
    role: 'Student B (Network Engineer)',
    roleEs: 'Estudiante B (Ingeniero de Redes)',
    avatar: '👩‍💻',
    text: "Of course! Let's verify the network connection and verify our database file backup.",
    textEs: "¡Por supuesto! Verifiquemos la conexión de red y el archivo de respaldo de la base de datos."
  },
  {
    speakerKey: 'A',
    role: 'Student A (Systems Lead)',
    roleEs: 'Estudiante A (Líder de Sistemas)',
    avatar: '👨‍💻',
    text: "Great! Remember to update your security password before launching the software.",
    textEs: "¡Excelente! Recuerda actualizar tu contraseña de seguridad antes de iniciar el software."
  },
  {
    speakerKey: 'B',
    role: 'Student B (Network Engineer)',
    roleEs: 'Estudiante B (Ingeniero de Redes)',
    avatar: '👩‍💻',
    text: "Understood. Collaboration makes our technical team efficient and precise!",
    textEs: "Entendido. ¡El trabajo colaborativo hace que nuestro equipo técnico sea eficiente y preciso!"
  }
];

/* ==========================================================================
   Text-to-Speech (TTS) Engine
   ========================================================================== */

let synth = window.speechSynthesis;
let englishVoice = null;

function initTextToSpeech() {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  function loadVoices() {
    const voices = synth.getVoices();
    // Prioritize high-quality English voices (Google, Natural, US/UK)
    englishVoice = voices.find(v => v.lang === 'en-US' && (v.name.includes('Natural') || v.name.includes('Google')))
      || voices.find(v => v.lang.startsWith('en-US'))
      || voices.find(v => v.lang.startsWith('en-GB'))
      || voices.find(v => v.lang.startsWith('en'))
      || null;
  }

  loadVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }
}

function speakText(text, buttonElement) {
  if (!('speechSynthesis' in window)) {
    alert('Audio synthesis is not supported on your browser.');
    return;
  }

  synth.cancel(); // Stop any pending speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9; // Clear, pedagogical pace for learners
  utterance.pitch = 1.0;

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  if (buttonElement) {
    buttonElement.classList.add('playing');
    utterance.onend = () => buttonElement.classList.remove('playing');
    utterance.onerror = () => buttonElement.classList.remove('playing');
  }

  synth.speak(utterance);
}

// Global hook for inline HTML onclick calls
window.speakPhrase = function (text, btnId) {
  const btn = btnId ? document.getElementById(btnId) : null;
  speakText(text, btn);
};

/* ==========================================================================
   Navigation & Mobile Menu
   ========================================================================== */

function initNavigation() {
  const mobileMenuBtn = document.getElementById('btn-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section indicator using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-desktop-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-cyan-400', 'border-b-2', 'border-cyan-400');
            link.classList.remove('text-slate-300');
          } else {
            link.classList.remove('text-cyan-400', 'border-b-2', 'border-cyan-400');
            link.classList.add('text-slate-300');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   Flip Cards Component
   ========================================================================== */

function initFlipCards() {
  const cards = document.querySelectorAll('.flip-card');

  cards.forEach(card => {
    // Click / Touch toggle
    card.addEventListener('click', (e) => {
      // Don't flip if user clicked speech button
      if (e.target.closest('.audio-btn') || e.target.closest('button')) {
        return;
      }
      card.classList.toggle('flipped');
    });

    // Keyboard accessibility (Enter / Space)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });

    // "Flip Back" button on card back
    const flipBackBtn = card.querySelector('.btn-flip-back');
    if (flipBackBtn) {
      flipBackBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('flipped');
      });
    }
  });
}

/* ==========================================================================
   Interactive Quiz Module
   ========================================================================== */

function initQuizModule() {
  const container = document.getElementById('quiz-cards-container');
  const filterBtns = document.querySelectorAll('.quiz-filter-btn');
  const countDisplay = document.getElementById('quiz-mastered-count');
  const progressBar = document.getElementById('quiz-progress-bar');
  const toggleAllBtn = document.getElementById('btn-toggle-all-answers');

  if (!container) return;

  // Track mastered state from localStorage
  let masteredIds = new Set(JSON.parse(localStorage.getItem('ubv_english_mastered') || '[]'));
  let currentFilter = 'all';
  let allRevealed = false;

  function renderQuizList() {
    container.innerHTML = '';
    const filtered = QUIZ_DATA.filter(q => {
      if (currentFilter === 'all') return true;
      return q.category === currentFilter;
    });

    filtered.forEach((item) => {
      const isMastered = masteredIds.has(item.id);
      const card = document.createElement('article');
      card.className = `glass-card rounded-2xl p-5 md:p-6 transition-all duration-300 border ${
        isMastered ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-white/10'
      }`;
      card.id = `quiz-card-${item.id}`;

      card.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold ${
              item.category === 'technical' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
            }">
              #${item.num}
            </span>
            <span class="text-xs uppercase tracking-wider font-semibold text-slate-400">
              ${item.categoryLabel}
            </span>
          </div>

          <div class="flex items-center gap-2 self-end md:self-auto">
            <button 
              type="button"
              class="quiz-master-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isMastered ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }"
              data-id="${item.id}"
              title="Marcar pregunta como dominada"
            >
              <i data-lucide="${isMastered ? 'check-circle-2' : 'circle'}" class="w-3.5 h-3.5"></i>
              <span>${isMastered ? 'Mastered ✅' : 'Mark Learned'}</span>
            </button>
            
            <button 
              type="button"
              class="audio-btn p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors"
              title="Listen to question"
              onclick="speakPhrase('${escapeQuotes(item.question)}', this)"
            >
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <div class="mb-4">
          <p class="text-base md:text-lg font-semibold text-white leading-relaxed">
            ${item.question}
          </p>
          <p class="bilingual-helper text-sm text-cyan-200/70 mt-1 italic">
            ${item.questionEs}
          </p>
        </div>

        <!-- Action / Toggle Answer Button -->
        <button 
          type="button"
          class="quiz-toggle-btn w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-cyan-300 transition-colors"
          data-target="ans-${item.id}"
          aria-expanded="false"
        >
          <span class="flex items-center gap-2">
            <i data-lucide="eye" class="w-4 h-4 quiz-eye-icon"></i>
            <span class="toggle-btn-text">Reveal Answer</span>
          </span>
          <i data-lucide="chevron-down" class="w-4 h-4 transform transition-transform duration-200 quiz-chevron"></i>
        </button>

        <!-- Hidden Answer Container -->
        <div id="ans-${item.id}" class="quiz-answer-container">
          <div class="quiz-answer-inner pt-4">
            <div class="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-slate-900/60 border border-cyan-500/20">
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <i data-lucide="check" class="w-3.5 h-3.5"></i> Verified Answer:
                    </span>
                  </div>
                  <p class="text-white text-sm md:text-base font-medium leading-relaxed">
                    ${item.answer}
                  </p>
                  <p class="bilingual-helper text-xs md:text-sm text-slate-300 italic border-l-2 border-cyan-500/40 pl-2 mt-1">
                    ${item.answerEs}
                  </p>
                </div>

                <button 
                  type="button"
                  class="audio-btn p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/20 transition-colors shrink-0"
                  title="Listen to full answer"
                  onclick="speakPhrase('${escapeQuotes(item.answer)}', this)"
                >
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>

              <div class="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-amber-400 shrink-0"></i>
                <span><strong class="text-slate-300">Key Context:</strong> ${item.keyTakeaway}</span>
              </div>
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons({ root: container });
    }

    attachCardEventListeners();
    updateProgress();
  }

  function attachCardEventListeners() {
    // Accordion toggle
    container.querySelectorAll('.quiz-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const targetElem = document.getElementById(targetId);
        const eyeIcon = btn.querySelector('.quiz-eye-icon');
        const chevron = btn.querySelector('.quiz-chevron');
        const btnText = btn.querySelector('.toggle-btn-text');

        const isRevealed = targetElem.classList.contains('revealed');

        if (isRevealed) {
          targetElem.classList.remove('revealed');
          btn.setAttribute('aria-expanded', 'false');
          btnText.textContent = 'Reveal Answer';
          chevron.classList.remove('rotate-180');
        } else {
          targetElem.classList.add('revealed');
          btn.setAttribute('aria-expanded', 'true');
          btnText.textContent = 'Hide Answer';
          chevron.classList.add('rotate-180');
        }
      });
    });

    // Mastered / Learned toggle
    container.querySelectorAll('.quiz-master-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (masteredIds.has(id)) {
          masteredIds.delete(id);
        } else {
          masteredIds.add(id);
        }
        localStorage.setItem('ubv_english_mastered', JSON.stringify([...masteredIds]));
        renderQuizList();
      });
    });
  }

  function updateProgress() {
    const total = QUIZ_DATA.length;
    const mastered = masteredIds.size;
    const percentage = Math.round((mastered / total) * 100);

    if (countDisplay) {
      countDisplay.textContent = `${mastered}/${total} Mastered (${percentage}%)`;
    }
    if (progressBar) {
      progressBar.style.width = `${percentage}%`;
    }
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'font-bold');
        b.classList.add('bg-white/5', 'text-slate-300');
      });
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'font-bold');
      btn.classList.remove('bg-white/5', 'text-slate-300');

      currentFilter = btn.getAttribute('data-filter');
      renderQuizList();
    });
  });

  // Reveal / Hide All Answers button
  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => {
      allRevealed = !allRevealed;
      const allContainers = container.querySelectorAll('.quiz-answer-container');
      const allButtons = container.querySelectorAll('.quiz-toggle-btn');

      allContainers.forEach(c => {
        if (allRevealed) {
          c.classList.add('revealed');
        } else {
          c.classList.remove('revealed');
        }
      });

      allButtons.forEach(b => {
        b.setAttribute('aria-expanded', allRevealed ? 'true' : 'false');
        b.querySelector('.toggle-btn-text').textContent = allRevealed ? 'Hide Answer' : 'Reveal Answer';
        const chevron = b.querySelector('.quiz-chevron');
        if (chevron) {
          if (allRevealed) chevron.classList.add('rotate-180');
          else chevron.classList.remove('rotate-180');
        }
      });

      toggleAllBtn.innerHTML = allRevealed
        ? `<i data-lucide="eye-off" class="w-4 h-4"></i> Hide All`
        : `<i data-lucide="eye" class="w-4 h-4"></i> Reveal All`;
      
      if (window.lucide) {
        window.lucide.createIcons({ root: toggleAllBtn });
      }
    });
  }

  // Initial render
  renderQuizList();
}

/* ==========================================================================
   Dialogue Practice Studio (Task #1 Helper)
   ========================================================================== */

function initDialogueStudio() {
  const container = document.getElementById('dialogue-chat-container');
  const switchRolesBtn = document.getElementById('btn-switch-roles');
  const readFullDialogueBtn = document.getElementById('btn-read-dialogue');

  if (!container) return;

  let rolesSwapped = false;

  function renderDialogue() {
    container.innerHTML = '';

    DIALOGUE_LINES.forEach((line, idx) => {
      // Determine if inverted
      let currentSpeaker = line.speakerKey;
      let displayRole = line.role;
      let displayRoleEs = line.roleEs;
      let avatar = line.avatar;

      if (rolesSwapped) {
        if (currentSpeaker === 'A') {
          currentSpeaker = 'B';
          displayRole = 'Student B (Now Role A)';
          displayRoleEs = 'Estudiante B (Ahora Rol A)';
          avatar = '👩‍💻';
        } else {
          currentSpeaker = 'A';
          displayRole = 'Student A (Now Role B)';
          displayRoleEs = 'Estudiante A (Ahora Rol B)';
          avatar = '👨‍💻';
        }
      }

      const isA = currentSpeaker === 'A';
      const bubble = document.createElement('div');
      bubble.className = `flex gap-3 max-w-xl ${isA ? 'mr-auto' : 'ml-auto flex-row-reverse'}`;

      bubble.innerHTML = `
        <div class="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 ${
          isA ? 'bg-cyan-500/20 border border-cyan-400/30' : 'bg-purple-500/20 border border-purple-400/30'
        }">
          ${avatar}
        </div>
        <div class="space-y-1.5 flex-1 ${isA ? 'text-left' : 'text-right'}">
          <div class="flex items-center gap-2 ${isA ? 'justify-start' : 'justify-end'}">
            <span class="text-xs font-semibold ${isA ? 'text-cyan-400' : 'text-purple-400'}">
              ${displayRole}
            </span>
            <button 
              type="button"
              class="audio-btn p-1 rounded-md bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors"
              title="Practice this sentence"
              onclick="speakPhrase('${escapeQuotes(line.text)}', this)"
            >
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <div class="p-4 rounded-2xl ${
            isA 
              ? 'bg-slate-800/80 border border-cyan-500/20 rounded-tl-sm text-left' 
              : 'bg-indigo-950/70 border border-purple-500/20 rounded-tr-sm text-left'
          }">
            <p class="text-sm md:text-base text-slate-100 font-medium">
              ${highlightTechTerms(line.text)}
            </p>
            <p class="bilingual-helper text-xs text-slate-400 italic mt-1.5 pt-1.5 border-t border-white/5">
              ${line.textEs}
            </p>
          </div>
        </div>
      `;

      container.appendChild(bubble);
    });

    if (window.lucide) {
      window.lucide.createIcons({ root: container });
    }
  }

  function highlightTechTerms(text) {
    // Highlight technical terms studied in Class #1
    const terms = ['hardware', 'software', 'network', 'database', 'password', 'file'];
    let result = text;
    terms.forEach(t => {
      const regex = new RegExp(`\\b(${t})\\b`, 'gi');
      result = result.replace(regex, '<span class="text-cyan-300 font-semibold underline decoration-cyan-500/50 underline-offset-4">$1</span>');
    });
    return result;
  }

  if (switchRolesBtn) {
    switchRolesBtn.addEventListener('click', () => {
      rolesSwapped = !rolesSwapped;
      switchRolesBtn.classList.toggle('ring-2');
      switchRolesBtn.classList.toggle('ring-amber-400');
      renderDialogue();
    });
  }

  if (readFullDialogueBtn) {
    readFullDialogueBtn.addEventListener('click', () => {
      const fullConversation = DIALOGUE_LINES.map(l => `${l.role}: ${l.text}`).join('. ');
      speakText(fullConversation, readFullDialogueBtn);
    });
  }

  renderDialogue();
}

/* ==========================================================================
   Bilingual Helper Mode
   ========================================================================== */

function initBilingualToggle() {
  const toggleBtn = document.getElementById('btn-bilingual-toggle');
  const toggleLabel = document.getElementById('bilingual-status-text');

  let bilingualEnabled = true;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      bilingualEnabled = !bilingualEnabled;
      document.body.classList.toggle('hide-es-helpers', !bilingualEnabled);

      if (toggleLabel) {
        toggleLabel.textContent = bilingualEnabled ? 'Bilingual (EN + ES)' : 'English Only (EN)';
      }

      toggleBtn.classList.toggle('bg-cyan-500/20', bilingualEnabled);
      toggleBtn.classList.toggle('border-cyan-400/40', bilingualEnabled);
    });
  }
}

/* ==========================================================================
   Back to Top & Utilities
   ========================================================================== */

function initScrollTop() {
  const scrollBtn = document.getElementById('btn-scroll-top');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      scrollBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      scrollBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      scrollBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
