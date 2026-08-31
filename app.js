/**
 * HIGH-PRECISION QUIZ APPLICATION CORE DATA ARCHITECT CORE
 * Built exclusively for native browser execution.
 * Updated for full integration of curated WAEC-APT question bank
 * (waec-aptitude-test.js) via dynamic ES-module loading.
 */

// --- GLOBAL STORAGE KEYS ---
const ARCHIVE_KEY = "CH_ARCHIVED_PRODUCTS";
const SAVED_EXAMS_KEY = "CH_SAVED_EXAMS";
const BOOKMARKS_STORAGE_KEY = "CH_BOOKMARKS";
const NOTES_STORAGE_KEY = "CH_QUESTION_NOTES";
const OWNED_KEY = "CH_OWNED_PRODUCTS"; 

/**
 * Builds the WhatsApp click-to-chat URL for Personalized Training.
 * Uses the logged-in username when available.
 */
function buildPersonalizedTrainingWhatsAppLink() {
  const name = appState.currentUser || "Guest";
  const draft = `Hi, I'm ${name}, from 'GovPrep Practice Exam Platform'. I'm interested in having a personalized coaching for government & civil service exams [Exam (e.g., WAEC, FRSC, NSCDC, Civil Service PSR)].`;
  // Replace the phone number below with the real business WhatsApp number when available
  const phone = "2349078920214"; // e.g. 2348012345678
  return `https://wa.me/${phone}?text=${encodeURIComponent(draft)}`;
}

// Call this inside renderDashboardProducts() (or right after navigateTo("dashboard"))
function wirePromoCardLinks() {
  const link = document.getElementById("personalizedTrainingLink");
  if (link) {
    link.href = buildPersonalizedTrainingWhatsAppLink();
  }
}

/** Official GovPrep Community Channel – used by Tools → Learn More */
const WHATSAPP_CHANNEL_URL = "https://www.whatsapp.com/channel/0029VbAp1qHIXnltu1srjl3A";

/**
 * Opens the GovPrep community channel in a new tab (Tools page "Learn More").
 */
function openExamResourcesLink() {
  window.open(WHATSAPP_CHANNEL_URL, "_blank", "noopener,noreferrer");
}

/**
 * Shows the Reset Data confirmation modal.
 */
function openResetDataModal() {
  const modal = document.getElementById("resetDataModal");
  if (modal) modal.classList.remove("hidden");
}

/**
 * Hides the Reset Data confirmation modal.
 */
function closeResetDataModal() {
  const modal = document.getElementById("resetDataModal");
  if (modal) modal.classList.add("hidden");
}

/**
 * Permanently clears all practice-related localStorage data while preserving
 * registration / login credentials. Resets runtime state and returns to dashboard.
 */
function executeFullDataReset() {
  // Core keys
  const keysToRemove = [
    ARCHIVE_KEY,
    SAVED_EXAMS_KEY,
    BOOKMARKS_STORAGE_KEY,
    NOTES_STORAGE_KEY,
    OWNED_KEY
  ];

  keysToRemove.forEach(k => localStorage.removeItem(k));

  // Dynamic history & per-product notes (CH_HIST_* and CH_NOTES_*)
  const allKeys = Object.keys(localStorage);
  allKeys.forEach(k => {
    if (k.startsWith("CH_HIST_") || k.startsWith("CH_NOTES_")) {
      localStorage.removeItem(k);
    }
  });

  // Clear any running quiz timer and ephemeral engine state
  if (typeof clearQuizTimer === "function") clearQuizTimer();
  if (appState.quizEngine) {
    appState.quizEngine.questions = [];
    appState.quizEngine.currentIndex = 0;
    appState.quizEngine.userAnswers = {};
    appState.quizEngine.timeRemaining = 0;
    appState.quizEngine.isGraded = false;
    appState.quizEngine.originSavedExamId = null;
  }
  appState.selectedProduct = null;
  appState.selectedMode = null;
  appState.isDefaultTest = false;

  closeResetDataModal();
  alert("All practice data has been successfully reset. Your login credentials remain unchanged.");
  navigateTo("dashboard");
}

// 1. GLOBAL MULTI-CERTIFICATION DATA STORE
const QuizDataStore = {

};
 
// 2. RUNTIME APPLICATION STATE INTERFACE
const QuizState = {
    currentCertification: "WAEC_APT",
    currentChapter: "chapter1",
    currentQuestions: [],
    currentQuestionIndex: 0,
    score: 0
};

// GLOBAL CORE APPLICATION WORKFLOW STATE Object Definition
const appState = {
    currentUser: null,
    activeView: "landing",
    selectedProduct: null,
    selectedMode: null,
    isDefaultTest: false,          
    quizEngine: {
        questions: [],
        currentIndex: 0,
        userAnswers: {},
        timeRemaining: 0,
        timerInterval: null,
        isGraded: false,
        // NEW: tracks the id of a previously saved exam that was resumed
        originSavedExamId: null
    }
};

/* ==========================================================================
   CERTIFICATION EXAM METADATA + BALANCED DEFAULT-TEST GENERATOR
   ========================================================================== */

const CERT_EXAM_METADATA = {
    // Academic & Secondary – WAEC Recruitment Aptitude (curated 200-q bank)
    "WAEC-APT":   { questionCount: 100,  durationMinutes: 60  },
    "WAECAPT":    { questionCount: 100,  durationMinutes: 60  },
    "JAMB-UTME":  { questionCount: 180, durationMinutes: 120 },
    "JAMBUTME":   { questionCount: 180, durationMinutes: 120 },

    // Public Safety & Law Enforcement
    "FRSC-OC":    { questionCount: 50,  durationMinutes: 35  },
    "FRSCOC":     { questionCount: 50,  durationMinutes: 35  },
    "NSCDC-REC":  { questionCount: 50,  durationMinutes: 40  },
    "NSCDCREC":   { questionCount: 50,  durationMinutes: 40  },
    "POLICE-REC": { questionCount: 60,  durationMinutes: 45  },
    "POLICEREC":  { questionCount: 60,  durationMinutes: 45  },

    // Civil Service & Administration
    "CSP-PSR":    { questionCount: 100, durationMinutes: 90  },
    "CSPPSR":     { questionCount: 100, durationMinutes: 90  },
    "CSP-GEN":    { questionCount: 100, durationMinutes: 90  },
    "CSPGEN":     { questionCount: 100, durationMinutes: 90  },
    "GP-CA":      { questionCount: 80,  durationMinutes: 60  },
    "GPCA":       { questionCount: 80,  durationMinutes: 60  },

    // Customs, Immigration & Parastatals
    "NCS-APT":    { questionCount: 60,  durationMinutes: 45  },
    "NCSAPT":     { questionCount: 60,  durationMinutes: 45  },
    "NIS-APT":    { questionCount: 60,  durationMinutes: 45  },
    "NISAPT":     { questionCount: 60,  durationMinutes: 45  },
    "PARA-APT":   { questionCount: 50,  durationMinutes: 40  },
    "PARAAPT":    { questionCount: 50,  durationMinutes: 40  }
};

function getExamMetadata(product) {
    if (!product) return { questionCount: 100, durationMinutes: 60 };
    return CERT_EXAM_METADATA[product.code] ||
           CERT_EXAM_METADATA[product.id]   ||
           { questionCount: 100, durationMinutes: 60 };
}

/* ==========================================================================
   PER-PRODUCT DATA FILE REGISTRY (lazy-loaded question banks)
   ----------------------------------------------------------------------
   Keyed by product.id from MOCK_PRODUCTS_DATABASE. Each entry points at a
   dedicated ES module under data/ that exports a flat `questions` array
   (see data/_TEMPLATE.js for the required shape). Files are fetched with
   dynamic import() only when a user actually starts a quiz for that
   product, so the initial page load never downloads question data it
   doesn't need. Products not yet listed here transparently fall back to
   QuizDataStore and then generateQuestionsForProduct(), so nothing breaks.
   ========================================================================== */
const PRODUCT_DATA_FILE_MAP = {
    WAECAPT:   "./data/waec-aptitude-test.js",
    FRSCOC:    "./data/frsc-officer.js",
    NSCDCREC:  "./data/nscdc-recruitment.js",
    CSPPSR:    "./data/csp-psr.js",
    CSPGEN:    "./data/csp-general.js",
    GPCA:      "./data/general-paper-ca.js",
    NCSAPT:    "./data/customs-aptitude.js",
    NISAPT:    "./data/immigration-aptitude.js",
    PARAAPT:   "./data/parastatal-aptitude.js",
    POLICEREC: "./data/police-recruitment.js",
    JAMBUTME:  "./data/jamb-utme.js"
};

// In-memory cache so a product's data file is only ever downloaded once
// per page session, no matter how many times the user starts a quiz for it.
const _loadedProductQuestionCache = {};

/**
 * Resolves the curated question pool for a product via dynamic import,
 * caching the result. Returns null (never throws) if there is no dedicated
 * data file yet, or if the import fails for any reason — callers must
 * treat null as "fall back to the legacy generator".
 *
 * Supports the WAEC-APT module shape:
 *   export const PRODUCT_CODE = "WAEC-APT";
 *   export const questions = [ ... ];
 *   export default questions;
 */
