# Herbie AI Automation & Quality Assurance Suite

**Repository:** [https://github.com/Wasiur195/Wasiur-Rahman_herbie_ai-automation](https://github.com/Wasiur195/Wasiur-Rahman_herbie_ai-automation)  
**Author:** Wasiur Rahman  

---

## 📌 Scope of Testing

This project contains the complete automated and manual quality assessment for the Herbie AI Platform, covering end-to-end user workflows, API integration, document retrieval (RAG), answer quality evaluation, and security checks.

### Features & Workflows Covered:
1. **Authentication & Authorization:** Secure user login, JWT token issuance, and authenticated API session handling.
2. **Project & Conversation Lifecycle:** Creating projects, uploading document fixtures, and initializing chat conversations.
3. **End-to-End Playwright Automation:** Automated UI flows for creating projects and attaching documents.
4. **Postman API Test Suite:** REST API assertion suite for authentication, projects, document upload, and AI message endpoints.
5. **AI Answer Quality & Safety Evaluation:**
   * **Supported Answer Verification:** Validating accurate grounded answers with document citations.
   * **Absent Information Verification:** Ensuring the AI gracefully handles questions outside the document scope without hallucinating.
   * **Workspace Isolation & Multi-Tenancy Security:** Verifying strict data isolation across project boundaries (preventing IDOR/BOLA).

---

## 📁 Repository Structure

```text
Wasiur-Rahman_herbie_ai-automation/
│
├── data/
│   └── Exploratory Notes.xlsx                  # Exploratory test cases, defect reports, and AI evaluation
│
├── docs/
│   ├── create project.png                      # Proof of UI project creation
│   ├── Postman Login 200ok.png                 # Proof of API authentication test execution
│   └── Upload Document.png                     # Proof of document upload execution
│
├── tests/
│   ├── api/
│   │   ├── Herbie AI Workspace - API Test Suite.postman_collection.json
│   │   └── New Environment.postman_environment.json
│   ├── pages/                                  # Page Object Model (POM) classes
│   │   ├── LoginPage.ts
│   │   └── ProjectPage.ts
│   └── e2e-workflow.spec.ts                    # Playwright E2E UI automation suite
│
├── Project A - Battery Addendum.docx          # Test document fixture
├── Project A - Solar Pilot.docx               # Test document fixture
├── playwright.config.ts                       # Playwright test execution configuration
├── package.json                               # Dependencies and scripts
└── README.md                                  # Project documentation

⚙️ Setup & Installation Instructions
Prerequisites
Node.js: v18+ or later

npm: v9+ or later

Postman Desktop Agent / CLI (for running API collections)

Local Environment Setup
Clone the repository:

Bash
git clone [https://github.com/Wasiur195/Wasiur-Rahman_herbie_ai-automation.git](https://github.com/Wasiur195/Wasiur-Rahman_herbie_ai-automation.git)
cd Wasiur-Rahman_herbie_ai-automation
Install dependencies:

Bash
npm install
Install Playwright Browsers:

Bash
npx playwright install
🚀 Test Execution Commands
1. Run Playwright E2E UI Tests
To execute the end-to-end workflow automation in headless mode:

Bash
npx playwright test
To run Playwright tests in UI mode for debugging:

Bash
npx playwright test --ui
2. Run Postman API Collection
Import tests/api/Herbie AI Workspace - API Test Suite.postman_collection.json into Postman.

Import tests/api/New Environment.postman_environment.json into Postman Environments.

Set your target environment variables (baseUrl, authToken).

Run the collection via Postman Collection Runner or Newman CLI:

Bash
npx newman run "tests/api/Herbie AI Workspace - API Test Suite.postman_collection.json" -e "tests/api/New Environment.postman_environment.json"
