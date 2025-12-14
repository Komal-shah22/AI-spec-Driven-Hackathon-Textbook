# Plan for Module 1: The Robotic Nervous System (ROS 2)

## 🎯 Feature Specification Alignment

This planning document addresses the following feature specification: `specs/002-ros2-chapter/spec.md`

## 📝 Technical Context

Module 1 introduces ROS 2 as the foundational communication and computation layer. It is designed for beginners with basic programming knowledge but no prior ROS experience. The module will contain 3-4 chapters.

### Key Considerations:

*   **Target Audience:** Beginners in ROS, basic programming knowledge assumed.
*   **Module Scope:** Foundational ROS 2 concepts, communication mechanisms, hands-on workflow, introspection, tooling, best practices.
*   **Integration:** Must seamlessly integrate with future modules (Simulation, Navigation, Perception).
*   **Documentation Style:** Professional robotics textbook.
*   **Constraints:** No hardware-specific drivers, no vendor-specific tooling.

## 🏛️ Constitution Check

This plan aligns with the assumed core principles for a professional robotics textbook:

*   **Accuracy**: The plan explicitly includes "Technical correctness vs official ROS 2 docs" in the Quality Validation Plan and "Official ROS 2 documentation" as a primary research source, ensuring technical accuracy.
*   **Clarity**: The plan emphasizes "Pedagogical clarity for beginners" in the Quality Validation Plan and structures chapters for progressive learning, promoting clear understanding.
*   **Consistency**: "Consistency of terminology across chapters" and "Alignment with future modules" are key aspects of the Quality Validation Plan, ensuring a cohesive learning experience.
*   **Professionalism**: The overall structure, detailed planning, and explicit quality checks reflect a professional approach suitable for a textbook.
*   **Citation**: The Research Approach explicitly mandates "APA style (per Constitution)" for citations.

## 🚧 Gates

*   **Research Gate:** All "NEEDS CLARIFICATION" points in `research.md` must be resolved. (Phase 0)
*   **Design Gate:** `data-model.md`, `contracts/*`, and `quickstart.md` must be complete and reviewed. (Phase 1)
*   **Quality Gate:** All quality validation checks (`Quality Validation Plan`) must pass, and the internal review checklist must be completed for each chapter. (Before `/sp.tasks`)

## 🔬 Phase 0: Outline & Research

### Goals:
*   Identify and resolve all technical unknowns related to core ROS 2 concepts and their interrelationships.
*   Establish best practices for teaching foundational robotics concepts within a textbook context.
*   Compile a comprehensive `research.md` document that serves as the authoritative source for Module 1's content.

### Outputs:
*   `research.md`: Document detailing decisions, rationale, and alternatives for all critical technical and pedagogical aspects.
*   Concept validation notes.
*   Terminology consistency checks.

### Success Criteria:
*   All "NEEDS CLARIFICATION" points from the Technical Context are addressed within `research.md`.
*   `research.md` clearly outlines chosen concepts, rationale, and alternatives considered.
*   No outstanding questions regarding ROS 2 core concepts or their textbook presentation remain.

### Research Approach:
**Define a research-concurrent approach**, where research and writing happen together.

*   **Primary sources:**
    *   Official ROS 2 documentation (ROS 2 docs, `docs.ros.org`)
    *   REP (ROS Enhancement Proposals)
    *   ROS 2 design articles
*   **Secondary sources:**
    *   Tutorials and community references (validated against official docs)
    *   Academic papers on robotics pedagogy
*   **Citation strategy:**
    *   APA style (per Constitution)
    *   Sources are tracked in `research.md` during the research phase, with direct references or footnotes for specific facts/figures within the chapter content.
*   **Research constraints:**
    *   No hardware-specific drivers
    *   No vendor-specific tooling
    *   Focus on cross-platform applicability (Linux, Windows, macOS where relevant for ROS 2)
*   **Expected research deliverables:**
    *   Concept validation notes: confirmation of how key ROS 2 concepts (nodes, topics, services, actions, parameters, QoS) are best explained for beginners.
    *   Terminology consistency checks: ensuring a unified vocabulary throughout the module and alignment with official ROS 2 terminology.
    *   Diagramming conventions for conceptual architectures.

## 📄 Phase 1: Design & Contracts

