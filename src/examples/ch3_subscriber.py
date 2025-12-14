import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):
    def __init__(self):
        super().__init__('minimal_subscriber')
        # Create a subscriber that subscribes to String messages on the 'topic' topic
        # The callback function listener_callback will be called when a message is received
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)

def main(args=None):
    # Initialize the ROS 2 Python client library
    rclpy.init(args=args)

    # Create an instance of the MinimalSubscriber node
    minimal_subscriber = MinimalSubscriber()

    # Spin the node to allow its callbacks to be called
    rclpy.spin(minimal_subscriber)

    # Destroy the node and shutdown the ROS 2 Python client library
    minimal_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
