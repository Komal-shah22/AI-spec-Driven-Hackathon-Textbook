import rclpy
from rclpy.node import Node
from sensor_msgs.msg import LaserScan, Imu

class SensorLogger(Node):

    def __init__(self):
        super().__init__('sensor_logger')
        self.scan_subscription = self.create_subscription(
            LaserScan,
            '/scan',
            self.scan_callback,
            10)
        self.scan_subscription  # prevent unused variable warning

        self.imu_subscription = self.create_subscription(
            Imu,
            '/imu',
            self.imu_callback,
            10)
        self.imu_subscription  # prevent unused variable warning
        self.get_logger().info('SensorLogger node has been started.')

    def scan_callback(self, msg):
        # Log basic LiDAR scan information
        self.get_logger().info('Received LaserScan: %d ranges, min_angle: %.2f, max_angle: %.2f' %
                               (len(msg.ranges), msg.angle_min, msg.angle_max))

    def imu_callback(self, msg):
        # Log basic IMU data (orientation, angular velocity, linear acceleration)
        self.get_logger().info('Received IMU: Orientation x:%.2f, y:%.2f, z:%.2f, w:%.2f' %
                               (msg.orientation.x, msg.orientation.y, msg.orientation.z, msg.orientation.w))
        self.get_logger().info('Received IMU: Angular Velocity x:%.2f, y:%.2f, z:%.2f' %
                               (msg.angular_velocity.x, msg.angular_velocity.y, msg.angular_velocity.z))
        self.get_logger().info('Received IMU: Linear Acceleration x:%.2f, y:%.2f, z:%.2f' %
                               (msg.linear_acceleration.x, msg.linear_acceleration.y, msg.linear_acceleration.z))

def main(args=None):
    rclpy.init(args=args)
    sensor_logger = SensorLogger()
    rclpy.spin(sensor_logger)
    sensor_logger.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
