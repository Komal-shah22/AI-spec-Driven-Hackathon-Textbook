# ADR-0009: Tooling Depth (CLI vs API vs GUI)

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-13
- **Feature:** 004-ros2-chapter
- **Context:** This decision concerns the emphasis and progressive introduction of different types of ROS 2 tools (Command Line Interface, Programming API, Graphical User Interface) within Module 1. The choice impacts the reader's initial learning experience, their ability to interact with and debug ROS 2 systems, and their overall practical understanding of the ROS 2 ecosystem.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

To adopt a **progressive introduction to ROS 2 tooling** across Module 1:
1.  **Essential CLI tools** (`ros2 topic`, `ros2 node`, `ros2 service` etc.) will be introduced in early chapters (Chapter 1/2) for basic system interaction, monitoring, and debugging.
2.  The **Python API** for node development will be the focus in Chapter 3 for creating custom ROS 2 applications.
3.  **Advanced GUI tools** (`rqt`, `rviz`) will be integrated in later chapters (Chapter 4) for visual introspection, debugging, and advanced visualization.

## Consequences

### Positive

-   **Gradual Learning Curve:** Readers are introduced to tools incrementally, preventing information overload and allowing them to build foundational knowledge before moving to more complex interfaces.
-   **Holistic Understanding:** Covers all three critical types of ROS 2 interaction (CLI for quick checks, API for development, GUI for visualization/debugging), providing a comprehensive toolkit.
-   **Practical Relevance:** Mirrors a typical ROS 2 development workflow, starting with basic interaction, moving to programming, and finally leveraging powerful debugging tools.
-   **Empowerment:** Equips readers with a versatile set of tools to effectively work with and troubleshoot ROS 2 systems.

### Negative

-   **Initial Abstraction:** Relying heavily on CLI initially might feel less intuitive for visually oriented learners compared to a GUI.
-   **Tool Switching Overhead:** Readers will need to switch between different tool types as they progress, which requires mental context switching.
-   **GUI Tool Specifics:** While powerful, GUI tools like `rqt` and `rviz` have their own learning curves, which must be managed within the module's scope.

## Alternatives Considered

-   **CLI-only Focus:**
    *   **Reason for Rejection:** While powerful for advanced users, a CLI-only approach would be steep for beginners and neglect the visual inspection and development power offered by APIs and GUIs, leading to an incomplete understanding.
-   **API-first Focus:**
    *   **Reason for Rejection:** Starting with programming APIs without first understanding the system via CLI or visual tools could be overwhelming and might make debugging harder for novices.
    *   **GUI-first Focus:**
        *   **Reason for Rejection:** While intuitive, a GUI-first approach can hide the underlying mechanisms of ROS 2, leading to a superficial understanding and difficulty in troubleshooting when GUI tools are not available or sufficient.

## References

- Feature Spec: specs/004-ros2-chapter/spec.md
- Implementation Plan: specs/004-ros2-chapter/plan.md
- Related ADRs: null
- Evaluator Evidence: null