# ADR-0003: Python vs C++ Emphasis in Examples

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-13
- **Feature:** 002-ros2-chapter
- **Context:** This decision addresses the primary programming language to be used for code examples and tutorials in Module 1 and potentially throughout the book. The choice directly impacts the target audience's learning curve, the book's accessibility for beginners, and its relevance to common robotics development practices.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

To use **Python as the primary language** for all introductory concepts and examples in Module 1. Where significant differences exist in implementation or for specific advanced topics, notes or appendices will mention C++ equivalents. This approach prioritizes ease of learning for beginners while acknowledging the importance of C++ in robotics.

## Consequences

### Positive

-   **Lower Barrier to Entry:** Python's simpler syntax, less verbose nature, and dynamic typing make it significantly easier for beginners, particularly those new to both robotics and potentially programming, to grasp concepts quickly.
-   **Faster Learning Curve:** Readers can focus more on understanding fundamental ROS 2 concepts and architectural patterns rather than struggling with complex language constructs and build systems often associated with C++.
-   **Wider Audience:** Attracts a broader audience, including those from AI/ML, data science, and scripting backgrounds where Python is the dominant language.
-   **Conciseness:** Python examples are generally more concise, helping to keep the textbook focused, reducing cognitive load, and allowing for more content within the same space.

### Negative

-   **Performance Misconceptions:** Readers might not fully grasp the performance implications and necessity of C++ for critical, high-frequency, or resource-intensive ROS 2 nodes, potentially leading to suboptimal design choices in future projects.
-   **Industry Disconnect:** While Python is growing in robotics, many established industry roles and foundational ROS 2 components heavily rely on C++. An exclusive Python focus could leave readers less prepared for C++-centric environments.
-   **Limited Deep Dive:** A primary focus on Python might limit the ability to explore some low-level ROS 2 features or optimizations that are best demonstrated or exclusively available in C++.

## Alternatives Considered

-   **Python Only:**
    *   **Reason for Rejection:** While offering the simplest path, it would completely omit the significant and often performance-critical role of C++ in ROS 2, providing an incomplete picture of the ecosystem.
-   **C++ Only:**
    *   **Reason for Rejection:** C++ has a significantly steeper learning curve. This approach would substantially increase the complexity for beginners, potentially overwhelming them and deterring a wider audience, which contradicts the book's beginner-friendly goal.
-   **Equal Split (Python and C++ for every example):**
    *   **Reason for Rejection:** This would drastically increase the book's length, complexity, and potentially overwhelm beginners by presenting two distinct language implementations for every concept. It would also double the maintenance effort for code examples.

## References

- Feature Spec: specs/002-ros2-chapter/spec.md
- Implementation Plan: specs/002-ros2-chapter/plan.md
- Related ADRs: null
- Evaluator Evidence: null