### Goals:
*   Structure Module 1 into coherent chapters with clear learning objectives and expected outputs.
*   Outline the data models implied by ROS 2 messaging, even if not explicitly coded.
*   Define a `quickstart.md` for readers to rapidly set up a ROS 2 environment for hands-on exercises.
*   Prepare for detailed task breakdown in `/sp.tasks`.

### Outputs:
*   **Full Chapter Outline:** `plan.md` will contain the detailed chapter structure.
*   `data-model.md`: Conceptual ROS 2 message types, their fields, and relationships.
*   `quickstart.md`: Guide for ROS 2 environment setup.
*   `contracts/`: (Placeholder) for potential API contracts if specific ROS 2 components are demonstrated with custom interfaces. For this module, this will focus on message definitions and service/action interfaces.

### Success Criteria:
*   Chapter structure is logical, pedagogical, and meets the 3-4 chapter requirement.
*   Each chapter has defined purpose, learning objectives, depth, and expected outputs.
*   `data-model.md` accurately reflects common ROS 2 data structures.
*   `quickstart.md` provides clear, concise instructions for environment setup.
*   Plan is ready for atomic task breakdown.

### Section / Chapter Structure:

**Module 1: The Robotic Nervous System (ROS 2)**

This module contains 4 chapters, progressing from core concepts to practical application and best practices.

---

**Chapter 1: Introducing ROS 2: The Robot's Brain and Nerves**

*   **Purpose:** To introduce ROS 2 as an operating system for robots, explain its necessity, and establish a foundational mental model.
*   **Learning Objectives:**
    *   Understand why ROS 2 is essential for complex robotics.
    *   Grasp the high-level architecture of ROS 2 (nodes as "brains," topics as "nerves").
    *   Identify the core components: nodes, topics, services, actions, parameters, QoS.
    *   Develop a conceptual understanding of data and control flow within a ROS 2 system.
*   **Conceptual vs Hands-on Depth:** Highly conceptual, focusing on analogies and high-level understanding. Minimal hands-on.
*   **Expected Outputs:**
    *   Understanding of ROS 2's role and basic architecture.
    *   Ability to articulate the purpose of core ROS 2 concepts.
    *   Conceptual diagrams of a simple ROS 2 system.

---

**Chapter 2: ROS 2 Communication Mechanisms: Speaking the Robot's Language**

*   **Purpose:** To detail the primary communication patterns in ROS 2 and their appropriate use cases.
*   **Learning Objectives:**
    *   Differentiate between topics, services, and actions.
    *   Understand Quality of Service (QoS) settings and their impact on communication reliability and performance.
    *   Learn about parameters for dynamic node configuration.
    *   Grasp the role of messages and interfaces (`.msg`, `.srv`, `.action` files).
*   **Conceptual vs Hands-on Depth:** Balanced conceptual explanation with initial hands-on examples (e.g., `ros2 topic echo`, `ros2 service call`).
*   **Expected Outputs:**
    *   Understanding of when to use topics, services, or actions.
    *   Ability to interpret basic ROS 2 CLI communication commands.
    *   Simple code snippets (Python preferred for initial clarity) demonstrating message publication/subscription, service calls.

---

**Chapter 3: Your First ROS 2 Application: Building a Simple Robotic System**

*   **Purpose:** To guide beginners through the practical workflow of creating, building, and running a basic ROS 2 application.
*   **Learning Objectives:**
    *   Set up a ROS 2 workspace and create new packages.
    *   Write simple publisher and subscriber nodes in Python.
    *   Build and run a ROS 2 application using `colcon`.
    *   Utilize basic ROS 2 command-line tools for introspection.
    *   Understand the concept of launch files for orchestrating multiple nodes.
*   **Conceptual vs Hands-on Depth:** Predominantly hands-on, step-by-step tutorial.
*   **Expected Outputs:**
    *   A functional ROS 2 workspace with custom publisher/subscriber nodes.
    *   Familiarity with `colcon` build system.
    *   Ability to use `ros2 run`, `ros2 node list`, `ros2 topic list`, `ros2 launch`.
    *   Working launch file for the simple application.

---

**Chapter 4: Advanced ROS 2 Tooling, Introspection, and Best Practices**

