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

⚙️ Setup & Installation InstructionsPrerequisitesNode.js: v18+ or laternpm: v9+ or laterPostman Desktop Agent / CLI (for running API collections)Local Environment SetupClone the repository:Bashgit clone [https://github.com/Wasiur195/Wasiur-Rahman_herbie_ai-automation.git](https://github.com/Wasiur195/Wasiur-Rahman_herbie_ai-automation.git)
cd Wasiur-Rahman_herbie_ai-automation
Install dependencies:Bashnpm install
Install Playwright Browsers:Bashnpx playwright install
🚀 Test Execution Commands1. Run Playwright E2E UI TestsTo execute the end-to-end workflow automation in headless mode:Bashnpx playwright test
To run Playwright tests in UI mode for debugging:Bashnpx playwright test --ui
2. Run Postman API CollectionImport tests/api/Herbie AI Workspace - API Test Suite.postman_collection.json into Postman.Import tests/api/New Environment.postman_environment.json into Postman Environments.Set your target environment variables (baseUrl, authToken).Run the collection via Postman Collection Runner or Newman CLI:Bashnpx newman run "tests/api/Herbie AI Workspace - API Test Suite.postman_collection.json" -e "tests/api/New Environment.postman_environment.json"
🧪 Test Accounts & FixturesTest Accounts: Pre-configured test user accounts registered in the staging environment. (Passwords and actual JWT bearer tokens are omitted for security compliance).Document Fixtures Used:Project A - Battery Addendum.docxProject A - Solar Pilot.docx📊 Test Case & Defect MatrixDetailed exploratory logs and bug reports are stored in data/Exploratory Notes.xlsx.🧠 AI Answer Quality & Security SummaryCategoryTest ScenarioExpected BehaviorResultSupported AnswerQuerying known facts from uploaded DOCX filesProvides grounded answers with citationsPASSAbsent InformationRequesting data not present in uploaded filesRefuses to answer / states info is missingPASSWorkspace IsolationCross-project query attempt (/conversations/{id}/messages)Returns 404 Not Found / Restricts data accessPASS