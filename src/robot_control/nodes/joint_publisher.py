import rclpy
from rclpy.node import Node
from std_msgs.msg import Float64MultiArray

class JointPublisher(Node):

    def __init__(self):
        super().__init__('joint_publisher')
        self.publisher_ = self.create_publisher(Float64MultiArray, '/joint_commands', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0.0

    def timer_callback(self):
        msg = Float64MultiArray()
        # Example: command both wheels to rotate
        msg.data = [self.i, self.i] # Command for left_wheel and right_wheel
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 0.1

def main(args=None):
    rclpy.init(args=args)

    joint_publisher = JointPublisher()

    rclpy.spin(joint_publisher)

    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)
    joint_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
