from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='my_robot_app', # Assuming our package name is my_robot_app
            executable='minimal_publisher', # The executable name for the publisher node
            name='my_publisher', # Optional: give the node a custom name
            output='screen' # Display output to screen
        ),
        Node(
            package='my_robot_app', # Assuming our package name is my_robot_app
            executable='minimal_subscriber', # The executable name for the subscriber node
            name='my_subscriber', # Optional: give the node a custom name
            output='screen' # Display output to screen
        )
    ])