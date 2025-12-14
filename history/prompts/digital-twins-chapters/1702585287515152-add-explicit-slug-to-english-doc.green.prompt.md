---
id: 1702585287515152
title: Add explicit slug to English doc
stage: green
date: 2025-12-14
surface: agent
model: claude-3-5-sonnet
feature: digital-twins-chapters
branch: main
user: Komal-shah22
command: null
labels: ["docusaurus", "i18n", "bugfix"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - docs/module-2/03-building-a-robot-model.md
tests_yaml: []
prompt_text: |-
  still Page Not Found
  We could not find what you were looking for.

  Please contact the owner of the site that linked you to the original URL and let them know their link is broken.
response_text: |-
  The English source file `docs/module-2/03-building-a-robot-model.md` now includes an explicit slug in its front matter:

  ```
  ---
  slug: /module-2/building-a-robot-model
  ---
  ```

  This should ensure that Docusaurus uses this exact slug for the document across all locales.

  Please refresh your Docusaurus development server and try clicking the Urdu toggle button again to verify that the "Page Not Found" error for `http://localhost:3000/ur/docs/module-2/building-a-robot-model` is resolved.
outcome: Added explicit slug to the English document to ensure consistent URL generation across locales.
evaluation: The solution directly addresses the slug generation issue by providing an explicit slug.
