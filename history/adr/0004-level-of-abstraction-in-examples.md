# ADR-0004: Level of Abstraction in Examples

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-13
- **Feature:** 002-ros2-chapter
- **Context:** This decision concerns the complexity and realism of code examples and tutorials within Module 1 and potentially throughout the book. The chosen level of abstraction directly impacts the pedagogical effectiveness, practical applicability, and cognitive load for beginner readers.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

To use **moderately realistic examples** that demonstrate core concepts within a plausible robotics context, but without introducing excessive complexity or extraneous details. Examples will be self-contained and focused on illustrating a specific ROS 2 concept, while subtly hinting at their broader applications in more complex systems.

## Consequences

### Positive

-   **Enhanced Practicality:** Examples bridge the gap between theoretical understanding and real-world application, making the concepts more tangible and relatable for readers.
-   **Improved Engagement:** Readers are more likely to stay engaged when they see the direct relevance of what they are learning to actual robot behaviors or systems, fostering a deeper understanding.
-   **Manageable Complexity:** By carefully balancing realism and simplicity, the cognitive load on beginners remains manageable, allowing them to focus on the core learning objectives without being overwhelmed by excessive boilerplate or intricate setups.
-   **Scalability:** Moderately realistic examples can often be extended, modified, or combined in later modules to build incrementally more complex systems, providing a natural progression.

### Negative

-   **Delicate Balancing Act:** Requires careful design and review to ensure examples are realistic enough to be useful but simple enough not to overwhelm. Finding this "sweet spot" can be challenging.
-   **Potential for Scope Creep:** There's a risk of examples inadvertently growing in complexity if not rigorously constrained and maintained, which could undermine the goal of manageable cognitive load.
-   **Setup Overhead (Slight):** Even moderately realistic examples might require a slightly more involved setup (e.g., specific package dependencies or configurations) compared to bare-bones, single-file code snippets, though this is mitigated by the `quickstart.md`.

## Alternatives Considered

-   **Highly Simplified, Bare-Bones Examples:**
    *   **Reason for Rejection:** While extremely easy to grasp individually, such examples can often feel abstract and lack the practical context needed for readers to understand *why* a concept is important or *how* it applies in a robotics system. They might fail to inspire or adequately demonstrate real-world utility, making the learning less impactful.
-   **Complex, Full-System Examples:**
    *   **Reason for Rejection:** These examples would introduce too many variables, dependencies, and interacting components, which would obscure the core concepts being taught and overwhelm beginners. They would significantly increase the learning curve and potentially lead to frustration, making them unsuitable for an introductory textbook.

## References

- Feature Spec: specs/002-ros2-chapter/spec.md
- Implementation Plan: specs/002-ros2-chapter/plan.md
- Related ADRs: null
- Evaluator Evidence: null