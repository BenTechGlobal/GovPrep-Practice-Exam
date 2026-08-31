/* ==========================================================================
   PRODUCT QUESTION BANK — WAEC Recruitment Aptitude Test
   Dynamic ES module for GovPrep. Default export = flat questions array.
   chapterIndex maps to MOCK_PRODUCTS_DATABASE entry WAECAPT.chapters[]
   Exactly 266 unique questions (Chapter 3 / chapterIndex 2 expanded to 100 items).
   Correct answers pseudorandomly redistributed across indices 0–3
   for balanced answer-key distribution.
   ========================================================================== */

export const PRODUCT_CODE = "WAEC-APT";

/**
 * Standardized WAEC recruitment aptitude-test configuration.
 * Fully backward-compatible with existing MOCK_PRODUCTS_DATABASE consumers.
 * @type {Object}
 */
export const TEST_CONFIG = {
  productCode: "WAEC-APT",
  title: "WAEC Recruitment Aptitude Test",
  totalQuestions: 266,
  chapters: 6,
  /** Questions allocated per chapter (chapterIndex order) */
  chapterWeights: [34, 34, 100, 34, 32, 32],
  durationMinutes: 120,
  durationSeconds: 7200,
  passingScorePercent: 50,
  passingScoreAbsolute: 133,
  maxAttempts: 3,
  shuffleQuestions: true,
  /** Choices are already pre-shuffled in the bank; set false to avoid double-shuffle */
  shuffleChoices: false,
  showExplanations: true,
  allowReview: true,
  negativeMarking: false,
  sections: [
    { chapterIndex: 0, name: "Quantitative Reasoning & Advanced Numeracy", questionCount: 34 },
    { chapterIndex: 1, name: "Verbal Reasoning & English Comprehension", questionCount: 34 },
    { chapterIndex: 2, name: "WAEC Institutional Mandate, History & Public Service", questionCount: 100 },
    { chapterIndex: 3, name: "Logical & Abstract Reasoning", questionCount: 34 },
    { chapterIndex: 4, name: "Educational Measurement & Psychometrics", questionCount: 32 },
    { chapterIndex: 5, name: "Assessment Security, Ethics & Office Administration", questionCount: 32 }
  ]
};

