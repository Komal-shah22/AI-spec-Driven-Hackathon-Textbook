```mermaid
graph TD
    A[Robot (URDF)] --> B(Links);
    A --> C(Joints);
    B -- Defines Properties --> D{Visual};
    B --> E{Collision};
    B --> F{Inertial};
    C -- Connects --> G(Two Links);
    C -- Defines Kinematics --> H{Type};
    C --> I{Origin};
    C --> J{Axis};
```