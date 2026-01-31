IT23633018 — Playwright Translation Tests

This repository contains Playwright automated tests for verifying the functionality of a Singlish-to-Sinhala translation web app (https://www.swifttranslator.com/).
The tests are written using Playwright Test Runner and executed specifically on Microsoft Edge browser.


PROJECT STRUCTURE

.
├── .github/
│   └── workflows/
├── tests/
│   └── translator.spec.ts
├── playwright.config.js
├── package.json
├── package-lock.json
├── test-results.json
└── .gitignore


GETTING STARTED


Prerequisites:
- Node.js (v16 or above)
- npm

Install Dependencies:
npm install

Install Browsers:
npx playwright install


RUNNING TESTS

Run tests in Edge:
npx playwright test --project=msedge

Run using npm script:
npm run test:edge

Headless mode:
Edit playwright.config.js and set:
headless: true


REPORTS

After running tests, open:
playwright-report/index.html


CREDITS

Created by: saliyaprime-coder
Repository: https://github.com/saliyaprime-coder/IT23633018
