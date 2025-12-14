```mermaid
graph TD
    A[Robot (URDF)] --> B(Base Link);
    A --> C(LiDAR Link);
    A --> D(IMU Link);
    B -- Fixed Joint --> C;
    B -- Fixed Joint --> D;
    C -- Publishes Scan Data --> E[ROS 2 Topic: /scan];
    D -- Publishes IMU Data --> F[ROS 2 Topic: /imu];
    E --> G[Sensor Logger Node];
    F --> G;
    G -- Logs Data --> H[Terminal/File];
    A -- Robot State --> I[TF2 Tree];
    I -- Transforms --> G;
```