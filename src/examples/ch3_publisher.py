import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        # Create a publisher that publishes String messages to the 'topic' topic
        # with a queue size of 10.
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        # Create a timer that calls the timer_callback function every 0.5 seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello ROS 2 World: %d' % self.i
        # Publish the message
        self.publisher_.publish(msg)
        # Log the message for debugging
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    # Initialize the ROS 2 Python client library
    rclpy.init(args=args)

    # Create an instance of the MinimalPublisher node
    minimal_publisher = MinimalPublisher()

    # Spin the node to allow its callbacks to be called
    rclpy.spin(minimal_publisher)

    # Destroy the node and shutdown the ROS 2 Python client library
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
