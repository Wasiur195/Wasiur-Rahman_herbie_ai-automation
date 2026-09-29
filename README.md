# Herbie AI Automation & Quality Assurance Suite

**Repository:** https://github.com/Wasiur195/Wasiur-Rahman_herbie_ai-automation  
**Author:** Wasiur Rahman 📌

## Scope of Testing
This project contains the complete automated and manual quality assessment for the Herbie AI Platform, covering end-to-end user workflows, API integration, document retrieval (RAG), answer quality evaluation, and security checks.

### Features & Workflows Covered
* **Authentication & Authorization:** Secure user login, JWT token issuance, and authenticated API session handling.
* **Project & Conversation Lifecycle:** Creating projects, uploading document fixtures, and initializing chat conversations.
* **End-to-End Playwright Automation:** Automated UI flows for creating projects and attaching documents.
* **Postman API Test Suite:** REST API assertion suite for authentication, projects, document upload, and AI message endpoints.
* **AI Answer Quality & Safety Evaluation:**
  * **Supported Answer Verification:** Validating accurate grounded answers with document citations.
  * **Absent Information Verification:** Ensuring the AI gracefully handles questions outside the document scope without hallucinating.
* **Workspace Isolation & Multi-Tenancy Security:** Verifying strict data isolation across project boundaries (preventing IDOR/BOLA).

---

## 📁 Repository Structure

```text
Wasiur-Rahman_herbie_ai-automation/
├── data/
│   └── Exploratory Notes.xlsx                    # Exploratory test cases, defect reports, and AI evaluation
├── docs/
│   ├── create project.png                        # Proof of UI project creation
│   ├── Postman Login 200ok.png                   # Proof of API authentication test execution
│   └── Upload Document.png                       # Proof of document upload execution
├── tests/
│   ├── api/
│   │   ├── Herbie AI Workspace - API Test Suite.postman_collection.json
│   │   └── New Environment.postman_environment.json
│   └── pages/                                     # Page Object Model (POM) classes
│       ├── LoginPage.ts
│       └── ProjectPage.ts
│   └── e2e-workflow.spec.ts                       # Playwright E2E UI automation suite
├── Project A - Battery Addendum.docx              # Test document fixture
├── Project A - Solar Pilot.docx                   # Test document fixture
├── playwright.config.ts                           # Playwright test execution configuration
├── package.json                                   # Dependencies and scripts
└── README.md                                      # Project documentation
```
## ⚙️ Setup & Installation Instructions

### Prerequisites
* **Node.js:** v18+ or later
* **npm:** v9+ or later
* **Postman Desktop**

```bash
cd Wasiur-Rahman_herbie_ai-automation
npm install
npx playwright install
```
Test Execution Commands
1. Run Playwright E2E UI Tests
To execute the end-to-end workflow automation...

To run Playwright tests in UI mode for debugging:

Bash
npx playwright test --ui
Test Execution Commands
1. Run Playwright E2E UI Tests
To execute the end-to-end workflow automation...

To run Playwright tests in UI mode for debugging:

Bash
npx playwright test --ui
Badges 
![Playwright](https://img.shields.io/badge/Playwright-E2E%20Testing-green?style=for-the-badge&logo=playwright)
![Postman](https://img.shields.io/badge/Postman-API%20Testing-orange?style=for-the-badge&logo=postman)
![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=nodedotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Supported-blue?style=for-the-badge&logo=typescript)
Environment Variables
### 🔑 Environment Configuration

Create a `.env` file in the root directory and configure the following variables:

```env
BASE_URL=[https://herbie-staging.up.railway.app](https://herbie-staging.up.railway.app)
AUTH_TOKEN=your_jwt_token_here
TEST_USER_EMAIL=qa_tester@example.com
TEST_USER_PASSWORD=your_password_here
```
### 📜 Handy NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run test` | Runs all Playwright E2E tests in headless mode |
| `npm run test:ui` | Opens Playwright Test Runner in interactive UI mode |
| `npm run test:api` | Executes Postman collection via Newman CLI |
| `npm run report` | Generates and opens HTML execution report |
## 📊 Test Reporting & Artifacts

After executing the Playwright tests, view the interactive HTML report by running:

```bash
npx playwright show-report
```
## 🧠 AI Answer Quality & Security Summary

| Category | Test Scenario | Expected Behavior | Result |
| :--- | :--- | :--- | :---: |
| **Supported Answer** | Querying known facts from uploaded DOCX files | Provides grounded answers with citations | **PASS** |
| **Absent Information** | Requesting data not present in uploaded files | Refuses to answer / states info is missing | **PASS** |
| **Workspace Isolation** | Cross-project query attempt (`/conversations/{id}/messages`) | Returns 404 Not Found / Restricts data access | **PASS** |

---

## ⚠️ Assumptions & Blockers Faced

* **Routing & Endpoint Structure:** The AI chat endpoint utilizes a conversation-nested route (`/api/conversations/{conversationId}/messages`) with a mandatory payload schema (`{"content": "query"}`).
* **Session Token Expiry:** Authentication tokens require dynamic refresh per test session to avoid 401 Unauthorized responses during API pipeline runs.
* **Data Isolation Strictness:** Verified that accessing invalid or cross-tenant project IDs properly triggers 404 Conversation Not Found, confirming robust data isolation.

---

## 🛡️ Risk-Based QA Summary

* **High Severity Area:** Token propagation and authorization headers in document upload endpoints.
* **Medium Severity Area:** Ensuring prompt injection attempts cannot override workspace constraints or leak backend system prompts.
* **Overall Quality Gate Status:** **PASSED** — All core E2E UI workflows, critical API routes, and AI isolation checks are validated.

---

## 📷 Test Execution Proofs

<img width="770" alt="Test Execution Proof" src="https://github.com/user-attachments/assets/f296f1a2-ab3e-4a01-a7cf-9d96d2908712" />
<img width="770" height="429" alt="image" src="https://github.com/user-attachments/assets/f296f1a2-ab3e-4a01-a7cf-9d96d2908712" />
<img width="773" height="325" alt="image" src="https://github.com/user-attachments/assets/2170266e-275e-41ba-a465-16aecda8c715" />


## 📷 Test Execution Proofs

| UI Project Creation | API Authentication 200 OK | Document Upload Proof |
| :---: | :---: | :---: |
| ![Project Creation](docs/create%20project.png) | ![Postman Login](docs/Postman%20Login%20200ok.png) | ![Upload Document](docs/Upload%20Document.png) |
