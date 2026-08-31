/* ==========================================================================
   PRODUCT QUESTION BANK — WAEC Recruitment Aptitude Test
   Dynamic ES module for GovPrep. Default export = flat questions array.
   chapterIndex maps to MOCK_PRODUCTS_DATABASE entry WAECAPT.chapters[]
   ========================================================================== */

export const PRODUCT_CODE = "WAEC-APT";

export const questions = [
  // ----- Chapter 0: Quantitative Reasoning & Advanced Numeracy -----
  {
    id: "WAEC-APT-CQ-01-001",
    chapterIndex: 0,
    text: "A trader bought 40 bags of rice at ₦25,000 each and sold them at a 15% profit. What was the total selling price?",
    choices: ["₦1,150,000", "₦1,000,000", "₦1,250,000", "₦900,000"],
    correct: 0,
    explanation: "Cost = 40 × ₦25,000 = ₦1,000,000. Profit of 15% = ₦150,000. Selling price = ₦1,150,000.",
    distractors: [
      "This is only the cost price and ignores the profit.",
      "This assumes a higher profit percentage than stated.",
      "This assumes a loss instead of a profit."
    ]
  },
  {
    id: "WAEC-APT-CQ-01-002",
    chapterIndex: 0,
    text: "If 3/4 of a number is 48, what is half of the same number?",
    choices: ["32", "36", "24", "64"],
    correct: 0,
    explanation: "(3/4)x = 48 ⇒ x = 64. Half of 64 = 32.",
    distractors: [
      "Misapplied the given fraction.",
      "Took three-quarters of a different base.",
      "Returned the whole number instead of half."
    ]
  },
  {
    id: "WAEC-APT-CQ-01-003",
    chapterIndex: 0,
    text: "Calculate the standard deviation of the following dataset representing candidate scores: 4, 6, 8, 10, 12.",
    choices: ["2.83", "4.00", "8.00", "2.00"],
    correct: 0,
    explanation: "Mean = (4+6+8+10+12)/5 = 8. Squared differences from mean = 16 + 4 + 0 + 4 + 16 = 40. Variance = 40/5 = 8. Standard deviation = √8 ≈ 2.83.",
    distractors: [
      "Confused variance with standard deviation.",
      "Used the value of the mean instead of calculating dispersion.",
      "Divided the sum of absolute deviations directly without squaring."
    ]
  },
  {
    id: "WAEC-APT-CQ-01-004",
    chapterIndex: 0,
    text: "Simplify: 2/5 + 3/10 − 1/4.",
    choices: ["11/20", "9/20", "7/20", "13/20"],
    correct: 1,
    explanation: "Common denominator 20: 8/20 + 6/20 − 5/20 = 9/20.",
    distractors: [
      "Arithmetic error when combining the numerators.",
      "One of the fractions was not converted correctly.",
      "The last term was added instead of subtracted."
    ]
  },
  {
    id: "WAEC-APT-CQ-01-005",
    chapterIndex: 0,
    text: "A candidate scores a raw mark of 75 on a test with a mean of 60 and a standard deviation of 10. What is the candidate's standardized z-score?",
    choices: ["+1.5", "+1.0", "+2.0", "-1.5"],
    correct: 0,
    explanation: "z = (X - Mean) / Standard Deviation = (75 - 60) / 10 = 15 / 10 = +1.5.",
    distractors: [
      "Subtracted the standard deviation from the mean difference incorrectly.",
      "Divided the total raw score by the standard deviation directly.",
      "Applied a negative vector to a score above the average mean."
    ]
  },

  // ----- Chapter 1: Verbal Reasoning & English Comprehension -----
  {
    id: "WAEC-APT-CQ-02-001",
    chapterIndex: 1,
    text: "Choose the option nearest in meaning to the underlined word: The Registrar's directive on examination security was explicit.",
    choices: ["Clear and fully expressed", "Vague and ambiguous", "Lengthy and verbose", "Strictly confidential"],
    correct: 0,
    explanation: "'Explicit' means stated clearly and in detail, leaving no room for confusion.",
    distractors: [
      "This is an antonym of explicit.",
      "Explicit refers to clarity, not word count.",
      "Confidentiality relates to secrecy, not explicit clarity."
    ]
  },
  {
    id: "WAEC-APT-CQ-02-002",
    chapterIndex: 1,
    text: "Fill in the blank: Neither the invigilators nor the supervisor _____ present when the seals were broken.",
    choices: ["was", "were", "are", "have been"],
    correct: 0,
    explanation: "When using 'neither/nor', the verb agrees with the closer subject. 'Supervisor' is singular, so 'was' is correct.",
    distractors: [
      "Erroneously matched agreement with the plural noun 'invigilators'.",
      "Used present tense for a completed past event.",
      "Incorrect subject-verb auxiliary agreement."
    ]
  },
  {
    id: "WAEC-APT-CQ-02-003",
    chapterIndex: 1,
    text: "Choose the word opposite in meaning to 'Punctilious' as used in administrative compliance.",
    choices: ["Careless", "Meticulous", "Formal", "Rigid"],
    correct: 0,
    explanation: "Punctilious means showing great attention to detail or correct behavior; its antonym is careless.",
    distractors: [
      "Meticulous is a synonym of punctilious.",
      "Formal describes compliance style, not attention to detail.",
      "Rigid refers to inflexibility, not lack of attention to detail."
    ]
  },
  {
    id: "WAEC-APT-CQ-02-004",
    chapterIndex: 1,
    text: "Select the correctly spelled administrative designation.",
    choices: ["Bureaucracy", "Beureaucracy", "Bureaucracy", "Bureacracy"],
    correct: 0,
    explanation: "The correct spelling is 'Bureaucracy' (b-u-r-e-a-u-c-r-a-c-y).",
    distractors: [
      "Misplaced 'e' before 'u'.",
      "Duplicate entry of incorrect vowel ordering.",
      "Omitted the silent 'u' in the prefix."
    ]
  },
  {
    id: "WAEC-APT-CQ-02-005",
    chapterIndex: 1,
    text: "Identify the logical inference from the statement: 'All candidates who breach CBT instructions face immediate disqualification.'",
    choices: [
      "A disqualified candidate must have breached CBT instructions",
      "Strict compliance with instructions guarantees passing the exam",
      "Breaching CBT instructions is a sufficient condition for disqualification",
      "Only CBT candidates are subject to examination disqualification"
    ],
    correct: 2,
    explanation: "The conditional statement establishes that breaching instructions guarantees disqualification (sufficient condition). Disqualification might also occur for other reasons.",
    distractors: [
      "Commits the fallacy of affirming the consequent.",
      "Confuses procedural compliance with academic success.",
      "Extrapolates the rule beyond its stated scope."
    ]
  },

  // ----- Chapter 2: WAEC Institutional Mandate, History & Public Service -----
  {
    id: "WAEC-APT-CQ-03-001",
    chapterIndex: 2,
    text: "The West African Examinations Council (WAEC) was established in 1952 following the recommendation of which historical report?",
    choices: ["The Jeffrey Report of 1950", "The Ashby Commission Report", "The Elliot Commission Report", "The Phillipson Report"],
    correct: 0,
    explanation: "WAEC was founded following the recommendations of Dr. G.B. Jeffrey's 1950 report on examinations in West Africa.",
    distractors: [
      "The Ashby Commission focused on higher education post-1960.",
      "The Elliot Commission focused on university education setup in West Africa.",
      "The Phillipson Report dealt with Nigerianization of civil service."
    ]
  },
  {
    id: "WAEC-APT-CQ-03-002",
    chapterIndex: 2,
    text: "Which of the following lists the complete set of official WAEC member countries?",
    choices: [
      "Nigeria, Ghana, Sierra Leone, The Gambia, and Liberia",
      "Nigeria, Ghana, Sierra Leone, Cameroon, and Liberia",
      "Nigeria, Ghana, Kenya, The Gambia, and Sierra Leone",
      "Nigeria, Ghana, Ivory Coast, Sierra Leone, and Liberia"
    ],
    correct: 0,
    explanation: "WAEC serves five Commonwealth West African nations: Nigeria, Ghana, Sierra Leone, The Gambia, and Liberia (which joined in 1974).",
    distractors: [
      "Cameroon is not a member of WAEC.",
      "Kenya is located in East Africa and is not a member.",
      "Ivory Coast (Cote d'Ivoire) is a Francophone state and not a member."
    ]
  },
  {
    id: "WAEC-APT-CQ-03-003",
    chapterIndex: 2,
    text: "Where is the International Headquarters of the West African Examinations Council situated?",
    choices: ["Accra, Ghana", "Lagos, Nigeria", "Freetown, Sierra Leone", "Banjul, The Gambia"],
    correct: 0,
    explanation: "The International Headquarters of WAEC is located in Accra, Ghana, headed by the Secretary to Council.",
    distractors: [
      "Lagos hosts the Head National Office (HNO) of Nigeria, not the International HQ.",
      "Freetown hosts a Head National Office.",
      "Banjul hosts a Head National Office."
    ]
  },
  {
    id: "WAEC-APT-CQ-03-004",
    chapterIndex: 2,
    text: "Under the Public Service Rules (PSR), what is the mandatory retirement age for civil servants in Nigeria?",
    choices: ["60 years of age or 35 years of pensionable service", "65 years of age or 40 years of service", "55 years of age or 30 years of service", "70 years of age regardless of service length"],
    correct: 0,
    explanation: "Standard Nigerian PSR mandates retirement at 60 years of age or 35 years of pensionable service, whichever comes first.",
    distractors: [
      "This retirement threshold applies to university professors and judicial officers.",
      "This is below the official civil service statutory limits.",
      "This applies strictly to apex judicial offices."
    ]
  },
  {
    id: "WAEC-APT-CQ-03-005",
    chapterIndex: 2,
    text: "Which division within WAEC is primarily responsible for item banking, syllabus review, and paper setting?",
    choices: ["Test Development Division (TDD)", "Test Administration Division (TAD)", "Finance Division", "Corporate Affairs Division"],
    correct: 0,
    explanation: "Test Development Division (TDD) designs syllabi, constructs items, moderates questions, and builds item banks.",
    distractors: [
      "TAD oversees exam logistics, custody, invigilation, and centre administration.",
      "Finance handles operational budgeting and disbursements.",
      "Corporate Affairs handles public relations and institutional communications."
    ]
  },

  // ----- Chapter 3: Logical & Abstract Reasoning -----
  {
    id: "WAEC-APT-CQ-04-001",
    chapterIndex: 3,
    text: "Find the next number in the series: 2, 6, 12, 20, 30, ?",
    choices: ["40", "42", "36", "48"],
    correct: 1,
    explanation: "The differences increase by 2 each time: +4, +6, +8, +10; next is +12 → 30 + 12 = 42.",
    distractors: [
      "Assumes a constant difference of 10.",
      "Assumes a smaller increment than the pattern requires.",
      "Assumes a doubling or other unrelated pattern."
    ]
  },
  {
    id: "WAEC-APT-CQ-04-002",
    chapterIndex: 3,
    text: "Premise 1: All examination officers undergo security clearance.\nPremise 2: Some IT officers are examination officers.\nConclusion: ?",
    choices: [
      "Some IT officers undergo security clearance",
      "All IT officers undergo security clearance",
      "No IT officer undergoes security clearance",
      "Security clearance is required only for IT officers"
    ],
    correct: 0,
    explanation: "Since all members of the exam officer set undergo clearance, any IT officer who belongs to that set must also undergo clearance.",
    distractors: [
      "Over-generalizes from 'some' to 'all'.",
      "Directly contradicts the logical premises.",
      "Assumes exclusivity not supported by the premises."
    ]
  },
  {
    id: "WAEC-APT-CQ-04-003",
    chapterIndex: 3,
    text: "In a certain code, 'WASSCE' is written as 'YCUUEG'. How is 'PAPERS' written in that same code?",
    choices: ["RCRGTU", "RCRGVT", "QBQFST", "RBRGUT"],
    correct: 0,
    explanation: "Each letter is shifted forward by +2 positions in the alphabet: P(+2)=R, A(+2)=C, P(+2)=R, E(+2)=G, R(+2)=T, S(+2)=U.",
    distractors: [
      "Miscalculated the shift for the final character.",
      "Applied a +1 shift instead of +2.",
      "Made an transposition error on the middle consonants."
    ]
  },
  {
    id: "WAEC-APT-CQ-04-004",
    chapterIndex: 3,
    text: "Which shape concept does not belong with the others: Octagon, Hexagon, Cylinder, Pentagon?",
    choices: ["Octagon", "Hexagon", "Cylinder", "Pentagon"],
    correct: 2,
    explanation: "Cylinder is a 3D geometric solid; Octagon, Hexagon, and Pentagon are 2D polygons.",
    distractors: [
      "Octagon is a 2D polygon with 8 sides.",
      "Hexagon is a 2D polygon with 6 sides.",
      "Pentagon is a 2D polygon with 5 sides."
    ]
  },
  {
    id: "WAEC-APT-CQ-04-005",
    chapterIndex: 3,
    text: "If A is taller than B, and B is taller than C, which is true?",
    choices: [
      "C is taller than A",
      "A is taller than C",
      "A and C are the same height",
      "B is the tallest"
    ],
    correct: 1,
    explanation: "By transitivity, A > B > C implies A > C.",
    distractors: [
      "This contradicts the given order.",
      "Equality is not implied.",
      "B is between A and C, not the tallest."
    ]
  },

  // ----- Chapter 4: Educational Measurement & Psychometrics (General Duties Track) -----
  {
    id: "WAEC-APT-CQ-05-001",
    chapterIndex: 4,
    text: "An item analysis reveals that an exam question was answered correctly by 85 out of 100 candidates. What is the item difficulty index (p-value)?",
    choices: ["0.85", "0.15", "8.50", "0.50"],
    correct: 0,
    explanation: "Difficulty index (p-value) = Number of correct responses / Total candidates = 85 / 100 = 0.85 (indicating a very easy item).",
    distractors: [
      "This measures the proportion of incorrect responses (1 - p).",
      "Scaling magnitude mistake.",
      "Assumes a default medium difficulty level."
    ]
  },
  {
    id: "WAEC-APT-CQ-05-002",
    chapterIndex: 4,
    text: "If an assessment yields highly consistent results across multiple administrations but fails to measure the target syllabus objectives, it exhibits:",
    choices: [
      "High reliability and low validity",
      "Low reliability and high validity",
      "High reliability and high validity",
      "Low reliability and low validity"
    ],
    correct: 0,
    explanation: "Reliability measures consistency; validity measures accuracy. Consistent outcomes without measuring the intended objective signify high reliability paired with low validity.",
    distractors: [
      "A test cannot have high validity without underlying measurement consistency.",
      "High validity requires measuring the actual target objectives correctly.",
      "Consistency rules out low reliability."
    ]
  },
  {
    id: "WAEC-APT-CQ-05-003",
    chapterIndex: 4,
    text: "According to Bloom's Revised Taxonomy, which cognitive domain level requires a student to justify a decision or course of action?",
    choices: ["Evaluating", "Analyzing", "Applying", "Creating"],
    correct: 0,
    explanation: "'Evaluating' involves making judgments based on criteria and standards, such as justifying a decision.",
    distractors: [
      "Analyzing refers to breaking down material into component parts.",
      "Applying refers to executing or using a procedure in a given situation.",
      "Creating involves putting elements together to form a coherent functional whole."
    ]
  },
  {
    id: "WAEC-APT-CQ-05-004",
    chapterIndex: 4,
    text: "Which reliability coefficient formula is specifically designed to assess internal consistency for dichotomously scored test items (0 or 1)?",
    choices: ["Kuder-Richardson 20 (KR-20)", "Cronbach's Alpha", "Pearson Product-Moment", "Spearman-Brown Prophecy"],
    correct: 0,
    explanation: "KR-20 is designed for internal consistency of dichotomous items (right/wrong). Cronbach's Alpha generalizes this for multipoint/Likert items.",
    distractors: [
      "Cronbach's Alpha is used for continuous or non-dichotomous items.",
      "Pearson correlation measures bivariate linear relationships.",
      "Spearman-Brown adjusts split-half reliability estimates for test length changes."
    ]
  },
  {
    id: "WAEC-APT-CQ-05-005",
    chapterIndex: 4,
    text: "A standardized test score report gives a student a Stanine score of 9. How should an assessment officer interpret this result?",
    choices: [
      "Superior performance (top 4% of the norm group)",
      "Average performance (middle 20% of the norm group)",
      "Below average performance (bottom 11% of the norm group)",
      "Failing performance requiring mandatory paper re-sit"
    ],
    correct: 0,
    explanation: "Stanine scores range from 1 to 9. A stanine of 9 represents the highest performance band, corresponding to the top 4% of test takers.",
    distractors: [
      "Stanines 4, 5, and 6 represent average performance.",
      "Stanine 2 or 3 represents below average performance.",
      "Stanines represent relative normative rank, not absolute pass/fail thresholds."
    ]
  },

  // ----- Chapter 5: Assessment Security, Ethics & Office Administration -----
  {
    id: "WAEC-APT-CQ-06-001",
    chapterIndex: 5,
    text: "Which official WAEC committee is empowered to investigate and take final disciplinary decisions on reported examination malpractice cases?",
    choices: [
      "National Committee on Educational Cases (NCEC)",
      "Board of Directorates",
      "Public Accounts Committee",
      "Tender and Ethics Board"
    ],
    correct: 0,
    explanation: "The Committee on Educational Cases considers reports of malpractice and determines appropriate penalties/cancellations.",
    distractors: [
      "The Board handles general institutional policy, not specific candidate malpractice cases.",
      "Public Accounts deals with audit and financial compliance.",
      "Tender Board handles procurement contracts."
    ]
  },
  {
    id: "WAEC-APT-CQ-06-002",
    chapterIndex: 5,
    text: "When drafting an official minute on an administrative file in the public service, what is the primary objective?",
    choices: [
      "To provide a concise summary of background facts and recommend a clear line of action",
      "To write a detailed essay expressing personal opinions on organizational policies",
      "To duplicate all previous correspondence verbatim",
      "To issue a binding disciplinary query to subordinate staff"
    ],
    correct: 0,
    explanation: "Administrative minuting requires summarizing the issue clearly, highlighting relevant rules/precedents, and suggesting concrete actionable recommendations.",
    distractors: [
      "Minutes must remain objective and rooted in Public Service Rules, not personal opinions.",
      "Duplication creates unnecessary clutter and lacks analysis.",
      "A minute is an internal note for decision-making, not a formal query document."
    ]
  },
  {
    id: "WAEC-APT-CQ-06-003",
    chapterIndex: 5,
    text: "What is the standard security protocol when receiving confidential examination material packets at a Zonal Custodian Depot?",
    choices: [
      "Verify outer tamper-evident seals in the presence of security officials and log receipt details immediately",
      "Open the inner question bundles to verify page counts before storing in the vault",
      "Store the parcels directly without checking seals until exam morning",
      "Hand over custody keys to unauthorized security officers for safekeeping"
    ],
    correct: 0,
    explanation: "Confidential material must be verified externally for intact seals, witnessed by authorized personnel, and immediately entered into custody logs without breaking inner seals.",
    distractors: [
      "Opening inner question bundles breaks security protocol prior to exam start time.",
      "Failing to inspect seal integrity upon arrival exposes the process to undetected tampering.",
      "Custody keys must remain exclusively with designated WAEC Custodians."
    ]
  },
  {
    id: "WAEC-APT-CQ-06-004",
    chapterIndex: 5,
    text: "An administrative officer discovers a close relative is sitting for an examination at a centre under the officer's direct supervision. What is the ethical course of action?",
    choices: [
      "Formally declare a conflict of interest and request redeployment from supervising that centre",
      "Say nothing and attempt to remain completely impartial during monitoring",
      "Inform the relative of key exam security protocols privately",
      "Delegate supervisory duties to a subordinate unofficially without logging it"
    ],
    correct: 0,
    explanation: "Public sector ethics requires immediate formal declaration of any potential or real conflict of interest to allow re-assignment by superiors.",
    distractors: [
      "Concealing a conflict of interest breaches civil service ethical codes.",
      "Giving private briefings to candidates creates an unfair advantage.",
      "Unofficial delegation avoids institutional accountability."
    ]
  },
  {
    id: "WAEC-APT-CQ-06-005",
    chapterIndex: 5,
    text: "In public sector file indexing, what does the abbreviation 'p.f.' stand for on an official personal folder?",
    choices: ["Personal File", "Permanent Folder", "Pending Filing", "Primary Folio"],
    correct: 0,
    explanation: "In official registry operations, 'p.f.' stands for Personal File.",
    distractors: [
      "Incorrect terminology in standard administrative registry systems.",
      "Refers to temporary pending items, not personal folders.",
      "Folio refers to individual page numbers within a file."
    ]
  }
];

export default questions;