*   **Purpose:** To introduce more advanced tools for debugging and analysis, and to discuss best practices for robust ROS 2 development.
*   **Learning Objectives:**
    *   Explore advanced ROS 2 command-line tools (`rqt_graph`, `rqt_plot`, `rviz`).
    *   Understand logging and debugging strategies in ROS 2.
    *   Learn about distributed systems concepts relevant to ROS 2 (e.g., multi-robot communication).
    *   Identify best practices for node design, package structure, and system maintenance.
*   **Conceptual vs Hands-on Depth:** Mix of conceptual explanations and guided hands-on exercises with advanced tools.
*   **Expected Outputs:**
    *   Ability to use `rqt` tools and `rviz` for visualization and debugging.
    *   Understanding of ROS 2 logging levels and how to interpret logs.
    *   Knowledge of best practices for writing maintainable and scalable ROS 2 code.

---

## 🔬 3. Research Approach

**Define a research-concurrent approach**, where research and writing happen together.

*   **Primary sources:**
    *   Official ROS 2 documentation (`docs.ros.org`, `ROS 2 Foxy/Humble/Iron documentation` - specific distribution to be chosen in ADR)
    *   REP (ROS Enhancement Proposals) for design decisions and rationale.
    *   ROS 2 design articles and whitepapers (e.g., about DDS integration, security).
*   **Secondary sources:**
    *   High-quality community tutorials (e.g., `robotics.stackexchange.com`, `ROS discourse forums`) - **validated against official docs.**
    *   Academic textbooks on robotics and distributed systems (for pedagogical approaches).
*   **Citation strategy:**
    *   APA style (per Constitution) for any direct quotes, specific data, or unique insights.
    *   References will be tracked in a dedicated section of `research.md` and then integrated into the manuscript as end-of-chapter references or footnotes where appropriate.
    *   General ROS 2 concepts will refer to the official documentation as a primary source, not requiring explicit citation on every mention.
*   **Research constraints:**
    *   **No hardware-specific drivers:** Focus on simulated or abstract examples.
    *   **No vendor-specific tooling:** Stick to core ROS 2 tools and open-source ecosystems.
    *   **Focus on conceptual clarity:** Prioritize understanding over highly optimized or niche implementations.
*   **Expected research deliverables:**
    *   Concept validation notes: detailed explanations and comparisons for how to best present core ROS 2 concepts (Nodes, Topics, Services, Actions, Parameters, QoS) for beginners, addressing common misconceptions.
    *   Terminology consistency checks: a glossary of terms unique to ROS 2 and robotics to ensure uniform usage across the module and book.
    *   List of recommended ROS 2 tools for beginners and intermediate users.

## 📝 4. Quality Validation Plan

Describe how quality will be validated:

*   **Alignment with clarified requirements:** Each chapter's content, learning objectives, and outputs will be cross-referenced against the high-level specification for Module 1.
*   **Technical correctness vs official ROS 2 docs:**
    *   All technical explanations, code examples, and command-line interactions will be verified against the chosen stable ROS 2 distribution's official documentation.
    *   Review by experienced ROS 2 developers (if available) for technical accuracy.
*   **Pedagogical clarity for beginners:**
    *   Readability and comprehensibility by individuals with basic programming but no ROS experience.
    *   Flow and progression between concepts are smooth and logical.
    *   Analogy effectiveness in explaining complex ideas.
    *   Internal review by non-ROS experts to check for jargon and accessibility.
*   **Consistency of terminology across chapters:**
    *   A central glossary (derived from `research.md`) will be used to ensure all terms (e.g., "node," "message," "DDS") are used consistently throughout the module.
    *   Automated checks (e.g., linters) for specific terminology if feasible.
*   **Alignment with future modules (Simulation, Navigation, Perception):**
    *   Review to ensure that the foundational concepts introduced in Module 1 do not contradict or create friction with subsequent modules.
    *   Early drafts shared with architects of future modules for feedback.
*   **Internal review checklist per chapter:**
    *   Grammar, spelling, and punctuation.
    *   Code examples are correct, executable, and follow style guidelines.
    *   Diagrams are clear, accurate, and consistently styled.
    *   Learning objectives are met by the content.
    *   Exercises/activities are well-defined and achievable.
*   **Criteria for "ready to move to /sp.tasks":**
    *   All sections of this `plan.md` are complete and reviewed.
    *   `research.md` is complete and all "NEEDS CLARIFICATION" points resolved.
    *   Chapter structure and content outlines are finalized.
    *   All ADR candidates are documented and decisions made (or clear path for ADR creation is established).
    *   Planning-phase tests pass.