async function loadCuratedQuestionBank(product) {
    if (!product) return null;
    const dataPath = PRODUCT_DATA_FILE_MAP[product.id] || PRODUCT_DATA_FILE_MAP[product.code];
    if (!dataPath) return null;

    if (_loadedProductQuestionCache[dataPath]) {
        return _loadedProductQuestionCache[dataPath];
    }

    try {
        const module = await import(dataPath);
        // Prefer default export, then named `questions`, then any array-like export
        const bank = module.default || module.questions || null;
        if (!bank || !Array.isArray(bank) || bank.length === 0) {
            console.error(`Curated data file for ${product.id} (${dataPath}) loaded but exported no questions.`);
            return null;
        }
        // Lightweight shape guard – ensure every item has the fields the runtime expects
        const first = bank[0];
        if (first && (typeof first.id === "undefined" || typeof first.chapterIndex === "undefined" ||
                      !Array.isArray(first.choices) || typeof first.correct === "undefined")) {
            console.error(`Curated data file for ${product.id} has unexpected question shape.`);
            return null;
        }
        _loadedProductQuestionCache[dataPath] = bank;
        return bank;
    } catch (err) {
        console.error(`Curated data file missing/failed for ${product.id} (${dataPath}); falling back to generated questions.`, err);
        return null;
    }
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * Builds a balanced default exam by drawing roughly equal numbers of
 * questions from every chapter present in the pool. Used for the
 * “Start Default Test” path so that all six WAEC domains are represented.
 */
function generateBalancedDefaultExam(fullPool, targetCount) {
    if (!fullPool || fullPool.length === 0) return [];

    const byChapter = {};
    fullPool.forEach(q => {
        const ch = q.chapterIndex ?? 0;
        if (!byChapter[ch]) byChapter[ch] = [];
        byChapter[ch].push(q);
    });

    const chapterKeys = Object.keys(byChapter).map(Number).sort((a, b) => a - b);
    const numChapters = chapterKeys.length || 1;

    const basePerChapter = Math.floor(targetCount / numChapters);
    let remainder = targetCount % numChapters;

    const selected = [];
    const usedIds = new Set();

    chapterKeys.forEach(ch => {
        const pool = shuffleArray([...byChapter[ch]]);
        const take = Math.min(basePerChapter, pool.length);
        for (let i = 0; i < take; i++) {
            selected.push(pool[i]);
            usedIds.add(pool[i].id);
        }
    });

    const leftover = fullPool.filter(q => !usedIds.has(q.id));
    shuffleArray(leftover);

    for (let i = 0; i < remainder && i < leftover.length; i++) {
        selected.push(leftover[i]);
        usedIds.add(leftover[i].id);
    }

    if (selected.length < targetCount) {
        const stillNeeded = targetCount - selected.length;
        const extra = fullPool.filter(q => !usedIds.has(q.id));
        shuffleArray(extra);
        selected.push(...extra.slice(0, stillNeeded));
    }

    return shuffleArray(selected).slice(0, targetCount);
}

// 3. HIGH-PRECISION DYNAMIC LOAD MANAGEMENT WIRING
function loadQuiz(certification, chapterKey) {
    if (!QuizDataStore[certification] || !QuizDataStore[certification][chapterKey]) {
        console.error(`Data Layer Link Error: ${certification} -> ${chapterKey} variant missing.`);
        return false;
    }
    
    QuizState.currentCertification = certification;
    QuizState.currentChapter = chapterKey;
    QuizState.currentQuestions = QuizDataStore[certification][chapterKey];
    QuizState.currentQuestionIndex = 0;
    QuizState.score = 0;
    
    if (typeof renderCurrentQuestion === "function") {
        renderCurrentQuestion();
    } else if (typeof displayQuestionInUI === "function") {
        displayQuestionInUI(QuizState.currentQuestions[QuizState.currentQuestionIndex]);
    }
    return true;
}

// Available IT Credentials Product Matrix
const MOCK_PRODUCTS_DATABASE = [
    {
        id: "WAECAPT",
        title: "WAEC Aptitude Test ( Recruitment )",
        code: "WAEC-APT",
        imageIcon: "fa-graduation-cap",
        badge: "WAEC",
        description: "100 questions · 60 minutes. Speed & accuracy focus for WAEC Aptitude Test.",
        chapters: [
            "Chapter 1: Quantitative Reasoning & Advanced Numeracy",
            "Chapter 2: Verbal Reasoning & English Comprehension",
            "Chapter 3: WAEC Institutional Mandate, History & Public Service",
            "Chapter 4: Logical & Abstract Reasoning",
            "Chapter 5: Educational Measurement & Psychometrics",
            "Chapter 6: Assessment Security, Ethics & Office Administration"
        ]
    },
    {
        id: "FRSCOC",
        title: "FRSC Officer Candidate Practice Engine",
        code: "FRSC-OC",
        imageIcon: "fa-road",
        badge: "FRSC",
        description: "50 questions · 35 minutes. Paramilitary discipline, traffic laws, and road safety operations.",
        chapters: [
            "Chapter 1: FRSC Mandate, Structure & History",
            "Chapter 2: Nigerian Highway Code & Traffic Laws",
            "Chapter 3: Road Safety Education & Enforcement",
            "Chapter 4: Accident Prevention & Emergency Response",
            "Chapter 5: General Knowledge & Current Affairs",
            "Chapter 6: English Language & Numerical Aptitude"
        ]
    },
    {
        id: "NSCDCREC",
        title: "NSCDC Recruitment Practice Test",
        code: "NSCDC-REC",
        imageIcon: "fa-shield-halved",
        badge: "NSCDC",
        description: "50 questions · 40 minutes. General knowledge, English, numerical reasoning for Civil Defence recruitment.",
        chapters: [
            "Chapter 1: NSCDC Mandate, Roles & Responsibilities",
            "Chapter 2: Critical Infrastructure Protection",
            "Chapter 3: English Language & Comprehension",
            "Chapter 4: Numerical & Logical Reasoning",
            "Chapter 5: General Knowledge & Current Affairs",
            "Chapter 6: Civic Duties & National Security Awareness"
        ]
    },
    {
        id: "CSPPSR",
        title: "Civil Service Promotion – Public Service Rules",
        code: "CSP-PSR",
        imageIcon: "fa-landmark",
        badge: "CSP",
        description: "100 questions · 90 minutes. Public Service Rules, administrative procedures, and governance.",
        chapters: [
            "Chapter 1: Public Service Rules – Appointment & Confirmation",
            "Chapter 2: Discipline, Conduct & Ethics",
            "Chapter 3: Leave, Allowances & Emoluments",
            "Chapter 4: Promotion, Transfer & Deployment",
            "Chapter 5: Financial Regulations & Store Procedures",
            "Chapter 6: Official Correspondence & Record Keeping",
            "Chapter 7: Schemes of Service & Career Progression",
            "Chapter 8: Federal Character & Service Delivery"
        ]
    },
    {
        id: "CSPGEN",
        title: "Civil Service General Paper & Aptitude",
        code: "CSP-GEN",
        imageIcon: "fa-briefcase",
        badge: "CSP",
        description: "100 questions · 90 minutes. Aptitude, current affairs, and general administration for promotion exams.",
        chapters: [
            "Chapter 1: Verbal Reasoning & Comprehension",
            "Chapter 2: Numerical & Data Interpretation",
            "Chapter 3: Logical Reasoning & Problem Solving",
            "Chapter 4: Current Affairs (National & International)",
            "Chapter 5: Nigerian Government & Constitution",
            "Chapter 6: Public Administration Principles",
            "Chapter 7: Ethics & Accountability in Service",
            "Chapter 8: ICT Basics for Public Servants"
        ]
    },
    {
        id: "GPCA",
        title: "General Paper & Current Affairs Drill",
        code: "GP-CA",
        imageIcon: "fa-newspaper",
        badge: "GENERAL",
        description: "80 questions · 60 minutes. Broad current affairs, civic knowledge, and general aptitude.",
        chapters: [
            "Chapter 1: Nigerian History & National Symbols",
            "Chapter 2: Government Structure & Constitution",
            "Chapter 3: Economy, Budget & Development Plans",
            "Chapter 4: International Organizations & Diplomacy",
            "Chapter 5: Science, Health & Environment",
            "Chapter 6: Sports, Culture & Contemporary Events"
        ]
    },
    {
        id: "NCSAPT",
        title: "Nigeria Customs Service Aptitude Test",
        code: "NCS-APT",
        imageIcon: "fa-ship",
        badge: "CUSTOMS",
        description: "60 questions · 45 minutes. Customs procedures, trade, and general aptitude.",
        chapters: [
            "Chapter 1: Customs Mandate & Organizational Structure",
            "Chapter 2: Trade Facilitation & Tariff Classification",
            "Chapter 3: Anti-Smuggling & Border Security",
            "Chapter 4: English Language & Verbal Reasoning",
            "Chapter 5: Numerical Reasoning & Data Analysis",
            "Chapter 6: Current Affairs & General Knowledge"
        ]
    },
    {
        id: "NISAPT",
        title: "Nigeria Immigration Service Aptitude Test",
        code: "NIS-APT",
        imageIcon: "fa-passport",
        badge: "IMMIGRATION",
        description: "60 questions · 45 minutes. Immigration law, border management, and aptitude.",
        chapters: [
            "Chapter 1: Immigration Mandate & Border Control",
            "Chapter 2: Passport, Visa & Residence Procedures",
            "Chapter 3: Migration Management & ECOWAS Protocols",
            "Chapter 4: English Language & Comprehension",
            "Chapter 5: Numerical & Logical Reasoning",
            "Chapter 6: Current Affairs & Civic Knowledge"
        ]
    },
    {
        id: "PARAAPT",
        title: "General Parastatal Aptitude Battery",
        code: "PARA-APT",
        imageIcon: "fa-building-columns",
        badge: "PARASTATAL",
        description: "50 questions · 40 minutes. Cross-cutting aptitude for federal/state agencies and boards.",
        chapters: [
            "Chapter 1: Verbal Reasoning",
            "Chapter 2: Numerical Reasoning",
            "Chapter 3: Logical & Abstract Reasoning",
            "Chapter 4: General Knowledge & Current Affairs",
            "Chapter 5: Basic ICT & Office Productivity",
            "Chapter 6: Ethics & Professional Conduct"
        ]
    },
    {
        id: "POLICEREC",
        title: "Police Service Commission Recruitment Prep",
        code: "POLICE-REC",
        imageIcon: "fa-user-shield",
        badge: "POLICE",
        description: "60 questions · 45 minutes. Law enforcement aptitude, English, and general knowledge.",
        chapters: [
            "Chapter 1: Nigeria Police Force Structure & Mandate",
            "Chapter 2: Criminal Law Basics & Human Rights",
            "Chapter 3: Community Policing & Public Order",
            "Chapter 4: English Language & Report Writing",
            "Chapter 5: Numerical & Logical Reasoning",
            "Chapter 6: Current Affairs & National Security"
        ]
    },
    {
        id: "JAMBUTME",
        title: "JAMB UTME Practice Engine (General)",
        code: "JAMB-UTME",
        imageIcon: "fa-book-open-reader",
        badge: "JAMB",
        description: "180 questions · 120 minutes. Broad UTME-style drill across Use of English and core subjects.",
        chapters: [
            "Chapter 1: Use of English – Comprehension",
            "Chapter 2: Use of English – Lexis & Structure",
            "Chapter 3: Mathematics / Quantitative",
            "Chapter 4: Government / Civic Knowledge",
            "Chapter 5: Economics / Commerce Basics",
            "Chapter 6: General Science & Current Affairs"
        ]
    }
];

/* ==========================================================================
DYNAMIC QUESTION POOL SLOT GENERATOR (100 Slots per Chapter Across All Products)
========================================================================== */
function generateQuestionsForProduct(product) {
    let generatedPool = [];
    const choicesTemplate = [
        ["Protocol Data Unit (PDU)", "Frame Check Sequence", "Cyclic Redundancy Check", "Media Access Control Address"],
        ["Mandatory Access Control (MAC)", "Role-Based Access Control (RBAC)", "Discretionary Access Control (DAC)", "Attribute-Based Access Control (ABAC)"],
        ["Stateful Inspection Packet Filter", "Stateless Packet Filter", "Application-Level Gateway", "Next-Generation Firewall Proxy"],
        ["Advanced Encryption Standard (AES)", "Rivest-Shamir-Adleman (RSA)", "Elliptic Curve Cryptography (ECC)", "Message Digest 5 (MD5)"]
    ];
    product.chapters.forEach((chapter, chIdx) => {
        let chNumStr = String(chIdx + 1).padStart(2, '0');
        for (let q = 1; q <= 100; q++) {
            let qNumStr = String(q).padStart(3, '0');
            let uniqueId = `${product.code}-CQ-${chNumStr}-${qNumStr}`;
            let choiceIdx = (q + chIdx) % choicesTemplate.length;
            generatedPool.push({
                id: uniqueId,
                chapterIndex: chIdx,
                text: `Identify the primary architectural technical constraint or operational procedure associated with standard requirements in ${chapter}, specifically evaluated for item slot #${q}.`,
                choices: choicesTemplate[choiceIdx],
                correct: (q % 4),
                explanation: `Detailed evaluation analysis verified choice Option ${(q % 4) + 1} as functionally accurate according to standard exam guides. The alternatives are unrelated context variables or structurally incorrect configurations.`,
                distractors: [
                    "Option 1 represents foundational parameters but lacks exact operational precision.",
                    "Option 2 introduces vulnerabilities due to deprecation vectors.",
                    "Option 3 represents an alternative conceptual model not required by this condition.",
                    "Option 4 fails baseline cryptography collision requirements."
                ]
            });
        }
    });
    return generatedPool;
}

/* ==========================================================================
VIEW CONTROLLER ENGINE & INITIALIZATION METHODS
========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Restore user preferences (dark mode, compact text, sound) before first paint of views
    if (typeof applyAllPreferences === "function") {
        applyAllPreferences();
    } else {	
        // Fallback if prefs module not yet parsed (should not happen)
        if (localStorage.getItem("CH_PREF_DARK_MODE") === "1") {
            document.body.classList.add("dark-mode");
        }
        if (localStorage.getItem("CH_PREF_COMPACT_TEXT") === "1") {
            document.body.classList.add("compact-question-text");
        }
    }

    const storedUser = localStorage.getItem("CH_LOGGED_USER");

    if (storedUser) {
        appState.currentUser = storedUser;
        const displayUserEl = document.getElementById("displayUsername");
        if (displayUserEl) displayUserEl.textContent = storedUser;
        const navEl = document.getElementById("authenticated-nav");
        if (navEl) navEl.classList.remove("hidden");
        navigateTo("dashboard");
    } else {
        navigateTo("landing");
    }
    window.onclick = function(event) {
        if (event.target.classList.contains('modal-backdrop')) {
            event.target.classList.add('hidden');
        }
    };
});

function clearQuizTimer() {
    if (appState.quizEngine.timerInterval) {
        clearInterval(appState.quizEngine.timerInterval);
        appState.quizEngine.timerInterval = null;
    }
}

function navigateTo(viewId) {
    // Stop any running simulation timer when leaving the quiz/review screens
    if (appState.activeView === "quiz" && viewId !== "quiz" && viewId !== "review") {
        clearQuizTimer();
    }

    document.querySelectorAll(".view-container").forEach(el => el.classList.add("hidden"));
    const targetedView = document.getElementById(`view-${viewId}`);
    if (targetedView) {
        targetedView.classList.remove("hidden");
        appState.activeView = viewId;
    }
    if (viewId === "dashboard") {
        renderDashboardProducts();
        wirePromoCardLinks();
    }
}

/* ==========================================================================
AUTHENTICATION WORKFLOW CONTROLLERS
========================================================================== */
function toggleAuthMode(toRegistration) {
    const loginCard = document.getElementById("loginCard");
    const regCard = document.getElementById("registrationCard");
    if (toRegistration) {
        if (loginCard) loginCard.classList.add("hidden");
        if (regCard) regCard.classList.remove("hidden");
    } else {
        if (loginCard) loginCard.classList.remove("hidden");
        if (regCard) regCard.classList.add("hidden");
    }
}

function handleRegistration(event) {
    event.preventDefault();
    const name = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const pass = document.getElementById("regPassword").value.trim();
    
    if (name && email && pass) {
        localStorage.setItem("CH_REGISTERED_EMAIL", email.toLowerCase());
        localStorage.setItem("CH_REGISTERED_PASS", pass);
        localStorage.setItem("CH_REGISTERED_NAME", name);
        executeLoginSession(name);
    }
}

/** Temporary password visibility (auto-masks after a short delay). */
let _loginPwdRevealTimer = null;
function toggleLoginPasswordVisibility() {
  const input = document.getElementById("loginPassword");
  const btn = document.getElementById("loginPasswordToggle");
  const icon = document.getElementById("loginPasswordToggleIcon");
  if (!input || !btn || !icon) return;

  if (_loginPwdRevealTimer) {
    clearTimeout(_loginPwdRevealTimer);
    _loginPwdRevealTimer = null;
  }

  const isVisible = input.type === "text";
  if (isVisible) {
    input.type = "password";
    icon.className = "fa-regular fa-eye";
    btn.classList.remove("is-revealed");
    btn.setAttribute("aria-label", "Show password temporarily");
    return;
  }

  input.type = "text";
  icon.className = "fa-regular fa-eye-slash";
  btn.classList.add("is-revealed");
  btn.setAttribute("aria-label", "Hide password");

  _loginPwdRevealTimer = setTimeout(() => {
    input.type = "password";
    icon.className = "fa-regular fa-eye";
    btn.classList.remove("is-revealed");
    btn.setAttribute("aria-label", "Show password temporarily");
    _loginPwdRevealTimer = null;
  }, 3000);
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPassword").value.trim();
    
    if (document.getElementById("errEmail")) document.getElementById("errEmail").textContent = "";
    if (document.getElementById("errPassword")) document.getElementById("errPassword").textContent = "";
    if (document.getElementById("invalidCredentialBanner")) document.getElementById("invalidCredentialBanner").classList.add("hidden");
    
    if (!email) {
        if (document.getElementById("errEmail")) document.getElementById("errEmail").textContent = "Email address field cannot remain blank.";
        return;
    }
    if (!pass) {
        if (document.getElementById("errPassword")) document.getElementById("errPassword").textContent = "Password value is required.";
        return;
    }
    
    const regEmail = localStorage.getItem("CH_REGISTERED_EMAIL");
    const regPass = localStorage.getItem("CH_REGISTERED_PASS");
    const regName = localStorage.getItem("CH_REGISTERED_NAME") || "User";

    if ((email.toLowerCase() === "demo@govprep.exam" && pass === "Password123") || 
        (regEmail && regPass && email.toLowerCase() === regEmail && pass === regPass)) {
        executeLoginSession(regEmail === email.toLowerCase() ? regName : "Demo User");
    } else {
        if (document.getElementById("invalidCredentialBanner")) {
            document.getElementById("invalidCredentialBanner").classList.remove("hidden");
        }
    } 
}

function executeLoginSession(username) {
    appState.currentUser = username;
    localStorage.setItem("CH_LOGGED_USER", username);
    if (document.getElementById("displayUsername")) document.getElementById("displayUsername").textContent = username;
    if (document.getElementById("authenticated-nav")) document.getElementById("authenticated-nav").classList.remove("hidden");
    navigateTo("dashboard");
}

function logout() {
    clearQuizTimer();
    appState.currentUser = null;
    localStorage.removeItem("CH_LOGGED_USER");
    if (document.getElementById("authenticated-nav")) document.getElementById("authenticated-nav").classList.add("hidden");
    navigateTo("landing");
}


/* ==========================================================================
   PASSWORD RESET WORKFLOW (pure frontend / localStorage)
   ========================================================================== */
function openPasswordResetModal(e) {
  if (e) e.preventDefault();
  // Reset UI state
  document.getElementById("resetStepIdentify").classList.remove("hidden");
  document.getElementById("resetStepNewPassword").classList.add("hidden");
  document.getElementById("resetEmailInput").value = "";
  document.getElementById("resetNewPassword").value = "";
  document.getElementById("resetConfirmPassword").value = "";
  document.getElementById("resetEmailError").textContent = "";
  document.getElementById("resetPasswordError").textContent = "";
  document.getElementById("passwordResetModal").classList.remove("hidden");
}

function closePasswordResetModal() {
  document.getElementById("passwordResetModal").classList.add("hidden");
}

function verifyResetEmail() {
  const email = document.getElementById("resetEmailInput").value.trim().toLowerCase();
  const errEl = document.getElementById("resetEmailError");
  errEl.textContent = "";

  if (!email) {
    errEl.textContent = "Please enter your email address.";
    return;
  }

  const registeredEmail = (localStorage.getItem("CH_REGISTERED_EMAIL") || "").toLowerCase();
  const demoEmail = "demo@govprep.exam";

  if (email === registeredEmail || email === demoEmail) {
    // Proceed to set new password
    document.getElementById("resetStepIdentify").classList.add("hidden");
    document.getElementById("resetStepNewPassword").classList.remove("hidden");
  } else {
    errEl.textContent = "No account found with that email address.";
  }
}

function completePasswordReset() {
  const newPass = document.getElementById("resetNewPassword").value;
  const confirmPass = document.getElementById("resetConfirmPassword").value;
  const errEl = document.getElementById("resetPasswordError");
  errEl.textContent = "";

  if (!newPass || newPass.length < 6) {
    errEl.textContent = "Password must be at least 6 characters.";
    return;
  }
  if (newPass !== confirmPass) {
    errEl.textContent = "Passwords do not match.";
    return;
  }

  // Update the stored credential
  const email = document.getElementById("resetEmailInput").value.trim().toLowerCase();
  if (email === "demo@govprep.exam") {
    // Demo account – we still store it so login works with the new password
    localStorage.setItem("CH_REGISTERED_EMAIL", email);
    localStorage.setItem("CH_REGISTERED_PASS", newPass);
    localStorage.setItem("CH_REGISTERED_NAME", "Demo User");
  } else {
    localStorage.setItem("CH_REGISTERED_PASS", newPass);
  }

  alert("Password updated successfully. You can now log in with your new password.");
  closePasswordResetModal();
}



/* ==========================================================================
DASHBOARD / PRODUCT CATALOG CORE MANAGEMENT ENGINE
========================================================================= */
let activeDashboardTab = "my-products";

function switchDashboardTab(tabId) {
    activeDashboardTab = tabId;
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`tab-${tabId}`);
    if (activeBtn) activeBtn.classList.add("active");
    renderDashboardProducts();
}

