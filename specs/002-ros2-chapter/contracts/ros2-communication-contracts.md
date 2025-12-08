# ROS 2 Communication Conceptual Contracts

This document outlines the conceptual communication contracts between ROS 2 entities, as they will be presented within the chapter content. These are not API specifications in the traditional sense, but rather a definition of how data and control flow between components.

## 1. Topic Communication Contract (Publish/Subscribe)

- **Mechanism**: Asynchronous, one-to-many or many-to-many data streaming.
- **Participants**: `Publisher Node(s)` and `Subscriber Node(s)`.
- **Contract**: A `Publisher` agrees to send messages of a specific `message_type` to a `Topic` at a certain frequency (or upon event). A `Subscriber` agrees to receive and process messages from that `Topic`.
- **Data Flow**: Unidirectional from `Publisher` to `Subscribers` via the `Topic`.
- **Key Attributes**: `Topic Name`, `Message Type`, `QoS Profile` (e.g., reliability, history, durability).

## 2. Service Communication Contract (Request/Response)

- **Mechanism**: Synchronous, one-to-one request-response interaction.
- **Participants**: `Service Client Node` and `Service Server Node`.
- **Contract**: A `Service Server` agrees to provide a named `Service` that, upon receiving a `Request` of a specific `request_type`, will perform a computation and return a `Response` of a specific `response_type`. A `Service Client` agrees to send a `Request` and await a `Response`.
- **Data Flow**: Bidirectional; `Request` from client to server, `Response` from server to client.
- **Key Attributes**: `Service Name`, `Request Type`, `Response Type`.

## 3. Action Communication Contract (Goal/Feedback/Result)

- **Mechanism**: Asynchronous, goal-oriented communication for long-running tasks, with intermediate feedback and eventual results.
- **Participants**: `Action Client Node` and `Action Server Node`.
- **Contract**: An `Action Server` agrees to accept a `Goal` of a specific `goal_type`, provide continuous `Feedback` of a specific `feedback_type` during execution, and finally return a `Result` of a specific `result_type`. An `Action Client` agrees to send a `Goal`, process `Feedback`, and await the `Result` (with optional cancellation).
- **Data Flow**: Bidirectional; `Goal` from client to server; `Feedback` from server to client; `Result` from server to client.
- **Key Attributes**: `Action Name`, `Goal Type`, `Result Type`, `Feedback Type`.