## ⚖️ 5. Decisions Needing Documentation (ADR Candidates)

These are critical decisions that will impact the long-term maintainability, accuracy, and pedagogical effectiveness of the module and the book.

*   **Decision Title: ROS 2 Distribution Choice**
    *   **Available Options:** ROS 2 Foxy, Humble, Iron, Jazzy (or future stable release).
    *   **Pros and Cons:**
        *   *Foxy (LTS):* Stable, widely used, good community support, but older.
        *   *Humble (LTS):* Current LTS, good balance of features and stability.
        *   *Iron (Rolling):* Newer features, but less stable, shorter support.
        *   *Jazzy (LTS - upcoming):* Latest features, long support, but potentially less mature tooling in early stages.
    *   **Risks:** Choosing an outdated distro limits relevance; choosing bleeding-edge risks instability and rapid deprecation.
    *   **Recommended Choice:** Humble Hawksbill or the latest LTS release available at the time of final publication, ensuring long-term relevance and stability for a textbook.
    *   **Why this decision matters long-term:** Impacts the longevity and accuracy of code examples and tutorials. A stable LTS ensures the book remains relevant for years.
    *   **Requires ADR:** Yes

*   **Decision Title: Python vs C++ Emphasis in Examples**
    *   **Available Options:** Python only, C++ only, Equal split, Python primary with C++ alternatives.
    *   **Pros and Cons:**
        *   *Python:* Easier for beginners, faster prototyping, widely used in academia/AI.
        *   *C++:* Performance-critical applications, common in industry, more verbose.
        *   *Equal Split:* Caters to both but increases book length and complexity.
        *   *Python primary with C++ alternatives:* Balances ease of learning with industry relevance.
    *   **Risks:** Alienating readers familiar with one language; overwhelming beginners with two languages simultaneously.
    *   **Recommended Choice:** Python primary for all introductory concepts and examples, with notes or appendices mentioning C++ equivalents where significantly different. This caters to beginners and keeps the module concise.
    *   **Why this decision matters long-term:** Shapes the target audience and learning curve. Python's accessibility aligns with the beginner-friendly goal.
    *   **Requires ADR:** Yes

*   **Decision Title: Level of Abstraction in Examples (Minimal vs. Realistic)**
    *   **Available Options:** Highly simplified, bare-bones examples; Moderately realistic examples (e.g., simple robot tasks); Complex, full-system examples.
    *   **Pros and Cons:**
        *   *Simplified:* Easier to grasp core concept.
        *   *Moderately Realistic:* Bridges gap to real-world, maintains focus.
        *   *Complex:* High learning curve, can obscure core concepts.
    *   **Risks:** Examples being too abstract to be useful; examples being too complex and overwhelming.
    *   **Recommended Choice:** Moderately realistic examples that demonstrate the concept in a plausible robotics context without introducing excessive complexity. Examples should be self-contained but hint at broader applications.
    *   **Why this decision matters long-term:** Directly affects the practical applicability and pedagogical effectiveness of the hands-on sections.
    *   **Requires ADR:** Yes

*   **Decision Title: Tooling Depth (CLI vs API vs GUI)**
    *   **Available Options:** Focus solely on `ros2` CLI tools; Emphasize ROS 2 Python/C++ API; Integrate `rqt` GUI tools early.
    *   **Pros and Cons:**
        *   *CLI:* Direct, powerful, good for scripting, sometimes steep learning curve for beginners.
        *   *API:* Required for programming nodes, core to ROS 2.
        *   *GUI (`rqt`, `rviz`):* Visual, intuitive for inspection, but can hide underlying mechanisms.
    *   **Risks:** Overwhelming with too many tools; insufficient coverage of essential tools.
    *   **Recommended Choice:** Start with essential CLI tools in Chapter 1/2 for basic interaction, introduce Python API for node development in Chapter 3, and then integrate `rqt` and `rviz` for advanced introspection and debugging in Chapter 4. This provides a progressive introduction to the toolkit.
    *   **Why this decision matters long-term:** Dictates how readers interact with and debug ROS 2 systems throughout their learning journey.
    *   **Requires ADR:** Yes

## 🧪 6. Planning-Phase Testing Strategy

These checks ensure the planning document itself is robust and consistent before moving to implementation.

