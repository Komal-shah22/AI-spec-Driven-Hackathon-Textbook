# ADR-0005: Tooling Depth (CLI vs API vs GUI)

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-13
- **Feature:** 002-ros2-chapter
- **Context:** This decision concerns the emphasis and progressive introduction of different types of ROS 2 tools (Command Line Interface, Programming API, Graphical User Interface) within Module 1. The choice impacts the reader's initial learning experience, their ability to interact with and debug ROS 2 systems, and their overall practical understanding of the ROS 2 ecosystem.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

To adopt a **progressive introduction to ROS 2 tooling** across Module 1:
1.  **Essential CLI tools** (`ros2 topic`, `ros2 node`, `ros2 service`, `ros2 param`, etc.) will be introduced in early chapters (Chapter 1/2) for basic system interaction, monitoring, and initial debugging. This provides immediate hands-on experience without coding.
2.  The **Python API** for node development will be the primary focus in Chapter 3 for creating custom ROS 2 applications (publishers, subscribers, service servers/clients, action servers/clients).
3.  **Advanced GUI tools** (`rqt`, `rviz`) will be integrated in later chapters (Chapter 4) for visual introspection, advanced debugging, data plotting, and 3D visualization.

## Consequences

### Positive

-   **Gradual Learning Curve:** Readers are introduced to tools incrementally, preventing information overload and allowing them to build foundational knowledge with simple interaction before moving to more complex programming or visual interfaces.
-   **Holistic Understanding:** This approach covers all three critical types of ROS 2 interaction (CLI for quick checks, API for development, GUI for visualization/debugging), providing a comprehensive and well-rounded toolkit for readers.
-   **Practical Relevance:** The progression mirrors a typical ROS 2 development workflow, starting with basic system checks, moving to programming custom behaviors, and finally leveraging powerful introspection tools for analysis and debugging.
-   **Empowerment:** Equips readers with a versatile set of tools, enabling them to effectively work with, troubleshoot, and develop in the ROS 2 ecosystem.

### Negative

-   **Initial Abstraction for Visual Learners:** Relying heavily on CLI initially might feel less intuitive or engaging for visually oriented learners compared to a GUI.
-   **Tool Switching Overhead:** Readers will need to switch between different tool types as they progress through the module, which requires mental context switching, though this is mitigated by the progressive structure.
-   **GUI Tool Specifics:** While powerful, GUI tools like `rqt` and `rviz` have their own learning curves, which must be managed within the module's scope.

## Alternatives Considered

-   **CLI-only Focus:**
    *   **Reason for Rejection:** While powerful and fundamental, a CLI-only approach would be a steep learning curve for beginners and would neglect the crucial development power offered by APIs and the visual inspection capabilities of GUIs, leading to an incomplete and less practical understanding of ROS 2.
-   **API-first Focus:**
    *   **Reason for Rejection:** Starting directly with programming APIs without first building an intuitive understanding of the ROS 2 system via CLI or visual tools could be overwhelming for novices. It would make it harder to quickly verify system behavior or debug issues.
-   **GUI-first Focus:**
    *   **Reason for Rejection:** While intuitive for initial exploration, a GUI-first approach can sometimes hide the underlying mechanisms of ROS 2, potentially leading to a superficial understanding. It might also make it difficult for readers to troubleshoot problems when GUI tools are not available or sufficient for complex scenarios.

## References

- Feature Spec: specs/002-ros2-chapter/spec.md
- Implementation Plan: specs/002-ros2-chapter/plan.md
- Related ADRs: null
- Evaluator Evidence: null