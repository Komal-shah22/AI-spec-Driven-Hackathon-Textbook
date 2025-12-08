---
id: 0001
title: Update Constitution with RAG Chatbot Principle
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: 001-digital-twins-simulation
user: user
command: /sp.constitution ### VII. RAG Chatbot Integration & AI Interaction

**Principles**:

1. **Vector Database (Qdrant Cloud Free Tier)**
   - All book content MUST be chunked into semantic segments for retrieval.
   - Embeddings MUST be generated using approved LLM (Gemini/OpenAI).
   - Qdrant collections MUST be named clearly, versioned, and documented.
   - Only relevant text selected by the user should be retrieved for answers.

2. **Backend (FastAPI + Neon Serverless Postgres)**
   - Receives user queries and selected text input.
   - Retrieves relevant embeddings from Qdrant.
   - Generates answers using LLM (Gemini/OpenAI) in a RAG pipeline.
   - Logs all interactions for auditing and review.
   - Must handle rate limits, retries, and API key security.

3. **Frontend Chatbot (Embedded in Book)**
   - Integrated within Docusaurus pages (iframe or script tag).
   - Answers questions **based only on text selected by the user**.
   - UI consistent with textbook theme (colors, fonts, layout).
   - Must be accessible (keyboard, screen reader) and responsive.
   - Provides references and links to book sections used in the answer.

4. **QA & Validation**
   - All AI-generated answers MUST be verified for technical accuracy.
   - Discrepancies logged and book content or embeddings updated as needed.
   - Fallback or clarification responses for unknown queries.

5. **Security & API Handling**
   - Secrets/API keys MUST NOT be hard-coded or exposed in public repos.
   - Retry/backoff mechanisms required for rate-limit errors.
   - Only authorized agents can access the vector DB or backend endpoints.

6. **Workflow**
   - User selects text → frontend sends query + selected text → FastAPI backend retrieves relevant embeddings from Qdrant → LLM generates answer → Frontend displays answer with references.
labels: ["constitution", "rag chatbot", "ai interaction", "principles"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
tests:

---

## Prompt

### VII. RAG Chatbot Integration & AI Interaction

**Principles**:

1. **Vector Database (Qdrant Cloud Free Tier)**
   - All book content MUST be chunked into semantic segments for retrieval.
   - Embeddings MUST be generated using approved LLM (Gemini/OpenAI).
   - Qdrant collections MUST be named clearly, versioned, and documented.
   - Only relevant text selected by the user should be retrieved for answers.

2. **Backend (FastAPI + Neon Serverless Postgres)**
   - Receives user queries and selected text input.
   - Retrieves relevant embeddings from Qdrant.
   - Generates answers using LLM (Gemini/OpenAI) in a RAG pipeline.
   - Logs all interactions for auditing and review.
   - Must handle rate limits, retries, and API key security.

3. **Frontend Chatbot (Embedded in Book)**
   - Integrated within Docusaurus pages (iframe or script tag).
   - Answers questions **based only on text selected by the user**.
   - UI consistent with textbook theme (colors, fonts, layout).
   - Must be accessible (keyboard, screen reader) and responsive.
   - Provides references and links to book sections used in the answer.

4. **QA & Validation**
   - All AI-generated answers MUST be verified for technical accuracy.
   - Discrepancies logged and book content or embeddings updated as needed.
   - Fallback or clarification responses for unknown queries.

5. **Security & API Handling**
   - Secrets/API keys MUST NOT be hard-coded or exposed in public repos.
   - Retry/backoff mechanisms required for rate-limit errors.
   - Only authorized agents can access the vector DB or backend endpoints.

6. **Workflow**
   - User selects text → frontend sends query + selected text → FastAPI backend retrieves relevant embeddings from Qdrant → LLM generates answer → Frontend displays answer with references.

## Response snapshot

Updated `constitution.md` with new RAG Chatbot Integration & AI Interaction principle, incremented version to 1.1.0, and generated Sync Impact Report.

## Outcome

- ✅ Impact: Constitution updated with new principles for RAG chatbot integration.
- 🧪 Tests: N/A
- 📁 Files: Modified `constitution.md`
- 🔁 Next prompts: User will proceed with font style change.
- 🧠 Reflection: Successfully updated constitution and generated PHR. Identified the need to manually update related templates for AI interaction features.

## Evaluation notes (flywheel)

- Failure modes observed: Initial `Read` of PHR file failed due to incorrect path construction. Resolved by using `Glob` to get the correct absolute path.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
