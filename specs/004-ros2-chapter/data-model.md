# Data Model for Module 1: The Robotic Nervous System (ROS 2)

This document outlines conceptual ROS 2 message types, their fields, and relationships.

## 1. Standard Message Types (Conceptual)

### Header (std_msgs/msg/Header)
- **Purpose:** Provides timestamp and frame_id for data.
- **Fields:**
    - `stamp` (builtin_interfaces/msg/Time): Timestamp.
    - `frame_id` (string): Reference frame for the data.
- **Relationships:** Common field in many message types for contextual information.

### String (std_msgs/msg/String)
- **Purpose:** Simple string data.
- **Fields:**
    - `data` (string): The string content.

### Float64 (std_msgs/msg/Float64)
- **Purpose:** Simple 64-bit floating point data.
- **Fields:**
    - `data` (float64): The float64 content.

## 2. Common Robot Message Types (Conceptual)

### Twist (geometry_msgs/msg/Twist)
- **Purpose:** Represents velocity in free space (linear and angular).
- **Fields:**
    - `linear` (geometry_msgs/msg/Vector3): Linear velocity components (x, y, z).
    - `angular` (geometry_msgs/msg/Vector3): Angular velocity components (x, y, z).
- **Relationships:** Used by teleoperation nodes to command robot movement, received by robot base controllers.

### Pose (geometry_msgs/msg/Pose)
- **Purpose:** Represents a position and orientation in 3D space.
- **Fields:**
    - `position` (geometry_msgs/msg/Point): x, y, z coordinates.
    - `orientation` (geometry_msgs/msg/Quaternion): x, y, z, w components for orientation.

### Image (sensor_msgs/msg/Image)
- **Purpose:** Represents a camera image.
- **Fields:**
    - `header` (std_msgs/msg/Header): Timestamp and frame_id.
    - `height` (uint32): Image height.
    - `width` (uint32): Image width.
    - `encoding` (string): Encoding format (e.g., "rgb8", "bgr8").
    - `is_bigendian` (uint8): Endianness of the image data.
    - `step` (uint32): Full row length in bytes.
    - `data` (uint8[]): The actual image data.

## 3. Service/Action Patterns (Conceptual)

### AddTwoInts (example_interfaces/srv/AddTwoInts)
- **Purpose:** Simple service to demonstrate request/response.
- **Request Fields:**
    - `a` (int64): First integer.
    - `b` (int64): Second integer.
- **Response Fields:**
    - `sum` (int64): Sum of a and b.

### Fibonacci (example_interfaces/action/Fibonacci)
- **Purpose:** Simple action to demonstrate goal, feedback, result.
- **Goal Fields:**
    - `order` (int32): The order of the Fibonacci sequence to compute.
- **Result Fields:**
    - `sequence` (int32[]): The computed Fibonacci sequence.
- **Feedback Fields:**
    - `sequence` (int32[]): The current partial Fibonacci sequence.

## 4. Parameter Types (Conceptual)

- **Boolean (`bool`)**: True/False flags.
- **Integer (`int`)**: Numeric values.
- **Double (`double`)**: Floating-point values.
- **String (`string`)**: Text values.
- **Lists**: Arrays of any of the above primitive types.
