# ADR-0006: ROS 2 Distribution Choice

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-13
- **Feature:** 004-ros2-chapter
- **Context:** This decision concerns the selection of a specific ROS 2 distribution for the content and examples presented in Module 1 and subsequent modules. The choice significantly impacts the stability, longevity, and relevance of the code examples and tutorials within the textbook.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

To use **ROS 2 Humble Hawksbill** as the primary distribution for all examples and tutorials, with a contingency to pivot to the latest LTS release available and stable at the time of final publication. This ensures a balance between current relevance, community support, and long-term stability for a textbook targeting beginners.

## Consequences

### Positive

-   **Long-term Relevance:** Utilizing an LTS (Long Term Support) release ensures that the code examples and tutorials remain valid and relevant for an extended period, maximizing the textbook's lifespan.
-   **Stability:** LTS releases are generally more stable and thoroughly tested, reducing the likelihood of encountering bugs or unexpected behavior in examples.
-   **Community Support:** LTS versions typically have a larger and more active community, making it easier for readers to find solutions to common issues.
-   **Established Ecosystem:** Well-developed tooling and third-party packages are usually available for LTS distributions.

### Negative

-   **Delayed Access to New Features:** By sticking to an LTS, the textbook will not showcase the absolute latest features or improvements introduced in newer rolling releases immediately.
-   **Monitoring Overhead:** Requires a process to monitor newer LTS releases and assess the feasibility and necessity of migrating the textbook's content and examples if Humble becomes significantly outdated before or during its publication lifecycle.

## Alternatives Considered

-   **ROS 2 Foxy (LTS):**
    *   **Reason for Rejection:** While stable and mature, Foxy is an older LTS release. Using it would make the textbook appear outdated upon publication and might lack compatibility with newer hardware or software ecosystems.
-   **ROS 2 Iron (Rolling Release):**
    *   **Reason for Rejection:** Iron is a rolling release with a shorter support cycle. Its rapid deprecation cycle and potential for instability make it unsuitable for a textbook that requires long-term accuracy and a stable learning platform for beginners.
-   **ROS 2 Jazzy (Upcoming LTS):**
    *   **Reason for Consideration:** This is an upcoming LTS release that would offer the most current features with long-term support.
    *   **Reason for Contingent Rejection (at planning stage):** Not yet released or fully stable at the time of planning. Tooling and community support would be less mature in its early stages. It remains a viable option for a pivot if it's released and reaches sufficient stability before the textbook's final publication deadline.

## References

- Feature Spec: specs/004-ros2-chapter/spec.md
- Implementation Plan: specs/004-ros2-chapter/plan.md
- Related ADRs: null
- Evaluator Evidence: null