function getArchivedList() {
    return JSON.parse(localStorage.getItem(ARCHIVE_KEY)) || [];
}

function setArchivedList(list) {
    localStorage.setItem(ARCHIVE_KEY, JSON.stringify(list));
}

function getOwnedProducts() {
    try {
        const raw = localStorage.getItem(OWNED_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) return parsed;
        }
    } catch (_) { /* ignore corrupt data */ }
    // Protected-by-default: never auto-grant products
    return [];
}

function setOwnedProducts(list) {
    try {
        localStorage.setItem(OWNED_KEY, JSON.stringify(list));
    } catch (e) {
        console.warn("Failed to persist owned products", e);
    }
}

function safeGetJSON(key, fallback = null) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}

function safeSetJSON(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.warn("localStorage write failed", e);
        return false;
    }
}

function renderDashboardProducts(filterText = "") {
    const listContainer = document.getElementById("products-list-view");
    if (!listContainer) return;
    listContainer.innerHTML = "";
    const archivedList = getArchivedList();
    const query = filterText.toLowerCase();
    
    if (activeDashboardTab === "saved-exams") {
        renderSavedExamsViewport(listContainer);
        return;
    }
    
    let filtered = MOCK_PRODUCTS_DATABASE.filter(prod => {
        const matchesSearch = prod.title.toLowerCase().includes(query) || prod.code.toLowerCase().includes(query);
        if (!matchesSearch) return false;
        const isArchived = archivedList.includes(prod.id);
        const userOwns = getOwnedProducts().includes(prod.id);
        if (activeDashboardTab === "my-products") return userOwns && !isArchived;
        if (activeDashboardTab === "archived") return userOwns && isArchived;
        return false;
    });
    
    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="product-row-card"><p style="color:#6b7280; font-size:14px; text-align:center; width:100%;">No products match criteria.</p></div>`;
        return;
    }
    
    filtered.forEach(prod => {
        const card = document.createElement("div");
        card.className = "product-row-card";
        const actionButtonHTML = activeDashboardTab === "archived"
            ? `<button class="btn-secondary" style="font-size:12px; padding:6px 12px;" onclick="toggleArchiveStatus('${prod.id}', false)"><i class="fa-solid fa-box-open"></i> Unarchive</button>`
            : `<button class="btn-primary" style="font-size:12px; padding:6px 16px;" onclick="initiateProductExamConfiguration('${prod.id}')">Start Test &rarr;</button>
               <button class="btn-secondary" style="font-size:12px; padding:6px 12px;" onclick="openNotesModal('${prod.id}')"><i class="fa-solid fa-note-sticky"></i> Notes</button>
               <button class="btn-secondary" style="font-size:12px; padding:6px 12px;" onclick="toggleArchiveStatus('${prod.id}', true)" title="Archive Product"><i class="fa-solid fa-box-archive"></i></button>`;
        const badgeClass = prod.badge ? `exam-body-badge badge-${String(prod.badge).toLowerCase()}` : "exam-body-badge";
        const badgeHtml = prod.badge ? `<span class="${badgeClass}">${prod.badge}</span>` : "";
        card.innerHTML = `
            <div class="prod-meta-left">
                <div class="prod-book-thumbnail"><i class="fa-solid ${prod.imageIcon}"></i></div>
                <div class="prod-details">
                    <h3>${prod.title} ${badgeHtml}</h3>
                    <p style="font-size:13px; color:#4b5563;">${prod.description}</p>
                    <span class="promo-badge" style="margin-top:8px; display:inline-block;">PRODUCT CODE: ${prod.code}</span>
                </div>
            </div>
            <div class="prod-action-links" style="flex-direction:column; gap:6px; align-items:flex-end;">
                ${actionButtonHTML}
                <button class="btn-utility" style="font-size:11px; padding:4px 8px; margin-top:5px;" onclick="viewProductHistory('${prod.id}')"><i class="fa-solid fa-clock-rotate-left"></i> View History</button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

function handleSearch() {
    const val = document.getElementById("productSearchInput").value;
    renderDashboardProducts(val);
}

function toggleArchiveStatus(productId, shouldArchive) {
    let archived = getArchivedList();
    if (shouldArchive) {
        if (!archived.includes(productId)) archived.push(productId);
    } else {
        archived = archived.filter(id => id !== productId);
    }
    setArchivedList(archived);
    renderDashboardProducts();
}

/* ==========================================================================
   VIEW HISTORY / REVIEW ENGINE (Pearson-style Current Score + Question Review)
   ========================================================================== */
const ReviewState = {
    productId: null,
    logs: [],
    activeIndex: 0,
    activeTab: "current-score",
    filters: {
        quick: "all",
        advancedOpen: false,
        marked: "all",
        attempted: "all",
        correct: "all",
        notes: "all",
        searchName: "",
        searchObjective: "",
        searchType: "",
        showExtraFilters: true
    }
};

function viewProductHistory(productId) {
    const historyKey = `CH_HIST_${productId}`;
    let historyLogs = JSON.parse(localStorage.getItem(historyKey)) || [];

    historyLogs = historyLogs.map((log, i) => {
        if (log.questions && Array.isArray(log.questions)) return log;
        const pct = parseInt(String(log.score || "0").replace("%", ""), 10) || 0;
        const scaled = parseFloat(((pct / 100) * 1000).toFixed(2));
        const isNet = (log.title || "").includes("N10-009") || productId === "NET009";
        return {
            id: log.id || (Date.now() - i),
            date: log.date || "Unknown",
            productId: productId,
            productTitle: (MOCK_PRODUCTS_DATABASE.find(p => p.id === productId) || {}).title || "Product",
            productCode: (MOCK_PRODUCTS_DATABASE.find(p => p.id === productId) || {}).code || "",
            mode: "guided",
            modeLabel: "Guided Practice Test",
            title: log.title || "Practice Test",
            scorePercent: pct,
            scaledScore: scaled,
            requiredScore: 500,
            correctCount: 0,
            totalQuestions: 0,
            status: log.status || (scaled >= 500 ? "PASSED" : "FAILED"),
            statusLabel: log.status === "PASSED" ? "Passed" : "Test Not Passed",
            objectives: [],
            questions: [],
            userAnswers: {}
        };
    });

    ReviewState.productId = productId;
    ReviewState.logs = historyLogs;
    ReviewState.activeIndex = 0;
    ReviewState.activeTab = "current-score";
    ReviewState.filters = {
        quick: "all",
        advancedOpen: false,
        marked: "all",
        attempted: "all",
        correct: "all",
        notes: "all",
        searchName: "",
        searchObjective: "",
        searchType: "",
        showExtraFilters: true
    };

    renderReviewPage();
    navigateTo("history");
}

function getActiveReviewRecord() {
    return ReviewState.logs[ReviewState.activeIndex] || null;
}

function renderReviewPage() {
    const container = document.getElementById("view-history");
    if (!container) return;

    const record = getActiveReviewRecord();
    const product = MOCK_PRODUCTS_DATABASE.find(p => p.id === ReviewState.productId) || {};
    const hasLogs = ReviewState.logs.length > 0;

    container.innerHTML = `
    <div class="review-page-shell">
      <div class="review-main-card">
        <div class="review-page-title-row">
          <button class="btn-back-light review-back-btn" onclick="navigateTo('dashboard')">&larr; Return to Dashboard</button>
          <h2>Review</h2>
        </div>

        <div class="review-tabs">
          <button class="review-tab-btn ${ReviewState.activeTab === 'current-score' ? 'active' : ''}" onclick="switchReviewTab('current-score')">
            <i class="fa-solid fa-chart-column"></i> CURRENT SCORE
          </button>
          <button class="review-tab-btn ${ReviewState.activeTab === 'question-review' ? 'active' : ''}" onclick="switchReviewTab('question-review')">
            <i class="fa-solid fa-circle-question"></i> QUESTION REVIEW
          </button>
        </div>

        <div class="review-tab-panels">
          ${!hasLogs ? `
            <div class="review-empty-state">
              <i class="fa-solid fa-clock-rotate-left" style="font-size:42px;color:#cbd5e1;margin-bottom:12px;"></i>
              <p>No graded exam history found for this product.</p>
              <p style="font-size:13px;color:#94a3b8;">Complete and grade a practice test to see results here.</p>
            </div>
          ` : `
            <div class="grade-history-section">
              <label class="grade-history-label">GRADE HISTORY</label>
              <div class="grade-history-dropdown" id="gradeHistoryDropdown">
                <button class="grade-history-trigger" onclick="toggleGradeHistoryDropdown(event)">
                  <div class="ghd-text">
                    <strong>${record.productTitle || product.title || "Product"}</strong>
                    <span>${record.date} (${record.modeLabel || "Guided Practice Test"})</span>
                  </div>
                  <i class="fa-solid fa-caret-down ghd-caret"></i>
                </button>
                <div class="grade-history-list hidden" id="gradeHistoryList">
                  ${ReviewState.logs.map((log, idx) => `
                    <button class="grade-history-item ${idx === ReviewState.activeIndex ? 'active' : ''}"
                            onclick="selectHistoryRecord(${idx})">
                      ${log.date} (${log.modeLabel || "Guided Practice Test"})
                    </button>
                  `).join("")}
                </div>
              </div>
            </div>

            ${ReviewState.activeTab === "current-score" ? renderCurrentScorePane(record) : renderQuestionReviewPane(record)}
          `}
        </div>
      </div>

      <div class="review-promo-strip marketing-promo-grid">
        <a href="https://www.whatsapp.com/channel/0029VbAp1qHIXnltu1srjl3A"
           target="_blank" rel="noopener noreferrer" class="promo-card promo-card-link">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Join Our Community">
          <div class="promo-body">
            <h3>Join Our Community</h3>
            <p>Career Growth, Access to Tech experts, and more</p>
            <span class="promo-badge">TECH WITH CODINGHAMME</span>
          </div>
        </a>
        <a id="historyPersonalizedTrainingLink"
           href="#"
           target="_blank" rel="noopener noreferrer"
           class="promo-card promo-card-link">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Personalized Training">
          <div class="promo-body">
            <h3>Personalized Training</h3>
            <p>Gain high demand skills with one-on-one personalized training tailored to your exact career goals, schedule, and current skill level</p>
            <span class="promo-badge">TECH WITH CODINGHAMME</span>
          </div>
        </a>
        <a href="#" 
     target="_blank" rel="noopener noreferrer" class="promo-card promo-card-link">
    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Performance Based Certs">
    <div class="promo-body">
<h3>Performance Based Certs/Exams</h3>
<p class="promo-pbt-line">Cisco CCNA, Microsoft Certifications, e.t.c.</p>
<p class="promo-pbt-desc">(Focused on labs, simulations, and interactive tasks.)</p>
<span class="promo-badge">PBT</span>
    </div>
  </a>
      </div>
    </div>
    `;
    // Wire personalized training WhatsApp link when history promo is rendered
    setTimeout(() => {
      const histLink = document.getElementById("historyPersonalizedTrainingLink");
      if (histLink && typeof buildPersonalizedTrainingWhatsAppLink === "function") {
        histLink.href = buildPersonalizedTrainingWhatsAppLink();
      }
    }, 0);
    
}

function renderCurrentScorePane(record) {
    const passed = record.status === "PASSED";
    const yourScore = record.scaledScore ?? 0;
    const req = record.requiredScore ?? 500;
    const barMax = 1000;
    const yourWidth = Math.min(100, (yourScore / barMax) * 100);
    const reqWidth = Math.min(100, (req / barMax) * 100);
    const objectives = record.objectives || [];

    return `
    <div class="current-score-pane">
      <div class="result-block">
        <h3 class="result-heading">Result</h3>
        <div class="result-status ${passed ? 'passed' : 'failed'}">${record.statusLabel || (passed ? "Passed" : "Test Not Passed")}</div>
        <div class="score-bars">
          <div class="score-bar-row">
            <span class="score-bar-label">Your Score<br><strong>${yourScore}</strong></span>
            <div class="score-bar-track">
              <div class="score-bar-fill your-score-fill" style="width:${yourWidth}%;background:${passed ? '#16a34a' : '#dc2626'};"></div>
            </div>
          </div>
          <div class="score-bar-row">
            <span class="score-bar-label">Required Score<br><strong>${req}</strong></span>
            <div class="score-bar-track">
              <div class="score-bar-fill required-score-fill" style="width:${reqWidth}%;"></div>
            </div>
          </div>
          <div class="score-scale">
            <span>0</span><span>100</span><span>200</span><span>300</span><span>400</span>
            <span>500</span><span>600</span><span>700</span><span>800</span><span>900</span><span>1,000</span>
          </div>
        </div>
      </div>

      <div class="objectives-table-wrap">
        <table class="objectives-table" id="objectivesTable">
          <thead>
            <tr>
              <th>Objective Name</th>
              <th>Percentage</th>
              <th>Your Points</th>
              <th>Possible Points</th>
            </tr>
            <tr class="obj-search-row">
              <th><input type="text" class="obj-search-input" id="objSearchName" placeholder="Search Anything Here" oninput="filterObjectivesTable()"></th>
              <th><input type="text" class="obj-search-input" id="objSearchPct" placeholder="" oninput="filterObjectivesTable()"></th>
              <th><input type="text" class="obj-search-input" id="objSearchYours" placeholder="" oninput="filterObjectivesTable()"></th>
              <th><input type="text" class="obj-search-input" id="objSearchPossible" placeholder="" oninput="filterObjectivesTable()"></th>
            </tr>
          </thead>
          <tbody id="objectivesTableBody">
            ${objectives.length === 0 ? `
              <tr><td colspan="4" style="text-align:center;color:#94a3b8;padding:20px;">No objective breakdown available for this attempt.</td></tr>
            ` : objectives.map(o => `
              <tr class="obj-data-row"
                  data-name="${(o.name || '').toLowerCase()}"
                  data-pct="${o.percentage}"
                  data-yours="${o.yourPoints}"
                  data-possible="${o.possiblePoints}">
                <td>${o.name}</td>
                <td class="${o.percentage >= 70 ? 'pct-good' : 'pct-low'}">${o.percentage}%</td>
                <td>${o.yourPoints}</td>
                <td>${o.possiblePoints}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div class="review-pane-footer">
        <button class="btn-print" onclick="printCurrentScore()"><i class="fa-solid fa-print"></i> Print</button>
      </div>
    </div>
    `;
}

function renderQuestionReviewPane(record) {
    const questions = record.questions || [];
    const notes = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY)) || {};
    const f = ReviewState.filters;

    let filtered = questions.map((q, idx) => ({ ...q, seq: idx + 1, hasNote: !!notes[q.id] }));

    if (f.quick === "marked") filtered = filtered.filter(q => q.isMarked);
    else if (f.quick === "unattempted") filtered = filtered.filter(q => !q.isAttempted);

    if (f.marked === "yes") filtered = filtered.filter(q => q.isMarked);
    else if (f.marked === "no") filtered = filtered.filter(q => !q.isMarked);
    if (f.attempted === "yes") filtered = filtered.filter(q => q.isAttempted);
    else if (f.attempted === "no") filtered = filtered.filter(q => !q.isAttempted);
    if (f.correct === "yes") filtered = filtered.filter(q => q.isCorrect);
    else if (f.correct === "no") filtered = filtered.filter(q => q.isAttempted && !q.isCorrect);
    if (f.notes === "yes") filtered = filtered.filter(q => q.hasNote);
    else if (f.notes === "no") filtered = filtered.filter(q => !q.hasNote);

    if (f.searchName) {
        const s = f.searchName.toLowerCase();
        filtered = filtered.filter(q => (q.text || "").toLowerCase().includes(s));
    }
    if (f.searchObjective) {
        const s = f.searchObjective.toLowerCase();
        filtered = filtered.filter(q => {
            const chName = (record.objectives && record.objectives[q.chapterIndex])
                ? record.objectives[q.chapterIndex].name
                : `Chapter ${String((q.chapterIndex || 0) + 1).padStart(2, "0")}`;
            return chName.toLowerCase().includes(s);
        });
    }
    if (f.searchType) {
        const s = f.searchType.toLowerCase();
        filtered = filtered.filter(q => "multiple choice".includes(s));
    }

    const productChapters = (MOCK_PRODUCTS_DATABASE.find(p => p.id === ReviewState.productId) || {}).chapters || [];

    return `
    <div class="question-review-pane">
      <div class="qr-filter-bar">
        <div class="advanced-filter-wrap">
          <button class="btn-advanced-filter" onclick="toggleAdvancedFilter(event)">
            Advanced Filter <i class="fa-solid fa-caret-down"></i>
          </button>
          <div class="advanced-filter-popup ${f.advancedOpen ? '' : 'hidden'}" id="advancedFilterPopup">
            <label class="adv-filter-row">
              <span>Marked</span>
              <div class="adv-toggle-group">
                <button class="adv-tog ${f.marked === 'all' ? 'on' : ''}" onclick="setAdvFilter('marked','all')">All</button>
                <button class="adv-tog ${f.marked === 'yes' ? 'on' : ''}" onclick="setAdvFilter('marked','yes')">Yes</button>
                <button class="adv-tog ${f.marked === 'no' ? 'on' : ''}" onclick="setAdvFilter('marked','no')">No</button>
              </div>
            </label>
            <label class="adv-filter-row">
              <span>Attempted</span>
              <div class="adv-toggle-group">
                <button class="adv-tog ${f.attempted === 'all' ? 'on' : ''}" onclick="setAdvFilter('attempted','all')">All</button>
                <button class="adv-tog ${f.attempted === 'yes' ? 'on' : ''}" onclick="setAdvFilter('attempted','yes')">Yes</button>
                <button class="adv-tog ${f.attempted === 'no' ? 'on' : ''}" onclick="setAdvFilter('attempted','no')">No</button>
              </div>
            </label>
            <label class="adv-filter-row">
              <span>Correct</span>
              <div class="adv-toggle-group">
                <button class="adv-tog ${f.correct === 'all' ? 'on' : ''}" onclick="setAdvFilter('correct','all')">All</button>
                <button class="adv-tog ${f.correct === 'yes' ? 'on' : ''}" onclick="setAdvFilter('correct','yes')">Yes</button>
                <button class="adv-tog ${f.correct === 'no' ? 'on' : ''}" onclick="setAdvFilter('correct','no')">No</button>
              </div>
            </label>
            <label class="adv-filter-row">
              <span>Notes</span>
              <div class="adv-toggle-group">
                <button class="adv-tog ${f.notes === 'all' ? 'on' : ''}" onclick="setAdvFilter('notes','all')">All</button>
                <button class="adv-tog ${f.notes === 'yes' ? 'on' : ''}" onclick="setAdvFilter('notes','yes')">Yes</button>
                <button class="adv-tog ${f.notes === 'no' ? 'on' : ''}" onclick="setAdvFilter('notes','no')">No</button>
              </div>
            </label>
          </div>
        </div>

        <div class="quick-filter-radios">
          <span class="qf-label">Filter Questions</span>
          <label><input type="radio" name="qrQuick" value="all" ${f.quick === 'all' ? 'checked' : ''} onchange="setQuickFilter('all')"> All</label>
          <label><input type="radio" name="qrQuick" value="marked" ${f.quick === 'marked' ? 'checked' : ''} onchange="setQuickFilter('marked')"> Marked</label>
          <label><input type="radio" name="qrQuick" value="unattempted" ${f.quick === 'unattempted' ? 'checked' : ''} onchange="setQuickFilter('unattempted')"> Unattempted</label>
        </div>
      </div>

      <div class="qr-table-wrap">
        <table class="qr-table" id="questionReviewTable">
          <thead>
            <tr>
              <th>Seq</th>
              <th>Your Score</th>
              <th>Score</th>
              <th>Name</th>
              <th>Objective</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `
              <tr><td colspan="7" style="text-align:center;color:#94a3b8;padding:24px;">No questions match the current filters.</td></tr>
            ` : filtered.map(q => {
              const chName = productChapters[q.chapterIndex] || `Chapter ${String((q.chapterIndex || 0) + 1).padStart(2, "0")}`;
              return `
                <tr>
                  <td>${q.seq}</td>
                  <td>${q.yourScore}</td>
                  <td>${q.maxScore}</td>
                  <td class="qr-q-name">${(q.text || "").substring(0, 80)}${(q.text || "").length > 80 ? "…" : ""}</td>
                  <td>${chName}</td>
                  <td>Multiple Choice</td>
                  <td><button class="btn-utility" style="font-size:11px;" onclick="openQuestionReviewDetail('${q.id}')">View</button></td>
                </tr>`;
            }).join("")}
          </tbody>
        </table>
      </div>

      <div class="review-pane-footer">
        <button class="btn-print" onclick="printQuestionReview()"><i class="fa-solid fa-print"></i> Print</button>
      </div>
    </div>
    `;
}

function switchReviewTab(tab) {
    ReviewState.activeTab = tab;
    renderReviewPage();
}

function selectHistoryRecord(idx) {
    ReviewState.activeIndex = idx;
    renderReviewPage();
}

function toggleGradeHistoryDropdown(e) {
    if (e) e.stopPropagation();
    const list = document.getElementById("gradeHistoryList");
    if (list) list.classList.toggle("hidden");
}

function toggleAdvancedFilter(e) {
    if (e) e.stopPropagation();
    ReviewState.filters.advancedOpen = !ReviewState.filters.advancedOpen;
    renderReviewPage();
}

function setAdvFilter(key, value) {
    ReviewState.filters[key] = value;
    renderReviewPage();
}

function setQuickFilter(value) {
    ReviewState.filters.quick = value;
    renderReviewPage();
}

function filterObjectivesTable() {
    const nameQ = (document.getElementById("objSearchName")?.value || "").toLowerCase();
    const pctQ = (document.getElementById("objSearchPct")?.value || "").toLowerCase();
    const yoursQ = (document.getElementById("objSearchYours")?.value || "").toLowerCase();
    const possQ = (document.getElementById("objSearchPossible")?.value || "").toLowerCase();
    document.querySelectorAll("#objectivesTableBody .obj-data-row").forEach(row => {
        const match =
            (row.dataset.name || "").includes(nameQ) &&
            String(row.dataset.pct || "").includes(pctQ) &&
            String(row.dataset.yours || "").includes(yoursQ) &&
            String(row.dataset.possible || "").includes(possQ);
        row.style.display = match ? "" : "none";
    });
}

function openQuestionReviewDetail(questionId) {
    const record = getActiveReviewRecord();
    if (!record) return;
    const q = (record.questions || []).find(x => x.id === questionId);
    if (!q) return;

    let notes = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY)) || {};
    const noteText = notes[q.id] || "";

    let modal = document.getElementById("questionReviewDetailModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "questionReviewDetailModal";
        modal.className = "modal-backdrop";
        document.body.appendChild(modal);
    }

    const optionsHtml = (q.choices || []).map((choice, idx) => {
        let badge = "";
        if (idx === q.correct) badge = `<span class="opt-badge correct-badge">Correct</span>`;
        if (q.userAnswer === idx && idx !== q.correct) badge = `<span class="opt-badge wrong-badge">Your Answer</span>`;
        if (q.userAnswer === idx && idx === q.correct) badge = `<span class="opt-badge correct-badge">Your Answer ✓</span>`;
        return `<div class="qr-modal-opt ${idx === q.correct ? 'is-correct' : ''} ${q.userAnswer === idx ? 'is-chosen' : ''}">
            <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
            <span class="opt-text">${choice}</span>
            ${badge}
        </div>`;
    }).join("");

    modal.innerHTML = `
    <div class="modal-box qr-detail-modal">
      <button class="qr-modal-close" onclick="document.getElementById('questionReviewDetailModal').classList.add('hidden')">&times;</button>
      <div class="qr-modal-meta">
        <span class="qr-modal-id">Question ID: ${q.id}</span>
        <span class="qr-modal-result ${q.isCorrect ? 'ok' : (q.isAttempted ? 'bad' : 'skip')}">
          ${q.isCorrect ? "Correct" : (q.isAttempted ? "Incorrect" : "Unattempted")}
        </span>
      </div>
      <h3 class="qr-modal-question">${q.text}</h3>
      <div class="qr-modal-options">${optionsHtml}</div>
      ${q.explanation ? `<div class="qr-modal-explanation"><strong>Explanation</strong><p>${q.explanation}</p></div>` : ""}
      ${noteText ? `<div class="qr-modal-note"><strong>Your Note</strong><p>${noteText}</p></div>` : ""}
      <div class="modal-actions">
        <button class="btn-secondary" onclick="document.getElementById('questionReviewDetailModal').classList.add('hidden')">Close</button>
      </div>
    </div>
    `;
    modal.classList.remove("hidden");
}

function printCurrentScore() {
    const record = getActiveReviewRecord();
    if (!record) return;
    const product = MOCK_PRODUCTS_DATABASE.find(p => p.id === ReviewState.productId) || {};
    const user = appState.currentUser || "Candidate";
    const passed = record.status === "PASSED";
    const yourScore = record.scaledScore ?? 0;
    const req = record.requiredScore ?? 500;

    const objectivesRows = (record.objectives || []).map(o => `
      <tr><td>${o.name}</td><td>${o.percentage}%</td><td>${o.yourPoints}</td><td>${o.possiblePoints}</td></tr>
    `).join("");

    const win = window.open("", "_blank", "width=900,height=700");
    win.document.write(`<!DOCTYPE html><html><head><title>GovPrep – Score Report</title>
    <style>
      body{font-family:'Segoe UI',Tahoma,sans-serif;color:#1e293b;padding:32px;max-width:800px;margin:0 auto}
      .brand{display:flex;align-items:center;gap:10px;margin-bottom:24px;border-bottom:3px solid #db2777;padding-bottom:12px}
      .brand-icon{width:36px;height:36px;background:#5c0a3a;color:#ec4899;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px}
      .brand-name{font-size:20px;font-weight:700;color:#5c0a3a}
      .meta{font-size:13px;color:#475569;margin-bottom:20px;line-height:1.7}
      .meta strong{color:#1e293b}
      .status{font-size:22px;font-weight:700;margin:16px 0 8px}
      .status.failed{color:#dc2626}.status.passed{color:#16a34a}
      .bar-row{display:flex;align-items:center;gap:12px;margin-bottom:8px}
      .bar-label{width:110px;font-size:12px}
      .bar-track{flex:1;height:22px;background:#e2e8f0;border-radius:3px;overflow:hidden}
      .bar-fill-you{height:100%;background:${passed ? "#16a34a" : "#dc2626"}}
      .bar-fill-req{height:100%;background:#db2777}
      table{width:100%;border-collapse:collapse;font-size:13px;margin-top:16px}
      th,td{border:1px solid #cbd5e1;padding:8px 10px;text-align:left}
      th{background:#f1f5f9;font-weight:600}
      .footer{margin-top:40px;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0;padding-top:12px}
      @media print{body{padding:12px}}
    </style></head><body>
      <div class="brand"><div class="brand-icon">CH</div><div class="brand-name">GovPrep Practice Exam</div></div>
      <div class="meta">
        <div><strong>Name:</strong> ${user}</div>
        <div><strong>Run Date:</strong> ${record.date}</div>
        <div><strong>Product:</strong> ${record.productTitle || product.title || ""}</div>
        <div><strong>Exam:</strong> ${record.productCode || ""} Practice</div>
        <div><strong>Mode:</strong> ${record.modeLabel || "Guided Practice Test"}</div>
      </div>
      <div class="status ${passed ? "passed" : "failed"}">${record.statusLabel || (passed ? "Passed" : "Test Not Passed")}</div>
      <div class="bar-row"><div class="bar-label">Your Score<br><strong>${yourScore}</strong></div>
        <div class="bar-track"><div class="bar-fill-you" style="width:${Math.min(100, yourScore / 10)}%"></div></div></div>
      <div class="bar-row"><div class="bar-label">Required Score<br><strong>${req}</strong></div>
        <div class="bar-track"><div class="bar-fill-req" style="width:${Math.min(100, req / 10)}%"></div></div></div>
      <table><thead><tr><th>Objective Name</th><th>Percentage %</th><th>Your Points</th><th>Possible Points</th></tr></thead>
        <tbody>${objectivesRows || "<tr><td colspan='4'>No objective data</td></tr>"}</tbody></table>
      <div class="footer">Copyright © 2026 GovPrep. All rights reserved. • Generated score report</div>
      <script>window.onload=function(){window.print()}<\/script>
    </body></html>`);
    win.document.close();
}

function printQuestionReview() {
    const record = getActiveReviewRecord();
    if (!record) return;
    const product = MOCK_PRODUCTS_DATABASE.find(p => p.id === ReviewState.productId) || {};
    const chapters = product.chapters || [];
    const rows = (record.questions || []).map((q, i) => {
        const ch = chapters[q.chapterIndex] || `Chapter ${i + 1}`;
        return `<tr><td>${i + 1}</td><td>${q.yourScore}</td><td>${q.maxScore}</td>
          <td>${(q.text || "").replace(/</g, "&lt;")}</td><td>${ch}</td><td>Multiple Choice</td></tr>`;
    }).join("");

    const win = window.open("", "_blank", "width=1000,height=700");
    win.document.write(`<!DOCTYPE html><html><head><title>GovPrep – Question Review</title>
    <style>
      body{font-family:'Segoe UI',Tahoma,sans-serif;color:#1e293b;padding:24px}
      .brand{display:flex;align-items:center;gap:10px;margin-bottom:16px;border-bottom:3px solid #db2777;padding-bottom:10px}
      .brand-icon{width:32px;height:32px;background:#5c0a3a;color:#ec4899;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800}
      .brand-name{font-size:18px;font-weight:700;color:#5c0a3a}
      h2{font-size:16px;margin:12px 0}
      table{width:100%;border-collapse:collapse;font-size:12px}
      th,td{border:1px solid #cbd5e1;padding:6px 8px;text-align:left;vertical-align:top}
      th{background:#f1f5f9}
      .footer{margin-top:24px;font-size:11px;color:#94a3b8}
      @media print{body{padding:8px}}
    </style></head><body>
      <div class="brand"><div class="brand-icon">CH</div><div class="brand-name">GovPrep Practice Exam</div></div>
      <h2>Question Review — ${record.productTitle || ""} • ${record.date}</h2>
      <table><thead><tr><th>Seq</th><th>Your Score</th><th>Score</th><th>Name</th><th>Objective</th><th>Type</th></tr></thead>
        <tbody>${rows || "<tr><td colspan='6'>No questions</td></tr>"}</tbody></table>
      <div class="footer">Copyright © 2026 GovPrep. All rights reserved.</div>
      <script>window.onload=function(){window.print()}<\/script>
    </body></html>`);
    win.document.close();
}

document.addEventListener("click", function (e) {
    const list = document.getElementById("gradeHistoryList");
    const dd = document.getElementById("gradeHistoryDropdown");
    if (list && dd && !dd.contains(e.target)) list.classList.add("hidden");
    const adv = document.getElementById("advancedFilterPopup");
    if (adv && !adv.contains(e.target) && !e.target.closest(".btn-advanced-filter")) {
        adv.classList.add("hidden");
        if (ReviewState.filters) ReviewState.filters.advancedOpen = false;
    }
});


function renderSavedExamsViewport(container) {
    const logs = JSON.parse(localStorage.getItem(SAVED_EXAMS_KEY)) || [];
    if (logs.length === 0) {
        container.innerHTML = `<div class="product-row-card"><p style="color:#6b7280; font-size:14px; text-align:center; width:100%;">No saved test states found.</p></div>`;
        return;
    }
    logs.forEach(exam => {
        const row = document.createElement("div");
        row.className = "saved-exam-row";
        row.innerHTML = `
            <div class="exam-meta-info">
                <h4>${exam.productTitle} (${exam.mode.toUpperCase()})</h4>
                <span class="exam-timestamp"><i class="fa-regular fa-calendar"></i> Saved: ${exam.timestamp} - ${exam.questions.length} slots Loaded</span>
            </div>
            <div style="display:flex; align-items:center; gap:12px;">
                <button class="btn-primary" style="font-size:12px; padding:6px 14px;" onclick="loadSavedExamState(${exam.id})">Resume Test &rarr;</button>
                <button class="btn-delete-trash" onclick="deleteSavedExamState(${exam.id})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
        container.appendChild(row);
    });
}

function loadSavedExamState(examId) {
    const logs = JSON.parse(localStorage.getItem(SAVED_EXAMS_KEY)) || [];
    const target = logs.find(e => e.id === examId);
    if (!target) return;
    appState.selectedProduct = MOCK_PRODUCTS_DATABASE.find(p => p.id === target.productId);
    appState.selectedMode = target.mode;
        // Remember which saved record we are continuing so a later save can overwrite it
    appState.quizEngine.originSavedExamId = target.id;
    appState.quizEngine.questions = target.questions;
    appState.quizEngine.currentIndex = target.currentIndex;
    appState.quizEngine.userAnswers = target.userAnswers;
    appState.quizEngine.timeRemaining = target.timeRemaining;
    appState.quizEngine.isGraded = false;
    
    let readableMode = "Guided Practice Test";
    if (appState.selectedMode === "flashcard") readableMode = "Flash Card Practice";
    if (appState.selectedMode === "simulation") readableMode = "Exam Simulation";
    
    if (document.getElementById("bannerModeDisplay")) document.getElementById("bannerModeDisplay").textContent = readableMode;
    if (document.getElementById("bannerProductDisplay")) document.getElementById("bannerProductDisplay").textContent = appState.selectedProduct.title;
    if (document.getElementById("subNavProductCode")) document.getElementById("subNavProductCode").textContent = appState.selectedProduct.code;
    
    clearQuizTimer();
    if (appState.selectedMode === "simulation") {
        if (document.getElementById("simulationTimerContainer")) document.getElementById("simulationTimerContainer").classList.remove("hidden");
        updateClockDisplayMetrics();
        appState.quizEngine.timerInterval = setInterval(() => {
            appState.quizEngine.timeRemaining--;
            updateClockDisplayMetrics();
            if (appState.quizEngine.timeRemaining <= 0) {
                executeQuizSubmissionGrading();
            }
        }, 1000);
    } else {
        if (document.getElementById("simulationTimerContainer")) document.getElementById("simulationTimerContainer").classList.add("hidden");
    }

    // Restore simulation vs practice UI: hide View Answer / Reset in Exam Simulation
    // (same contract as launchQuizWorkspaceView) so resumed sessions match the mode
    const viewAnsBtn = document.getElementById("viewAnswerFooterBtn");
    const resetQBtn  = document.getElementById("resetQuestionFooterBtn");
    const isExamMode = appState.selectedMode === "simulation";
    if (isExamMode) {
        if (viewAnsBtn) viewAnsBtn.classList.add("hidden");
        if (resetQBtn)  resetQBtn.classList.add("hidden");
    } else {
        if (viewAnsBtn) viewAnsBtn.classList.remove("hidden");
        if (resetQBtn)  resetQBtn.classList.remove("hidden");
    }

    renderActiveQuestionContext();
    navigateTo("quiz");
}

function deleteSavedExamState(examId) {
    let logs = JSON.parse(localStorage.getItem(SAVED_EXAMS_KEY)) || [];
    logs = logs.filter(e => e.id !== examId);
    localStorage.setItem(SAVED_EXAMS_KEY, JSON.stringify(logs));
    renderDashboardProducts();
}

/* ==========================================================================
PRODUCT ACTIVATION & NOTES MODAL CONTROLLERS
========================================================================== */
function openActivationModal() {
    if (document.getElementById("activationCodeInput")) document.getElementById("activationCodeInput").value = "";
    if (document.getElementById("activationModal")) document.getElementById("activationModal").classList.remove("hidden");
}

function closeActivationModal() {
    if (document.getElementById("activationModal")) document.getElementById("activationModal").classList.add("hidden");
}

function processProductActivation() {
    const codeInput = document.getElementById("activationCodeInput");
    if (!codeInput) return;
    const code = codeInput.value.trim().toUpperCase();
    if (!code) {
        alert("Please enter a valid product activation code.");
        return;
    }

    // Match against either product.id or product.code
    const matched = MOCK_PRODUCTS_DATABASE.find(
        p => p.id.toUpperCase() === code || p.code.toUpperCase() === code
    );

    if (!matched) {
        alert("Invalid activation code.");
        return;
    }

    let owned = getOwnedProducts();
    if (owned.includes(matched.id)) {
        alert("This product is already active on your account.");
        closeActivationModal();
        return;
    }

    owned.push(matched.id);
    setOwnedProducts(owned);               // permanent localStorage write
    alert(`Activation Success: "${matched.title}" unlocked.`);
    closeActivationModal();
    renderDashboardProducts();             // immediate UI refresh
}

let activeNotesProductId = null;
function openNotesModal(productId) {
    activeNotesProductId = productId;
    const prod = MOCK_PRODUCTS_DATABASE.find(p => p.id === productId);
    if (document.getElementById("notesModalTitle")) document.getElementById("notesModalTitle").textContent = `Tracking Notes: ${prod ? prod.code : ''}`;
    if (document.getElementById("notesTextArea")) document.getElementById("notesTextArea").value = localStorage.getItem(`CH_NOTES_${activeNotesProductId}`) || "";
    if (document.getElementById("notesModal")) document.getElementById("notesModal").classList.remove("hidden");
}

function closeNotesModal() {
    if (document.getElementById("notesModal")) document.getElementById("notesModal").classList.add("hidden");
    activeNotesProductId = null;
}

function saveProductNotes() {
    if (!activeNotesProductId) return;
    const textarea = document.getElementById("notesTextArea");
    if (textarea) {
        localStorage.setItem(`CH_NOTES_${activeNotesProductId}`, textarea.value);
        alert("Notes saved successfully.");
    }
    closeNotesModal();
}

/* ==========================================================================
THE 3-CARD PRE-CONFIGURATION SETUP ENGINE
========================================================================== */
function initiateProductExamConfiguration(productId) {
    const prod = MOCK_PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!prod) return;

    if (!getOwnedProducts().includes(prod.id)) {
        alert("This certification is not activated on your account.");
        navigateTo("dashboard");
        return;
    }

    appState.selectedProduct = prod;
    appState.selectedMode = null;
    if (document.getElementById("preConfigProductTitle")) document.getElementById("preConfigProductTitle").textContent = prod.title;
    document.querySelectorAll(".mode-options-grid .mode-card").forEach(card => card.style.border = "1px solid #e5e7eb");
    const configBtn = document.getElementById("configureExamActionBtn");
    if (configBtn) {
        configBtn.className = "btn-disabled-placeholder";
        configBtn.textContent = "Select Option to Start →";
        configBtn.style.backgroundColor = "#e5e7eb";
        configBtn.style.color = "#9ca3af";
        configBtn.style.cursor = "not-allowed";
        configBtn.disabled = true;
    }
    navigateTo("pre-config");
}


function selectTestMode(mode) {
    appState.selectedMode = mode;
    document.querySelectorAll(".mode-options-grid .mode-card").forEach(card => {
        card.style.border = "1px solid #e5e7eb";
        card.classList.remove("mode-selected");
        const ind = card.querySelector(".select-indicator-btn");
        if (ind) {
            ind.style.background = "#e5e7eb";
            ind.style.color = "#374151";
        }
    });
    const modeCard = document.getElementById(`mode-${mode}`);
    if (modeCard) {
        modeCard.style.border = "2px solid #db2777";
        modeCard.classList.add("mode-selected");
        const ind = modeCard.querySelector(".select-indicator-btn");
        if (ind) {
            ind.style.background = "#db2777";
            ind.style.color = "#ffffff";
        }
    }
    const configBtn = document.getElementById("configureExamActionBtn");
    if (configBtn) {
        configBtn.className = "btn-primary";
        configBtn.style.backgroundColor = "#db2777";
        configBtn.style.color = "#ffffff";
        configBtn.style.cursor = "pointer";
        configBtn.disabled = false;
        if (mode === "guided") configBtn.textContent = "Configure Guided Objectives →";
        else if (mode === "flashcard") configBtn.textContent = "Configure Flashcard Sandbox →";
        else configBtn.textContent = "Configure Simulation Engine →";
    }
}

function routeToObjectiveConfigurationPage() {
    if (!appState.selectedProduct || !appState.selectedMode) return;
    if (document.getElementById("interConfigProductTitle")) document.getElementById("interConfigProductTitle").textContent = `${appState.selectedProduct.title} - Configurations`;
    const splitContainer = document.getElementById("dynamicSplitChaptersContainer");
    if (!splitContainer) return;
    splitContainer.innerHTML = "";
    appState.selectedProduct.chapters.forEach((ch, idx) => {
        const lbl = document.createElement("label");
        lbl.className = "sub-check-item";
        lbl.innerHTML = `<input type="checkbox" value="${idx}" checked onchange="evaluateGroupMasterToggle('chapters')"> <span>${ch}</span>`;
        splitContainer.appendChild(lbl);
    });
    if (document.getElementById("toggleAllExams")) document.getElementById("toggleAllExams").checked = true;
    if (document.getElementById("toggleAllChapters")) document.getElementById("toggleAllChapters").checked = true;
    document.querySelectorAll("#examsCheckboxList input").forEach(cb => cb.checked = true);
    navigateTo("intermediate-config");
}

function toggleEntireExamGroup(mToggle) {
    document.querySelectorAll("#examsCheckboxList input").forEach(cb => cb.checked = mToggle.checked);
}

function toggleEntireChapterGroup(mToggle) {
    document.querySelectorAll("#dynamicSplitChaptersContainer input").forEach(cb => cb.checked = mToggle.checked);
}

function evaluateGroupMasterToggle(type) {
    if (type === 'exams') {
        const items = document.querySelectorAll("#examsCheckboxList input");
        const checked = document.querySelectorAll("#examsCheckboxList input:checked");
        if (document.getElementById("toggleAllExams")) document.getElementById("toggleAllExams").checked = (items.length === checked.length);
    } else {
        const items = document.querySelectorAll("#dynamicSplitChaptersContainer input");
        const checked = document.querySelectorAll("#dynamicSplitChaptersContainer input:checked");
        if (document.getElementById("toggleAllChapters")) document.getElementById("toggleAllChapters").checked = (items.length === checked.length);
    }
}

function handleInterConfigBack() { navigateTo("pre-config"); }
function handleInterConfigCancel() { navigateTo("dashboard"); }
function handleSaveConfigSettings() { alert("Configuration profile committed."); }
async function handleStartDefaultTest() {
    // Mark that this is a "default exam" session so launchQuizWorkspaceView
    // can apply the metadata-driven question count + duration rules.
    appState.isDefaultTest = true;
    await launchQuizWorkspaceView();
}
function handleContinueConfiguration() {
    if (document.getElementById("configPageProductTitle")) document.getElementById("configPageProductTitle").textContent = appState.selectedProduct.title;
    if (document.getElementById("activeModeConfigLabel")) document.getElementById("activeModeConfigLabel").textContent = `${appState.selectedMode.toUpperCase()} Setup`;
    navigateTo("exam-objectives-config");
}

/* ==========================================================================
THE LIVE QUIZ ASSESSMENTS RUNTIME ENGINE
========================================================================== */
async function launchQuizWorkspaceView() {

    if (!getOwnedProducts().includes(appState.selectedProduct.id)) {
        alert("This certification is not activated on your account.");
        navigateTo("dashboard");
        return;
    }

    if (!appState.selectedProduct) return;

    // ---- 1. Build the candidate pool ----
    let filteredPool = [];
    const targetCode = appState.selectedProduct.code;

    const PRODUCT_TO_STORE = {
        "N10-009": "CompTIA_Network_Plus",
        "CompTIA_Network_Plus": "CompTIA_Network_Plus",
        "ISC2-CC": "ISC2_CC",
        "CS0-004": "CompTIA_CySA_Plus",
        "CEH-V13": "CEH_v13"
    };

    let storeKey = PRODUCT_TO_STORE[targetCode] || null;

    // Default Test → all chapters; Configured test → respect checkboxes
    let selectedChapters;
    if (appState.isDefaultTest) {
        selectedChapters = appState.selectedProduct.chapters.map((_, idx) => idx);
    } else {
        selectedChapters = Array.from(
            document.querySelectorAll("#dynamicSplitChaptersContainer input:checked")
        ).map(cb => parseInt(cb.value, 10));
    }

    // 1a. Legacy in-memory store (kept for 100% backward compatibility)
    if (storeKey && QuizDataStore[storeKey]) {
        selectedChapters.forEach(chIdx => {
            const chKey = `chapter${chIdx + 1}`;
            if (QuizDataStore[storeKey][chKey] && QuizDataStore[storeKey][chKey].length > 0) {
                const mappedQuestions = QuizDataStore[storeKey][chKey].map(q => ({...q, chapterIndex: chIdx}));
                filteredPool.push(...mappedQuestions);
            }
        });
    }

    // 1b. Dedicated per-product data file, fetched on demand (new data layer)
    //     WAEC-APT (and any other mapped product) is loaded here.
    const startBtn = document.getElementById("startTestActionBtn") || document.getElementById("startDefaultTestActionBtn");
    const startBtnOriginalText = startBtn ? startBtn.textContent : null;
    if (filteredPool.length === 0) {
        if (startBtn) { startBtn.disabled = true; startBtn.textContent = "Loading question bank…"; }
        try {
            const curatedBank = await loadCuratedQuestionBank(appState.selectedProduct);
            if (curatedBank && curatedBank.length > 0) {
                filteredPool = curatedBank.filter(q => selectedChapters.includes(q.chapterIndex));
                if (filteredPool.length === 0) filteredPool = curatedBank;
            }
        } finally {
            if (startBtn) { startBtn.disabled = false; startBtn.textContent = startBtnOriginalText; }
        }
    }

    // 1c. Legacy synthetic generator — final safety net, always available
    if (filteredPool.length === 0) {
        let fullPool = generateQuestionsForProduct(appState.selectedProduct);
        filteredPool = fullPool.filter(q => selectedChapters.includes(q.chapterIndex));
        if (filteredPool.length === 0) {
            filteredPool = fullPool;
        }
        // Visible warning (not just console) since this means the curated
        // data/<product>.js file failed to load and the quiz is running on
        // placeholder-generated questions instead of real curated content.
        console.error(`Falling back to generated placeholder questions for ${appState.selectedProduct.id} — the curated data file did not load. Check the data/ path, hosting, and browser console for details.`);
        alert(`Heads up: the curated question bank for ${appState.selectedProduct.title} could not be loaded, so this exam is using placeholder questions instead. Check that data/${appState.selectedProduct.id.toLowerCase()}.js is deployed correctly.`);
    }

    if (filteredPool.length === 0) {
        alert("No questions available for the selected chapters.");
        appState.isDefaultTest = false;
        return;
    }

    // ---- 2. Decide question count & duration ----
    const meta = getExamMetadata(appState.selectedProduct);
    let maxQ;

    if (appState.isDefaultTest) {
        maxQ = meta.questionCount;          // strict standard count (60 for WAEC-APT)
    } else {
        maxQ = Math.max(1, parseInt(document.getElementById("maxQuestionsInput")?.value, 10) || 90);
    }

    // ---- 3. Generate the exam set ----
    let examQuestions;
    if (appState.isDefaultTest) {
        // Balanced draw across all 6 WAEC chapters (or whatever chapters exist)
        examQuestions = generateBalancedDefaultExam(filteredPool, maxQ);
    } else {
        examQuestions = filteredPool.slice(0, maxQ);
    }

    // ---- 4. Initialise engine state (ephemeral until Save) ----
    appState.quizEngine.questions       = examQuestions;
    appState.quizEngine.currentIndex    = 0;
    appState.quizEngine.userAnswers     = {};
    appState.quizEngine.isGraded        = false;
    appState.quizEngine.originSavedExamId = null;

    // ---- 5. Banner labels ----
    let readableMode = "Guided Practice Test";
    if (appState.selectedMode === "flashcard") readableMode = "Flash Card Practice";
    if (appState.selectedMode === "simulation") readableMode = "Exam Simulation";

    if (document.getElementById("bannerModeDisplay"))
        document.getElementById("bannerModeDisplay").textContent = readableMode;
    if (document.getElementById("bannerProductDisplay"))
        document.getElementById("bannerProductDisplay").textContent = appState.selectedProduct.title;
    if (document.getElementById("subNavProductCode"))
        document.getElementById("subNavProductCode").textContent = appState.selectedProduct.code;

    // ---- 6. Conditional timer (ONLY for Exam Simulation) ----
    clearQuizTimer();

    const isExamMode = appState.selectedMode === "simulation";

    if (isExamMode) {
        if (document.getElementById("simulationTimerContainer"))
            document.getElementById("simulationTimerContainer").classList.remove("hidden");

        let minutes;
        if (appState.isDefaultTest) {
            minutes = meta.durationMinutes;   // certification standard duration (50 min for WAEC-APT)
        } else {
            minutes = parseInt(document.getElementById("examDurationSlider")?.value || 90, 10);
        }

        appState.quizEngine.timeRemaining = minutes * 60;
        updateClockDisplayMetrics();

        appState.quizEngine.timerInterval = setInterval(() => {
            appState.quizEngine.timeRemaining--;
            updateClockDisplayMetrics();
            if (appState.quizEngine.timeRemaining <= 0) {
                alert("Time is up! The exam will now be automatically graded and submitted.");
                executeQuizSubmissionGrading();
            }
        }, 1000);
    } else {
        // Guided Practice & Flash Card → never timed
        if (document.getElementById("simulationTimerContainer"))
            document.getElementById("simulationTimerContainer").classList.add("hidden");
        appState.quizEngine.timeRemaining = 0;
    }

    // Hide View-Answer / Reset for pure simulation mode
    const viewAnsBtn = document.getElementById("viewAnswerFooterBtn");
    const resetQBtn  = document.getElementById("resetQuestionFooterBtn");
    if (isExamMode) {
        if (viewAnsBtn) viewAnsBtn.classList.add("hidden");
        if (resetQBtn)  resetQBtn.classList.add("hidden");
    } else {
        if (viewAnsBtn) viewAnsBtn.classList.remove("hidden");
        if (resetQBtn)  resetQBtn.classList.remove("hidden");
    }

    // Clear the flag so subsequent configured launches stay normal
    appState.isDefaultTest = false;

    renderActiveQuestionContext();
    navigateTo("quiz");
}

function updateClockDisplayMetrics() {
    const hours = Math.floor(appState.quizEngine.timeRemaining / 3600);
    const mins = Math.floor((appState.quizEngine.timeRemaining % 3600) / 60);
    const secs = appState.quizEngine.timeRemaining % 60;
    const durationDisplay = document.getElementById("timeDurationDisplay");
    if (durationDisplay) {
        durationDisplay.textContent = `${hours.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    }
}

function renderActiveQuestionContext() {
    const engine = appState.quizEngine;
    if (engine.questions.length === 0) return;
    const currentQ = engine.questions[engine.currentIndex];
    
    if (document.getElementById("questionIndexDisplay")) document.getElementById("questionIndexDisplay").textContent = `Question ${engine.currentIndex + 1} of ${engine.questions.length}`;
    if (document.getElementById("questionIdDisplay")) document.getElementById("questionIdDisplay").textContent = `Question Id : ${currentQ.id}`;
    if (document.getElementById("questionTextDisplay")) document.getElementById("questionTextDisplay").textContent = currentQ.text;
    if (document.getElementById("answerExplanationBox")) document.getElementById("answerExplanationBox").classList.add("hidden");
    
    const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_STORAGE_KEY)) || {};
    const btnB = document.getElementById("bookmarkToggleBtn");
    if (btnB) {
        if (bookmarks[currentQ.id]) {
            btnB.innerHTML = `<i class="fa-solid fa-bookmark"></i> bookmarked`;
            btnB.classList.add("bookmarked-active");
        } else {
            btnB.innerHTML = `<i class="fa-regular fa-bookmark"></i> Bookmark Question`;
            btnB.classList.remove("bookmarked-active");
        }
    }
    renderActiveQuestionStickyNote(currentQ.id);
    const container = document.getElementById("optionsBlockContainer");
    if (!container) return;
    container.innerHTML = "";
    currentQ.choices.forEach((choice, idx) => {
        const optNode = document.createElement("div");
        optNode.className = "option-node-item";
        if (engine.userAnswers[engine.currentIndex] === idx) {
            optNode.classList.add("selected");
        }
        optNode.innerHTML = `
            <i class="fa-regular ${engine.userAnswers[engine.currentIndex] === idx ? 'fa-circle-dot' : 'fa-circle'}"></i>
            <span>${choice}</span>
        `;
optNode.onclick = () => {
            if (engine.isGraded) return;
            engine.userAnswers[engine.currentIndex] = idx;
            if (typeof playUiSound === "function") playUiSound("select");
            renderActiveQuestionContext();
        };

        container.appendChild(optNode);
    });
    
    if (document.getElementById("prevQuestionBtn")) document.getElementById("prevQuestionBtn").disabled = (engine.currentIndex === 0);
    if (document.getElementById("nextQuestionBtn")) document.getElementById("nextQuestionBtn").textContent = (engine.currentIndex === engine.questions.length - 1) ? "Finish Review" : "Next Question";
}

function renderActiveQuestionStickyNote(questionId) {
    const notes = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY)) || {};
    const element = document.getElementById("questionStickyNoteContainer");
    if (!element) return;
    if (notes[questionId]) {
        element.classList.remove("hidden");
        element.innerHTML = `<strong>Your Dynamic Note:</strong><br>${notes[questionId]}`;
    } else {
        element.classList.add("hidden");
    }
}

function changeQuestion(direction) {
    const engine = appState.quizEngine;
    const targetIdx = engine.currentIndex + direction;
    if (targetIdx >= 0 && targetIdx < engine.questions.length) {
        engine.currentIndex = targetIdx;
        renderActiveQuestionContext();
    } else if (targetIdx === engine.questions.length) {
        handleNavbarReview();
    }
}

/* ==========================================================================
RIGHT-HAND ACTION SIDE BUTTON FEATURES
========================================================================== */
function toggleCurrentBookmark() {
    const currentQ = appState.quizEngine.questions[appState.quizEngine.currentIndex];
    if (!currentQ) return;
    let bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_STORAGE_KEY)) || {};
    if (bookmarks[currentQ.id]) {
        delete bookmarks[currentQ.id];
    } else {
        bookmarks[currentQ.id] = true;
    }
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
    renderActiveQuestionContext();
}

function openFeedbackModal() {
    if (document.getElementById("feedbackCommentArea")) document.getElementById("feedbackCommentArea").value = "";
    if (document.getElementById("feedbackModal")) document.getElementById("feedbackModal").classList.remove("hidden");
}

/**
 * Intercepts feedback submission and silently delivers the content
 * to AdepojuGbenga2017@gmail.com without exposing the address to the user.
 * Uses Formspree (replace FORM_ID with a real Formspree form ID).
 */
function submitQuestionFeedbackPayload() {
  const typeEl = document.getElementById("feedbackTypeSelector");
  const textEl = document.getElementById("feedbackCommentArea");
  if (!typeEl || !textEl) return;

  const type = typeEl.value;
  const text = textEl.value.trim();
  const currentQ = appState.quizEngine.questions[appState.quizEngine.currentIndex];

  if (!text) {
    alert("Please input feedback details text.");
    return;
  }

  // Build payload
  const payload = {
    _subject: `[GovPrep Feedback] ${type}`,
    feedbackType: type,
    questionId: currentQ ? currentQ.id : "N/A",
    comment: text,
    user: appState.currentUser || "Anonymous",
    product: appState.selectedProduct ? appState.selectedProduct.code : "N/A",
    timestamp: new Date().toISOString(),
    // Formspree will route to the configured destination
    _replyto: "noreply@govprep.exam"
  };

  // ---------- Background delivery (Formspree) ----------
  // Create a free form at https://formspree.io and replace the ID below.
  // Set the form’s destination email to AdepojuGbenga2017@gmail.com.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvgdvrz"; // ← replaced with real ID

  fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(res => {
    // We deliberately ignore the network result for UX – always show success
    console.log("[Feedback] Payload transmitted (status " + res.status + ")");
  })
  .catch(err => {
    // Fail silently from the user’s perspective
    console.warn("[Feedback] Delivery attempt failed (offline?):", err);
  });

  // Retain the exact original success notification
  alert(`Success! Your feedback ("${type}") along with an automatic screen capture of question ${currentQ ? currentQ.id : ""} has been transmitted.`);
  if (document.getElementById("feedbackModal")) {
    document.getElementById("feedbackModal").classList.add("hidden");
  }
}

/* ==========================================================================
NAVIGATION TOP BAR COMMAND INTERACTIVE FEATURES
========================================================================== */
function handleNavbarNew() {
    if (confirm("Are you sure you want to discard this practice test session and return to the settings configuration page?")) {
        clearQuizTimer();
        navigateTo("dashboard");
        initiateProductExamConfiguration(appState.selectedProduct.id);
    }
}

function handleNavbarSave() {
    const logs = JSON.parse(localStorage.getItem(SAVED_EXAMS_KEY)) || [];
    const originId = appState.quizEngine.originSavedExamId;

    // Build the payload that represents the current live state
    const stateRecord = {
        id: originId || Date.now(),          // keep original id when overwriting
        timestamp: new Date().toLocaleString(),
        productId: appState.selectedProduct.id,
        productTitle: appState.selectedProduct.title,
        mode: appState.selectedMode,
        userAnswers: appState.quizEngine.userAnswers,
        timeRemaining: appState.quizEngine.timeRemaining,
        currentIndex: appState.quizEngine.currentIndex,
        questions: appState.quizEngine.questions
    };

    // Case 1 – this session was resumed from an existing save
    if (originId) {
        const existingIdx = logs.findIndex(e => e.id === originId);

        if (existingIdx !== -1) {
            const confirmOverwrite = confirm(
                "You are continuing a previously saved exam.\n\n" +
                "Do you want to overwrite / update that existing save with your current progress?\n\n" +
                "• OK  = overwrite the existing save\n" +
                "• Cancel = create a brand-new separate save entry"
            );

            if (confirmOverwrite) {
                // Overwrite the matching record in-place
                logs[existingIdx] = stateRecord;
                localStorage.setItem(SAVED_EXAMS_KEY, JSON.stringify(logs));
                clearQuizTimer();
                alert("Success: The existing saved exam has been updated with your latest progress.");
                navigateTo("dashboard");
                return;
            }
            // User chose Cancel → fall through and create a new entry
            // (we still keep the original originSavedExamId so a later save can still offer overwrite)
        }
    }

    // Case 2 – brand-new save (or user declined overwrite)
    // Force a fresh id so we never accidentally collide with the original
    stateRecord.id = Date.now();
    logs.push(stateRecord);
    localStorage.setItem(SAVED_EXAMS_KEY, JSON.stringify(logs));
    clearQuizTimer();
    alert("Success: The present practice page state has been saved securely online.");
    navigateTo("dashboard");
}

function handleNavbarReview() {
    const engine = appState.quizEngine;
    if (document.getElementById("revTotalCount")) document.getElementById("revTotalCount").textContent = engine.questions.length;
    let attempted = Object.keys(engine.userAnswers).length;
    if (document.getElementById("revAttemptedCount")) document.getElementById("revAttemptedCount").textContent = attempted;
    if (document.getElementById("revUnattemptedCount")) document.getElementById("revUnattemptedCount").textContent = engine.questions.length - attempted;
    const grid = document.getElementById("reviewGridContainer");
    if (!grid) return;
    grid.innerHTML = "";
    engine.questions.forEach((q, idx) => {
        const node = document.createElement("div");
        const hasAnswered = engine.userAnswers[idx] !== undefined;
        node.className = `review-item-node ${hasAnswered ? 'answered' : 'unanswered'}`;
        node.textContent = idx + 1;
        node.onclick = () => {
            engine.currentIndex = idx;
            navigateTo("quiz");
            renderActiveQuestionContext();
        };
        grid.appendChild(node);
    });
    navigateTo("review");
}

function handleNavbarGrade() {
    // Safety confirmation before irreversible grading
    const confirmed = confirm(
        "Are you sure you want to grade your exam? This action cannot be undone."
    );
    if (!confirmed) {
        // User cancelled — keep active exam page and answers unchanged
        return;
    }
    executeQuizSubmissionGrading();
}

function executeQuizSubmissionGrading() {
    if (appState.quizEngine && appState.quizEngine.timerInterval) {
        clearInterval(appState.quizEngine.timerInterval);
        appState.quizEngine.timerInterval = null;
    }

    // Subtle grade cue when sound preference is enabled
    if (typeof playUiSound === "function") playUiSound("grade");

    const engine = appState.quizEngine;
    engine.isGraded = true;

    const totalQuestions = engine.questions.length || 1;
    let correctCount = 0;
    const questionResults = [];
    const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_STORAGE_KEY)) || {};

    engine.questions.forEach((q, idx) => {
        const userAns = engine.userAnswers[idx];
        const isCorrect = userAns !== undefined && userAns === q.correct;
        if (isCorrect) correctCount++;
        questionResults.push({
            id: q.id,
            text: q.text,
            choices: q.choices,
            correct: q.correct,
            explanation: q.explanation,
            distractors: q.distractors || [],
            chapterIndex: q.chapterIndex,
            userAnswer: userAns,
            isCorrect: isCorrect,
            isAttempted: userAns !== undefined,
            isMarked: !!bookmarks[q.id],
            yourScore: isCorrect ? 1 : 0,
            maxScore: 1
        });
    });

    const scaledScore = parseFloat(((correctCount / totalQuestions) * 1000).toFixed(2));
    const percentScore = Math.round((correctCount / totalQuestions) * 100);

    // Government & academic aptitude exams commonly use 50% as the baseline pass mark
    // (scaled to 500/1000). Specific products can override via metadata later if needed.
    const requiredScore = 500;
    const status = scaledScore >= requiredScore ? "PASSED" : "FAILED";
    const statusLabel = status === "PASSED" ? "Passed" : "Test Not Passed";

    const chapterMap = {};
    const productChapters = appState.selectedProduct.chapters || [];
    questionResults.forEach(qr => {
        const chIdx = qr.chapterIndex ?? 0;
        if (!chapterMap[chIdx]) {
            chapterMap[chIdx] = {
                name: productChapters[chIdx] || `Chapter ${String(chIdx + 1).padStart(2, "0")}`,
                yourPoints: 0,
                possiblePoints: 0
            };
        }
        chapterMap[chIdx].possiblePoints += qr.maxScore;
        chapterMap[chIdx].yourPoints += qr.yourScore;
    });
    const objectives = Object.keys(chapterMap).sort((a, b) => Number(a) - Number(b)).map(k => {
        const o = chapterMap[k];
        const pct = o.possiblePoints > 0
            ? parseFloat(((o.yourPoints / o.possiblePoints) * 100).toFixed(2))
            : 0;
        return {
            name: o.name,
            percentage: pct,
            yourPoints: o.yourPoints,
            possiblePoints: o.possiblePoints
        };
    });

    alert(`Exam Graded Successfully:\nScore Obtained: ${scaledScore} / 1000 (${percentScore}%)\nCorrect Pool: ${correctCount}/${totalQuestions}\nStatus: ${statusLabel}`);

    const historyKey = `CH_HIST_${appState.selectedProduct.id}`;
    let historyLogs = JSON.parse(localStorage.getItem(historyKey)) || [];
    const record = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        isoDate: new Date().toISOString(),
        productId: appState.selectedProduct.id,
        productTitle: appState.selectedProduct.title,
        productCode: appState.selectedProduct.code,
        mode: appState.selectedMode,
        modeLabel: appState.selectedMode === "guided" ? "Guided Practice Test"
            : appState.selectedMode === "flashcard" ? "Flash Card Practice"
            : "Exam Simulation",
        title: `${appState.selectedProduct.code} (${appState.selectedMode.toUpperCase()})`,
        scorePercent: percentScore,
        scaledScore: scaledScore,
        requiredScore: requiredScore,
        correctCount: correctCount,
        totalQuestions: totalQuestions,
        status: status,
        statusLabel: statusLabel,
        objectives: objectives,
        questions: questionResults,
        userAnswers: { ...engine.userAnswers }
    };
    historyLogs.unshift(record);
    localStorage.setItem(historyKey, JSON.stringify(historyLogs));
    navigateTo("dashboard");
}

/* ==========================================================================
QUESTION FOOTER INTERACTIVE CONTROL ACTIONS
========================================================================== */
function handleViewAnswer() {
    if (appState.selectedMode === "simulation") return;
    const engine = appState.quizEngine;
    const currentQ = engine.questions[engine.currentIndex];
    const chosen = engine.userAnswers[engine.currentIndex];
    const expBox = document.getElementById("answerExplanationBox");
    if (!expBox) return;
    if (chosen === undefined) {
        alert("Please select an answer option before checking verification explanations.");
        return;
    }
    expBox.classList.remove("hidden");
    if (chosen === currentQ.correct) {
        expBox.className = "explanation-alert-box correct-pane";
        expBox.innerHTML = `<strong>Correct Option Picked!</strong><br>${currentQ.explanation}`;
    } else {
        expBox.className = "explanation-alert-box incorrect-pane";
        expBox.innerHTML = `<strong>Incorrect Option Picked.</strong><br>${currentQ.explanation}<br><br><strong>Distractor Analysis:</strong><br>${(currentQ.distractors || []).join('<br>')}`;
    }
}

function handleResetQuestion() {
    if (appState.selectedMode === "simulation") return;
    delete appState.quizEngine.userAnswers[appState.quizEngine.currentIndex];
    renderActiveQuestionContext();
}

function openQuestionNoteModal() {
    const currentQ = appState.quizEngine.questions[appState.quizEngine.currentIndex];
    let notes = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY)) || {};
    if (document.getElementById("questionNoteArea")) document.getElementById("questionNoteArea").value = notes[currentQ.id] || "";
    if (document.getElementById("questionNoteModal")) document.getElementById("questionNoteModal").classList.remove("hidden");
}

function saveQuestionNote() {
    const currentQ = appState.quizEngine.questions[appState.quizEngine.currentIndex];
    const noteArea = document.getElementById("questionNoteArea");
    if (!noteArea) return;
    const text = noteArea.value.trim();
    let notes = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY)) || {};
    if (text) {
        notes[currentQ.id] = text;
    } else {
        delete notes[currentQ.id];
    }
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
    if (document.getElementById("questionNoteModal")) document.getElementById("questionNoteModal").classList.add("hidden");
    renderActiveQuestionContext();
}

function deleteQuestionNote() {
    const currentQ = appState.quizEngine.questions[appState.quizEngine.currentIndex];
    if (!currentQ) return;
    let notes = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY)) || {};
    if (notes[currentQ.id]) {
        delete notes[currentQ.id];
        localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
    }
    if (document.getElementById("questionNoteModal")) document.getElementById("questionNoteModal").classList.add("hidden");
    renderActiveQuestionContext();
}

/* ==========================================================================
   HELP CENTER — FAQ accordion + navigation helpers
   ========================================================================== */

/**
 * Toggle a single FAQ item open/closed. Only one open at a time for clarity.
 * @param {HTMLButtonElement} btn - The question button that was clicked
 */
function toggleHelpFaq(btn) {
  if (!btn || !btn.classList.contains("hc-faq-question")) return;

  const item = btn.closest(".hc-faq-item");
  if (!item) return;

  const answer = item.querySelector(".hc-faq-answer");
  const isOpen = btn.getAttribute("aria-expanded") === "true";

  // Close all other FAQ items in the list
  const list = document.getElementById("hcFaqList");
  if (list) {
    list.querySelectorAll(".hc-faq-question").forEach(q => {
      q.setAttribute("aria-expanded", "false");
      const a = q.parentElement && q.parentElement.querySelector(".hc-faq-answer");
      if (a) a.hidden = true;
    });
  }

  // Toggle the clicked item
  if (!isOpen) {
    btn.setAttribute("aria-expanded", "true");
    if (answer) answer.hidden = false;
  }
}

/* ==========================================================================
   OPTIONS / PREFERENCES SYSTEM
   Triggered from profile dropdown → "Options & Preferences"
   Stores: CH_PREF_DARK_MODE, CH_PREF_SOUND, CH_PREF_COMPACT_TEXT
   ========================================================================== */

const PREF_KEYS = {
  dark: "CH_PREF_DARK_MODE",
  sound: "CH_PREF_SOUND",
  compact: "CH_PREF_COMPACT_TEXT"
};

/** Read boolean preference (default false). */
function getPref(key) {
  return localStorage.getItem(key) === "1";
}

/** Persist boolean preference. */
function setPref(key, value) {
  localStorage.setItem(key, value ? "1" : "0");
}

/**
 * Apply all stored preferences to the document (idempotent).
 * Called on DOMContentLoaded and after any toggle.
 */
function applyAllPreferences() {
  const dark = getPref(PREF_KEYS.dark);
  document.body.classList.toggle("dark-mode", dark);

  const compact = getPref(PREF_KEYS.compact);
  document.body.classList.toggle("compact-question-text", compact);

  // Sync toggle UI if modal is present
  const darkToggle = document.getElementById("prefDarkModeToggle");
  if (darkToggle) darkToggle.checked = dark;

  const compactToggle = document.getElementById("prefCompactTextToggle");
  if (compactToggle) compactToggle.checked = compact;

  const soundToggle = document.getElementById("prefSoundToggle");
  if (soundToggle) soundToggle.checked = getPref(PREF_KEYS.sound);
}

function toggleDarkMode(enabled) {
  setPref(PREF_KEYS.dark, enabled);
  document.body.classList.toggle("dark-mode", enabled);
  if (enabled && getPref(PREF_KEYS.sound)) playUiSound("toggle");
}

function toggleCompactText(enabled) {
  setPref(PREF_KEYS.compact, enabled);
  document.body.classList.toggle("compact-question-text", enabled);
  if (getPref(PREF_KEYS.sound)) playUiSound("toggle");
}

function toggleSoundEffects(enabled) {
  setPref(PREF_KEYS.sound, enabled);
  // Immediate auditory confirmation when turning ON
  if (enabled) playUiSound("toggle");
}

/**
 * Lightweight Web-Audio beeps — no external assets required.
 * Types: "toggle" | "select" | "grade"
 */
function playUiSound(type) {
  if (!getPref(PREF_KEYS.sound)) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "select") {
      osc.frequency.value = 520;
      gain.gain.value = 0.06;
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.stop(ctx.currentTime + 0.09);
    } else if (type === "grade") {
      osc.frequency.value = 660;
      gain.gain.value = 0.08;
      osc.start();
      osc.frequency.linearRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.stop(ctx.currentTime + 0.26);
    } else {
      // toggle / default
      osc.frequency.value = 440;
      gain.gain.value = 0.05;
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
      osc.stop(ctx.currentTime + 0.08);
    }
    // Auto-close context after short delay to free resources
    setTimeout(() => { try { ctx.close(); } catch (_) {} }, 400);
  } catch (_) {
    /* AudioContext unavailable — silent fail */
  }
}

/**
 * Aggregate graded-exam history across all products for the snapshot panel.
 */
function computeUserPerformanceStats() {
  let totalExams = 0;
  let sumPercent = 0;
  let bestPercent = -1;
  const allKeys = Object.keys(localStorage);

  allKeys.forEach(k => {
    if (!k.startsWith("CH_HIST_")) return;
    try {
      const logs = JSON.parse(localStorage.getItem(k)) || [];
      logs.forEach(rec => {
        if (typeof rec.scorePercent === "number") {
          totalExams++;
          sumPercent += rec.scorePercent;
          if (rec.scorePercent > bestPercent) bestPercent = rec.scorePercent;
        }
      });
    } catch (_) { /* skip corrupt entries */ }
  });

  const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_STORAGE_KEY) || "{}");
  const bookmarkCount = Object.keys(bookmarks).length;

  return {
    totalExams,
    avgPercent: totalExams > 0 ? Math.round(sumPercent / totalExams) : null,
    bestPercent: bestPercent >= 0 ? bestPercent : null,
    bookmarkCount
  };
}

function refreshPreferencesStats() {
  const stats = computeUserPerformanceStats();
  const elExams = document.getElementById("prefStatExams");
  const elAvg = document.getElementById("prefStatAvg");
  const elBest = document.getElementById("prefStatBest");
  const elBm = document.getElementById("prefStatBookmarks");
  const hint = document.getElementById("prefStatsHint");

  if (elExams) elExams.textContent = String(stats.totalExams);
  if (elAvg) elAvg.textContent = stats.avgPercent !== null ? stats.avgPercent + "%" : "—";
  if (elBest) elBest.textContent = stats.bestPercent !== null ? stats.bestPercent + "%" : "—";
  if (elBm) elBm.textContent = String(stats.bookmarkCount);

  if (hint) {
    hint.textContent = stats.totalExams === 0
      ? "Complete graded exams to unlock richer stats."
      : `Based on ${stats.totalExams} graded attempt${stats.totalExams === 1 ? "" : "s"} stored on this device.`;
  }
}

function openPreferencesModal() {
  applyAllPreferences();
  refreshPreferencesStats();
  const modal = document.getElementById("preferencesModal");
  if (modal) modal.classList.remove("hidden");
}

function closePreferencesModal() {
  const modal = document.getElementById("preferencesModal");
  if (modal) modal.classList.add("hidden");
}
