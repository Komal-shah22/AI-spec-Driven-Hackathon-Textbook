# Data Model: ROS 2 Core Concepts

This document defines the core entities (concepts) of ROS 2 as outlined in the feature specification for the chapter "The Robotic Nervous System (ROS 2)". While not a traditional software data model with fields and validation rules, this section serves to formally define the key components and their relationships for educational clarity.

## Entities

### ROS 2 Node
- **Definition**: An executable process that performs computation. Nodes are the fundamental building blocks of a ROS 2 system, designed to be modular and reusable.
- **Relationships**:
    - Can publish messages to one or more **Topics**.
    - Can subscribe to one or more **Topics**.
    - Can provide one or more **Services**.
    - Can use (call) one or more **Services**.
    - Can provide one or more **Actions**.
    - Can use (send goals to) one or more **Actions**.
    - Can set and get **Parameters**.

### ROS 2 Topic
- **Definition**: A named bus over which nodes exchange messages in a publish/subscribe pattern. Topics enable asynchronous, many-to-many communication.
- **Relationships**:
    - Publishers (Nodes) send data to Topics.
    - Subscribers (Nodes) receive data from Topics.
- **Characteristics**:
    - Messages are typically small, stream-like data.
    - No guarantee of delivery or order (depending on QoS).

### ROS 2 Service
- **Definition**: A request/response communication mechanism for synchronous calls between nodes. Services are used for operations that return a result or acknowledge completion.
- **Relationships**:
    - Service Server (Node) implements and provides a Service.
    - Service Client (Node) calls a Service and waits for a response.
- **Characteristics**:
    - Synchronous communication (blocking call).
    - Guarantees a single response for each request.

### ROS 2 Action
- **Definition**: A long-running goal-oriented communication mechanism for asynchronous tasks. Actions extend services by providing feedback during execution and the ability to cancel goals.
- **Relationships**:
    - Action Server (Node) processes goals, provides feedback, and sends results for an Action.
    - Action Client (Node) sends goals, receives feedback, and gets results from an Action.
- **Characteristics**:
    - Asynchronous communication.
    - Allows for preemption (cancellation) of goals.
    - Provides continuous feedback on goal progress.

### ROS 2 Parameter
- **Definition**: Configuration values stored in the ROS 2 system, accessible by nodes. Parameters allow for dynamic configuration without recompiling code.
- **Relationships**:
    - Nodes can declare, get, and set Parameters.
    - Parameter Server (implicit within ROS 2) stores and manages Parameters.
- **Characteristics**:
    - Key-value pairs.
    - Can be changed at runtime.
    - Often used for tuning algorithms or robot behavior.