export const questions = [
  {
    "id": "WAEC-APT-CQ-01-001",
    "chapterIndex": 0,
    "text": "A trader bought 40 bags of rice at ₦25,000 each and sold them at a 15% profit. What was the total selling price?",
    "choices": [
      "₦1,150,000",
      "₦1,250,000",
      "₦1,000,000",
      "₦900,000"
    ],
    "correct": 0,
    "explanation": "Cost = 40 × ₦25,000 = ₦1,000,000. Profit of 15% = ₦150,000. Selling price = ₦1,150,000.",
    "distractors": [
      "This is only the cost price and ignores the profit.",
      "This assumes a higher profit percentage than stated.",
      "This assumes a loss instead of a profit."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-002",
    "chapterIndex": 0,
    "text": "If 3/4 of a number is 48, what is half of the same number?",
    "choices": [
      "36",
      "32",
      "24",
      "64"
    ],
    "correct": 1,
    "explanation": "(3/4)x = 48 ⇒ x = 64. Half of 64 = 32.",
    "distractors": [
      "Misapplied the given fraction.",
      "Took three-quarters of a different base.",
      "Returned the whole number instead of half."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-003",
    "chapterIndex": 0,
    "text": "Calculate the standard deviation of the following dataset representing candidate scores: 4, 6, 8, 10, 12.",
    "choices": [
      "8.00",
      "4.00",
      "2.83",
      "2.00"
    ],
    "correct": 2,
    "explanation": "Mean = (4+6+8+10+12)/5 = 8. Squared differences from mean = 16 + 4 + 0 + 4 + 16 = 40. Variance = 40/5 = 8. Standard deviation = √8 ≈ 2.83.",
    "distractors": [
      "Confused variance with standard deviation.",
      "Used the value of the mean instead of calculating dispersion.",
      "Divided the sum of absolute deviations directly without squaring."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-004",
    "chapterIndex": 0,
    "text": "Simplify: 2/5 + 3/10 − 1/4.",
    "choices": [
      "11/20",
      "13/20",
      "7/20",
      "9/20"
    ],
    "correct": 3,
    "explanation": "Common denominator 20: 8/20 + 6/20 − 5/20 = 9/20.",
    "distractors": [
      "Arithmetic error when combining the numerators (added instead of proper combination).",
      "One of the fractions was not converted correctly or an intermediate arithmetic error.",
      "The last term was added instead of subtracted, or another arithmetic slip."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-005",
    "chapterIndex": 0,
    "text": "A candidate scores a raw mark of 75 on a test with a mean of 60 and a standard deviation of 10. What is the candidate's standardized z-score?",
    "choices": [
      "+1.5",
      "-1.5",
      "+1.0",
      "+2.0"
    ],
    "correct": 0,
    "explanation": "z = (X - Mean) / Standard Deviation = (75 - 60) / 10 = 15 / 10 = +1.5.",
    "distractors": [
      "Subtracted the standard deviation from the mean difference incorrectly.",
      "Divided the total raw score by the standard deviation directly.",
      "Applied a negative vector to a score above the average mean."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-006",
    "chapterIndex": 0,
    "text": "If the ratio of boys to girls in a WAEC examination centre is 3:5 and there are 240 girls, how many boys are there?",
    "choices": [
      "160",
      "144",
      "180",
      "120"
    ],
    "correct": 1,
    "explanation": "Boys/Girls = 3/5. Boys = (3/5) × 240 = 144.",
    "distractors": [
      "Used an incorrect multiplier or inverted the ratio.",
      "Assumed a different total or ratio base.",
      "Calculated a lower proportion of the given number."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-007",
    "chapterIndex": 0,
    "text": "A set of scores has a mean of 50 and a standard deviation of 8. What is the coefficient of variation (expressed as a percentage)?",
    "choices": [
      "50%",
      "6.25%",
      "16%",
      "8%"
    ],
    "correct": 2,
    "explanation": "Coefficient of variation = (SD / Mean) × 100 = (8 / 50) × 100 = 16%.",
    "distractors": [
      "Used the standard deviation alone without dividing by the mean.",
      "Reported the mean instead of the relative dispersion measure.",
      "Inverted the ratio and expressed it incorrectly."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-008",
    "chapterIndex": 0,
    "text": "Find the simple interest on ₦80,000 for 3 years at 7.5% per annum.",
    "choices": [
      "₦15,000",
      "₦20,000",
      "₦16,000",
      "₦18,000"
    ],
    "correct": 3,
    "explanation": "SI = (P × R × T)/100 = (80,000 × 7.5 × 3)/100 = 18,000.",
    "distractors": [
      "Used an incorrect rate or time product.",
      "Applied compound interest approximation.",
      "Misplaced the decimal in the percentage calculation."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-009",
    "chapterIndex": 0,
    "text": "The average of five consecutive even numbers is 24. What is the largest of these numbers?",
    "choices": [
      "28",
      "30",
      "26",
      "22"
    ],
    "correct": 0,
    "explanation": "Let the numbers be n-4, n-2, n, n+2, n+4. Average = n = 24. Largest = 24 + 4 = 28.",
    "distractors": [
      "Selected the middle or next even number incorrectly.",
      "Added an extra two steps beyond the sequence.",
      "Chose a number below the average."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-010",
    "chapterIndex": 0,
    "text": "If 15% of a number is 45, what is 40% of the same number?",
    "choices": [
      "90",
      "120",
      "135",
      "60"
    ],
    "correct": 1,
    "explanation": "15% = 45 ⇒ 1% = 3 ⇒ 40% = 120.",
    "distractors": [
      "Doubled the given percentage value only.",
      "Multiplied by three times the percentage incorrectly.",
      "Took a smaller fraction of the base."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-011",
    "chapterIndex": 0,
    "text": "A pie chart shows that 72° represents the number of candidates who scored distinction. What percentage of candidates scored distinction?",
    "choices": [
      "15%",
      "25%",
      "20%",
      "30%"
    ],
    "correct": 2,
    "explanation": "Percentage = (72 / 360) × 100 = 20%.",
    "distractors": [
      "Divided by 360 incorrectly or used 90° as base.",
      "Assumed a different sector angle conversion.",
      "Used a higher fraction of the full circle."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-012",
    "chapterIndex": 0,
    "text": "Solve for x: 3x − 7 = 2x + 5.",
    "choices": [
      "2",
      "−12",
      "5",
      "12"
    ],
    "correct": 3,
    "explanation": "3x − 2x = 5 + 7 ⇒ x = 12.",
    "distractors": [
      "Subtracted constants incorrectly leading to a small positive value.",
      "Reversed the signs of the constants.",
      "Used only one side of the equation."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-013",
    "chapterIndex": 0,
    "text": "The median of the ordered set 12, 15, 18, 21, 24, 27, 30 is:",
    "choices": [
      "21",
      "24",
      "20",
      "18"
    ],
    "correct": 0,
    "explanation": "There are 7 values; the middle (4th) value is 21.",
    "distractors": [
      "Selected a value left of the true middle.",
      "Selected a value right of the true middle.",
      "Averaged two central values unnecessarily for an odd set."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-014",
    "chapterIndex": 0,
    "text": "A number is increased by 20% and then decreased by 20%. The net change relative to the original is:",
    "choices": [
      "No change",
      "4% decrease",
      "4% increase",
      "20% decrease"
    ],
    "correct": 1,
    "explanation": "Let original = 100. After +20% = 120. After −20% of 120 = 96. Net = 4% decrease.",
    "distractors": [
      "Assumed the percentage changes cancel exactly.",
      "Incorrectly added the percentage changes.",
      "Ignored the sequential application on the new base."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-015",
    "chapterIndex": 0,
    "text": "What is the next term in the arithmetic sequence 7, 12, 17, 22, ...?",
    "choices": [
      "24",
      "25",
      "27",
      "30"
    ],
    "correct": 2,
    "explanation": "Common difference = 5. 22 + 5 = 27.",
    "distractors": [
      "Used a smaller common difference.",
      "Assumed a larger jump.",
      "Added only 2 instead of the constant difference."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-016",
    "chapterIndex": 0,
    "text": "If the probability of a candidate passing an objective paper is 0.7, what is the probability of failing it (assuming only two outcomes)?",
    "choices": [
      "0.7",
      "0.21",
      "1.0",
      "0.3"
    ],
    "correct": 3,
    "explanation": "P(fail) = 1 − P(pass) = 1 − 0.7 = 0.3.",
    "distractors": [
      "Repeated the given success probability.",
      "Assumed certainty of one outcome.",
      "Multiplied the probabilities incorrectly."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-017",
    "chapterIndex": 0,
    "text": "Express 0.045 as a percentage.",
    "choices": [
      "4.5%",
      "0.45%",
      "0.045%",
      "45%"
    ],
    "correct": 0,
    "explanation": "0.045 × 100 = 4.5%.",
    "distractors": [
      "Moved the decimal point only one place.",
      "Moved it three places incorrectly.",
      "Left the value essentially unchanged."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-018",
    "chapterIndex": 0,
    "text": "The range of the scores 45, 52, 38, 61, 49 is:",
    "choices": [
      "61",
      "23",
      "13",
      "16"
    ],
    "correct": 1,
    "explanation": "Range = highest − lowest = 61 − 38 = 23.",
    "distractors": [
      "Subtracted two intermediate values.",
      "Used a different pair of extremes.",
      "Reported the maximum value instead of the range."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-019",
    "chapterIndex": 0,
    "text": "A sum of money doubles itself in 8 years at simple interest. What is the rate percent per annum?",
    "choices": [
      "8%",
      "10%",
      "12.5%",
      "15%"
    ],
    "correct": 2,
    "explanation": "Let principal = P. Interest = P in 8 years. R = (100 × I)/(P × T) = (100 × P)/(P × 8) = 12.5%.",
    "distractors": [
      "Used a lower approximate rate.",
      "Assumed a higher rate.",
      "Confused the time period with the rate."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-020",
    "chapterIndex": 0,
    "text": "If 2^x = 32, what is the value of x?",
    "choices": [
      "4",
      "6",
      "3",
      "5"
    ],
    "correct": 3,
    "explanation": "2^5 = 32, therefore x = 5.",
    "distractors": [
      "Used 2^4 = 16.",
      "Used 2^6 = 64.",
      "Used a smaller exponent."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-021",
    "chapterIndex": 0,
    "text": "The mode of the set {3, 5, 7, 5, 9, 5, 2} is:",
    "choices": [
      "5",
      "7",
      "9",
      "3"
    ],
    "correct": 0,
    "explanation": "5 appears three times, more frequently than any other value.",
    "distractors": [
      "Selected the smallest value.",
      "Selected a value that appears once.",
      "Selected another unique value."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-022",
    "chapterIndex": 0,
    "text": "A rectangular examination hall measures 20 m by 15 m. What is its area in square metres?",
    "choices": [
      "70",
      "300",
      "250",
      "350"
    ],
    "correct": 1,
    "explanation": "Area = length × breadth = 20 × 15 = 300 m².",
    "distractors": [
      "Added the dimensions instead of multiplying.",
      "Used an incorrect product.",
      "Subtracted or used a different formula."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-023",
    "chapterIndex": 0,
    "text": "If the selling price of an item is ₦4,800 and the profit is 20% of cost price, what is the cost price?",
    "choices": [
      "₦5,000",
      "₦3,840",
      "₦4,000",
      "₦4,200"
    ],
    "correct": 2,
    "explanation": "SP = CP × 1.20 = 4,800 ⇒ CP = 4,800 / 1.20 = 4,000.",
    "distractors": [
      "Subtracted 20% of SP directly from SP.",
      "Used a different percentage base.",
      "Added the profit percentage incorrectly."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-024",
    "chapterIndex": 0,
    "text": "What is the value of 15% of 15% of 400?",
    "choices": [
      "60",
      "15",
      "6",
      "9"
    ],
    "correct": 3,
    "explanation": "15% of 400 = 60. 15% of 60 = 9.",
    "distractors": [
      "Stopped after the first percentage calculation.",
      "Misapplied the successive percentages.",
      "Took only one percentage of the original."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-025",
    "chapterIndex": 0,
    "text": "In a normal distribution, approximately what percentage of scores lie within one standard deviation of the mean?",
    "choices": [
      "68%",
      "99.7%",
      "95%",
      "50%"
    ],
    "correct": 0,
    "explanation": "By the empirical rule, about 68% of data fall within ±1 SD of the mean.",
    "distractors": [
      "This is the approximate percentage within ±2 SD.",
      "This is roughly the median split, not the 1-SD band.",
      "This is the approximate percentage within ±3 SD."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-026",
    "chapterIndex": 0,
    "text": "If a = 3 and b = 4, evaluate a² + b².",
    "choices": [
      "49",
      "25",
      "12",
      "7"
    ],
    "correct": 1,
    "explanation": "3² + 4² = 9 + 16 = 25.",
    "distractors": [
      "Added a and b then squared the sum.",
      "Multiplied a by b.",
      "Simply added a and b."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-027",
    "chapterIndex": 0,
    "text": "A candidate needs 50% to pass. If the maximum mark is 80, what is the minimum mark required to pass?",
    "choices": [
      "45",
      "50",
      "40",
      "30"
    ],
    "correct": 2,
    "explanation": "50% of 80 = 40.",
    "distractors": [
      "Confused the percentage with the absolute mark required.",
      "Used a lower threshold.",
      "Applied a different percentage."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-028",
    "chapterIndex": 0,
    "text": "The harmonic mean of 4 and 6 is closest to:",
    "choices": [
      "5",
      "4",
      "5.5",
      "4.8"
    ],
    "correct": 3,
    "explanation": "HM = 2ab/(a+b) = 2×4×6/(4+6) = 48/10 = 4.8.",
    "distractors": [
      "Used the arithmetic mean instead.",
      "Used a simple average of neighbouring values.",
      "Selected one of the original numbers."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-029",
    "chapterIndex": 0,
    "text": "If log₁₀ 1000 = x, what is x?",
    "choices": [
      "3",
      "100",
      "2",
      "4"
    ],
    "correct": 0,
    "explanation": "10³ = 1000, so log₁₀ 1000 = 3.",
    "distractors": [
      "Used log of 100.",
      "Used a higher power.",
      "Confused the argument with the result."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-030",
    "chapterIndex": 0,
    "text": "A bag contains 5 red and 3 blue balls. Probability of drawing a red ball at random is:",
    "choices": [
      "1/2",
      "5/8",
      "5/3",
      "3/8"
    ],
    "correct": 1,
    "explanation": "Total balls = 8. P(red) = 5/8.",
    "distractors": [
      "Took the blue probability.",
      "Used the ratio of red to blue.",
      "Assumed equal probability without counting."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-031",
    "chapterIndex": 0,
    "text": "Convert the mixed number 2¾ to an improper fraction.",
    "choices": [
      "7/4",
      "9/4",
      "11/4",
      "8/4"
    ],
    "correct": 2,
    "explanation": "2¾ = (2×4 + 3)/4 = 11/4.",
    "distractors": [
      "Multiplied only the whole number by the denominator.",
      "Added incorrectly.",
      "Used a different numerator."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-032",
    "chapterIndex": 0,
    "text": "If the variance of a dataset is 16, the standard deviation is:",
    "choices": [
      "8",
      "2",
      "256",
      "4"
    ],
    "correct": 3,
    "explanation": "Standard deviation = √variance = √16 = 4.",
    "distractors": [
      "Doubled the variance root incorrectly.",
      "Squared the variance.",
      "Took half of the variance."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-033",
    "chapterIndex": 0,
    "text": "A car travels 240 km in 4 hours. What is its average speed in km/h?",
    "choices": [
      "60",
      "40",
      "50",
      "80"
    ],
    "correct": 0,
    "explanation": "Speed = distance/time = 240/4 = 60 km/h.",
    "distractors": [
      "Used an incorrect division.",
      "Assumed a higher speed.",
      "Used a lower quotient."
    ]
  },
  {
    "id": "WAEC-APT-CQ-01-034",
    "chapterIndex": 0,
    "text": "Find the value of 7! / 5!.",
    "choices": [
      "7",
      "42",
      "35",
      "120"
    ],
    "correct": 1,
    "explanation": "7! = 7×6×5!, so 7!/5! = 7×6 = 42.",
    "distractors": [
      "Returned only the leading factor.",
      "Multiplied fewer terms.",
      "Computed a larger factorial product."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-001",
    "chapterIndex": 1,
    "text": "Choose the option nearest in meaning to the underlined word: The Registrar's directive on examination security was explicit.",
    "choices": [
      "Strictly confidential",
      "Vague and ambiguous",
      "Clear and fully expressed",
      "Lengthy and verbose"
    ],
    "correct": 2,
    "explanation": "'Explicit' means stated clearly and in detail, leaving no room for confusion.",
    "distractors": [
      "This is an antonym of explicit.",
      "Explicit refers to clarity, not word count.",
      "Confidentiality relates to secrecy, not explicit clarity."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-002",
    "chapterIndex": 1,
    "text": "Fill in the blank: Neither the invigilators nor the supervisor _____ present when the seals were broken.",
    "choices": [
      "were",
      "are",
      "have been",
      "was"
    ],
    "correct": 3,
    "explanation": "When using 'neither/nor', the verb agrees with the closer subject. 'Supervisor' is singular, so 'was' is correct.",
    "distractors": [
      "Erroneously matched agreement with the plural noun 'invigilators'.",
      "Used present tense for a completed past event.",
      "Incorrect subject-verb auxiliary agreement."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-003",
    "chapterIndex": 1,
    "text": "Choose the word opposite in meaning to 'Punctilious' as used in administrative compliance.",
    "choices": [
      "Careless",
      "Formal",
      "Rigid",
      "Meticulous"
    ],
    "correct": 0,
    "explanation": "Punctilious means showing great attention to detail or correct behavior; its antonym is careless.",
    "distractors": [
      "Meticulous is a synonym of punctilious.",
      "Formal describes compliance style, not attention to detail.",
      "Rigid refers to inflexibility, not lack of attention to detail."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-004",
    "chapterIndex": 1,
    "text": "Select the correctly spelled administrative designation.",
    "choices": [
      "Bureacracy",
      "Bureaucracy",
      "Bureaucracy",
      "Beureaucracy"
    ],
    "correct": 1,
    "explanation": "The correct spelling is 'Bureaucracy' (b-u-r-e-a-u-c-r-a-c-y).",
    "distractors": [
      "Misplaced 'e' before 'u'.",
      "Duplicate entry of incorrect vowel ordering.",
      "Omitted the silent 'u' in the prefix."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-005",
    "chapterIndex": 1,
    "text": "Identify the logical inference from the statement: 'All candidates who breach CBT instructions face immediate disqualification.'",
    "choices": [
      "Strict compliance with instructions guarantees passing the exam",
      "A disqualified candidate must have breached CBT instructions",
      "Breaching CBT instructions is a sufficient condition for disqualification",
      "Only CBT candidates are subject to examination disqualification"
    ],
    "correct": 2,
    "explanation": "The conditional statement establishes that breaching instructions guarantees disqualification (sufficient condition). Disqualification might also occur for other reasons.",
    "distractors": [
      "Commits the fallacy of affirming the consequent.",
      "Confuses procedural compliance with academic success.",
      "Extrapolates the rule beyond its stated scope."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-006",
    "chapterIndex": 1,
    "text": "Choose the option that best completes the sentence: The committee _____ its report last week.",
    "choices": [
      "submitting",
      "submits",
      "submit",
      "submitted"
    ],
    "correct": 3,
    "explanation": "The past-time marker 'last week' requires the simple past tense 'submitted'.",
    "distractors": [
      "Uses the base form without tense marking.",
      "Uses present simple, inappropriate for a completed past action.",
      "Uses a non-finite form that cannot stand as the main verb."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-007",
    "chapterIndex": 1,
    "text": "Which word is nearest in meaning to 'ameliorate' in the context of improving examination conditions?",
    "choices": [
      "Improve",
      "Delay",
      "Worsen",
      "Ignore"
    ],
    "correct": 0,
    "explanation": "Ameliorate means to make better or improve.",
    "distractors": [
      "This is an antonym.",
      "This is unrelated to improvement.",
      "This concerns timing, not quality."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-008",
    "chapterIndex": 1,
    "text": "Select the correct plural form: The _____ of the examination centres were verified.",
    "choices": [
      "layoutes",
      "layouts",
      "layout's",
      "lay outs"
    ],
    "correct": 1,
    "explanation": "The regular plural of 'layout' is 'layouts'.",
    "distractors": [
      "Incorrectly adds an extra syllable.",
      "Uses a possessive form instead of plural.",
      "Splits the compound incorrectly."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-009",
    "chapterIndex": 1,
    "text": "Identify the synonym of 'meticulous' as applied to marking schemes.",
    "choices": [
      "Speedy",
      "Careless",
      "Careful and precise",
      "Arbitrary"
    ],
    "correct": 2,
    "explanation": "Meticulous means showing great attention to detail; careful and precise.",
    "distractors": [
      "Antonym of the target word.",
      "Relates to speed rather than accuracy.",
      "Implies lack of consistent standard."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-010",
    "chapterIndex": 1,
    "text": "Choose the correct preposition: The candidates were accused _____ examination malpractice.",
    "choices": [
      "for",
      "on",
      "with",
      "of"
    ],
    "correct": 3,
    "explanation": "The standard collocation is 'accused of' a wrongdoing.",
    "distractors": [
      "Incorrect preposition for this verb.",
      "Also non-standard with 'accused'.",
      "Does not form the required idiom."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-011",
    "chapterIndex": 1,
    "text": "Which sentence is grammatically correct?",
    "choices": [
      "Each of the invigilators has signed the attendance sheet.",
      "Each of the invigilators are signing the attendance sheet.",
      "Each of the invigilators have signed the attendance sheet.",
      "Each of the invigilators were signed the attendance sheet."
    ],
    "correct": 0,
    "explanation": "'Each' is singular and takes a singular verb 'has'.",
    "distractors": [
      "Incorrectly uses plural verb with singular 'each'.",
      "Uses plural present continuous.",
      "Uses passive construction incorrectly."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-012",
    "chapterIndex": 1,
    "text": "The opposite of 'transparent' in the context of examination processes is:",
    "choices": [
      "Clear",
      "Opaque",
      "Open",
      "Honest"
    ],
    "correct": 1,
    "explanation": "Transparent means easily understood or seen through; opaque is the direct opposite.",
    "distractors": [
      "Synonym of transparent.",
      "Also a near synonym.",
      "Related to integrity, not opacity."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-013",
    "chapterIndex": 1,
    "text": "Choose the correctly spelled word: The officer displayed great _____.",
    "choices": [
      "diligance",
      "dilligence",
      "diligence",
      "diligencee"
    ],
    "correct": 2,
    "explanation": "The standard spelling is 'diligence'.",
    "distractors": [
      "Double 'l' error.",
      "Incorrect vowel in the second syllable.",
      "Extra final letter."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-014",
    "chapterIndex": 1,
    "text": "Fill in the blank with the appropriate conjunction: The results were released _____ the malpractice cases had been resolved.",
    "choices": [
      "unless",
      "although",
      "before",
      "after"
    ],
    "correct": 3,
    "explanation": "The logical temporal relationship is that release followed resolution, so 'after' is correct.",
    "distractors": [
      "Reverses the chronological order.",
      "Introduces contrast rather than sequence.",
      "Introduces a conditional that does not fit."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-015",
    "chapterIndex": 1,
    "text": "Which word best replaces the underlined phrase: The decision was made without any delay.",
    "choices": [
      "Promptly",
      "Reluctantly",
      "Hesitantly",
      "Carelessly"
    ],
    "correct": 0,
    "explanation": "'Without any delay' means promptly or immediately.",
    "distractors": [
      "Implies delay or uncertainty.",
      "Implies unwillingness.",
      "Implies lack of care."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-016",
    "chapterIndex": 1,
    "text": "Identify the figure of speech: 'The examination hall was a sea of anxious faces.'",
    "choices": [
      "Simile",
      "Metaphor",
      "Hyperbole",
      "Personification"
    ],
    "correct": 1,
    "explanation": "A direct comparison without 'like' or 'as' constitutes a metaphor.",
    "distractors": [
      "Would require 'like' or 'as'.",
      "Exaggeration is not the primary device here.",
      "No human qualities are attributed to non-human entities."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-017",
    "chapterIndex": 1,
    "text": "Choose the option nearest in meaning to 'stringent' as applied to examination regulations.",
    "choices": [
      "Flexible",
      "Lenient",
      "Strict",
      "Optional"
    ],
    "correct": 2,
    "explanation": "Stringent means strict, precise, and exacting.",
    "distractors": [
      "Antonym of stringent.",
      "Also opposite in force.",
      "Implies choice rather than obligation."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-018",
    "chapterIndex": 1,
    "text": "Which of the following is a correct analogy? Book is to Library as Script is to:",
    "choices": [
      "Teacher",
      "Classroom",
      "Pencil",
      "Examination"
    ],
    "correct": 3,
    "explanation": "A book is kept or used in a library; a script is the written work associated with an examination.",
    "distractors": [
      "A person, not a place or event of use.",
      "A location but not the primary association.",
      "A writing instrument, not the parallel relationship."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-019",
    "chapterIndex": 1,
    "text": "Select the sentence free from error:",
    "choices": [
      "The number of candidates who sat the examination has increased.",
      "The number of candidates who sat the examination is increase.",
      "The number of candidates who sat the examination have increased.",
      "The numbers of candidates who sat the examination has increased."
    ],
    "correct": 0,
    "explanation": "'The number' is singular and takes 'has'.",
    "distractors": [
      "Incorrect plural verb agreement.",
      "Incorrect plural of 'number' and still singular verb.",
      "Incorrect verb form."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-020",
    "chapterIndex": 1,
    "text": "The word 'obsolete' is opposite in meaning to:",
    "choices": [
      "Redundant",
      "Current",
      "Ancient",
      "Outdated"
    ],
    "correct": 1,
    "explanation": "Obsolete means no longer in use; current is the opposite.",
    "distractors": [
      "Near synonym of obsolete.",
      "Also indicates age and disuse.",
      "Implies superfluity, related to obsolescence."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-021",
    "chapterIndex": 1,
    "text": "Fill in the blank: Either the supervisor or the invigilators _____ responsible for the missing scripts.",
    "choices": [
      "has been",
      "is",
      "are",
      "was"
    ],
    "correct": 2,
    "explanation": "With 'either/or', the verb agrees with the nearer subject 'invigilators' (plural), so 'are'.",
    "distractors": [
      "Would be correct if the nearer subject were singular.",
      "Past tense may not fit the present context.",
      "Singular perfect construction mismatches the plural nearer subject."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-022",
    "chapterIndex": 1,
    "text": "Choose the correct spelling of the word meaning 'a person who invigilates'.",
    "choices": [
      "Invigilatorr",
      "Invigilater",
      "Invegilator",
      "Invigilator"
    ],
    "correct": 3,
    "explanation": "The accepted spelling is 'Invigilator'.",
    "distractors": [
      "Extra final consonant.",
      "Incorrect ending vowel pattern.",
      "Misplaced vowel in the first syllable."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-023",
    "chapterIndex": 1,
    "text": "Which option best completes the sentence: The candidates were advised to _____ the instructions carefully.",
    "choices": [
      "read",
      "have read",
      "reading",
      "reads"
    ],
    "correct": 0,
    "explanation": "After 'to' (infinitive marker) the base form 'read' is required.",
    "distractors": [
      "Gerund form is incorrect after 'to' here.",
      "Third-person singular does not fit.",
      "Perfect infinitive is unnecessary."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-024",
    "chapterIndex": 1,
    "text": "The phrase 'to turn a blind eye' means:",
    "choices": [
      "To look carefully",
      "To ignore deliberately",
      "To examine thoroughly",
      "To close one's eyes in sleep"
    ],
    "correct": 1,
    "explanation": "The idiom means to pretend not to notice something wrong.",
    "distractors": [
      "Opposite of the idiomatic meaning.",
      "Literal and unrelated.",
      "Suggests careful scrutiny rather than ignoring."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-025",
    "chapterIndex": 1,
    "text": "Identify the part of speech of the underlined word: The results were released promptly.",
    "choices": [
      "Noun",
      "Verb",
      "Adverb",
      "Adjective"
    ],
    "correct": 2,
    "explanation": "'Promptly' modifies the verb 'released' and is therefore an adverb.",
    "distractors": [
      "Would describe a noun.",
      "Names a person, place or thing.",
      "Expresses an action or state."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-026",
    "chapterIndex": 1,
    "text": "Choose the option that is nearest in meaning to 'cognizant'.",
    "choices": [
      "Ignorant",
      "Forgetful",
      "Confused",
      "Aware"
    ],
    "correct": 3,
    "explanation": "Cognizant means having knowledge or being aware of something.",
    "distractors": [
      "Antonym.",
      "Related to memory lapse.",
      "Implies lack of clarity."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-027",
    "chapterIndex": 1,
    "text": "Which sentence uses the correct comparative form?",
    "choices": [
      "This year's results are better than last year's.",
      "This year's results are gooder than last year's.",
      "This year's results are more better than last year's.",
      "This year's results are best than last year's."
    ],
    "correct": 0,
    "explanation": "'Better' is the correct comparative of 'good'.",
    "distractors": [
      "Double comparative is ungrammatical.",
      "Incorrect formation of the comparative.",
      "Uses the superlative form incorrectly."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-028",
    "chapterIndex": 1,
    "text": "Select the antonym of 'mandatory' in the context of examination attendance.",
    "choices": [
      "Compulsory",
      "Optional",
      "Required",
      "Obligatory"
    ],
    "correct": 1,
    "explanation": "Mandatory means compulsory; optional is the opposite.",
    "distractors": [
      "Synonym of mandatory.",
      "Also a synonym.",
      "Also a near synonym."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-029",
    "chapterIndex": 1,
    "text": "Fill in the blank with the correct relative pronoun: The officer _____ signed the scripts is on leave.",
    "choices": [
      "whose",
      "which",
      "who",
      "whom"
    ],
    "correct": 2,
    "explanation": "'Who' is the subject relative pronoun referring to a person.",
    "distractors": [
      "Used for things, not persons in this restrictive sense.",
      "Object form, but here the pronoun is subject.",
      "Possessive form, inappropriate here."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-030",
    "chapterIndex": 1,
    "text": "The expression 'in the nick of time' means:",
    "choices": [
      "After a long delay",
      "At a leisurely pace",
      "Too late",
      "Just in time"
    ],
    "correct": 3,
    "explanation": "The idiom means at the last possible moment; just in time.",
    "distractors": [
      "Opposite meaning.",
      "Implies lack of urgency.",
      "Implies delay beyond the deadline."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-031",
    "chapterIndex": 1,
    "text": "Choose the correct passive form: Active – 'The Council released the results.'",
    "choices": [
      "The results were released by the Council.",
      "The results have released by the Council.",
      "The results was released by the Council.",
      "The results are released by the Council."
    ],
    "correct": 0,
    "explanation": "Past simple active becomes past simple passive with 'were' for plural subject.",
    "distractors": [
      "Present simple passive changes the tense.",
      "Incorrect auxiliary and missing 'been'.",
      "Singular verb with plural subject."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-032",
    "chapterIndex": 1,
    "text": "Which word is correctly stressed on the first syllable?",
    "choices": [
      "conDUCT (verb)",
      "CONduct (noun)",
      "preSENT (verb)",
      "reCORD (verb)"
    ],
    "correct": 1,
    "explanation": "As a noun, 'conduct' is stressed on the first syllable.",
    "distractors": [
      "The verb form is stressed on the second syllable.",
      "Verb stress is on the second syllable.",
      "Verb stress is on the second syllable."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-033",
    "chapterIndex": 1,
    "text": "Identify the error in the sentence: 'One of the candidates have not submitted the answer booklet.'",
    "choices": [
      "Incorrect preposition",
      "No error",
      "Subject-verb agreement ('have' should be 'has')",
      "Wrong article"
    ],
    "correct": 2,
    "explanation": "'One' is singular; the verb must be 'has'.",
    "distractors": [
      "The article is correct.",
      "No preposition error is present.",
      "There is a clear agreement error."
    ]
  },
  {
    "id": "WAEC-APT-CQ-02-034",
    "chapterIndex": 1,
    "text": "Choose the option that best explains the idiom 'to hit the nail on the head'.",
    "choices": [
      "To cause physical injury",
      "To make a loud noise",
      "To work very hard",
      "To be exactly right"
    ],
    "correct": 3,
    "explanation": "The idiom means to describe or identify something precisely and accurately.",
    "distractors": [
      "Literal interpretation of the words.",
      "Unrelated idiomatic meaning.",
      "Literal and unrelated."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-001",
    "chapterIndex": 2,
    "text": "The West African Examinations Council (WAEC) was established in 1952 following the recommendation of which historical report?",
    "choices": [
      "The Jeffrey Report of 1950",
      "The Elliot Commission Report",
      "The Phillipson Report",
      "The Ashby Commission Report"
    ],
    "correct": 0,
    "explanation": "WAEC was founded following the recommendations of Dr. G.B. Jeffrey's 1950 report on examinations in West Africa.",
    "distractors": [
      "The Ashby Commission focused on higher education post-1960.",
      "The Elliot Commission focused on university education setup in West Africa.",
      "The Phillipson Report dealt with Nigerianization of civil service."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-002",
    "chapterIndex": 2,
    "text": "Which of the following lists the complete set of official WAEC member countries?",
    "choices": [
      "Nigeria, Ghana, Sierra Leone, Cameroon, and Liberia",
      "Nigeria, Ghana, Sierra Leone, The Gambia, and Liberia",
      "Nigeria, Ghana, Ivory Coast, Sierra Leone, and Liberia",
      "Nigeria, Ghana, Kenya, The Gambia, and Sierra Leone"
    ],
    "correct": 1,
    "explanation": "WAEC serves five Commonwealth West African nations: Nigeria, Ghana, Sierra Leone, The Gambia, and Liberia (which joined in 1974).",
    "distractors": [
      "Cameroon is not a member of WAEC.",
      "Kenya is located in East Africa and is not a member.",
      "Ivory Coast (Cote d'Ivoire) is a Francophone state and not a member."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-003",
    "chapterIndex": 2,
    "text": "Where is the International Headquarters of the West African Examinations Council situated?",
    "choices": [
      "Freetown, Sierra Leone",
      "Banjul, The Gambia",
      "Accra, Ghana",
      "Lagos, Nigeria"
    ],
    "correct": 2,
    "explanation": "The International Headquarters of WAEC is located in Accra, Ghana, headed by the Registrar/Secretary to Council.",
    "distractors": [
      "Lagos hosts the Head National Office (HNO) of Nigeria, not the International HQ.",
      "Freetown hosts a Head National Office.",
      "Banjul hosts a Head National Office."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-004",
    "chapterIndex": 2,
    "text": "Under the Public Service Rules (PSR), what is the mandatory retirement age for civil servants in Nigeria?",
    "choices": [
      "65 years of age or 40 years of service",
      "70 years of age regardless of service length",
      "55 years of age or 30 years of service",
      "60 years of age or 35 years of pensionable service"
    ],
    "correct": 3,
    "explanation": "Standard Nigerian PSR mandates retirement at 60 years of age or 35 years of pensionable service, whichever comes first.",
    "distractors": [
      "This retirement threshold applies to university professors and judicial officers in some contexts.",
      "This is below the official civil service statutory limits.",
      "This applies strictly to apex judicial offices."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-005",
    "chapterIndex": 2,
    "text": "Which division within WAEC is primarily responsible for item banking, syllabus review, and paper setting?",
    "choices": [
      "Test Development Division (TDD)",
      "Finance Division",
      "Corporate Affairs Division",
      "Test Administration Division (TAD)"
    ],
    "correct": 0,
    "explanation": "Test Development Division (TDD) designs syllabi, constructs items, moderates questions, and builds item banks.",
    "distractors": [
      "TAD oversees exam logistics, custody, invigilation, and centre administration.",
      "Finance handles operational budgeting and disbursements.",
      "Corporate Affairs handles public relations and institutional communications."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-006",
    "chapterIndex": 2,
    "text": "In what year did Liberia become a full member of WAEC?",
    "choices": [
      "1960",
      "1974",
      "1982",
      "1952"
    ],
    "correct": 1,
    "explanation": "Liberia joined WAEC as the fifth member country in 1974.",
    "distractors": [
      "Year of original establishment by the four founding members.",
      "Year associated with the Convention signing celebrations.",
      "Year of independence movements, not WAEC accession."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-007",
    "chapterIndex": 2,
    "text": "Who is the Chief Executive Officer of the West African Examinations Council at the international level?",
    "choices": [
      "The Chairman of Council",
      "The Head of National Office",
      "The Registrar",
      "The Director of Finance"
    ],
    "correct": 2,
    "explanation": "The Registrar, based at Headquarters in Accra, is the Chief Executive who coordinates all National Offices.",
    "distractors": [
      "HNO heads operations within one member country.",
      "Chairman is a non-executive rotational position.",
      "A supporting directorate role, not the CEO."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-008",
    "chapterIndex": 2,
    "text": "The Convention establishing WAEC as an international body with legal personality came into force in:",
    "choices": [
      "1952",
      "1974",
      "2003",
      "1984"
    ],
    "correct": 3,
    "explanation": "The Convention was signed in 1982 and came into force in August 1984 after ratification.",
    "distractors": [
      "Year of original ordinances and establishment.",
      "Year Liberia joined.",
      "Year of a later revised Convention."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-009",
    "chapterIndex": 2,
    "text": "Which of the following examinations is currently conducted by WAEC in member countries?",
    "choices": [
      "West African Senior School Certificate Examination (WASSCE)",
      "National Common Entrance only",
      "University Matriculation Examination",
      "Professional Accountancy Examination"
    ],
    "correct": 0,
    "explanation": "WASSCE is the flagship secondary school leaving examination conducted by WAEC across member states.",
    "distractors": [
      "Conducted by JAMB in Nigeria, not WAEC.",
      "NCEE is no longer the primary WAEC product in Nigeria.",
      "Not a core WAEC examination mandate."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-010",
    "chapterIndex": 2,
    "text": "The Head of National Office (HNO) in each member country reports functionally to:",
    "choices": [
      "The Minister of Education only",
      "The Registrar at Headquarters",
      "The local Ministry of Finance",
      "The Chairman of Council directly"
    ],
    "correct": 1,
    "explanation": "HNOs oversee national operations and report to the Registrar who coordinates the five National Offices.",
    "distractors": [
      "Ministries provide policy input but HNO reports to Registrar.",
      "Chairman is non-executive.",
      "Finance is a supporting relationship, not the reporting line."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-011",
    "chapterIndex": 2,
    "text": "According to Nigerian Public Service Rules, an officer who has served 35 years of pensionable service must:",
    "choices": [
      "Seek special extension automatically",
      "Transfer to another service",
      "Retire even if under 60 years of age",
      "Continue until age 65"
    ],
    "correct": 2,
    "explanation": "Retirement is compulsory at 60 years or 35 years of service, whichever comes first.",
    "distractors": [
      "No automatic right to continue beyond the dual limit.",
      "Extensions are exceptional and regulated, not automatic.",
      "Service transfer does not override the retirement rule."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-012",
    "chapterIndex": 2,
    "text": "The two main line divisions that carry out WAEC's core examination functions in each National Office are:",
    "choices": [
      "Finance Division and Audit Division",
      "Human Resource and Corporate Affairs",
      "Research and ICT only",
      "Test Development Division and Test Administration Division"
    ],
    "correct": 3,
    "explanation": "TDD produces syllabuses and tests; TAD conducts the tests and issues results and certificates.",
    "distractors": [
      "Supporting rather than core examination divisions.",
      "Also supporting administrative functions.",
      "Important but not the two primary line divisions."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-013",
    "chapterIndex": 2,
    "text": "Dr. G.B. Jeffery was invited to West Africa by which authority to study examination needs?",
    "choices": [
      "The British Secretary of State for the Colonies",
      "The West African Inter-Territorial Secretariat alone",
      "The United Nations Educational body",
      "The University of Cambridge only"
    ],
    "correct": 0,
    "explanation": "In 1949 the British Secretary of State for the Colonies invited Dr. Jeffery to advise on a West African examinations council.",
    "distractors": [
      "Not the commissioning authority.",
      "The Secretariat later drafted the ordinance but did not issue the original invitation.",
      "Cambridge was involved in earlier discussions but not the sole inviter."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-014",
    "chapterIndex": 2,
    "text": "The Chairmanship of the WAEC Council rotates among member countries every:",
    "choices": [
      "Ten years",
      "Three years",
      "Five years",
      "One year"
    ],
    "correct": 1,
    "explanation": "Under the Convention, the Chairmanship rotates every three years among the member countries.",
    "distractors": [
      "Too short for the established rotational cycle.",
      "Longer than the prescribed period.",
      "Not the rotational interval."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-015",
    "chapterIndex": 2,
    "text": "Which of the following is NOT a founding member country of WAEC?",
    "choices": [
      "Sierra Leone",
      "Ghana",
      "Liberia",
      "Nigeria"
    ],
    "correct": 2,
    "explanation": "The four founding members in 1952 were Ghana (Gold Coast), Nigeria, Sierra Leone and The Gambia; Liberia joined later in 1974.",
    "distractors": [
      "Founding member (then Gold Coast).",
      "Founding member.",
      "Founding member."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-016",
    "chapterIndex": 2,
    "text": "The primary legal instrument that currently governs WAEC as an international organisation is:",
    "choices": [
      "UNESCO statutes",
      "National education acts only",
      "The 1951 Ordinances alone",
      "The Convention establishing the Council"
    ],
    "correct": 3,
    "explanation": "The Convention (signed 1982, in force 1984, later revised) gives WAEC uniform legal personality across member states.",
    "distractors": [
      "Superseded by the Convention for international status.",
      "National laws operate within the Convention framework.",
      "Not the governing instrument of WAEC."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-017",
    "chapterIndex": 2,
    "text": "In the Nigerian Public Service, the three-month notice before retirement is primarily for:",
    "choices": [
      "Notice of intention and completion of documentation, not automatic leave",
      "Automatic extension of service",
      "Mandatory paid leave for all officers",
      "Transfer of pension contributions only"
    ],
    "correct": 0,
    "explanation": "PSR requires three months' notice; it is a notice requirement, not an automatic leave entitlement.",
    "distractors": [
      "A common misconception corrected by circulars.",
      "No such automatic right exists.",
      "Documentation includes but is not limited to pension matters."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-018",
    "chapterIndex": 2,
    "text": "The Research Division of WAEC has its Headquarters located in:",
    "choices": [
      "The Gambia",
      "Nigeria",
      "Sierra Leone",
      "Ghana"
    ],
    "correct": 1,
    "explanation": "The Headquarters of the Research Division is in Nigeria, with branches in other member countries.",
    "distractors": [
      "International HQ is in Ghana, but Research HQ is in Nigeria.",
      "Hosts a National Office, not Research HQ.",
      "Hosts a National Office."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-019",
    "chapterIndex": 2,
    "text": "One of the main objectives of WAEC as stated in its mandate is:",
    "choices": [
      "To set national curricula for primary schools only",
      "To manage teacher recruitment across the region",
      "To conduct examinations in the public interest and award certificates of comparable standard",
      "To regulate all tertiary institutions in West Africa"
    ],
    "correct": 2,
    "explanation": "WAEC's core mandate is to determine and conduct public examinations and award certificates of international standard.",
    "distractors": [
      "Outside WAEC's examination-focused mandate.",
      "Curriculum support exists but is not limited to primary level.",
      "Not a WAEC function."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-020",
    "chapterIndex": 2,
    "text": "The first Registrar of WAEC, appointed in 1952, was:",
    "choices": [
      "A Ghanaian educationist only",
      "The British Secretary of State",
      "Dr. G.B. Jeffery",
      "Mr. Kenneth Humphreys"
    ],
    "correct": 3,
    "explanation": "Mr. Kenneth Humphreys was appointed the first Registrar and arrived in Accra in March 1952.",
    "distractors": [
      "Author of the foundational report, not the first Registrar.",
      "Commissioning authority, not an appointee of the Council.",
      "Not historically accurate for the first Registrar."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-021",
    "chapterIndex": 2,
    "text": "In the Nigerian civil service, an officer who attains 60 years of age must retire even if service is less than 35 years. This statement is:",
    "choices": [
      "True",
      "True only after 2024 amendment",
      "False",
      "True only for directors"
    ],
    "correct": 0,
    "explanation": "The dual condition is 'whichever comes first'; so age 60 triggers retirement regardless of shorter service.",
    "distractors": [
      "The rule is correctly stated.",
      "Applies to all grades under standard PSR.",
      "The core 60/35 rule remains the extant standard reference."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-022",
    "chapterIndex": 2,
    "text": "Which body within WAEC considers reports of examination malpractice and determines sanctions in Nigeria?",
    "choices": [
      "Tenders Board",
      "Nigeria Examinations Committee (NEC)",
      "Public Accounts Committee",
      "International Board of Directors only"
    ],
    "correct": 1,
    "explanation": "The Nigeria Examinations Committee (NEC) reviews malpractice cases and approves sanctions in accordance with the regulations.",
    "distractors": [
      "Handles broader policy, not day-to-day national malpractice adjudication.",
      "Deals with financial audit matters.",
      "Handles procurement."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-023",
    "chapterIndex": 2,
    "text": "The International Headquarters of WAEC is headed by the Registrar. The National Offices are each headed by a:",
    "choices": [
      "Ministerial Permanent Secretary",
      "Council Chairman",
      "Head of National Office (HNO)",
      "Deputy Registrar only"
    ],
    "correct": 2,
    "explanation": "Each member country has a National Office headed by an HNO who reports to the Registrar.",
    "distractors": [
      "Not the standard designation for the national head.",
      "Government official, not WAEC staff designation.",
      "Rotational non-executive position."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-024",
    "chapterIndex": 2,
    "text": "WAEC certificates are intended to represent standards that are:",
    "choices": [
      "Lower than local school assessments",
      "Higher than all international boards",
      "Equivalent only to primary school certificates",
      "Not lower than equivalent certificates of examining authorities in the United Kingdom"
    ],
    "correct": 3,
    "explanation": "One of the founding objectives is that certificates should not represent lower standards than those of UK examining bodies.",
    "distractors": [
      "Contradicts the quality objective.",
      "Not a stated comparative claim.",
      "WAEC operates at secondary and related levels."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-025",
    "chapterIndex": 2,
    "text": "Which of the following best describes the nature of WAEC as an organisation?",
    "choices": [
      "A non-profit-making international examining body",
      "A department of the United Nations",
      "A profit-making commercial examination company",
      "A purely national Nigerian agency"
    ],
    "correct": 0,
    "explanation": "WAEC is a non-profit-making organisation established by the member governments as an international examining body.",
    "distractors": [
      "It is not organised for profit.",
      "It is independent of the UN system.",
      "It serves five member countries."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-026",
    "chapterIndex": 2,
    "text": "The ordinance establishing WAEC was first passed by the Legislative Assembly of which territory?",
    "choices": [
      "Nigeria",
      "Gold Coast (Ghana)",
      "Sierra Leone",
      "The Gambia"
    ],
    "correct": 1,
    "explanation": "The West African Examinations Council Ordinance No. 40 of 1951 was first enacted by the Gold Coast Legislative Assembly in December 1951.",
    "distractors": [
      "Followed with similar enactments shortly afterwards.",
      "Also enacted the ordinance subsequently.",
      "Also enacted subsequently."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-027",
    "chapterIndex": 2,
    "text": "In public service administration, 'PSR' commonly stands for:",
    "choices": [
      "Posting and Service Roster",
      "Personal Service Record",
      "Public Service Rules",
      "Pension Scheme Regulation"
    ],
    "correct": 2,
    "explanation": "PSR refers to the Public Service Rules that govern conditions of service in the Nigerian civil service.",
    "distractors": [
      "Not the standard expansion in this context.",
      "Related but not the abbreviation meaning.",
      "Not the recognised expansion."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-028",
    "chapterIndex": 2,
    "text": "The Test Administration Division is primarily responsible for:",
    "choices": [
      "Writing and moderating question papers only",
      "Managing the Council's investment portfolio",
      "Recruiting all teaching staff in member countries",
      "Conducting examinations, custody of materials, invigilation and release of results"
    ],
    "correct": 3,
    "explanation": "TAD handles the operational delivery of examinations and related logistics and results processing.",
    "distractors": [
      "This is the role of Test Development Division.",
      "Finance-related function.",
      "Outside WAEC's mandate."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-029",
    "chapterIndex": 2,
    "text": "Which statement about WAEC membership is correct?",
    "choices": [
      "All current members are English-speaking West African countries",
      "Membership is open to any African Union state automatically",
      "Membership includes both Anglophone and Francophone states equally",
      "East African countries are full members"
    ],
    "correct": 0,
    "explanation": "WAEC membership comprises the five English-speaking (Anglophone) West African countries.",
    "distractors": [
      "Francophone states are not members.",
      "East African states are outside the regional scope.",
      "Membership is by specific accession of the five states."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-030",
    "chapterIndex": 2,
    "text": "The vision of WAEC includes being:",
    "choices": [
      "The sole regulator of all universities in West Africa",
      "A world-class examining body adding value to the educational goals of its stakeholders",
      "A political organisation for regional integration",
      "A commercial publisher of textbooks only"
    ],
    "correct": 1,
    "explanation": "Official vision statements emphasise world-class educational assessment that adds value to stakeholders' goals.",
    "distractors": [
      "Not within the examination mandate.",
      "Publishing may support but is not the vision.",
      "WAEC is an examining, not a political, body."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-031",
    "chapterIndex": 2,
    "text": "Under the dual retirement rule, an officer who is 58 years old with 36 years of pensionable service must:",
    "choices": [
      "Automatically receive a five-year extension",
      "Continue until age 60",
      "Retire because of the 35-year service limit",
      "Be promoted to compensate for long service"
    ],
    "correct": 2,
    "explanation": "35 years of service has already been reached, so retirement is compulsory irrespective of age still being under 60.",
    "distractors": [
      "Service limit has already been attained.",
      "Extensions are not automatic.",
      "Promotion does not override the statutory retirement rule."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-032",
    "chapterIndex": 2,
    "text": "The Headquarters of WAEC in Accra coordinates the National Offices and also supervises certain specialised units including:",
    "choices": [
      "The national parliaments of member states",
      "All secondary schools in the five countries",
      "Only the local Ghanaian examination centres",
      "Research, Human Resource, Finance, Audit and Administration"
    ],
    "correct": 3,
    "explanation": "In addition to coordinating HNOs, the Registrar supervises Research, HR, Finance, Audit and Administration at Headquarters level.",
    "distractors": [
      "Coordination is regional, not limited to Ghana centres.",
      "Schools are clients, not subordinate units.",
      "Political institutions are independent."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-033",
    "chapterIndex": 2,
    "text": "Which of the following best captures a core value often associated with WAEC's operations?",
    "choices": [
      "Integrity, professionalism, accountability and transparency",
      "Political neutrality is unnecessary",
      "Speed of results without regard to accuracy",
      "Profit maximisation above all else"
    ],
    "correct": 0,
    "explanation": "Official communications and leadership statements repeatedly emphasise excellence, integrity, professionalism, accountability and transparency.",
    "distractors": [
      "Contradicts the non-profit public-interest nature.",
      "Political neutrality is expected of an examining body.",
      "Accuracy and validity are essential to the mandate."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-034",
    "chapterIndex": 2,
    "text": "The Jeffery Report was published in:",
    "choices": [
      "December 1951",
      "March 1950",
      "1974",
      "March 1952"
    ],
    "correct": 1,
    "explanation": "After his visit (December 1949–March 1950), Dr. Jeffery's report was published in March 1950.",
    "distractors": [
      "Year the first ordinance was passed.",
      "Year the first Registrar took office.",
      "Year Liberia joined."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-035",
    "chapterIndex": 2,
    "text": "Which body is the highest decision-making organ of WAEC?",
    "choices": [
      "The International Administrative and Finance Committee",
      "The Council",
      "The National Office Committee",
      "The Examinations Committee"
    ],
    "correct": 1,
    "explanation": "The Council is the supreme governing body of WAEC.",
    "distractors": [
      "Administrative committees report to Council.",
      "National offices implement Council policy.",
      "Examinations Committee handles technical exam matters."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-036",
    "chapterIndex": 2,
    "text": "The first Registrar of WAEC was:",
    "choices": [
      "Dr. V. B. Amos",
      "Mr. Kenneth Mellanby",
      "Dr. G. B. Jeffrey",
      "Mr. J. A. Adeniyi"
    ],
    "correct": 0,
    "explanation": "Dr. V. B. Amos served as the first Registrar of the West African Examinations Council.",
    "distractors": [
      "Mellanby was associated with university development.",
      "Jeffrey authored the foundational report.",
      "Adeniyi served later in the Nigerian national office era."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-037",
    "chapterIndex": 2,
    "text": "WAEC's institutional emphasis centres on:",
    "choices": [
      "Excellence without borders only",
      "Integrity and service in the conduct of public examinations",
      "Unity through sports",
      "Knowledge is power as sole motto"
    ],
    "correct": 1,
    "explanation": "WAEC emphasises integrity and service in the conduct of examinations across member countries.",
    "distractors": [
      "Not the primary institutional framing.",
      "Sports is not the core mandate.",
      "Not the official sole motto phrasing."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-038",
    "chapterIndex": 2,
    "text": "The Head of the National Office (HNO) in Nigeria is based in:",
    "choices": [
      "Abuja",
      "Ibadan",
      "Yaba, Lagos",
      "Enugu"
    ],
    "correct": 2,
    "explanation": "The Nigerian Head of National Office is located at Yaba, Lagos.",
    "distractors": [
      "Abuja is the federal capital but not the HNO seat.",
      "Ibadan hosts other educational institutions.",
      "Enugu is a zonal presence, not the HNO."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-039",
    "chapterIndex": 2,
    "text": "Which of the following is a core function of WAEC?",
    "choices": [
      "Awarding university degrees",
      "Conducting public examinations and awarding certificates",
      "Training teachers exclusively",
      "Funding state universities"
    ],
    "correct": 1,
    "explanation": "WAEC's primary mandate is the conduct of public examinations and the award of certificates.",
    "distractors": [
      "Degree awarding is a university function.",
      "Teacher training is not WAEC's sole mandate.",
      "University funding is outside WAEC's remit."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-040",
    "chapterIndex": 2,
    "text": "The WAEC ordinance establishing the Council was first enacted around:",
    "choices": [
      "1945",
      "1951–1952",
      "1960",
      "1974"
    ],
    "correct": 1,
    "explanation": "The enabling ordinances establishing WAEC were passed in the early 1950s following the Jeffrey Report.",
    "distractors": [
      "Pre-dates the Jeffrey process.",
      "Independence year, not establishment.",
      "Liberia accession year."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-041",
    "chapterIndex": 2,
    "text": "In WAEC structure, International Headquarters is distinct from:",
    "choices": [
      "The Council chamber only",
      "National Offices in member countries",
      "The Registrar's residence",
      "The Finance Directorate alone"
    ],
    "correct": 1,
    "explanation": "International Headquarters (Accra) is separate from the National Offices that administer exams in each member country.",
    "distractors": [
      "Council meets under HQ coordination.",
      "Registrar works from HQ.",
      "Finance is a division within the structure."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-042",
    "chapterIndex": 2,
    "text": "The Test Administration Division (TAD) primarily handles:",
    "choices": [
      "Syllabus design only",
      "Logistics, centre management, invigilation and script custody",
      "Staff payroll exclusively",
      "Marketing of past questions"
    ],
    "correct": 1,
    "explanation": "TAD manages the operational delivery of examinations including centres, invigilation and secure script handling.",
    "distractors": [
      "Syllabus work belongs to Test Development.",
      "Payroll is a finance/HR function.",
      "Past-question marketing is not a core TAD duty."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-043",
    "chapterIndex": 2,
    "text": "A candidate who wishes to challenge a result may typically:",
    "choices": [
      "Rewrite the entire certificate without process",
      "Apply for a formal result review or re-mark within stipulated rules",
      "Demand automatic upgrade of grades",
      "Sue the invigilator personally first"
    ],
    "correct": 1,
    "explanation": "WAEC provides regulated channels for result queries and re-marking subject to fees and timelines.",
    "distractors": [
      "No automatic rewrite without process.",
      "Grades are not arbitrarily upgraded.",
      "Personal suits are not the first institutional step."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-044",
    "chapterIndex": 2,
    "text": "Public Service Rules in Nigeria govern primarily:",
    "choices": [
      "Private company employees only",
      "Federal and state civil servants' conditions of service",
      "University students exclusively",
      "Military officers alone"
    ],
    "correct": 1,
    "explanation": "The Public Service Rules regulate appointment, discipline, leave and related conditions for civil servants.",
    "distractors": [
      "Private sector has separate labour law.",
      "Students are under educational regulations.",
      "Armed forces have distinct regulations."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-045",
    "chapterIndex": 2,
    "text": "Which of these is an example of examination malpractice?",
    "choices": [
      "Arriving early to the centre",
      "Impersonation of a registered candidate",
      "Using an approved calculator where permitted",
      "Bringing a transparent water bottle"
    ],
    "correct": 1,
    "explanation": "Impersonation is a serious form of examination malpractice.",
    "distractors": [
      "Early arrival is encouraged.",
      "Approved aids are allowed.",
      "Transparent bottles are often permitted under rules."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-046",
    "chapterIndex": 2,
    "text": "The Federal Character principle in Nigerian public service aims to:",
    "choices": [
      "Promote ethnic and geopolitical balance in appointments",
      "Ensure only one region dominates",
      "Abolish merit entirely",
      "Privatise all ministries"
    ],
    "correct": 0,
    "explanation": "Federal Character seeks equitable representation across Nigeria's diverse groups in public appointments.",
    "distractors": [
      "Opposite of the principle.",
      "Merit remains relevant alongside balance.",
      "Not a privatisation mandate."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-047",
    "chapterIndex": 2,
    "text": "WAEC certificates are widely recognised for:",
    "choices": [
      "Only military enlistment",
      "Admission to tertiary institutions and employment screening across West Africa",
      "Replacing all professional licences",
      "Voting eligibility only"
    ],
    "correct": 1,
    "explanation": "WASSCE and related WAEC certificates are accepted for tertiary admission and many employment processes.",
    "distractors": [
      "Not limited to military.",
      "Professional licences have separate bodies.",
      "Not a voting credential."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-048",
    "chapterIndex": 2,
    "text": "An official query in the public service is used to:",
    "choices": [
      "Congratulate staff",
      "Formally request explanation for alleged misconduct",
      "Approve annual leave",
      "Transfer an officer without reason"
    ],
    "correct": 1,
    "explanation": "A query is a formal disciplinary instrument seeking explanation for alleged breaches of rules.",
    "distractors": [
      "Commendation uses different instruments.",
      "Leave has its own process.",
      "Transfers follow administrative procedures."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-049",
    "chapterIndex": 2,
    "text": "The acronym WASSCE stands for:",
    "choices": [
      "West African Senior School Certificate Examination",
      "West African Secondary School Continuous Evaluation",
      "World Association of Secondary School Certificates",
      "West African Science and Social Certificate Exam"
    ],
    "correct": 0,
    "explanation": "WASSCE is the West African Senior School Certificate Examination conducted by WAEC.",
    "distractors": [
      "Incorrect expansion.",
      "Not a world association.",
      "Not limited to science/social only."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-050",
    "chapterIndex": 2,
    "text": "Dual control of examination materials means:",
    "choices": [
      "Any two staff may open packets freely",
      "At least two authorised persons jointly control custody and opening of secure materials",
      "Candidates control their own scripts",
      "Only security guards hold keys"
    ],
    "correct": 1,
    "explanation": "Dual control requires two authorised custodians for integrity of sealed exam materials.",
    "distractors": [
      "Unauthorised access is prohibited.",
      "Candidates do not control live materials.",
      "Security supports but does not replace authorised dual control."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-051",
    "chapterIndex": 2,
    "text": "Which committee typically deals with examination irregularities and malpractice cases?",
    "choices": [
      "Sports Committee",
      "Examinations and/or Malpractice Committee (as constituted by Council)",
      "Catering Committee",
      "Transport Union"
    ],
    "correct": 1,
    "explanation": "Council constitutes committees that investigate and recommend sanctions for malpractice.",
    "distractors": [
      "Irrelevant to exam integrity.",
      "Not related to exam process.",
      "Not a WAEC organ."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-052",
    "chapterIndex": 2,
    "text": "In registry practice, a closed file means:",
    "choices": [
      "A file permanently open to the public",
      "A file whose active correspondence has ended and is stored per retention rules",
      "A file never created",
      "A file destroyed the same day"
    ],
    "correct": 1,
    "explanation": "Closed files are completed for current action and retained according to schedules.",
    "distractors": [
      "Access remains controlled.",
      "Never-opened files are not closed in this sense.",
      "Destruction follows retention, not immediate closure."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-053",
    "chapterIndex": 2,
    "text": "The principle of anonymity in marking scripts helps to:",
    "choices": [
      "Allow markers to favour known candidates",
      "Reduce bias by concealing candidate identity from markers",
      "Speed printing of certificates only",
      "Increase the cost of exams"
    ],
    "correct": 1,
    "explanation": "Anonymous marking protects fairness by preventing identification of candidates by markers.",
    "distractors": [
      "Opposite of the goal.",
      "Not the primary purpose.",
      "Cost is secondary to integrity."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-054",
    "chapterIndex": 2,
    "text": "Which of the following best describes item banking in WAEC context?",
    "choices": [
      "Storing physical bank notes",
      "Maintaining a secure pool of vetted examination questions for future use",
      "Banking candidate fees only",
      "Storing answer booklets in a commercial bank"
    ],
    "correct": 1,
    "explanation": "Item banking is the secure storage and management of pre-tested examination items.",
    "distractors": [
      "Literal banking is unrelated.",
      "Fees are financial administration.",
      "Scripts go to marking centres, not commercial banks."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-055",
    "chapterIndex": 2,
    "text": "A zonal office of WAEC in Nigeria typically supports:",
    "choices": [
      "International diplomacy only",
      "Regional coordination of exam administration within assigned states",
      "Running a private university",
      "Issuing passports"
    ],
    "correct": 1,
    "explanation": "Zonal offices coordinate examination logistics and liaison within their geographic zones.",
    "distractors": [
      "Not a diplomatic mission.",
      "Not a university operator.",
      "Passports are immigration functions."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-056",
    "chapterIndex": 2,
    "text": "Under PSR, interdiction of an officer usually occurs when:",
    "choices": [
      "The officer is promoted",
      "There is a serious allegation warranting temporary removal from duty pending investigation",
      "The officer takes annual leave",
      "The officer retires voluntarily"
    ],
    "correct": 1,
    "explanation": "Interdiction is a temporary removal from official duties pending determination of serious allegations.",
    "distractors": [
      "Promotion is positive advancement.",
      "Leave is a normal entitlement.",
      "Retirement ends service."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-057",
    "chapterIndex": 2,
    "text": "The Registrar of WAEC is accountable primarily to:",
    "choices": [
      "Individual candidates",
      "The Council",
      "State governors only",
      "Private tutors"
    ],
    "correct": 1,
    "explanation": "The Registrar/Chief Executive reports to and implements the decisions of the Council.",
    "distractors": [
      "Candidates are service users, not the governing authority.",
      "Governors do not supervise WAEC HQ.",
      "Tutors are external."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-058",
    "chapterIndex": 2,
    "text": "Syllabus review in WAEC is important because:",
    "choices": [
      "It increases exam fees automatically",
      "It keeps examination content aligned with curriculum changes and educational goals",
      "It eliminates all practical papers",
      "It replaces national curricula entirely"
    ],
    "correct": 1,
    "explanation": "Periodic syllabus review ensures relevance and alignment with member countries' educational systems.",
    "distractors": [
      "Fees are a separate policy matter.",
      "Practicals remain where appropriate.",
      "National curricula remain the domain of education ministries."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-059",
    "chapterIndex": 2,
    "text": "Confidentiality of live question papers must be maintained until:",
    "choices": [
      "The papers are printed",
      "The official start of the examination session",
      "Results are released",
      "Candidates request early sight"
    ],
    "correct": 1,
    "explanation": "Live papers remain under strict security until the authorised examination start time.",
    "distractors": [
      "Printing is still under security.",
      "Results come later.",
      "Early access is malpractice."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-060",
    "chapterIndex": 2,
    "text": "Which of these is a legitimate reason for special consideration in examinations?",
    "choices": [
      "A candidate forgot to study",
      "Documented temporary disability or adverse circumstance under approved rules",
      "Preference for a higher grade",
      "Late registration without cause"
    ],
    "correct": 1,
    "explanation": "Special consideration addresses verified adverse circumstances affecting performance under published rules.",
    "distractors": [
      "Lack of study is not grounds.",
      "Grade preference is not a criterion.",
      "Late registration has separate rules."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-061",
    "chapterIndex": 2,
    "text": "The National Office of WAEC in a member country is headed by:",
    "choices": [
      "The President of the country",
      "The Head of National Office (HNO)",
      "The Minister of Education alone",
      "A rotating student representative"
    ],
    "correct": 1,
    "explanation": "Each National Office is led by a Head of National Office appointed under WAEC structures.",
    "distractors": [
      "Political heads do not run the office day-to-day.",
      "The Minister provides policy context, not operational headship of WAEC NO.",
      "Students do not head the office."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-062",
    "chapterIndex": 2,
    "text": "Award of WAEC certificates is based on:",
    "choices": [
      "Payment of a bribe",
      "Performance in the prescribed examinations under regulated conditions",
      "Length of hair",
      "Political party membership"
    ],
    "correct": 1,
    "explanation": "Certificates are awarded on the basis of examined performance under WAEC regulations.",
    "distractors": [
      "Corruption is prohibited.",
      "Irrelevant personal attributes.",
      "Politics is not a criterion."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-063",
    "chapterIndex": 2,
    "text": "In public administration, minuting on a file means:",
    "choices": [
      "Destroying the file",
      "Writing official comments and recommendations that advance decision-making",
      "Counting the pages only",
      "Sending the file to the press"
    ],
    "correct": 1,
    "explanation": "Minuting is the internal written record of observations and recommended actions on official files.",
    "distractors": [
      "Destruction is separate.",
      "Page count is administrative detail.",
      "Press is external communication."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-064",
    "chapterIndex": 2,
    "text": "Which practice strengthens assessment security?",
    "choices": [
      "Leaving packets unsealed overnight",
      "Sealed packets, dual custody, attendance registers and chain-of-custody logs",
      "Sharing questions on social media",
      "Allowing phones in the hall freely"
    ],
    "correct": 1,
    "explanation": "Physical seals, dual control, registers and documented custody protect examination integrity.",
    "distractors": [
      "Unsealed storage is a breach.",
      "Public leakage is malpractice.",
      "Phones are typically prohibited."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-065",
    "chapterIndex": 2,
    "text": "The Elliot Commission is historically associated with:",
    "choices": [
      "Road construction",
      "Higher education development in West Africa",
      "Currency redesign",
      "Military training alone"
    ],
    "correct": 1,
    "explanation": "The Elliot Commission contributed to recommendations on university education in British West Africa.",
    "distractors": [
      "Not a roads body.",
      "Not a central bank function.",
      "Not primarily military."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-066",
    "chapterIndex": 2,
    "text": "A candidate found with a mobile phone in the examination hall may face:",
    "choices": [
      "Automatic extra marks",
      "Cancellation of results among other prescribed sanctions",
      "Promotion to next class",
      "A gift voucher"
    ],
    "correct": 1,
    "explanation": "Unauthorised electronic devices commonly attract cancellation of results and other penalties.",
    "distractors": [
      "Not a reward.",
      "Not academic promotion.",
      "Not a prize."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-067",
    "chapterIndex": 2,
    "text": "The concept of fair hearing in malpractice cases requires that:",
    "choices": [
      "Only the invigilator is heard",
      "The accused is given opportunity to respond before final decision",
      "No investigation is done",
      "Results are cancelled without notice"
    ],
    "correct": 1,
    "explanation": "Due process requires that candidates can respond to allegations before determination.",
    "distractors": [
      "Both sides of evidence matter.",
      "Investigation is necessary.",
      "Notice and response are part of fairness."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-068",
    "chapterIndex": 2,
    "text": "WAEC collaborates with national education ministries primarily to:",
    "choices": [
      "Ignore local curricula",
      "Align examinations with national education policies and standards",
      "Replace ministries entirely",
      "Set national budgets"
    ],
    "correct": 1,
    "explanation": "Collaboration ensures examinations support and reflect national educational frameworks.",
    "distractors": [
      "Alignment is the goal.",
      "Ministries retain policy roles.",
      "Budgeting is governmental, not WAEC's primary role."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-069",
    "chapterIndex": 2,
    "text": "An official letter from a Head of National Office should normally use:",
    "choices": [
      "Personal scrap paper",
      "Official letter-headed stationery of the Council",
      "A candidate answer booklet",
      "Social media DM only"
    ],
    "correct": 1,
    "explanation": "Official correspondence uses authorised letter-head to establish authenticity.",
    "distractors": [
      "Lacks official identity.",
      "Answer booklets are exam materials.",
      "Informal channels are inappropriate for official acts."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-070",
    "chapterIndex": 2,
    "text": "The term giraffing in exam malpractice slang refers to:",
    "choices": [
      "Writing large letters",
      "Stretching to look at another candidate's work",
      "Arriving on a tall vehicle",
      "Using a giraffe logo"
    ],
    "correct": 1,
    "explanation": "Giraffing describes attempting to copy by looking at a neighbour's script.",
    "distractors": [
      "Literal and unrelated.",
      "Not the recognised meaning.",
      "Unrelated to the offence."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-071",
    "chapterIndex": 2,
    "text": "De-recognition of a school by WAEC typically means:",
    "choices": [
      "Extra funding for the school",
      "The school may not present candidates for a stated period",
      "Automatic upgrade of all results",
      "Appointment of the principal as HNO"
    ],
    "correct": 1,
    "explanation": "De-recognition bars the school from entering candidates for a specified period as a sanction.",
    "distractors": [
      "It is punitive, not rewarding.",
      "Not a results upgrade.",
      "Not a promotion of staff."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-072",
    "chapterIndex": 2,
    "text": "Chain-of-custody logs for exam materials help to:",
    "choices": [
      "Increase parcel weight",
      "Provide an auditable record of handling to deter and detect tampering",
      "Allow public signing for packets",
      "Replace the need for seals"
    ],
    "correct": 1,
    "explanation": "Documented custody supports accountability and integrity of materials.",
    "distractors": [
      "Irrelevant purpose.",
      "Access remains restricted.",
      "Seals remain essential."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-073",
    "chapterIndex": 2,
    "text": "Unauthorised alteration of official examination records is:",
    "choices": [
      "A minor clerical matter needing no action",
      "Serious misconduct that may attract disciplinary and criminal sanctions",
      "Professional excellence",
      "Routine without authorisation"
    ],
    "correct": 1,
    "explanation": "Altering official records without authority is a grave offence under public service and criminal law frameworks.",
    "distractors": [
      "Gravity is high.",
      "Opposite of excellence.",
      "Routine updates require proper authorisation."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-074",
    "chapterIndex": 2,
    "text": "When drafting a public service query, language should be:",
    "choices": [
      "Emotional and abusive",
      "Factual, precise and professional",
      "Written in an unknown language",
      "Deliberately vague"
    ],
    "correct": 1,
    "explanation": "Queries must state alleged facts clearly so the officer can respond; professionalism requires restraint.",
    "distractors": [
      "Emotion undermines process.",
      "Recipient must understand the charge.",
      "Vagueness prevents fair response."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-075",
    "chapterIndex": 2,
    "text": "The ultimate goal of assessment security in WAEC is to:",
    "choices": [
      "Maximise failure rates",
      "Protect integrity, fairness and credibility of examinations and certificates",
      "Create barriers for honest candidates",
      "Increase workload without purpose"
    ],
    "correct": 1,
    "explanation": "Security and ethics exist so that results remain trustworthy and honest candidates are not disadvantaged.",
    "distractors": [
      "Fairness, not failure maximisation.",
      "Security should facilitate legitimate participation.",
      "Workload is not an end in itself."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-076",
    "chapterIndex": 2,
    "text": "Which of the following is a duty of an invigilator?",
    "choices": [
      "Provide answers to candidates",
      "Ensure fair conduct, enforce rules and protect exam integrity",
      "Leave the hall unattended for long periods",
      "Collect personal gifts from candidates"
    ],
    "correct": 1,
    "explanation": "Invigilators safeguard the examination environment and enforce regulations.",
    "distractors": [
      "Assisting with answers is malpractice.",
      "Attendance is required.",
      "Gifts compromise integrity."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-077",
    "chapterIndex": 2,
    "text": "Results of WAEC examinations are typically released through:",
    "choices": [
      "Only word of mouth",
      "Official channels including online portals and schools as prescribed",
      "Private WhatsApp groups of invigilators",
      "Unverified social media pages only"
    ],
    "correct": 1,
    "explanation": "WAEC publishes results via authorised platforms and institutional channels.",
    "distractors": [
      "Informal channels are unreliable.",
      "Not official.",
      "Unofficial pages risk fraud."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-078",
    "chapterIndex": 2,
    "text": "A live question paper is one that:",
    "choices": [
      "Has already been written by all candidates",
      "Is still under security for an upcoming or ongoing examination session",
      "Is a past paper sold publicly",
      "Has been cancelled permanently"
    ],
    "correct": 1,
    "explanation": "Live papers are those not yet fully administered and still subject to strict security.",
    "distractors": [
      "Completed sessions are no longer live in the same sense.",
      "Past papers are released after use.",
      "Cancelled papers follow separate handling."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-079",
    "chapterIndex": 2,
    "text": "In the context of WAEC, BECE refers to:",
    "choices": [
      "Bachelor of Education Certificate Examination",
      "Basic Education Certificate Examination",
      "Business Enterprise Certificate Exam",
      "Board of Examiners Continuous Evaluation"
    ],
    "correct": 1,
    "explanation": "BECE is the Basic Education Certificate Examination conducted in some member systems under WAEC arrangements.",
    "distractors": [
      "Incorrect expansion.",
      "Not a business exam.",
      "Not the BECE meaning."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-080",
    "chapterIndex": 2,
    "text": "Staff of WAEC are expected to observe:",
    "choices": [
      "Political partisanship in marking",
      "High ethical standards, confidentiality and impartiality",
      "Sharing of live questions with friends",
      "Acceptance of gifts that influence decisions"
    ],
    "correct": 1,
    "explanation": "Public examination officials must maintain integrity, confidentiality and neutrality.",
    "distractors": [
      "Partisanship is prohibited.",
      "Leakage is malpractice.",
      "Gift influence is corruption."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-081",
    "chapterIndex": 2,
    "text": "The Ashby Commission is associated with:",
    "choices": [
      "Post-independence higher education planning in Nigeria",
      "Building the first WAEC HQ only",
      "Designing traffic laws",
      "Creating the PSR document alone"
    ],
    "correct": 0,
    "explanation": "The Ashby Commission (1960) made recommendations on higher education development in Nigeria.",
    "distractors": [
      "HQ location is separate history.",
      "Traffic is FRSC domain.",
      "PSR evolved through public service reforms."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-082",
    "chapterIndex": 2,
    "text": "The Public Service Rules require civil servants to:",
    "choices": [
      "Engage in private business during official hours without approval",
      "Uphold integrity, loyalty and efficient service",
      "Disclose confidential files to the press freely",
      "Ignore superior lawful instructions"
    ],
    "correct": 1,
    "explanation": "Core values include integrity, loyalty to the service and efficient performance of duties.",
    "distractors": [
      "Unauthorised private business is restricted.",
      "Confidentiality is mandatory.",
      "Lawful instructions must be obeyed."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-083",
    "chapterIndex": 2,
    "text": "An examination centre is de-recognised mainly because of:",
    "choices": [
      "High pass rates",
      "Serious and/or repeated examination malpractice or non-compliance",
      "Beautiful buildings",
      "Large number of candidates alone"
    ],
    "correct": 1,
    "explanation": "Sanctions including de-recognition respond to integrity failures and regulatory breaches.",
    "distractors": [
      "Success is not punished.",
      "Aesthetics are irrelevant.",
      "Volume alone is not the cause."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-084",
    "chapterIndex": 2,
    "text": "Which division is most closely associated with scoring and standardisation of results?",
    "choices": [
      "Test Development / Research and related technical units",
      "Catering services",
      "Estate management alone",
      "Transport unit only"
    ],
    "correct": 0,
    "explanation": "Technical divisions handle item analysis, scoring frameworks and standardisation processes.",
    "distractors": [
      "Support services only.",
      "Facilities management.",
      "Logistics support only."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-085",
    "chapterIndex": 2,
    "text": "Candidates with approved disabilities may be granted:",
    "choices": [
      "Unlimited unmarked extra papers without rules",
      "Reasonable accommodations under WAEC special needs provisions",
      "Automatic distinction grades",
      "Exemption from all rules"
    ],
    "correct": 1,
    "explanation": "Special needs arrangements provide fair access within regulated accommodations.",
    "distractors": [
      "Accommodations are structured, not unlimited.",
      "Grades still reflect performance.",
      "Rules still apply."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-086",
    "chapterIndex": 2,
    "text": "The phrase public service in the WAEC recruitment context emphasises:",
    "choices": [
      "Private profit maximisation",
      "Service delivery, accountability and ethical conduct in government institutions",
      "Political campaigning during office hours",
      "Ignoring citizens' needs"
    ],
    "correct": 1,
    "explanation": "Public service ethos centres on serving the public interest with integrity and accountability.",
    "distractors": [
      "Opposite of public mandate.",
      "Campaigning is restricted.",
      "Citizen service is central."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-087",
    "chapterIndex": 2,
    "text": "Script collection after an examination must be:",
    "choices": [
      "Left in open classrooms overnight",
      "Counted, sealed and transported securely to designated centres",
      "Given to candidates to take home",
      "Discarded immediately"
    ],
    "correct": 1,
    "explanation": "Secure accounting and transit of scripts prevent loss, substitution or tampering.",
    "distractors": [
      "Unattended scripts risk integrity.",
      "Candidates must not retain scripts.",
      "Scripts are required for marking."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-088",
    "chapterIndex": 2,
    "text": "Which of the following undermines certificate credibility?",
    "choices": [
      "Secure administration and fair marking",
      "Widespread leakage of question papers before the exam",
      "Transparent results processes",
      "Independent invigilation"
    ],
    "correct": 1,
    "explanation": "Pre-exam leakage destroys the validity of results and public trust in certificates.",
    "distractors": [
      "These strengthen credibility.",
      "Transparency builds trust.",
      "Independent invigilation protects integrity."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-089",
    "chapterIndex": 2,
    "text": "The Council of WAEC includes representation that reflects:",
    "choices": [
      "Only one member country",
      "Member countries and educational stakeholders as provided in the constitution",
      "Only private tutors",
      "Only candidates"
    ],
    "correct": 1,
    "explanation": "Council composition reflects the multi-country nature of WAEC and educational governance needs.",
    "distractors": [
      "Multi-country membership is foundational.",
      "Tutors are not the governing body.",
      "Candidates are examinees, not Council members."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-090",
    "chapterIndex": 2,
    "text": "A folio in registry practice refers to:",
    "choices": [
      "The date only",
      "A numbered page or sheet within an official file",
      "The security classification alone",
      "The file owner's nickname"
    ],
    "correct": 1,
    "explanation": "Folios are sequential pages that make up the contents of a file.",
    "distractors": [
      "Date is recorded separately.",
      "Classification is marked independently.",
      "Owner name is different metadata."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-091",
    "chapterIndex": 2,
    "text": "Ethical duty when observing malpractice is to:",
    "choices": [
      "Conceal it to avoid trouble",
      "Report through prescribed channels without delay",
      "Negotiate a private settlement",
      "Participate to gain favour"
    ],
    "correct": 1,
    "explanation": "Officials must report irregularities to protect examination integrity.",
    "distractors": [
      "Concealment is misconduct.",
      "Private settlements undermine rules.",
      "Participation is an offence."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-092",
    "chapterIndex": 2,
    "text": "WAEC's presence in five countries supports:",
    "choices": [
      "Fragmented, non-comparable certificates",
      "Regional comparability of secondary education standards",
      "Elimination of all national curricula",
      "Only sports competitions"
    ],
    "correct": 1,
    "explanation": "A common examination framework supports comparable standards across member countries.",
    "distractors": [
      "Comparability is a strength.",
      "National curricula still exist.",
      "Education is the core, not sports."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-093",
    "chapterIndex": 2,
    "text": "Which action is appropriate if a seal on a question packet is found broken before the exam?",
    "choices": [
      "Ignore and proceed",
      "Report immediately, document, and follow contingency security procedures",
      "Open privately and redistribute",
      "Blame the nearest person without investigation"
    ],
    "correct": 1,
    "explanation": "Any seal breach must be reported, documented and handled under contingency protocols.",
    "distractors": [
      "Ignoring is misconduct.",
      "Unauthorised opening compounds risk.",
      "Premature blame without process is improper."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-094",
    "chapterIndex": 2,
    "text": "The Registrar to Council role involves:",
    "choices": [
      "Only driving official vehicles",
      "Chief executive functions including implementation of Council decisions",
      "Marking all scripts personally",
      "Setting national tax rates"
    ],
    "correct": 1,
    "explanation": "The Registrar is the chief executive officer responsible for implementing Council policy and running the organisation.",
    "distractors": [
      "Support roles exist separately.",
      "Marking is distributed.",
      "Tax is a government fiscal function."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-095",
    "chapterIndex": 2,
    "text": "In exam administration, an attendance register primarily records:",
    "choices": [
      "Invigilators' lunch preferences",
      "Which registered candidates were present and sat the paper",
      "School marketing contacts",
      "Replacement for photo ID alone"
    ],
    "correct": 1,
    "explanation": "Attendance registers provide official evidence of presence for the examination session.",
    "distractors": [
      "Irrelevant detail.",
      "Not a marketing tool.",
      "ID remains necessary; register complements it."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-096",
    "chapterIndex": 2,
    "text": "Collusion among candidates during an exam is:",
    "choices": [
      "Encouraged collaborative learning",
      "A form of examination malpractice",
      "Irrelevant to integrity",
      "Required by regulations"
    ],
    "correct": 1,
    "explanation": "Mutual assistance that violates individual assessment conditions is malpractice.",
    "distractors": [
      "Not permitted under timed individual conditions.",
      "It threatens validity.",
      "Regulations prohibit it."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-097",
    "chapterIndex": 2,
    "text": "A public officer offered a gift by a contractor seeking favour should:",
    "choices": [
      "Accept quietly and award the contract",
      "Decline and report in line with ethical guidelines",
      "Demand a larger gift",
      "Accept without disclosure"
    ],
    "correct": 1,
    "explanation": "Gifts that could influence decisions must be refused; transparency is required.",
    "distractors": [
      "This is corruption.",
      "Extortion is misconduct.",
      "Non-disclosure compounds the breach."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-098",
    "chapterIndex": 2,
    "text": "Standardisation of scores in large-scale testing helps to:",
    "choices": [
      "Make results incomparable across years",
      "Maintain fairness and comparability of grades across forms and years",
      "Eliminate all statistics",
      "Guarantee every candidate a distinction"
    ],
    "correct": 1,
    "explanation": "Standardisation supports equitable interpretation of scores across different papers and sessions.",
    "distractors": [
      "Opposite of the goal.",
      "Statistics are essential tools.",
      "Standards remain performance-based."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-099",
    "chapterIndex": 2,
    "text": "Which best describes WAEC's relationship with member governments?",
    "choices": [
      "WAEC replaces ministries of education",
      "WAEC is an inter-governmental examining body serving member countries' education systems",
      "WAEC is a private profit-only company with no public mandate",
      "WAEC only operates in one city"
    ],
    "correct": 1,
    "explanation": "WAEC is established by the member countries to provide common examining services for their education systems.",
    "distractors": [
      "Ministries retain policy roles.",
      "Public mandate is central.",
      "Multi-country and multi-office structure exists."
    ]
  },
  {
    "id": "WAEC-APT-CQ-03-100",
    "chapterIndex": 2,
    "text": "Office administration in a WAEC National Office includes:",
    "choices": [
      "Ignoring correspondence",
      "Proper filing, minuting, secure handling of materials and timely processing of official business",
      "Personal use of official vehicles only",
      "Publishing live questions early"
    ],
    "correct": 1,
    "explanation": "Effective office administration underpins secure and efficient delivery of the examination function.",
    "distractors": [
      "Correspondence must be processed.",
      "Vehicles serve official duties under rules.",
      "Leakage is prohibited."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-001",
    "chapterIndex": 3,
    "text": "Find the next number in the series: 2, 6, 12, 20, 30, ?",
    "choices": [
      "36",
      "40",
      "42",
      "48"
    ],
    "correct": 2,
    "explanation": "The differences increase by 2 each time: +4, +6, +8, +10; next is +12 → 30 + 12 = 42.",
    "distractors": [
      "Assumes a constant difference of 10.",
      "Assumes a smaller increment than the pattern requires.",
      "Assumes a doubling or other unrelated pattern."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-002",
    "chapterIndex": 3,
    "text": "Premise 1: All examination officers undergo security clearance.\nPremise 2: Some IT officers are examination officers.\nConclusion: ?",
    "choices": [
      "All IT officers undergo security clearance",
      "Security clearance is required only for IT officers",
      "No IT officer undergoes security clearance",
      "Some IT officers undergo security clearance"
    ],
    "correct": 3,
    "explanation": "Since all members of the exam officer set undergo clearance, any IT officer who belongs to that set must also undergo clearance.",
    "distractors": [
      "Over-generalizes from 'some' to 'all'.",
      "Directly contradicts the logical premises.",
      "Assumes exclusivity not supported by the premises."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-003",
    "chapterIndex": 3,
    "text": "In a certain code, 'WASSCE' is written as 'YCUUEG'. How is 'PAPERS' written in that same code?",
    "choices": [
      "RCRGTU",
      "QBQFST",
      "RBRGUT",
      "RCRGVT"
    ],
    "correct": 0,
    "explanation": "Each letter is shifted forward by +2 positions in the alphabet: P(+2)=R, A(+2)=C, P(+2)=R, E(+2)=G, R(+2)=T, S(+2)=U.",
    "distractors": [
      "Miscalculated the shift for the final character.",
      "Applied a +1 shift instead of +2.",
      "Made a transposition error on the middle consonants."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-004",
    "chapterIndex": 3,
    "text": "Which shape concept does not belong with the others: Octagon, Hexagon, Cylinder, Pentagon?",
    "choices": [
      "Octagon",
      "Cylinder",
      "Hexagon",
      "Pentagon"
    ],
    "correct": 1,
    "explanation": "Cylinder is a 3D geometric solid; Octagon, Hexagon, and Pentagon are 2D polygons.",
    "distractors": [
      "Octagon is a 2D polygon with 8 sides.",
      "Hexagon is a 2D polygon with 6 sides.",
      "Pentagon is a 2D polygon with 5 sides."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-005",
    "chapterIndex": 3,
    "text": "If A is taller than B, and B is taller than C, which is true?",
    "choices": [
      "A and C are the same height",
      "B is the tallest",
      "A is taller than C",
      "C is taller than A"
    ],
    "correct": 2,
    "explanation": "By transitivity, A > B > C implies A > C.",
    "distractors": [
      "This contradicts the given order.",
      "Equality is not implied.",
      "B is between A and C, not the tallest."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-006",
    "chapterIndex": 3,
    "text": "Find the next term: 1, 4, 9, 16, 25, ?",
    "choices": [
      "32",
      "49",
      "30",
      "36"
    ],
    "correct": 3,
    "explanation": "These are successive perfect squares: 1², 2², 3², 4², 5², next 6² = 36.",
    "distractors": [
      "Added a constant rather than following the square pattern.",
      "Jumped to 7².",
      "Used an arithmetic increment."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-007",
    "chapterIndex": 3,
    "text": "All roses are flowers. Some flowers fade quickly. Therefore:",
    "choices": [
      "Some roses may fade quickly",
      "No roses fade quickly",
      "All flowers are roses",
      "All roses fade quickly"
    ],
    "correct": 0,
    "explanation": "The premises allow the possibility that some roses (being flowers) fade quickly; they do not force universality or impossibility.",
    "distractors": [
      "Over-generalises from 'some'.",
      "Contradicts the possible overlap.",
      "Reverses the universal statement."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-008",
    "chapterIndex": 3,
    "text": "In a code language, if 'EXAM' is written as 'FYBN', how is 'TEST' written?",
    "choices": [
      "SDRS",
      "UFTU",
      "UFTS",
      "UFSU"
    ],
    "correct": 1,
    "explanation": "Each letter is shifted +1: T→U, E→F, S→T, T→U.",
    "distractors": [
      "Shifted backwards.",
      "Inconsistent shift on the last letter.",
      "Shift error on an internal letter."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-009",
    "chapterIndex": 3,
    "text": "Which number should replace the question mark? 3, 6, 11, 18, 27, ?",
    "choices": [
      "40",
      "36",
      "38",
      "32"
    ],
    "correct": 2,
    "explanation": "Differences: +3, +5, +7, +9; next difference +11 → 27 + 11 = 38.",
    "distractors": [
      "Assumed a constant difference of 9.",
      "Used a larger jump.",
      "Used a smaller increment."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-010",
    "chapterIndex": 3,
    "text": "If all scripts are documents and some documents are confidential, which conclusion follows?",
    "choices": [
      "All scripts are confidential",
      "All confidential items are scripts",
      "No scripts are confidential",
      "Some scripts may be confidential"
    ],
    "correct": 3,
    "explanation": "The overlap between documents and confidential items may include some scripts.",
    "distractors": [
      "Over-generalises.",
      "Unwarranted negation.",
      "Illicit conversion of the premises."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-011",
    "chapterIndex": 3,
    "text": "Complete the series: 5, 10, 20, 40, ?",
    "choices": [
      "80",
      "50",
      "60",
      "70"
    ],
    "correct": 0,
    "explanation": "Each term is multiplied by 2: 40 × 2 = 80.",
    "distractors": [
      "Added 20 instead of doubling.",
      "Used an intermediate value.",
      "Added only 10."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-012",
    "chapterIndex": 3,
    "text": "A is the brother of B. B is the sister of C. C is the brother of D. How is D related to A?",
    "choices": [
      "D is the father of A",
      "D is the brother or sister of A",
      "D is the uncle of A",
      "D is the mother of A"
    ],
    "correct": 1,
    "explanation": "A, B, C and D are siblings; D may be male or female, so brother or sister of A.",
    "distractors": [
      "No generational information supports parenthood.",
      "Same as above.",
      "Uncle would be a different generation."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-013",
    "chapterIndex": 3,
    "text": "Which of the following does not belong to the group? 2, 3, 5, 7, 9, 11",
    "choices": [
      "5",
      "2",
      "9",
      "11"
    ],
    "correct": 2,
    "explanation": "All others are prime numbers; 9 is composite (3×3).",
    "distractors": [
      "2 is the even prime.",
      "5 is prime.",
      "11 is prime."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-014",
    "chapterIndex": 3,
    "text": "If 'PENCIL' is coded as 'RGPENK', how is 'PAPER' coded under the same rule?",
    "choices": [
      "RCRGS",
      "RBRGT",
      "QBQFS",
      "RCRGT"
    ],
    "correct": 3,
    "explanation": "Each letter +2: P→R, A→C, P→R, E→G, R→T.",
    "distractors": [
      "Error on the final letter.",
      "Used +1 shift.",
      "Inconsistent internal shift."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-015",
    "chapterIndex": 3,
    "text": "Statements: All markers are pens. Some pens are red. Conclusions: I. Some markers are red. II. All pens are markers.",
    "choices": [
      "Neither I nor II follows",
      "Only II follows",
      "Only I follows",
      "Both follow"
    ],
    "correct": 0,
    "explanation": "The 'some pens are red' may not intersect the marker subset; II reverses the universal incorrectly.",
    "distractors": [
      "I is possible but not necessary.",
      "II is an illicit conversion.",
      "Neither is forced by the premises."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-016",
    "chapterIndex": 3,
    "text": "Find the odd one out: Triangle, Square, Rectangle, Circle",
    "choices": [
      "Rectangle",
      "Circle",
      "Square",
      "Triangle"
    ],
    "correct": 1,
    "explanation": "Circle is curved; the others are polygons with straight sides.",
    "distractors": [
      "A straight-sided polygon.",
      "A straight-sided polygon.",
      "A straight-sided polygon."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-017",
    "chapterIndex": 3,
    "text": "If the day before yesterday was Thursday, what day will it be the day after tomorrow?",
    "choices": [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday"
    ],
    "correct": 2,
    "explanation": "Day before yesterday = Thursday ⇒ yesterday = Friday ⇒ today = Saturday ⇒ tomorrow = Sunday ⇒ day after tomorrow = Monday.",
    "distractors": [
      "Stopped one day early.",
      "Miscounted the sequence.",
      "Overshot the count."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-018",
    "chapterIndex": 3,
    "text": "Complete the analogy: Finger is to Hand as Leaf is to:",
    "choices": [
      "Forest",
      "Branch",
      "Green",
      "Tree"
    ],
    "correct": 3,
    "explanation": "A finger is part of a hand; a leaf is part of a tree (the whole organism).",
    "distractors": [
      "An attribute, not the whole.",
      "A part, but the parallel is the whole.",
      "A collection of trees."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-019",
    "chapterIndex": 3,
    "text": "Series: 8, 27, 64, 125, ?",
    "choices": [
      "216",
      "180",
      "200",
      "250"
    ],
    "correct": 0,
    "explanation": "Cubes of consecutive integers: 2³, 3³, 4³, 5³, next 6³ = 216.",
    "distractors": [
      "Approximate but incorrect value.",
      "Not a perfect cube in sequence.",
      "Too low for the pattern."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-020",
    "chapterIndex": 3,
    "text": "If A + B means A is the brother of B; A − B means A is the sister of B; A × B means A is the father of B. Which shows that P is the sister of Q?",
    "choices": [
      "P + Q",
      "P − Q",
      "Q − P",
      "P × Q"
    ],
    "correct": 1,
    "explanation": "By definition P − Q means P is the sister of Q.",
    "distractors": [
      "Would mean P is brother of Q.",
      "Would mean P is father of Q.",
      "Would mean Q is sister of P (direction reversed)."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-021",
    "chapterIndex": 3,
    "text": "Which number continues the series: 1, 1, 2, 3, 5, 8, ?",
    "choices": [
      "10",
      "12",
      "13",
      "11"
    ],
    "correct": 2,
    "explanation": "Fibonacci sequence: each term is the sum of the two preceding ones; 5+8=13.",
    "distractors": [
      "Close but incorrect sum.",
      "Arithmetic increment of 2.",
      "Incorrect sum."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-022",
    "chapterIndex": 3,
    "text": "All books have pages. Some pages are blank. Therefore:",
    "choices": [
      "All blank pages are books",
      "No books have blank pages",
      "All books have blank pages",
      "Some books may have blank pages"
    ],
    "correct": 3,
    "explanation": "The premises permit but do not require that some books contain blank pages.",
    "distractors": [
      "Over-generalisation.",
      "Unwarranted negation.",
      "Illicit conversion."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-023",
    "chapterIndex": 3,
    "text": "In a certain code, 1 2 3 means 'exam is hard', 3 4 5 means 'hard work pays', 5 6 1 means 'work is good'. What does 'exam' stand for?",
    "choices": [
      "2",
      "3",
      "1",
      "4"
    ],
    "correct": 0,
    "explanation": "'Exam is hard' and 'work is good' share 'is' (1); 'exam is hard' and 'hard work pays' share 'hard' (3); therefore 'exam' = 2.",
    "distractors": [
      "This code appears in two phrases and corresponds to 'is'.",
      "This code corresponds to 'hard'.",
      "This code appears only in the second phrase."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-024",
    "chapterIndex": 3,
    "text": "Find the missing number: 4, 9, 19, 39, ?",
    "choices": [
      "69",
      "79",
      "59",
      "89"
    ],
    "correct": 1,
    "explanation": "Each term is roughly doubled plus 1: 4×2+1=9, 9×2+1=19, 19×2+1=39, 39×2+1=79.",
    "distractors": [
      "Used a smaller multiplier.",
      "Used an intermediate value.",
      "Overshot the pattern."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-025",
    "chapterIndex": 3,
    "text": "If South-East becomes North, North-East becomes West, and so on, what will West become?",
    "choices": [
      "North-West",
      "North-East",
      "South-East",
      "South-West"
    ],
    "correct": 2,
    "explanation": "The transformation is a 135° anticlockwise rotation (or equivalent mapping). West maps to South-East under that consistent rotation.",
    "distractors": [
      "Incorrect rotational mapping.",
      "Wrong direction of rotation.",
      "Incorrect resultant direction."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-026",
    "chapterIndex": 3,
    "text": "Statements: Some candidates are invigilators. All invigilators are officers. Conclusions: I. Some candidates are officers. II. All officers are invigilators.",
    "choices": [
      "Only II follows",
      "Both follow",
      "Neither follows",
      "Only I follows"
    ],
    "correct": 3,
    "explanation": "The candidates who are invigilators must be officers, so I follows. II is an illicit conversion.",
    "distractors": [
      "II does not follow.",
      "Only I is valid.",
      "I does follow."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-027",
    "chapterIndex": 3,
    "text": "Which is the odd one out? 16, 25, 36, 48, 64",
    "choices": [
      "48",
      "25",
      "36",
      "16"
    ],
    "correct": 0,
    "explanation": "16=4², 25=5², 36=6², 64=8²; 48 is not a perfect square.",
    "distractors": [
      "Perfect square.",
      "Perfect square.",
      "Perfect square."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-028",
    "chapterIndex": 3,
    "text": "If 'MARKS' is written as 'NCTMU', how is 'SCORE' written?",
    "choices": [
      "TDOQF",
      "UEQTG",
      "UEPTG",
      "TDPQF"
    ],
    "correct": 1,
    "explanation": "Each letter +2: S→U, C→E, O→Q, R→T, E→G.",
    "distractors": [
      "Inconsistent shift.",
      "Error on one letter.",
      "Different shift pattern."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-029",
    "chapterIndex": 3,
    "text": "A is taller than B but shorter than C. D is shorter than B. Who is the tallest?",
    "choices": [
      "D",
      "A",
      "C",
      "B"
    ],
    "correct": 2,
    "explanation": "Order: C > A > B > D, so C is tallest.",
    "distractors": [
      "A is between C and B.",
      "B is shorter than A and C.",
      "D is the shortest."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-030",
    "chapterIndex": 3,
    "text": "Complete the series: 2, 5, 10, 17, 26, ?",
    "choices": [
      "30",
      "40",
      "35",
      "37"
    ],
    "correct": 3,
    "explanation": "Differences: +3, +5, +7, +9; next +11 → 26+11=37.",
    "distractors": [
      "Assumed constant difference.",
      "Used a larger jump.",
      "Used a smaller increment."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-031",
    "chapterIndex": 3,
    "text": "If 'CAT' is coded as 24 and 'DOG' as 26, how is 'BAT' coded? (A=1, B=2, …)",
    "choices": [
      "23",
      "22",
      "24",
      "25"
    ],
    "correct": 0,
    "explanation": "Sum of positions: C+A+T=3+1+20=24; D+O+G=4+15+7=26; B+A+T=2+1+20=23.",
    "distractors": [
      "Same as CAT.",
      "Incorrect sum.",
      "Under-counted."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-032",
    "chapterIndex": 3,
    "text": "Which conclusion follows? All honest officers are reliable. Some reliable officers are experienced.",
    "choices": [
      "All experienced officers are honest",
      "Some honest officers may be experienced",
      "No honest officer is experienced",
      "All reliable officers are honest"
    ],
    "correct": 1,
    "explanation": "The intersection of reliable and experienced may include some of the honest subset.",
    "distractors": [
      "Over-generalisation.",
      "Unwarranted negation.",
      "Illicit conversion of the first premise."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-033",
    "chapterIndex": 3,
    "text": "Find the next letter in the series: A, C, F, J, O, ?",
    "choices": [
      "S",
      "V",
      "U",
      "T"
    ],
    "correct": 2,
    "explanation": "Positions: 1, 3, 6, 10, 15; differences +2, +3, +4, +5; next +6 → 15+6=21 = U.",
    "distractors": [
      "One short of the required step.",
      "Two short.",
      "One beyond."
    ]
  },
  {
    "id": "WAEC-APT-CQ-04-034",
    "chapterIndex": 3,
    "text": "If in a certain language 'EXAMINATION' is coded as 'F Y B N J O B U J P O', how is 'SCRIPT' coded?",
    "choices": [
      "T C S J Q U",
      "S D S J Q U",
      "T D S J P U",
      "T D S J Q U"
    ],
    "correct": 3,
    "explanation": "Each letter is shifted +1: S→T, C→D, R→S, I→J, P→Q, T→U.",
    "distractors": [
      "Error on one letter.",
      "Started with the original letter.",
      "Error on an internal letter."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-001",
    "chapterIndex": 4,
    "text": "An item analysis reveals that an exam question was answered correctly by 85 out of 100 candidates. What is the item difficulty index (p-value)?",
    "choices": [
      "0.85",
      "0.50",
      "0.15",
      "8.50"
    ],
    "correct": 0,
    "explanation": "Difficulty index (p-value) = Number of correct responses / Total candidates = 85 / 100 = 0.85 (indicating a very easy item).",
    "distractors": [
      "This measures the proportion of incorrect responses (1 - p).",
      "Scaling magnitude mistake.",
      "Assumes a default medium difficulty level."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-002",
    "chapterIndex": 4,
    "text": "If an assessment yields highly consistent results across multiple administrations but fails to measure the target syllabus objectives, it exhibits:",
    "choices": [
      "Low reliability and low validity",
      "High reliability and low validity",
      "High reliability and high validity",
      "Low reliability and high validity"
    ],
    "correct": 1,
    "explanation": "Reliability measures consistency; validity measures accuracy. Consistent outcomes without measuring the intended objective signify high reliability paired with low validity.",
    "distractors": [
      "A test cannot have high validity without underlying measurement consistency.",
      "High validity requires measuring the actual target objectives correctly.",
      "Consistency rules out low reliability."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-003",
    "chapterIndex": 4,
    "text": "According to Bloom's Revised Taxonomy, which cognitive domain level requires a student to justify a decision or course of action?",
    "choices": [
      "Applying",
      "Analyzing",
      "Evaluating",
      "Creating"
    ],
    "correct": 2,
    "explanation": "'Evaluating' involves making judgments based on criteria and standards, such as justifying a decision.",
    "distractors": [
      "Analyzing refers to breaking down material into component parts.",
      "Applying refers to executing or using a procedure in a given situation.",
      "Creating involves putting elements together to form a coherent functional whole."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-004",
    "chapterIndex": 4,
    "text": "Which reliability coefficient formula is specifically designed to assess internal consistency for dichotomously scored test items (0 or 1)?",
    "choices": [
      "Cronbach's Alpha",
      "Pearson Product-Moment",
      "Spearman-Brown Prophecy",
      "Kuder-Richardson 20 (KR-20)"
    ],
    "correct": 3,
    "explanation": "KR-20 is designed for internal consistency of dichotomous items (right/wrong). Cronbach's Alpha generalizes this for multipoint/Likert items.",
    "distractors": [
      "Cronbach's Alpha is used for continuous or non-dichotomous items.",
      "Pearson correlation measures bivariate linear relationships.",
      "Spearman-Brown adjusts split-half reliability estimates for test length changes."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-005",
    "chapterIndex": 4,
    "text": "A standardized test score report gives a student a Stanine score of 9. How should an assessment officer interpret this result?",
    "choices": [
      "Superior performance (top 4% of the norm group)",
      "Below average performance (bottom 11% of the norm group)",
      "Failing performance requiring mandatory paper re-sit",
      "Average performance (middle 20% of the norm group)"
    ],
    "correct": 0,
    "explanation": "Stanine scores range from 1 to 9. A stanine of 9 represents the highest performance band, corresponding to the top 4% of test takers.",
    "distractors": [
      "Stanines 4, 5, and 6 represent average performance.",
      "Stanine 2 or 3 represents below average performance.",
      "Stanines represent relative normative rank, not absolute pass/fail thresholds."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-006",
    "chapterIndex": 4,
    "text": "The discrimination index of an item is calculated primarily to determine:",
    "choices": [
      "The absolute difficulty of the item only",
      "How well the item distinguishes between high- and low-scoring candidates",
      "The number of options in a multiple-choice item",
      "The time required to answer the item"
    ],
    "correct": 1,
    "explanation": "Discrimination (often point-biserial or upper-lower difference) indicates the item's ability to separate stronger from weaker candidates.",
    "distractors": [
      "Difficulty is measured by the p-value.",
      "Timing is a separate practical consideration.",
      "Number of options affects guessing but is not the discrimination index."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-007",
    "chapterIndex": 4,
    "text": "Content validity of an examination is best established by:",
    "choices": [
      "Showing that scores remain stable over time",
      "Calculating the correlation with a later performance measure",
      "Ensuring the items adequately sample the prescribed syllabus objectives",
      "Demonstrating high internal consistency alone"
    ],
    "correct": 2,
    "explanation": "Content validity rests on the degree to which the test content represents the intended domain or syllabus.",
    "distractors": [
      "This describes criterion-related (predictive) validity.",
      "This describes test-retest reliability.",
      "Internal consistency is a reliability, not validity, evidence."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-008",
    "chapterIndex": 4,
    "text": "In Classical Test Theory, the observed score is conceptualised as:",
    "choices": [
      "True score minus error score",
      "Error score only",
      "True score only",
      "True score plus error score"
    ],
    "correct": 3,
    "explanation": "X = T + E, where X is observed score, T true score, and E random error.",
    "distractors": [
      "The model uses addition of error, not subtraction as the definitional form.",
      "Observed score contains both true and error components.",
      "Error alone is not the observed score."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-009",
    "chapterIndex": 4,
    "text": "A reliability coefficient of 0.90 indicates that:",
    "choices": [
      "90% of the variance in observed scores is attributable to true score variance",
      "The mean score is 90",
      "The test is 90% valid",
      "10% of candidates will pass"
    ],
    "correct": 0,
    "explanation": "Reliability is the proportion of observed-score variance that is true-score variance.",
    "distractors": [
      "Reliability and validity are distinct concepts.",
      "Reliability does not directly give the pass rate.",
      "Reliability is independent of the mean."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-010",
    "chapterIndex": 4,
    "text": "Which of Bloom's levels involves putting elements together to form a novel, coherent whole?",
    "choices": [
      "Evaluating",
      "Creating",
      "Understanding",
      "Analyzing"
    ],
    "correct": 1,
    "explanation": "Creating (the highest level in the revised taxonomy) requires generating new products or structures.",
    "distractors": [
      "Evaluating is making judgments based on criteria.",
      "Analyzing is breaking into parts and relating them.",
      "Understanding is constructing meaning from instructional messages."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-011",
    "chapterIndex": 4,
    "text": "An item with a difficulty index of 0.20 is generally considered:",
    "choices": [
      "Invalid",
      "Easy",
      "Difficult",
      "Of medium difficulty"
    ],
    "correct": 2,
    "explanation": "p = 0.20 means only 20% of candidates answered correctly; the item is difficult.",
    "distractors": [
      "High p-values indicate easy items.",
      "Medium difficulty is typically around 0.50.",
      "Difficulty alone does not determine validity."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-012",
    "chapterIndex": 4,
    "text": "Cronbach's alpha is most appropriately used when test items are:",
    "choices": [
      "Strictly dichotomous (0/1) only",
      "Not intended to measure a common construct",
      "Essay items without scoring rubrics",
      "Scored on a continuous or multipoint scale"
    ],
    "correct": 3,
    "explanation": "Cronbach's alpha generalises internal-consistency estimation to items with more than two score points.",
    "distractors": [
      "KR-20 is preferred for purely dichotomous items.",
      "Essay scoring still requires consistent application of criteria.",
      "Alpha assumes items measure a common latent trait."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-013",
    "chapterIndex": 4,
    "text": "A stanine score of 5 corresponds approximately to:",
    "choices": [
      "Average performance (middle 20% of the norm group)",
      "The 90th percentile",
      "Top 4% of the norm group",
      "Bottom 4% of the norm group"
    ],
    "correct": 0,
    "explanation": "Stanines 4, 5 and 6 together cover the middle 54%; stanine 5 is the central average band (approximately the middle 20%).",
    "distractors": [
      "Stanine 9 is the top band.",
      "Stanine 1 is the lowest band.",
      "Stanine 5 is near the 50th percentile, not the 90th."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-014",
    "chapterIndex": 4,
    "text": "Predictive validity is demonstrated when test scores:",
    "choices": [
      "Show high internal consistency",
      "Correlate with a future criterion measure of performance",
      "Remain stable over short intervals",
      "Sample the content domain adequately"
    ],
    "correct": 1,
    "explanation": "Predictive validity is a form of criterion-related validity in which the criterion is measured later in time.",
    "distractors": [
      "This is content validity.",
      "This is test-retest reliability.",
      "This is internal-consistency reliability."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-015",
    "chapterIndex": 4,
    "text": "The standard error of measurement (SEM) is smaller when:",
    "choices": [
      "The mean is higher",
      "The number of candidates is smaller",
      "Reliability is higher",
      "Reliability is lower"
    ],
    "correct": 2,
    "explanation": "SEM = SD × √(1 − reliability); higher reliability reduces the SEM.",
    "distractors": [
      "Lower reliability increases SEM.",
      "Mean does not enter the SEM formula directly.",
      "Sample size affects the precision of reliability estimates but SEM is a function of reliability and SD."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-016",
    "chapterIndex": 4,
    "text": "In item analysis, a negative discrimination index usually indicates that:",
    "choices": [
      "The item has perfect validity",
      "The item is extremely difficult",
      "The item is extremely easy",
      "Higher-scoring candidates are answering the item incorrectly more often than lower-scoring candidates"
    ],
    "correct": 3,
    "explanation": "Negative discrimination means the item is functioning in the opposite direction of the total test score.",
    "distractors": [
      "Difficulty is independent of the sign of discrimination.",
      "Difficulty is independent of the sign of discrimination.",
      "Negative discrimination is a serious flaw, not evidence of validity."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-017",
    "chapterIndex": 4,
    "text": "Which of the following is a measure of central tendency?",
    "choices": [
      "Median",
      "Range",
      "Standard deviation",
      "Variance"
    ],
    "correct": 0,
    "explanation": "The median is a measure of central tendency; the others are measures of dispersion.",
    "distractors": [
      "Measure of spread.",
      "Measure of spread.",
      "Measure of spread."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-018",
    "chapterIndex": 4,
    "text": "Norm-referenced interpretation of scores compares a candidate's performance to:",
    "choices": [
      "A fixed absolute standard of mastery",
      "The performance of a defined reference group",
      "The difficulty of each individual item",
      "The candidate's own previous scores only"
    ],
    "correct": 1,
    "explanation": "Norm-referenced scores (percentiles, stanines, z-scores) locate the individual relative to a norm group.",
    "distractors": [
      "This describes criterion-referenced interpretation.",
      "This is ipsative or self-referenced.",
      "Item difficulty is used in analysis, not as the primary interpretive frame for the total score."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-019",
    "chapterIndex": 4,
    "text": "The Spearman-Brown prophecy formula is used to:",
    "choices": [
      "Calculate item difficulty",
      "Compute the mean of a distribution",
      "Estimate the reliability of a test if its length is changed",
      "Determine the number of distractors"
    ],
    "correct": 2,
    "explanation": "Spearman-Brown adjusts a reliability coefficient for a hypothetical change in test length.",
    "distractors": [
      "Not a measure of central tendency.",
      "Difficulty is the p-value.",
      "Number of options is a design decision, not derived from the formula."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-020",
    "chapterIndex": 4,
    "text": "Face validity refers to:",
    "choices": [
      "The statistical correlation with an external criterion",
      "The long-term stability of scores",
      "The internal consistency of the items",
      "The extent to which a test appears, on the surface, to measure what it claims to measure"
    ],
    "correct": 3,
    "explanation": "Face validity is a subjective judgment of whether the test 'looks' appropriate; it is the weakest form of validity evidence.",
    "distractors": [
      "This is criterion-related validity.",
      "This is reliability.",
      "This is test-retest reliability."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-021",
    "chapterIndex": 4,
    "text": "In a normal distribution of examination scores, the mean, median and mode are:",
    "choices": [
      "Equal",
      "Median higher than mean",
      "Mean higher than median",
      "Mode higher than both"
    ],
    "correct": 0,
    "explanation": "In a perfectly normal (symmetric) distribution the three measures of central tendency coincide.",
    "distractors": [
      "Would indicate positive skew.",
      "Would indicate negative skew.",
      "Not characteristic of the normal curve."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-022",
    "chapterIndex": 4,
    "text": "An item that 95% of candidates answer correctly has a difficulty index that is:",
    "choices": [
      "Low (difficult item)",
      "High (easy item)",
      "Zero",
      "Negative"
    ],
    "correct": 1,
    "explanation": "p = 0.95 is a high difficulty index, indicating an easy item.",
    "distractors": [
      "Low p indicates difficulty.",
      "p cannot be zero if any candidate answers correctly.",
      "Difficulty indices are proportions between 0 and 1."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-023",
    "chapterIndex": 4,
    "text": "Construct validity is concerned with:",
    "choices": [
      "Only the consistency of scores over time",
      "Only the sampling of syllabus content",
      "The degree to which a test measures the theoretical construct it is intended to measure",
      "Only the correlation with a future performance measure"
    ],
    "correct": 2,
    "explanation": "Construct validity addresses whether the test scores can be interpreted as reflecting the intended psychological or educational construct.",
    "distractors": [
      "This is content validity.",
      "This is predictive validity.",
      "This is reliability."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-024",
    "chapterIndex": 4,
    "text": "Which of the following is NOT a classical method of estimating reliability?",
    "choices": [
      "Test-retest",
      "Split-half",
      "Internal consistency (alpha / KR-20)",
      "Item response theory information function"
    ],
    "correct": 3,
    "explanation": "IRT information functions belong to modern test theory; the others are classical approaches.",
    "distractors": [
      "A classical reliability method.",
      "A classical reliability method.",
      "A classical reliability method."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-025",
    "chapterIndex": 4,
    "text": "A percentile rank of 75 means that the candidate scored:",
    "choices": [
      "As well as or better than 75% of the norm group",
      "In the top 75% of the group",
      "Exactly 75% of the total marks",
      "75 raw score points"
    ],
    "correct": 0,
    "explanation": "Percentile rank indicates the percentage of the reference group that scored at or below the candidate's score.",
    "distractors": [
      "Percentile is not the same as percentage of marks obtained.",
      "Top 75% would be a different statement.",
      "Percentile is a relative standing, not a raw score."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-026",
    "chapterIndex": 4,
    "text": "The primary purpose of a marking scheme (scoring rubric) is to:",
    "choices": [
      "Make the examination longer",
      "Increase the objectivity and consistency of scoring",
      "Eliminate the need for examiner training",
      "Reduce the number of candidates"
    ],
    "correct": 1,
    "explanation": "A well-designed marking scheme guides examiners so that similar responses receive similar marks, thereby enhancing reliability.",
    "distractors": [
      "Length is determined by design, not by the scheme.",
      "Irrelevant to the function of a rubric.",
      "Training remains necessary even with a scheme."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-027",
    "chapterIndex": 4,
    "text": "In the revised Bloom taxonomy, 'Remembering' is the:",
    "choices": [
      "Same as Creating",
      "Highest cognitive level",
      "Lowest cognitive level",
      "Equivalent to Evaluating"
    ],
    "correct": 2,
    "explanation": "Remembering (recalling facts and basic concepts) is the foundational, lowest level of the cognitive process dimension.",
    "distractors": [
      "Creating is the highest.",
      "They are distinct levels.",
      "They are distinct levels."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-028",
    "chapterIndex": 4,
    "text": "A high positive point-biserial correlation for an item indicates that:",
    "choices": [
      "The item is too easy for everyone",
      "The item is biased against a particular group",
      "The item has zero discrimination",
      "Candidates who scored high on the total test tended to answer the item correctly"
    ],
    "correct": 3,
    "explanation": "Point-biserial is a discrimination index; a high positive value shows the item aligns with overall ability.",
    "distractors": [
      "Difficulty is measured separately.",
      "Bias requires differential item functioning analysis.",
      "Zero would indicate no relationship."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-029",
    "chapterIndex": 4,
    "text": "Criterion-referenced tests are primarily designed to:",
    "choices": [
      "Determine whether a candidate has attained a predefined level of competence",
      "Produce a normal distribution of scores",
      "Rank candidates from highest to lowest",
      "Compare candidates only with each other"
    ],
    "correct": 0,
    "explanation": "Criterion-referenced interpretation judges performance against an absolute standard or domain of mastery.",
    "distractors": [
      "This is the purpose of norm-referenced tests.",
      "Also characteristic of norm-referencing.",
      "Score distribution is not the defining goal."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-030",
    "chapterIndex": 4,
    "text": "The formula for the z-score is:",
    "choices": [
      "(X + Mean) / Standard Deviation",
      "(X − Mean) / Standard Deviation",
      "X × Standard Deviation",
      "Mean / Standard Deviation"
    ],
    "correct": 1,
    "explanation": "z = (X − μ) / σ standardises a raw score relative to the distribution's mean and SD.",
    "distractors": [
      "Addition instead of subtraction is incorrect.",
      "Omits the individual's score.",
      "Does not centre the score."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-031",
    "chapterIndex": 4,
    "text": "Split-half reliability is obtained by:",
    "choices": [
      "Computing the average inter-item correlation only",
      "Administering the same test twice on different occasions",
      "Correlating scores on two halves of the same test and adjusting with Spearman-Brown",
      "Counting the number of correct answers"
    ],
    "correct": 2,
    "explanation": "The test is divided into two equivalent halves; the correlation is stepped up by the Spearman-Brown formula.",
    "distractors": [
      "This is test-retest reliability.",
      "Related to alpha but not the split-half procedure itself.",
      "That yields a raw score, not a reliability coefficient."
    ]
  },
  {
    "id": "WAEC-APT-CQ-05-032",
    "chapterIndex": 4,
    "text": "An examination that measures only a narrow subset of the syllabus while claiming to assess the whole domain suffers from:",
    "choices": [
      "High content validity",
      "Perfect reliability",
      "Zero measurement error",
      "Construct under-representation"
    ],
    "correct": 3,
    "explanation": "Construct under-representation occurs when important facets of the intended construct are missing from the test.",
    "distractors": [
      "The opposite of the described situation.",
      "Reliability is independent of this validity threat.",
      "Error is never zero in practice."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-001",
    "chapterIndex": 5,
    "text": "Which official WAEC committee is empowered to investigate and take final disciplinary decisions on reported examination malpractice cases?",
    "choices": [
      "National Committee on Educational Cases (NCEC) / Nigeria Examinations Committee (NEC)",
      "Public Accounts Committee",
      "Tender and Ethics Board",
      "Board of Directorates"
    ],
    "correct": 0,
    "explanation": "The Committee on Educational Cases (or Nigeria Examinations Committee) considers reports of malpractice and determines appropriate penalties/cancellations.",
    "distractors": [
      "The Board handles general institutional policy, not specific candidate malpractice cases.",
      "Public Accounts deals with audit and financial compliance.",
      "Tender Board handles procurement contracts."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-002",
    "chapterIndex": 5,
    "text": "When drafting an official minute on an administrative file in the public service, what is the primary objective?",
    "choices": [
      "To write a detailed essay expressing personal opinions on organizational policies",
      "To provide a concise summary of background facts and recommend a clear line of action",
      "To duplicate all previous correspondence verbatim",
      "To issue a binding disciplinary query to subordinate staff"
    ],
    "correct": 1,
    "explanation": "Administrative minuting requires summarizing the issue clearly, highlighting relevant rules/precedents, and suggesting concrete actionable recommendations.",
    "distractors": [
      "Minutes must remain objective and rooted in Public Service Rules, not personal opinions.",
      "Duplication creates unnecessary clutter and lacks analysis.",
      "A minute is an internal note for decision-making, not a formal query document."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-003",
    "chapterIndex": 5,
    "text": "What is the standard security protocol when receiving confidential examination material packets at a Zonal Custodian Depot?",
    "choices": [
      "Hand over custody keys to unauthorized security officers for safekeeping",
      "Open the inner question bundles to verify page counts before storing in the vault",
      "Verify outer tamper-evident seals in the presence of security officials and log receipt details immediately",
      "Store the parcels directly without checking seals until exam morning"
    ],
    "correct": 2,
    "explanation": "Confidential material must be verified externally for intact seals, witnessed by authorized personnel, and immediately entered into custody logs without breaking inner seals.",
    "distractors": [
      "Opening inner question bundles breaks security protocol prior to exam start time.",
      "Failing to inspect seal integrity upon arrival exposes the process to undetected tampering.",
      "Custody keys must remain exclusively with designated WAEC Custodians."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-004",
    "chapterIndex": 5,
    "text": "An administrative officer discovers a close relative is sitting for an examination at a centre under the officer's direct supervision. What is the ethical course of action?",
    "choices": [
      "Say nothing and attempt to remain completely impartial during monitoring",
      "Inform the relative of key exam security protocols privately",
      "Delegate supervisory duties to a subordinate unofficially without logging it",
      "Formally declare a conflict of interest and request redeployment from supervising that centre"
    ],
    "correct": 3,
    "explanation": "Public sector ethics requires immediate formal declaration of any potential or real conflict of interest to allow re-assignment by superiors.",
    "distractors": [
      "Concealing a conflict of interest breaches civil service ethical codes.",
      "Giving private briefings to candidates creates an unfair advantage.",
      "Unofficial delegation avoids institutional accountability."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-005",
    "chapterIndex": 5,
    "text": "In public sector file indexing, what does the abbreviation 'p.f.' stand for on an official personal folder?",
    "choices": [
      "Personal File",
      "Primary Folio",
      "Permanent Folder",
      "Pending Filing"
    ],
    "correct": 0,
    "explanation": "In official registry operations, 'p.f.' stands for Personal File.",
    "distractors": [
      "Incorrect terminology in standard administrative registry systems.",
      "Refers to temporary pending items, not personal folders.",
      "Folio refers to individual page numbers within a file."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-006",
    "chapterIndex": 5,
    "text": "Which of the following constitutes examination malpractice under WAEC regulations?",
    "choices": [
      "Arriving early at the examination centre",
      "Bringing unauthorized materials or electronic devices into the examination hall",
      "Using an approved calculator where permitted",
      "Requesting clarification of a poorly printed question from the invigilator"
    ],
    "correct": 1,
    "explanation": "Possession of unauthorized materials, cribs, phones or other electronic devices is a recognised form of malpractice.",
    "distractors": [
      "Punctuality is expected, not an offence.",
      "Approved aids are allowed under the regulations.",
      "Seeking legitimate clarification is permitted."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-007",
    "chapterIndex": 5,
    "text": "The ethical principle that requires public officers to avoid situations in which personal interest could improperly influence official decisions is called:",
    "choices": [
      "Whistle-blowing",
      "Administrative silence",
      "Conflict of interest avoidance / declaration",
      "Nepotism"
    ],
    "correct": 2,
    "explanation": "Officers must declare and, where necessary, recuse themselves from matters involving personal or familial interest.",
    "distractors": [
      "Nepotism is a form of favouritism, the opposite of the required principle.",
      "Whistle-blowing is reporting wrongdoing, a different duty.",
      "Silence is not an ethical principle."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-008",
    "chapterIndex": 5,
    "text": "When a candidate is found with a mobile phone during a WAEC examination, the typical sanction is:",
    "choices": [
      "A verbal warning only",
      "Automatic promotion to the next class",
      "An increase in the candidate's total score",
      "Cancellation of the candidate's results (often entire results)"
    ],
    "correct": 3,
    "explanation": "Possession of electronic devices is treated as a serious malpractice and commonly attracts cancellation of results.",
    "distractors": [
      "Insufficient for the gravity of the offence.",
      "Not a recognised sanction.",
      "Contradicts the punitive purpose of the rules."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-009",
    "chapterIndex": 5,
    "text": "In registry practice, a folio number refers to:",
    "choices": [
      "The sequential page number within a file",
      "The date the file was opened",
      "The security classification only",
      "The name of the file owner"
    ],
    "correct": 0,
    "explanation": "Folios are the numbered pages or sheets that constitute the contents of an official file.",
    "distractors": [
      "That would be the file title or reference.",
      "That is recorded separately.",
      "Classification is marked independently."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-010",
    "chapterIndex": 5,
    "text": "The custody of live question papers before the examination start time must be maintained under:",
    "choices": [
      "Unsecured classroom cupboards",
      "Strict dual-control and sealed conditions with authorised custodians only",
      "The sole custody of any available security guard",
      "Open access to all centre staff"
    ],
    "correct": 1,
    "explanation": "Examination security protocols require sealed packets, dual control and restricted authorised access until the official start.",
    "distractors": [
      "Open access defeats security.",
      "Unauthorised personnel must not hold sole custody.",
      "Unsecured storage is a serious breach."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-011",
    "chapterIndex": 5,
    "text": "An official minute should ideally end with:",
    "choices": [
      "An instruction to destroy the file",
      "A long personal narrative",
      "A clear recommendation or proposed line of action",
      "A copy of every previous letter"
    ],
    "correct": 2,
    "explanation": "Good minuting practice concludes with a specific recommendation that enables a decision by the superior officer.",
    "distractors": [
      "Minutes must remain objective and concise.",
      "Duplication is unnecessary.",
      "Destruction is not a normal concluding action."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-012",
    "chapterIndex": 5,
    "text": "Impersonation in an examination is best described as:",
    "choices": [
      "A candidate arriving late",
      "A candidate requesting extra time for a disability",
      "A candidate using an approved dictionary",
      "A person taking the examination on behalf of another registered candidate"
    ],
    "correct": 3,
    "explanation": "Impersonation is a serious form of malpractice in which one individual pretends to be another for the purpose of sitting the examination.",
    "distractors": [
      "Lateness is a procedural matter, not impersonation.",
      "Approved aids are permitted.",
      "Reasonable adjustments are legitimate."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-013",
    "chapterIndex": 5,
    "text": "When an officer is required to write a query, the document is intended to:",
    "choices": [
      "Formally call upon a subordinate to explain an alleged act of misconduct",
      "Transfer the subordinate to another department",
      "Approve the subordinate's leave application",
      "Praise the subordinate for good performance"
    ],
    "correct": 0,
    "explanation": "A query is a formal request for explanation in the disciplinary process under the Public Service Rules.",
    "distractors": [
      "Commendation is issued by a different instrument.",
      "Transfer is an administrative action, not a query.",
      "Leave approval is a different process."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-014",
    "chapterIndex": 5,
    "text": "Which of the following is an appropriate action after detecting a broken seal on a packet of question papers before the examination?",
    "choices": [
      "Blame the nearest invigilator without investigation",
      "Immediately report to higher authority, document the incident, and follow contingency security procedures",
      "Open the packet and redistribute the papers privately",
      "Ignore the broken seal and proceed as normal"
    ],
    "correct": 1,
    "explanation": "Any breach of seal integrity must be reported, documented and handled according to established contingency protocols.",
    "distractors": [
      "Ignoring a security breach is itself misconduct.",
      "Unauthorised opening compounds the problem.",
      "Premature blame without due process is improper."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-015",
    "chapterIndex": 5,
    "text": "The principle of confidentiality in examination administration requires that:",
    "choices": [
      "Candidate scores are discussed freely with the public",
      "All results are published on social media immediately",
      "Live question content and candidate personal data are protected from unauthorised disclosure",
      "Question papers are left in open staff rooms"
    ],
    "correct": 2,
    "explanation": "Confidentiality protects the integrity of the examination and the privacy of candidates.",
    "distractors": [
      "Premature or uncontrolled publication is a breach.",
      "Open storage is a security violation.",
      "Unauthorised discussion of scores violates privacy."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-016",
    "chapterIndex": 5,
    "text": "In the public service, 'minuting' on a file is primarily performed by:",
    "choices": [
      "Only the most junior messenger",
      "External consultants with no official status",
      "The candidate sitting the examination",
      "Officers processing the file who record observations and recommendations"
    ],
    "correct": 3,
    "explanation": "Minuting is the internal written commentary by processing officers that moves a file toward a decision.",
    "distractors": [
      "Messengers may convey files but do not minute them.",
      "External parties are not part of the official chain.",
      "Candidates have no role in administrative minuting."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-017",
    "chapterIndex": 5,
    "text": "Collusion among candidates during an examination is:",
    "choices": [
      "A form of examination malpractice",
      "Encouraged by the regulations",
      "Irrelevant to result integrity",
      "An acceptable collaborative learning strategy"
    ],
    "correct": 0,
    "explanation": "Any organised or mutual assistance that violates the individual assessment conditions constitutes malpractice.",
    "distractors": [
      "Collaboration is not permitted under timed individual examination conditions.",
      "Regulations prohibit it.",
      "It directly threatens the validity of results."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-018",
    "chapterIndex": 5,
    "text": "A public officer who receives a gift from a contractor seeking a favour should:",
    "choices": [
      "Accept the gift quietly and award the contract",
      "Decline the gift and report the offer in accordance with ethical guidelines",
      "Demand a larger gift before deciding",
      "Accept the gift and keep it without disclosure"
    ],
    "correct": 1,
    "explanation": "Acceptance of gifts that could influence official decisions is prohibited; transparency and refusal are required.",
    "distractors": [
      "This constitutes corruption.",
      "Non-disclosure compounds the ethical breach.",
      "Extortion is also misconduct."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-019",
    "chapterIndex": 5,
    "text": "The term 'giraffing' in the context of examination malpractice refers to:",
    "choices": [
      "Writing answers in very large letters",
      "Using a giraffe mascot for motivation",
      "Stretching the neck to look at another candidate's work",
      "Arriving at the centre on a tall vehicle"
    ],
    "correct": 2,
    "explanation": "Giraffing is the colloquial term for attempting to copy by looking over at a neighbour's script.",
    "distractors": [
      "Literal and unrelated.",
      "Not the recognised meaning.",
      "Unrelated to the offence."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-020",
    "chapterIndex": 5,
    "text": "When a school is de-recognised by WAEC for a period, it means that:",
    "choices": [
      "The school receives additional funding",
      "All teachers are automatically dismissed by WAEC",
      "The school is promoted to a higher status",
      "The school is barred from presenting candidates for WAEC examinations for the stated period"
    ],
    "correct": 3,
    "explanation": "De-recognition is a sanction that prevents the school from entering candidates for a specified number of years.",
    "distractors": [
      "It is a punitive, not a rewarding, measure.",
      "It is a restriction, not a promotion.",
      "Employment decisions remain with the school proprietor or government."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-021",
    "chapterIndex": 5,
    "text": "An official letter from a Head of National Office should normally be written on:",
    "choices": [
      "Official letter-headed paper bearing the Council's name and logo",
      "The personal notepad of the writer only",
      "A candidate's answer booklet",
      "Blank scrap paper"
    ],
    "correct": 0,
    "explanation": "Official correspondence must use authorised letter-head stationery to establish authenticity and authority.",
    "distractors": [
      "Lacks official identity.",
      "Personal stationery is inappropriate for official communication.",
      "Answer booklets are examination materials, not correspondence media."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-022",
    "chapterIndex": 5,
    "text": "The primary purpose of an attendance register at an examination centre is to:",
    "choices": [
      "Replace the need for photo identification",
      "Record which registered candidates were present and sat the paper",
      "Serve as a marketing tool for the school",
      "List the invigilators' lunch preferences"
    ],
    "correct": 1,
    "explanation": "The attendance register provides an official record of presence and is part of the chain of evidence for the conduct of the examination.",
    "distractors": [
      "Irrelevant to the examination record.",
      "Not its function.",
      "Identification remains necessary; the register complements it."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-023",
    "chapterIndex": 5,
    "text": "If an invigilator is found to have assisted candidates by providing answers, the appropriate institutional response is:",
    "choices": [
      "Promote the invigilator for diligence",
      "Ignore the incident because the examination has ended",
      "Report the invigilator to the employer and apply the prescribed sanctions, including possible blacklisting",
      "Allow the invigilator to continue without any record"
    ],
    "correct": 2,
    "explanation": "Malpractice by officials is reported to their employers and may result in blacklisting and other disciplinary measures.",
    "distractors": [
      "Ignoring official misconduct is itself a failure of duty.",
      "Assistance of this kind is a serious offence, not a merit.",
      "Non-recording prevents accountability."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-024",
    "chapterIndex": 5,
    "text": "In file management, a 'closed file' is one that:",
    "choices": [
      "Is accessible to the general public without restriction",
      "Is permanently destroyed the same day it is created",
      "Has never been opened",
      "Has been completed and is no longer active for current correspondence"
    ],
    "correct": 3,
    "explanation": "A closed file has reached the end of its active life and is stored according to retention schedules.",
    "distractors": [
      "A file that has never been used is not described as closed in the same sense.",
      "Destruction follows retention rules, not immediate closure.",
      "Access remains controlled according to classification."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-025",
    "chapterIndex": 5,
    "text": "The ethical duty of an examination official who observes malpractice is to:",
    "choices": [
      "Report the incident through the prescribed channels without delay",
      "Conceal the incident to avoid trouble",
      "Negotiate a private settlement with the candidate",
      "Participate in the malpractice to gain favour"
    ],
    "correct": 0,
    "explanation": "Officials are obliged to report irregularities so that the integrity of the examination can be protected.",
    "distractors": [
      "Private settlements undermine the rules.",
      "Concealment is itself misconduct.",
      "Participation is a criminal and professional offence."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-026",
    "chapterIndex": 5,
    "text": "Which of the following is a correct practice when handling candidate scripts after an examination?",
    "choices": [
      "Scripts are left unattended in an open classroom overnight",
      "Scripts are collected, counted, sealed and transported under secure conditions to the designated marking centre or depot",
      "Scripts are given to candidates to take home for checking",
      "Scripts are discarded immediately after the examination"
    ],
    "correct": 1,
    "explanation": "Secure collection, accounting and transit of scripts are essential to prevent loss, substitution or tampering.",
    "distractors": [
      "Unattended scripts create serious security risks.",
      "Candidates must not retain scripts.",
      "Scripts are required for marking and archiving."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-027",
    "chapterIndex": 5,
    "text": "A 'fair hearing' in the context of examination malpractice allegations means that:",
    "choices": [
      "Only the invigilator's statement is considered",
      "The candidate is automatically declared innocent",
      "The accused candidate is given an opportunity to respond to the allegations before a final decision is taken",
      "No investigation is conducted"
    ],
    "correct": 2,
    "explanation": "Due process requires that candidates be notified of the allegations and allowed to make representations (including via the dedicated portal where available).",
    "distractors": [
      "Fair hearing does not predetermine the outcome.",
      "Both sides of the evidence must be considered.",
      "Investigation is a prerequisite to a fair determination."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-028",
    "chapterIndex": 5,
    "text": "In administrative correspondence, the salutation 'Dear Sir/Madam' is typically used when:",
    "choices": [
      "Writing to a close personal friend",
      "Addressing a candidate during the examination",
      "Writing an informal text message",
      "The gender or specific name of the addressee is unknown or when addressing an office"
    ],
    "correct": 3,
    "explanation": "The formal salutation is appropriate for official letters when the specific identity is not personalised.",
    "distractors": [
      "Personal letters use a first-name salutation.",
      "Informal media do not follow formal letter conventions.",
      "Examination halls are not correspondence settings."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-029",
    "chapterIndex": 5,
    "text": "The main reason for maintaining a chain-of-custody log for examination materials is to:",
    "choices": [
      "Provide an auditable record of who handled the materials and when, thereby deterring and detecting tampering",
      "Replace the need for seals",
      "Increase the weight of the parcels",
      "Allow any member of the public to sign for materials"
    ],
    "correct": 0,
    "explanation": "A documented chain of custody supports accountability and the integrity of the examination process.",
    "distractors": [
      "Irrelevant to the security purpose.",
      "Access must remain restricted to authorised persons.",
      "Seals remain an essential physical control."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-030",
    "chapterIndex": 5,
    "text": "An officer who alters official examination records without authority commits:",
    "choices": [
      "A minor clerical error that needs no action",
      "A serious act of misconduct that may attract disciplinary and criminal sanctions",
      "An act of professional excellence",
      "A routine administrative update"
    ],
    "correct": 1,
    "explanation": "Unauthorised alteration of official records is a grave offence under public service rules and may also constitute a criminal act.",
    "distractors": [
      "The gravity is high, not minor.",
      "It is the opposite of excellence.",
      "Routine updates follow prescribed procedures and authorisation."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-031",
    "chapterIndex": 5,
    "text": "When drafting a public service query, the language should be:",
    "choices": [
      "Written in a foreign language unknown to the recipient",
      "Highly emotional and accusatory",
      "Factual, precise and free from abusive or emotional language",
      "Vague so that the officer cannot understand the allegation"
    ],
    "correct": 2,
    "explanation": "A query must state the alleged facts clearly so that the officer can respond meaningfully; professionalism requires restraint.",
    "distractors": [
      "Emotion undermines the disciplinary process.",
      "Vagueness prevents a fair response.",
      "The recipient must be able to understand the charge."
    ]
  },
  {
    "id": "WAEC-APT-CQ-06-032",
    "chapterIndex": 5,
    "text": "The ultimate goal of assessment security and ethical administration in WAEC is to:",
    "choices": [
      "Create unnecessary barriers for honest candidates",
      "Increase the administrative workload without purpose",
      "Maximise the number of candidates who fail",
      "Protect the integrity, fairness and credibility of the examination and the certificates awarded"
    ],
    "correct": 3,
    "explanation": "All security and ethical measures exist to ensure that results and certificates remain trustworthy and that honest candidates are not disadvantaged.",
    "distractors": [
      "The system aims at fairness, not failure maximisation.",
      "Efficiency is also a value; workload is not an end in itself.",
      "Security should facilitate, not obstruct, legitimate participation."
    ]
  }
];

export default questions;
