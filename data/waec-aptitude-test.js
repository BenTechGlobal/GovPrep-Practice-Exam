/* ==========================================================================
   PRODUCT QUESTION BANK — WAEC Aptitude & General Paper
   Dynamic ES module for GovPrep. Default export = flat questions array.
   chapterIndex maps to MOCK_PRODUCTS_DATABASE entry WAECAPT.chapters[]
   ========================================================================== */

export const PRODUCT_CODE = "WAEC-APT";

export const questions = [
  // ----- Chapter 0: Quantitative Reasoning & Numeracy -----
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
    text: "A student scores 72, 68, 75 and 85 in four tests. What is the average score?",
    choices: ["75", "72.5", "74", "76"],
    correct: 0,
    explanation: "Sum = 72 + 68 + 75 + 85 = 300. Average = 300 ÷ 4 = 75.",
    distractors: [
      "This is closer to a median estimate, not the arithmetic mean.",
      "This under-counts the total sum.",
      "This over-counts the total sum."
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
    text: "A bus travels 240 km in 3 hours. What is its average speed in km/h?",
    choices: ["60", "80", "70", "90"],
    correct: 1,
    explanation: "Speed = distance ÷ time = 240 ÷ 3 = 80 km/h.",
    distractors: [
      "This divides by 4 instead of 3.",
      "This is an arbitrary mid value between options.",
      "This assumes a shorter travel time."
    ]
  },

  // ----- Chapter 1: Verbal Reasoning & English Usage -----
  {
    id: "WAEC-APT-CQ-02-001",
    chapterIndex: 1,
    text: "Choose the option nearest in meaning to the underlined word: The principal's speech was very lucid.",
    choices: ["Clear", "Long", "Angry", "Boring"],
    correct: 0,
    explanation: "Lucid means clear and easy to understand.",
    distractors: [
      "Length is not part of the meaning of lucid.",
      "Anger is not implied by lucid.",
      "Interest level is separate from clarity."
    ]
  },
  {
    id: "WAEC-APT-CQ-02-002",
    chapterIndex: 1,
    text: "Fill in the blank: The committee members _____ divided on the proposal.",
    choices: ["was", "were", "is", "has"],
    correct: 1,
    explanation: "'Members' is plural, so the correct verb is 'were'.",
    distractors: [
      "Singular verb does not agree with a plural subject.",
      "Present singular does not agree with the plural subject.",
      "Wrong auxiliary for this construction."
    ]
  },
  {
    id: "WAEC-APT-CQ-02-003",
    chapterIndex: 1,
    text: "Which word is the odd one out?",
    choices: ["Apple", "Orange", "Banana", "Carrot"],
    correct: 3,
    explanation: "Carrot is a root vegetable; the others are fruits.",
    distractors: [
      "Apple is a fruit, like orange and banana.",
      "Orange is a fruit.",
      "Banana is a fruit."
    ]
  },
  {
    id: "WAEC-APT-CQ-02-004",
    chapterIndex: 1,
    text: "Select the correctly spelled word.",
    choices: ["Accommodation", "Acommodation", "Accomodation", "Acomodation"],
    correct: 0,
    explanation: "Accommodation is spelled with double 'c' and double 'm'.",
    distractors: [
      "Missing one 'c'.",
      "Missing one 'm'.",
      "Missing both double letters."
    ]
  },
  {
    id: "WAEC-APT-CQ-02-005",
    chapterIndex: 1,
    text: "The opposite of 'scarce' is:",
    choices: ["Abundant", "Rare", "Limited", "Sparse"],
    correct: 0,
    explanation: "Scarce means in short supply; abundant means plentiful.",
    distractors: [
      "Rare is a near synonym of scarce.",
      "Limited is similar in meaning to scarce.",
      "Sparse is similar in meaning to scarce."
    ]
  },

  // ----- Chapter 2: General Knowledge & Current Affairs -----
  {
    id: "WAEC-APT-CQ-03-001",
    chapterIndex: 2,
    text: "The capital city of Nigeria is:",
    choices: ["Lagos", "Abuja", "Kano", "Port Harcourt"],
    correct: 1,
    explanation: "Abuja is the Federal Capital Territory and seat of government.",
    distractors: [
      "Lagos was the former capital.",
      "Kano is a major city but not the capital.",
      "Port Harcourt is a major oil city but not the capital."
    ]
  },
  {
    id: "WAEC-APT-CQ-03-002",
    chapterIndex: 2,
    text: "How many geopolitical zones are there in Nigeria?",
    choices: ["4", "5", "6", "8"],
    correct: 2,
    explanation: "Nigeria has six geopolitical zones: North-West, North-East, North-Central, South-West, South-East, and South-South.",
    distractors: [
      "This under-counts the standard six zones.",
      "This does not match the six-zone structure.",
      "This over-counts the zones."
    ]
  },
  {
    id: "WAEC-APT-CQ-03-003",
    chapterIndex: 2,
    text: "The currency of Nigeria is the:",
    choices: ["Cedi", "Naira", "CFA Franc", "Shilling"],
    correct: 1,
    explanation: "The official currency is the Nigerian Naira (₦).",
    distractors: [
      "The cedi is Ghana's currency.",
      "The CFA franc is used in several Francophone West African states.",
      "The shilling is used in countries such as Kenya and Uganda."
    ]
  },
  {
    id: "WAEC-APT-CQ-03-004",
    chapterIndex: 2,
    text: "Which body conducts the West African Senior School Certificate Examination (WASSCE)?",
    choices: ["JAMB", "WAEC", "NECO", "NUC"],
    correct: 1,
    explanation: "The West African Examinations Council (WAEC) conducts the WASSCE.",
    distractors: [
      "JAMB conducts the UTME for tertiary admission.",
      "NECO conducts a parallel national examination in Nigeria.",
      "NUC regulates universities and does not set secondary school exams."
    ]
  },
  {
    id: "WAEC-APT-CQ-03-005",
    chapterIndex: 2,
    text: "Which of the following is a national symbol of Nigeria?",
    choices: ["The Eagle", "The Lion", "The Kangaroo", "The Dragon"],
    correct: 0,
    explanation: "An eagle features on the Nigerian coat of arms as a national symbol.",
    distractors: [
      "The lion is not the animal on Nigeria's coat of arms.",
      "The kangaroo is associated with Australia.",
      "The dragon is not a Nigerian national symbol."
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
    text: "If all roses are flowers and some flowers fade quickly, which statement must be true?",
    choices: [
      "Some roses fade quickly",
      "All flowers are roses",
      "Some flowers may be roses",
      "No rose fades quickly"
    ],
    correct: 2,
    explanation: "Roses form a subset of flowers, so some flowers may be roses. The other conclusions do not necessarily follow from the premises.",
    distractors: [
      "This is possible but not necessarily true.",
      "This reverses the given subset relationship.",
      "This is not supported by the premises."
    ]
  },
  {
    id: "WAEC-APT-CQ-04-003",
    chapterIndex: 3,
    text: "Complete the analogy: Book is to Reading as Fork is to _____.",
    choices: ["Drawing", "Writing", "Eating", "Cooking"],
    correct: 2,
    explanation: "A book is used for reading; a fork is used for eating.",
    distractors: [
      "Drawing is not the primary use of a fork.",
      "Writing relates to a pen, not a fork.",
      "Cooking is broader than the direct use of a fork."
    ]
  },
  {
    id: "WAEC-APT-CQ-04-004",
    chapterIndex: 3,
    text: "Which shape does not belong with the others: Square, Rectangle, Triangle, Circle?",
    choices: ["Square", "Rectangle", "Triangle", "Circle"],
    correct: 3,
    explanation: "A circle is the only shape without straight sides.",
    distractors: [
      "A square has straight sides.",
      "A rectangle has straight sides.",
      "A triangle has straight sides."
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

  // ----- Chapter 4: Civic Education & National Values -----
  {
    id: "WAEC-APT-CQ-05-001",
    chapterIndex: 4,
    text: "Which of the following is a fundamental human right in Nigeria?",
    choices: [
      "Right to free university education for all",
      "Right to life",
      "Right to a government job",
      "Right to own any land without title"
    ],
    correct: 1,
    explanation: "The right to life is guaranteed under the Constitution of the Federal Republic of Nigeria as a fundamental right.",
    distractors: [
      "Education is important but free university for all is not framed as a fundamental right in the same way.",
      "Employment is not a fundamental constitutional right.",
      "Land ownership is regulated by law and is not unlimited."
    ]
  },
  {
    id: "WAEC-APT-CQ-05-002",
    chapterIndex: 4,
    text: "The three arms of government in Nigeria are:",
    choices: [
      "Federal, State, Local",
      "Executive, Legislature, Judiciary",
      "President, Governor, Chairman",
      "Police, Army, Customs"
    ],
    correct: 1,
    explanation: "Separation of powers is among the Executive, the Legislature, and the Judiciary.",
    distractors: [
      "These are tiers of government, not arms.",
      "These are offices within the executive structure.",
      "These are security and enforcement agencies."
    ]
  },
  {
    id: "WAEC-APT-CQ-05-003",
    chapterIndex: 4,
    text: "Voting in a general election is an example of:",
    choices: ["Civil responsibility", "Civil disobedience", "Judicial process", "Military duty"],
    correct: 0,
    explanation: "Participating in elections is a civic duty and responsibility of citizens.",
    distractors: [
      "Civil disobedience is deliberate non-compliance with laws.",
      "Voting is not a judicial process.",
      "Military duty applies to members of the armed forces."
    ]
  },
  {
    id: "WAEC-APT-CQ-05-004",
    chapterIndex: 4,
    text: "The rule of law primarily means that:",
    choices: [
      "The president is above the law",
      "Everyone is equal before the law",
      "Only the rich obey the law",
      "Laws apply only in the capital city"
    ],
    correct: 1,
    explanation: "The rule of law requires equality before the law and that no person is above it.",
    distractors: [
      "This contradicts the rule of law.",
      "This contradicts equality before the law.",
      "The law applies throughout the federation."
    ]
  },
  {
    id: "WAEC-APT-CQ-05-005",
    chapterIndex: 4,
    text: "National integration in Nigeria is best promoted by:",
    choices: [
      "Ethnic favouritism",
      "Religious intolerance",
      "Respect for diversity and fairness",
      "Ignoring minority groups"
    ],
    correct: 2,
    explanation: "Unity in diversity and equitable treatment strengthen national integration.",
    distractors: [
      "Favouritism undermines national unity.",
      "Intolerance fuels conflict.",
      "Exclusion weakens the federation."
    ]
  },

  // ----- Chapter 5: Basic Science & Everyday Technology -----
  {
    id: "WAEC-APT-CQ-06-001",
    chapterIndex: 5,
    text: "Which gas do plants absorb during photosynthesis?",
    choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    correct: 2,
    explanation: "Plants take in carbon dioxide and release oxygen during photosynthesis.",
    distractors: [
      "Oxygen is released as a product, not the main gas absorbed.",
      "Nitrogen is abundant in air but is not the primary photosynthetic input.",
      "Hydrogen is not absorbed from the air in this process."
    ]
  },
  {
    id: "WAEC-APT-CQ-06-002",
    chapterIndex: 5,
    text: "The unit of electric current is the:",
    choices: ["Volt", "Watt", "Ampere", "Ohm"],
    correct: 2,
    explanation: "Electric current is measured in amperes (A).",
    distractors: [
      "The volt measures potential difference.",
      "The watt measures power.",
      "The ohm measures resistance."
    ]
  },
  {
    id: "WAEC-APT-CQ-06-003",
    chapterIndex: 5,
    text: "Water boils at sea level at approximately:",
    choices: ["50°C", "80°C", "100°C", "120°C"],
    correct: 2,
    explanation: "At standard atmospheric pressure, pure water boils at 100°C.",
    distractors: [
      "This is far below the standard boiling point.",
      "This is below the standard boiling point of pure water.",
      "This is above the standard boiling point at sea level."
    ]
  },
  {
    id: "WAEC-APT-CQ-06-004",
    chapterIndex: 5,
    text: "A computer's main permanent storage for programs and data is typically the:",
    choices: ["RAM", "CPU", "Hard disk / SSD", "Monitor"],
    correct: 2,
    explanation: "Hard disks and SSDs provide non-volatile long-term storage; RAM is volatile working memory.",
    distractors: [
      "RAM loses its contents when power is removed.",
      "The CPU processes instructions; it is not primary storage.",
      "The monitor is an output device."
    ]
  },
  {
    id: "WAEC-APT-CQ-06-005",
    chapterIndex: 5,
    text: "Which of the following is a renewable source of energy?",
    choices: ["Coal", "Petroleum", "Solar", "Natural gas"],
    correct: 2,
    explanation: "Solar energy is renewable; coal, petroleum, and natural gas are fossil fuels.",
    distractors: [
      "Coal is a non-renewable fossil fuel.",
      "Petroleum is a non-renewable fossil fuel.",
      "Natural gas is a non-renewable fossil fuel."
    ]
  }
];

export default questions;
