# Simple Differential Drive Robot Design

This document outlines the design for a simple differential drive robot, specifying its links and joints. This design will be used to create the URDF model in a subsequent phase.

## Robot Structure Overview

The robot will consist of a main chassis, two differential wheels, and a caster wheel for balance.

## Links

-   **`base_link`**:
    -   **Type**: Main chassis.
    -   **Shape**: Box (e.g., 0.3m x 0.2m x 0.1m).
    -   **Visual**: Grey box.
    -   **Collision**: Same as visual.
    -   **Inertial**: Mass and inertia properties suitable for a small robot.
-   **`left_wheel_link`**:
    -   **Type**: Left driving wheel.
    -   **Shape**: Cylinder (e.g., 0.05m radius, 0.02m thickness).
    -   **Visual**: Black cylinder.
    -   **Collision**: Same as visual.
    -   **Inertial**: Mass and inertia properties for a wheel.
-   **`right_wheel_link`**:
    -   **Type**: Right driving wheel.
    -   **Shape**: Cylinder (same as left wheel).
    -   **Visual**: Black cylinder.
    -   **Collision**: Same as visual.
    -   **Inertial**: Mass and inertia properties for a wheel.
-   **`caster_wheel_link`**:
    -   **Type**: Front caster wheel (non-driving).
    -   **Shape**: Sphere (e.g., 0.02m radius).
    -   **Visual**: Silver sphere.
    -   **Collision**: Same as visual.
    -   **Inertial**: Small mass and inertia.

## Joints

-   **`base_link_to_left_wheel_joint`**:
    -   **Type**: Continuous (revolute joint, rotating about its axis).
    -   **Parent**: `base_link`.
    -   **Child**: `left_wheel_link`.
    -   **Origin**: Position relative to `base_link` (e.g., at the side of the chassis).
    -   **Axis**: (0 1 0) for rotation.
-   **`base_link_to_right_wheel_joint`**:
    -   **Type**: Continuous (revolute joint).
    -   **Parent**: `base_link`.
    -   **Child**: `right_wheel_link`.
    -   **Origin**: Position relative to `base_link` (e.g., at the other side of the chassis).
    -   **Axis**: (0 1 0) for rotation.
-   **`base_link_to_caster_joint`**:
    -   **Type**: Fixed or Continuous (depending on desired caster behavior). For simplicity, we'll start with fixed.
    -   **Parent**: `base_link`.
    -   **Child**: `caster_wheel_link`.
    -   **Origin**: Position relative to `base_link` (e.g., at the front/center of the chassis).
    -   **Axis**: If continuous, axis of rotation.
