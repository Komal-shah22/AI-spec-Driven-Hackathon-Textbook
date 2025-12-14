import rclpy
from rclpy.node import Node
from geometry_msgs.msg import PointStamped
import math

class SimplePointPublisher(Node):
    def __init__(self):
        super().__init__('simple_point_publisher')
        self.publisher_ = self.create_publisher(PointStamped, 'point_data', 10)
        self.timer_period = 0.1  # seconds
        self.timer = self.create_timer(self.timer_period, self.timer_callback)
        self.angle = 0.0
        self.get_logger().info('SimplePointPublisher node started, publishing points.')

    def timer_callback(self):
        msg = PointStamped()
        msg.header.stamp = self.get_clock().now().to_msg()
        msg.header.frame_id = 'base_link' # A common frame_id for visualization

        # Publish a point that moves in a circle
        msg.point.x = 2.0 * math.cos(self.angle)
        msg.point.y = 2.0 * math.sin(self.angle)
        msg.point.z = 0.5

        self.publisher_.publish(msg)
        # self.get_logger().info(f'Publishing point: x={msg.point.x:.2f}, y={msg.point.y:.2f}')
        self.angle += 0.05
        if self.angle > 2 * math.pi:
            self.angle -= 2 * math.pi

def main(args=None):
    rclpy.init(args=args)
    simple_point_publisher = SimplePointPublisher()
    rclpy.spin(simple_point_publisher)
    simple_point_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()