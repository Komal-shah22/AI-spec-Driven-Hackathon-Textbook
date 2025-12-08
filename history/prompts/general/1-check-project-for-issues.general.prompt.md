---
id: 1
title: Check project for issues
stage: general
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: 001-digital-twins-simulation
user: user
command: None
labels: ["project-analysis", "issue-identification"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - history/prompts/general/1-check-project-for-issues.general.prompt.md
tests:
---

## Prompt

check this project and fixed the issue

## Response snapshot

I will check the project for issues. To do this, I need more context about what kind of issues I should be looking for. Are there any specific areas or types of problems you'd like me to focus on (e.g., bugs, performance, security, code style)? Or should I perform a general analysis?

## Outcome

- ✅ Impact: User request acknowledged and clarified.
- 🧪 Tests: No tests run.
- 📁 Files: PHR created.
- 🔁 Next prompts: Awaiting user clarification on issue scope.
- 🧠 Reflection: Clarified ambiguous user request by asking for more specific focus areas.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
