Objective:
Build and embed a Retrieval-Augmented Generation (RAG) chatbot within the published Physical AI Humanoid Robotics textbook, adhering to Speckit principles. The chatbot must answer user questions about book content, using only text selected by the user.

Key Features & Implementation Tasks:
1. **Frontend Chatbot Component:** Create a Docusaurus-based UI allowing users to ask questions.
2. **OpenAI Agents/ChatKit SDK Integration:** Connect frontend for RAG functionality.
3. **FastAPI Backend Endpoint:** Develop an API to handle chatbot queries.
4. **Neon Serverless Postgres Integration:** Store book content and user interactions.
5. **Qdrant Cloud Free Tier Setup:** Configure for vector embedding and retrieval.
6. **Context-Specific Answering:** Implement Chatbot responses based *only* on user-selected text from the book.
7. **Docusaurus Page Embedding:** Ensure the chatbot component is accessible from all book chapters/pages.
8. **Speckit Files Update:** Update /sp.specify, /sp.plan, and /sp.tasks to reflect all integration steps.
9. **Code Quality & Documentation:** Add necessary code comments, architecture notes, and cloud connection information.
10. **Validation:** Thoroughly test the Chatbot for correct functionality and RAG query accuracy.
11. **Deployment & Summary:** Provide a final summary of all files created/modified and deployment instructions.
12. **Constitution Adherence:** Ensure all code follows the Physical AI Humanoid Robotics Textbook Constitution principles.
Scope:
1. Vector Database: Qdrant Cloud Free Tier for storing semantic embeddings of book content.
2. Backend: FastAPI + Neon Serverless Postgres for query processing, retrieval, and RAG pipeline.
3. Frontend: Embedded Docusaurus chatbot UI.
4. Integration with OpenAI Agents/ChatKit SDKs or Gemini LLM.
5. Security: Proper handling of API keys and access control.

Key Learning Objectives:
- Understand how to embed an AI assistant inside a static documentation site.
- Implement a secure RAG pipeline with vector DB and LLM.
- Ensure answers are context-specific (based on user-selected text).
- Maintain responsive, accessible, and thematically consistent UI.

Prerequisites:
- Basic knowledge of Python, FastAPI, and LLM usage.
- Familiarity with vector databases (Qdrant) and embeddings.
- Knowledge of Docusaurus for static site deployment.
- Understanding of AI agent SDKs (OpenAI/Gemini).

Key Concepts to Cover:
- Text chunking and embedding generation.
- Vector search and retrieval mechanisms.
- RAG pipeline design and answer synthesis.
- Frontend-backend communication for chatbot queries.
- UI integration in Docusaurus pages with theming and accessibility.
- Logging, auditing, and error handling.
- Security considerations for API keys and serverless DB access.

Deliverables:
- Spec file outlining chapter/feature requirements.
- Plan for code examples, diagrams, and testing.
- Task breakdown for implementation, review, and deployment.

Constraints:
- Answers must ONLY use text selected by the user.
- Must use free or hackathon-eligible tiers (Qdrant Cloud Free Tier, Neon Serverless).
- Performance: Responses within 3 seconds for typical queries.

Notes:
- Include references to book sections in answers wherever possible.
- Ensure fallback behavior for queries with no relevant content.