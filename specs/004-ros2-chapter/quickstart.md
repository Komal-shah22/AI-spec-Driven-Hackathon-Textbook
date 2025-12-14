# Quickstart: ROS 2 Environment Setup

This document provides a quick guide to setting up the ROS 2 development environment on Ubuntu 22.04 LTS (Jammy Jellyfish).

## 1. System Update and Dependencies

First, ensure your system is up-to-date and install essential development tools:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y build-essential cmake git python3-pip python3-colcon-common-extensions
```

## 2. Configure Locale

ROS 2 requires a UTF-8 locale. Set it up as follows:

```bash
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
```

## 3. Add ROS 2 Repository

Add the ROS 2 GPG key and the repository to your system:

```bash
sudo apt install -y software-properties-common apt-transport-https ca-certificates curl
curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

## 4. Install ROS 2 Humble Hawksbill

Update your apt cache and install the ROS 2 Humble desktop environment:

```bash
sudo apt update
sudo apt install -y ros-humble-desktop
```

This will install ROS 2 base packages, development tools (like `rviz2`, `rqt`), and essential libraries.

## 5. Environment Setup

To use ROS 2 commands, you need to source the setup script. It's recommended to add this to your `~/.bashrc` for automatic sourcing:

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## 6. Install Python ROS 2 Development Tools

For Python development with ROS 2, install these additional packages:

```bash
sudo apt install -y python3-rosdep ros-humble-ros-environment python3-argcomplete
```
Initialize `rosdep`:
```bash
sudo rosdep init
rosdep update
```

## 7. Verify Installation

You can verify your installation by running a simple ROS 2 command:

```bash
ros2 run turtlesim turtlesim_node
ros2 run teleop_twist_turtle teleop_twist_turtle
```
You should see a turtle simulation window and be able to control it with your arrow keys.

Congratulations! Your ROS 2 Humble development environment is now set up.
