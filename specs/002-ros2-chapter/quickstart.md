# Quickstart: ROS 2 Communication Patterns

This document provides a quick overview of the primary communication patterns used in ROS 2, serving as an introduction to how different components (nodes) interact within a robotic system.

## 1. Topics (Publish/Subscribe)

-   **Description**: The most common communication pattern in ROS 2, used for streaming continuous or periodic data. One or more nodes (publishers) send messages to a named topic, and zero or more nodes (subscribers) receive messages from that topic.
-   **Analogy**: A radio broadcast where multiple stations transmit (publish) and multiple radios listen (subscribe).
-   **Characteristics**:
    -   **Asynchronous**: Publishers don't wait for subscribers.
    -   **Decoupled**: Publishers and subscribers don't need to know about each other's existence.
    -   **One-way**: Information flows from publisher to subscriber.
    -   **Many-to-many**: Multiple publishers can send to a topic, and multiple subscribers can receive from it.
-   **Use Cases**: Sensor data (camera images, lidar scans), robot joint states, odometry, log messages.

## 2. Services (Request/Response)

-   **Description**: Used for synchronous communication where a client node sends a request to a service server node and waits for a single response.
-   **Analogy**: Making a phone call where you ask a question (request) and wait for an answer (response).
-   **Characteristics**:
    -   **Synchronous**: Client blocks until a response is received.
    -   **One-to-one**: Typically one client communicates with one server per request.
    -   **Blocking**: Client waits for the server.
-   **Use Cases**: Triggering an action (e.g., "take a picture"), querying a value (e.g., "get current robot pose"), performing a computation.

## 3. Actions (Goal/Feedback/Result)

-   **Description**: Designed for long-running, goal-oriented tasks that may require periodic feedback and can be cancelled. Actions are built on top of topics and services, providing a more complex communication interface.
-   **Analogy**: Ordering a pizza (goal), getting updates on its status (feedback), and finally receiving the pizza (result). You can also call to cancel the order.
-   **Characteristics**:
    -   **Asynchronous**: Client doesn't block entirely, but can monitor progress.
    -   **Goal-oriented**: Defined by a specific objective.
    -   **Feedback**: Provides intermediate updates on task progress.
    -   **Cancellable**: Clients can request to stop a running action.
-   **Use Cases**: Navigating to a specific point, picking up an object, performing a complex manipulation sequence.
