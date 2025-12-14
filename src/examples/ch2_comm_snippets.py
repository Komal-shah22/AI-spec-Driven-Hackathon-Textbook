# This file contains conceptual Python code snippets to demonstrate ROS 2 CLI interactions.
# These snippets are meant for illustration within the textbook content, not for direct execution as full ROS 2 nodes.

# --- Demonstration for `ros2 topic echo` ---
# To observe messages on a topic:
# In your terminal, after starting a ROS 2 system that publishes to /turtle1/pose (e.g., `ros2 run turtlesim turtlesim_node`):
#
#    ros2 topic echo /turtle1/pose
#
# Expected output will be a stream of geometry_msgs/msg/Pose messages like:
# ---
# x: 5.544444561004639
# y: 5.544444561004639
# theta: 0.0
# linear_velocity: 0.0
# angular_velocity: 0.0
# ---
# x: ...
#
# This shows the structure and continuous nature of topic communication.

# --- Demonstration for `ros2 service call` ---
# To call a ROS 2 service:
# In your terminal, after starting a ROS 2 system that provides /spawn service (e.g., `ros2 run turtlesim turtlesim_node`):
#
#    ros2 service call /spawn turtlesim/srv/Spawn "{x: 1.0, y: 1.0, theta: 0.0, name: 'my_turtle'}"
#
# Expected output will be the service response:
# requester_name: ''
# ---
# name: my_turtle
# ---
#
# This demonstrates a synchronous request-reply interaction.

# --- Conceptual Publisher Node (Python) ---
# A simplified conceptual outline of how a publisher node would be structured in Python.
# This is NOT a runnable node, but an illustrative concept.
#
# import rclpy
# from rclpy.node import Node
# from std_msgs.msg import String
#
# class MinimalPublisher(Node):
#     def __init__(self):
#         super().__init__('minimal_publisher')
#         self.publisher_ = self.create_publisher(String, 'topic', 10)
#         timer_period = 0.5  # seconds
#         self.timer = self.create_timer(timer_period, self.timer_callback)
#         self.i = 0
#
#     def timer_callback(self):
#         msg = String()
#         msg.data = 'Hello World: %d' % self.i
#         self.publisher_.publish(msg)
#         self.get_logger().info('Publishing: "%s"' % msg.data)
#         self.i += 1
#
# def main(args=None):
#     rclpy.init(args=args)
#     minimal_publisher = MinimalPublisher()
#     rclpy.spin(minimal_publisher)
#     minimal_publisher.destroy_node()
#     rclpy.shutdown()
#
# if __name__ == '__main__':
#     main()


# --- Conceptual Service Client Node (Python) ---
# A simplified conceptual outline of how a service client node would be structured in Python.
# This is NOT a runnable node, but an illustrative concept.
#
# import rclpy
# from rclpy.node import Node
# from example_interfaces.srv import AddTwoInts
#
# class MinimalServiceClient(Node):
#     def __init__(self):
#         super().__init__('minimal_service_client')
#         self.cli = self.create_client(AddTwoInts, 'add_two_ints')
#         while not self.cli.wait_for_service(timeout_sec=1.0):
#             self.get_logger().info('service not available, waiting again...')
#         self.req = AddTwoInts.Request()
#
#     def send_request(self, a, b):
#         self.req.a = a
#         self.req.b = b
#         self.future = self.cli.call_async(self.req)
#
# def main(args=None):
#     rclpy.init(args=args)
#     minimal_service_client = MinimalServiceClient()
#     minimal_service_client.send_request(2, 3)
#     rclpy.spin_until_future_complete(minimal_service_client, minimal_service_client.future)
#     if minimal_service_client.future.result() is not None:
#         minimal_service_client.get_logger().info(
#             'Result of add_two_ints: for %d + %d = %d' %
#             (minimal_service_client.req.a, minimal_service_client.req.b,
#              minimal_service_client.future.result().sum))
#     else:
#         minimal_service_client.get_logger().error(
#             'Service call failed %r' % (minimal_service_client.future.exception(),))
#
#     minimal_service_client.destroy_node()
#     rclpy.shutdown()
#
# if __name__ == '__main__':
#     main()
