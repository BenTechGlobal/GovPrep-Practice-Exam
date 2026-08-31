# GovPrep Practice Exam

**Enterprise-grade preparation platform for Government, Civil Service, and Academic Competitive Examinations.**

Native browser application (HTML5 / CSS3 / Vanilla JS). No bundler, no Node build step.

---

## Supported exam categories

| Category | Products (IDs) | Default size / time |
|----------|----------------|---------------------|
| Academic & Secondary | `WAECAPT` (WAEC-APT), `JAMBUTME` | 60q / 50 min · 180q / 120 min |
| Public Safety | `FRSCOC`, `NSCDCREC`, `POLICEREC` | 50–60q / 35–45 min |
| Civil Service | `CSPPSR`, `CSPGEN`, `GPCA` | 80–100q / 60–90 min |
| Parastatals | `NCSAPT`, `NISAPT`, `PARAAPT` | 50–60q / 40–45 min |

Activation codes equal the product **id** or **code** (e.g. `WAECAPT` or `WAEC-APT`).

---

## File layout

```
/
├── index.html              # Layout & views
├── styles.css              # Design tokens, dark mode, exam badges
├── app.js                  # Runtime: state, quiz engine, dashboard, grading
├── data/
│   ├── _TEMPLATE.js        # Contract for new question banks
│   └── waec-aptitude-test.js   # Sample curated bank (WAEC-APT)
└── README.md
```

---

## Quick start

1. Serve the folder over HTTP (required for `import()` of `data/*.js`):

   ```bash
   # Python
   python3 -m http.server 8080

   # or Node
   npx serve -p 8080
   ```

2. Open `http://localhost:8080`.

3. Register / login (credentials stored in `localStorage`).

4. **Activate Product** → enter e.g. `WAECAPT`.

5. Start Test → choose Guided / Flash Card / Exam Simulation → configure or run default.

---

## Architecture notes

### Preserved engines

- LocalStorage keys: archives, saved exams, bookmarks, notes, owned products, per-product history (`CH_HIST_*`).
- Timed Exam Simulation with auto-submit.
- Guided Practice & Flash Card with view-answer / reset.
- Bookmarks, sticky notes, feedback modal, preferences (dark mode, compact text, sound).
- Review grid, score report (print), objective breakdown.

### Question data contract

Each `data/<product>.js` must:

- Be a valid ES module.
- Export `questions` (or `default`) as a **flat** array.
- Use the shape from `data/_TEMPLATE.js` (`id`, `chapterIndex`, `text`, `choices`, `correct`, `explanation`, `distractors`).

Register the path in `PRODUCT_DATA_FILE_MAP` and the product in `MOCK_PRODUCTS_DATABASE` + `CERT_EXAM_METADATA`.

### Lazy loading

`loadCuratedQuestionBank(product)` uses dynamic `import()`. Missing files fall back to the procedural generator so the UI never breaks.

### Pass mark

Government aptitude style: **500 / 1000 (50%)**. Override per product later via metadata if needed.

---

## Adding a new exam bank

1. Copy `data/_TEMPLATE.js` → e.g. `data/frsc-officer.js`.
2. Set `PRODUCT_CODE` and fill ≥ 30–100 questions with correct `chapterIndex`.
3. Add product object to `MOCK_PRODUCTS_DATABASE` (include `badge` for UI chips).
4. Add duration/count to `CERT_EXAM_METADATA` (both id and code keys recommended).
5. Map in `PRODUCT_DATA_FILE_MAP`: `FRSCOC: "./data/frsc-officer.js"`.

---

## Branding

- Product name: **GovPrep Practice Exam**
- Focus: WAEC, FRSC, NSCDC, Civil Service (PSR), Customs, Immigration, Police recruitment, JAMB-style general drills.
- Disclaimer: practice content is independent and not affiliated with or endorsed by official exam bodies.

---

## Browser support

Modern evergreen browsers with ES module dynamic import (Chrome, Firefox, Edge, Safari). Use a local static server; `file://` will block module loads.

---

## License / use

For educational and self-assessment purposes only. Official exam names and marks belong to their respective owners.