*   **Chapter Completeness Checks:**
    *   Verify that each chapter in the outline has a title, purpose, learning objectives, depth assessment, and expected outputs.
    *   Ensure the 3-4 chapter requirement for Module 1 is met.
*   **Learning Objective Coverage:**
    *   Review if the collective learning objectives across all chapters adequately cover the scope of "foundational communication and computation layer for all later modules" as specified in the Module 1 description.
    *   Check for overlap or gaps in learning objectives.
*   **Cross-Chapter Dependency Validation:**
    *   Confirm that concepts introduced in earlier chapters are prerequisites for later chapters, ensuring a smooth learning progression.
    *   Identify any instances where a later chapter assumes knowledge not yet covered.
*   **Consistency with Clarified Scope:**
    *   Verify that the plan adheres to the research constraints (e.g., no hardware-specific drivers, no vendor-specific tooling).
    *   Ensure the focus remains on "clarity and mental models, not implementation details" at this planning stage.
*   **Structural and Formatting Checks:**
    *   Ensure the `plan.md` document adheres to the specified headings and subheadings.
    *   Check for clear and concise language throughout the document.
*   **Terminology Accuracy Validation (Internal):**
    *   Review the plan for consistent use of ROS 2 terminology.
    *   Cross-reference key terms used in the plan with the intended definitions from `research.md` (once developed).

## 🔄 7. Phase Flow

This outlines the iterative development process for Module 1's content.

---

**Phase 0: Research & Outline (Current Phase)**
*   **Goals:** Establish comprehensive understanding of ROS 2 core concepts for beginners, refine module scope, and draft `research.md`.
*   **Outputs:** This `plan.md` document, detailed chapter outline, `research.md` (initial draft).
*   **Success Criteria:** All sections of `plan.md` are complete and internally consistent. `research.md` addresses all identified unknowns and clarifies pedagogical approaches. Planning-phase tests pass.
*   **Human Checkpoints:** Review of `plan.md` and `research.md` by subject matter expert/editor.

---

**Phase 1: Content Drafting & Initial Code Examples**
*   **Goals:** Write initial drafts of each chapter's content, develop and test simple code examples, create diagrams.
*   **Outputs:** Draft chapters (e.g., Markdown files for each), working code examples in a ROS 2 package, initial set of diagrams.
*   **Success Criteria:** Chapter content covers learning objectives. Code examples are runnable and demonstrate concepts. Initial internal quality validation passes.
*   **Human Checkpoints:** Technical review of chapter drafts and code examples. Pedagogical review for clarity and flow.

---

**Phase 2: Review, Refinement & Integration**
*   **Goals:** Incorporate feedback, refine content for clarity and accuracy, ensure consistency across chapters and with book's overall style, integrate with `quickstart.md` and other supporting materials.
*   **Outputs:** Polished chapter drafts, finalized code examples, updated `quickstart.md`.
*   **Success Criteria:** All review feedback addressed. Content is technically accurate, pedagogically sound, and adheres to book's style guide. Ready for formal book review process.
*   **Human Checkpoints:** Final review by subject matter expert, editor, and potentially target audience representative.

---

**Phase 3: Finalization & Handover**
*   **Goals:** Prepare all assets for publication, perform final checks, handover to publishing team.
*   **Outputs:** Final manuscript files, finalized code repositories, all supplemental materials.
*   **Success Criteria:** All content is approved for publication. No outstanding issues.
*   **Human Checkpoints:** Final approval from project lead/publisher.

---

## 🏁 8. Deliverables for This /sp.plan

The output of this `/sp.plan` command includes:

*   **High-level architecture sketch:** Covered in Section 1 (Architecture Sketch) within the document.
*   **Full chapter outline:** Detailed in Section 2 (Section / Chapter Structure) within the document.
*   **Research strategy:** Detailed in Section 3 (Research Approach) within the document.
*   **Validation and quality checklist:** Detailed in Section 4 (Quality Validation Plan) within the document.
*   **ADR candidate list:** Detailed in Section 5 (Decisions Needing Documentation (ADR Candidates)) within the document.
*   **Planning-phase test definitions:** Detailed in Section 6 (Planning-Phase Testing Strategy) within the document.
*   **Clear recommendation for next command:** `/sp.tasks` to break down the outlined chapters and research into actionable, atomic tasks.

**Next Recommended Command:** `/sp.tasks` to generate detailed implementation tasks based on this plan.