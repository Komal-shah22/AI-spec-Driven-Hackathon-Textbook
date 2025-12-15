# باب 3: آپ کی پہلی ROS 2 ایپلی کیشن: ایک سادہ روبوٹک سسٹم بنانا

## مقصد:
ابتدائیوں کو ایک بنیادی ROS 2 ایپلی کیشن بنانے، بنانے اور چلانے کے عملی ورک فلو کے ذریعے رہنمائی کرنا۔

## سیکھنے کے مقاصد:
- ایک ROS 2 ورک اسپیس قائم کریں اور نئے پیکیج بنائیں۔
- ازگر میں سادہ پبلشر اور سبسکرائبر نوڈز لکھیں۔
- `colcon` کا استعمال کرتے ہوئے ROS 2 ایپلی کیشن بنائیں اور چلائیں۔
- انٹروسپیکشن کے لیے بنیادی ROS 2 کمانڈ لائن ٹولز کا استعمال کریں۔
- متعدد نوڈس کو آرکسٹریٹ کرنے کے لیے لانچ فائلوں کے تصور کو سمجھیں۔

## متوقع نتائج:
- کسٹم پبلشر/سبسکرائبر نوڈس کے ساتھ ایک فعال ROS 2 ورک اسپیس۔
- `colcon` بلڈ سسٹم سے واقفیت۔
- `ros2 run`, `ros2 node list`, `ros2 topic list`, `ros2 launch` استعمال کرنے کی اہلیت۔
- سادہ ایپلی کیشن کے لیے ورکنگ لانچ فائل۔

## مواد کا خاکہ:
### 3.1 ROS 2 ورک اسپیس: اپنے کوڈ کو منظم کرنا

ROS 2 میں، ایک **ورک اسپیس** ایک ڈائرکٹری ہے جہاں آپ اپنے سورس کوڈ کو منظم کرتے ہیں، اپنے پیکیج بناتے ہیں، اور اپنے ایگزیکیوٹیبل انسٹال کرتے ہیں۔ یہ آپ کے ROS 2 پروجیکٹس کو منظم کرنے کے لیے ایک بنیادی تصور ہے۔ ایک عام ورک اسپیس کی ساخت اس طرح نظر آتی ہے:

```
<workspace_name>/
├── src/                # آپ کے ROS 2 پیکیجز پر مشتمل ہے
│   ├── my_package_1/
│   ├── my_package_2/
│   └── ...
├── install/            # جہاں مرتب شدہ ایگزیکیوٹیبل اور لائبریریاں انسٹال ہیں
├── log/                # لاگز بنائیں اور ٹیسٹ کریں
├── build/              # انٹرمیڈیٹ بلڈ فائلیں۔
└── .colcon_bash        # ماحولیاتی سیٹ اپ فائل
```

ورک اسپیس بنانے کے لیے:
1. `src` ڈائرکٹری بنائیں: `mkdir -p <workspace_name>/src`
2. ورک اسپیس میں تشریف لے جائیں: `cd <workspace_name>`
3. اپنی ROS 2 انسٹالیشن کا ماخذ (مثال کے طور پر، `source /opt/ros/humble/setup.bash`)
4. اختیاری طور پر، `install/` اور `build/` ڈائرکٹریاں بنانے کے لیے ایک خالی ورک اسپیس بنائیں: `colcon build`

### 3.2 اپنا پہلا ROS 2 پیکیج بنانا (ازگر)

ایک **پیکیج** ROS 2 میں سافٹ ویئر کی جوہری اکائی ہے۔ اس میں نوڈس، لانچ فائلیں، پیغام کی تعریفیں، اور دیگر وسائل شامل ہیں۔ ہم اپنی پہلی درخواست کے لیے ایک ازگر پیکیج بنائیں گے۔

اپنی ورک اسپیس کی `src` ڈائرکٹری میں ایک نیا ازگر پیکیج بنانے کے لیے:

```bash
cd <workspace_name>/src
ros2 pkg create --build-type ament_python my_robot_app
```

یہ کمانڈ `my_robot_app` نامی ایک ڈائرکٹری بناتا ہے جس میں ایک بنیادی ڈھانچہ ہوتا ہے، جس میں `setup.py` اور `package.xml` فائل شامل ہوتی ہے۔

**`my_robot_app/package.xml`**: آپ کے پیکیج کے بارے میں میٹا ڈیٹا پر مشتمل ہے (نام، تفصیل، ورژن، انحصار)۔
**`my_robot_app/setup.py`**: بیان کرتا ہے کہ آپ کا ازگر کوڈ کس طرح بنایا اور انسٹال کیا جاتا ہے۔ آپ یہاں اپنی قابل عمل اسکرپٹس کی وضاحت کریں گے۔
**`my_robot_app/my_robot_app/__init__.py`**: ایک خالی فائل جو ڈائرکٹری کو ازگر پیکیج بناتی ہے۔
**`my_robot_app/my_robot_app/<your_node_file.py>`**: یہ وہ جگہ ہے جہاں آپ اپنے ازگر نوڈز لکھیں گے۔
### 3.3 ایک سادہ ROS 2 پبلشر نوڈ لکھنا (ازگر)

ایک پبلشر نوڈ ایک مخصوص موضوع پر ڈیٹا (پیغامات) بھیجنے کا ذمہ دار ہے۔ یہاں ایک سادہ ازگر پبلشر نوڈ ہے جو "ہیلو ROS 2 ورلڈ" پیغامات بھیجتا ہے:

```python
# src/examples/ch3_publisher.py
import rclpy
from rclpy.node import Node
from std_msgs.msg import String # معیاری سٹرنگ پیغام کی قسم درآمد کریں

class MinimalPublisher(Node):
    def __init__(self):
        # نوڈ کو 'minimal_publisher' نام سے شروع کریں
        super().__init__('minimal_publisher')
        # ایک پبلشر بنائیں جو 'topic' موضوع پر سٹرنگ پیغامات شائع کرتا ہے
        # دوسرا دلیل (10) QoS تاریخ کی گہرائی ہے
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        # ایک ٹائمر بنائیں جو ہر 0.5 سیکنڈ میں timer_callback فنکشن کو کال کرتا ہے
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String() # ایک نیا سٹرنگ پیغام آبجیکٹ بنائیں
        msg.data = 'Hello ROS 2 World: %d' % self.i # پیغام کا ڈیٹا سیٹ کریں
        self.publisher_.publish(msg) # پیغام شائع کریں
        # ڈیبگنگ کے لیے پیغام کو کنسول پر لاگ کریں
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    # ROS 2 ازگر کلائنٹ لائبریری شروع کریں
    rclpy.init(args=args)

    # ہمارے MinimalPublisher نوڈ کی ایک مثال بنائیں
    minimal_publisher = MinimalPublisher()

    # نوڈ کو زندہ رکھیں، اس کے کال بیکس (جیسے ٹائمر) کو کال کرنے کی اجازت دیں
    rclpy.spin(minimal_publisher)

    # نوڈ کو صاف طور پر تباہ کریں اور ROS 2 ازگر کلائنٹ لائبریری کو بند کردیں
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

**وضاحت:**
- `import rclpy` اور `from rclpy.node import Node`: یہ لائنیں ضروری ROS 2 ازگر کلائنٹ لائبریری کے اجزاء درآمد کرتی ہیں۔
- `from std_msgs.msg import String`: یہ `std_msgs` پیکیج سے `String` پیغام کی قسم درآمد کرتا ہے، جو سادہ متن کے لیے ایک معیاری ROS 2 پیغام ہے۔
- `MinimalPublisher(Node)`: ہماری کلاس `rclpy.node.Node` سے وراثت میں ملتی ہے، جو اسے ROS 2 نوڈ بناتی ہے۔
- `super().__init__('minimal_publisher')`: بنیادی `Node` کلاس کو شروع کرتا ہے اور ہمارے نوڈ کو ایک منفرد نام دیتا ہے۔
- `self.create_publisher(String, 'topic', 10)`: ایک پبلشر بناتا ہے جو `'topic'` نامی موضوع پر `String` پیغامات بھیجے گا۔ `10` QoS تاریخ کی گہرائی ہے، جو اس بات کی نشاندہی کرتی ہے کہ کتنے پیغامات کو بفر کرنا ہے۔
- `self.create_timer(timer_period, self.timer_callback)`: ہر 0.5 سیکنڈ میں `timer_callback` کو کال کرنے کے لیے ایک ٹائمر سیٹ کرتا ہے۔
- `timer_callback`: اس فنکشن کو ٹائمر کے ذریعے کال کیا جاتا ہے۔ یہ ایک `String` پیغام بناتا ہے، اس کا `data` فیلڈ سیٹ کرتا ہے، اسے شائع کرتا ہے، اور کارروائی کو لاگ کرتا ہے۔
- `rclpy.init(args=args)` اور `rclpy.spin(minimal_publisher)`: یہ لائنیں ROS 2 سسٹم کو شروع کرتی ہیں اور نوڈ کو چلاتی رہتی ہیں، واقعات اور کال بیکس پر کارروائی کرتی ہیں۔
- `minimal_publisher.destroy_node()` اور `rclpy.shutdown()`: یہ نوڈ اور ROS 2 کلائنٹ لائبریری کی صاف بندش کو یقینی بناتے ہیں۔
### 3.4 ایک سادہ ROS 2 سبسکرائبر نوڈ لکھنا (ازگر)

ایک سبسکرائبر نوڈ ایک مخصوص موضوع سے ڈیٹا (پیغامات) وصول کرنے کا ذمہ دار ہے۔ یہاں ایک سادہ ازگر سبسکرائبر نوڈ ہے جو "ہیلو ROS 2 ورلڈ" پیغامات سنتا ہے:

```python
# src/examples/ch3_subscriber.py
import rclpy
from rclpy.node import Node
from std_msgs.msg import String # معیاری سٹرنگ پیغام کی قسم درآمد کریں

class MinimalSubscriber(Node):
    def __init__(self):
        # نوڈ کو 'minimal_subscriber' نام سے شروع کریں
        super().__init__('minimal_subscriber')
        # ایک سبسکرپشن بنائیں جو 'topic' موضوع پر سٹرنگ پیغامات سنتا ہے
        # کال بیک فنکشن listener_callback اس وقت کال کیا جائے گا جب کوئی پیغام موصول ہوگا
        self.subscription = self.create_subscription(
            String,       # پیغام کی قسم
            'topic',      # موضوع کا نام
            self.listener_callback, # کال بیک فنکشن
            10)           # QoS تاریخ کی گہرائی
        self.subscription  # غیر استعمال شدہ متغیر انتباہ کو روکیں

    def listener_callback(self, msg):
        # موصولہ پیغام کو کنسول پر لاگ کریں
        self.get_logger().info('I heard: "%s"' % msg.data)

def main(args=None):
    # ROS 2 ازگر کلائنٹ لائبریری شروع کریں
    rclpy.init(args=args)

    # ہمارے MinimalSubscriber نوڈ کی ایک مثال بنائیں
    minimal_subscriber = MinimalSubscriber()

    # نوڈ کو زندہ رکھیں، اس کے کال بیکس (جیسے سبسکرپشن) کو کال کرنے کی اجازت دیں
    rclpy.spin(minimal_subscriber)

    # نوڈ کو صاف طور پر تباہ کریں اور ROS 2 ازگر کلائنٹ لائبریری کو بند کردیں
    minimal_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

**وضاحت:**
- `super().__init__('minimal_subscriber')`: نوڈ کو `minimal_subscriber` نام سے شروع کرتا ہے۔
- `self.create_subscription(String, 'topic', self.listener_callback, 10)`: ایک سبسکرائبر بناتا ہے جو `'topic'` موضوع پر `String` پیغامات سنتا ہے۔ جب کوئی پیغام آتا ہے، تو `listener_callback` کو طلب کیا جاتا ہے۔
- `listener_callback(self, msg)`: یہ فنکشن `String` پیغام آبجیکٹ وصول کرتا ہے اور اس کے مواد کو لاگ کرتا ہے۔
- `main` فنکشن کی ساخت پبلشر کی طرح ہے، اس بات کو یقینی بناتی ہے کہ نوڈ مناسب طریقے سے شروع، گھماؤ، اور بند ہو۔
### 3.5 اپنے ROS 2 پیکیج کو `colcon` کے ساتھ بنانا

ایک بار جب آپ اپنا ROS 2 پیکیج بنا لیں اور اپنے ازگر نوڈز شامل کرلیں، تو اگلا مرحلہ اسے بنانا ہے۔ ROS 2 `colcon` کو اپنے بنیادی بلڈ ٹول کے طور پر استعمال کرتا ہے۔ `colcon` ایک ورسٹائل کمانڈ لائن ٹول ہے جو ایک ورک اسپیس کے اندر متعدد پیکیجز کو مرتب، لنک اور انسٹال کرسکتا ہے۔

اپنا `my_robot_app` پیکیج (اور اپنی ورک اسپیس میں موجود کوئی دوسرا پیکیج) بنانے کے لیے:

1. **اپنی ورک اسپیس روٹ پر تشریف لے جائیں:**
    ```bash
    cd <workspace_name>
    ```
2. **اپنے ROS 2 ماحول کا ماخذ:**
    ```bash
    source /opt/ros/humble/setup.bash
    ```
3. **`colcon build` چلائیں:**
    ```bash
    colcon build
    ```
    یہ کمانڈ کرے گا:
    - اپنی `src` ڈائرکٹری میں تمام ROS 2 پیکیجز تلاش کریں۔
    - اپنے ازگر کوڈ کو مرتب کریں (اگرچہ ازگر پیکیجز میں زیادہ تر فائلیں کاپی کرنا شامل ہے)۔
    - ضروری فائلیں (ایگزیکیوٹیبلز، ازگر ماڈیولز) اپنی ورک اسپیس کی `install/` ڈائرکٹری میں انسٹال کریں۔

`colcon build` مکمل ہونے کے بعد، آپ کو اپنے نئے پیکیج کے ایگزیکیوٹیبلز اور ازگر ماڈیولز کو اپنے ماحول میں دستیاب کرنے کے لیے **ورک اسپیس کی سیٹ اپ فائل کا ماخذ** بنانا ہوگا۔

```bash
source install/setup.bash
```

یہ ایک عام رواج ہے کہ اس `source install/setup.bash` کمانڈ کو اپنی `~/.bashrc` فائل میں شامل کریں (مرکزی ROS 2 انسٹالیشن کا ماخذ بنانے کے بعد) تاکہ جب آپ نیا ٹرمینل کھولیں تو آپ کی ورک اسپیس ہمیشہ ماخذ ہو۔

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
```

*(نوٹ: `~/ros2_ws` کو اپنی ورک اسپیس کے اصل راستے سے تبدیل کریں۔)*
### 3.6 اپنے نوڈس چلانا: `ros2 run` اور بنیادی انٹروسپیکشن

اپنا پیکیج بنانے کے بعد، اب آپ اپنے نوڈس چلا سکتے ہیں اور بنیادی ROS 2 کمانڈ لائن ٹولز کا استعمال کرتے ہوئے ان کے رویے کا مشاہدہ کرسکتے ہیں۔

#### `ros2 run`: ایک نوڈ پر عمل درآمد

`ros2 run` کمانڈ آپ کو ایک مرتب شدہ پیکیج سے ایک نوڈ پر عمل درآمد کرنے کی اجازت دیتی ہے۔ عمومی نحو یہ ہے:

```bash
ros2 run <package_name> <executable_name>
```

ہمارے `my_robot_app` پیکیج کے لیے، اگر آپ نے اپنے پبلشر اور سبسکرائبر نوڈس کو قابل عمل بنانے کے لیے `setup.py` کو کنفیگر کیا ہے، تو آپ انہیں اس طرح چلائیں گے (الگ الگ ٹرمینلز میں):

**ٹرمینل 1 (پبلشر):**
```bash
ros2 run my_robot_app minimal_publisher
```

**ٹرمینل 2 (سبسکرائبر):**
```bash
ros2 run my_robot_app minimal_subscriber
```

آپ کو پبلشر لاگنگ پیغامات، اور سبسکرائبر لاگنگ دیکھنا چاہئے کہ اس نے ان پیغامات کو "سنا" ہے۔

#### `ros2 node`: نوڈس کا معائنہ

`ros2 node` کمانڈ آپ کو اپنے ROS 2 گراف میں فعال نوڈس کا معائنہ کرنے میں مدد کرتی ہے۔

- `ros2 node list`: تمام فی الحال چلنے والے نوڈس کی فہرست بناتا ہے۔
    ```bash
    ros2 node list
    # متوقع آؤٹ پٹ (پبلشر اور سبسکرائبر چلانے کے بعد):
    # /minimal_publisher
    # /minimal_subscriber
    ```

#### `ros2 topic`: ٹاپکس کا معائنہ

`ros2 topic` کمانڈ ٹاپکس کے ساتھ تعامل اور معائنہ کے لیے استعمال ہوتی ہے۔

- `ros2 topic list`: تمام فی الحال فعال ٹاپکس کی فہرست بناتا ہے۔
    ```bash
    ros2 topic list
    # متوقع آؤٹ پٹ:
    # /parameter_events
    # /rosout
    # /topic  # یہ ہمارا کسٹم ٹاپک ہے
    ```
- `ros2 topic echo <topic_name>`: ایک مخصوص موضوع پر شائع ہونے والے پیغامات دکھاتا ہے۔
    ```bash
    ros2 topic echo /topic
    # متوقع آؤٹ پٹ ہمارے پبلشر سے سٹرنگ پیغامات کا ایک سلسلہ ہوگا۔
    ```
- `ros2 topic info <topic_name>`: ایک موضوع کے بارے میں معلومات فراہم کرتا ہے، بشمول اس کی قسم اور پبلشرز/سبسکرائبرز کی تعداد۔
    ```bash
    ros2 topic info /topic
    # متوقع آؤٹ پٹ:
    # Type: std_msgs/msg/String
    # Publishers: 1
    # Subscribers: 1
    ```
### 3.7 لانچ فائلیں: متعدد نوڈس کو آرکسٹریٹ کرنا

حقیقی دنیا کی ROS 2 ایپلی کیشنز میں، آپ کے پاس اکثر بہت سے نوڈس ہوں گے جنہیں بیک وقت اور مخصوص کنفیگریشنز کے ساتھ شروع کرنے کی ضرورت ہوتی ہے۔ الگ الگ ٹرمینلز میں ہر نوڈ کو دستی طور پر چلانا بوجھل ہوسکتا ہے۔ یہ وہ جگہ ہے جہاں **لانچ فائلیں** آتی ہیں۔

ایک لانچ فائل متعدد ROS 2 نوڈس کی وضاحت اور شروع کرنے، ان کے پیرامیٹرز سیٹ کرنے، اور یہاں تک کہ شیل کمانڈز پر عمل درآمد کرنے کا ایک آسان طریقہ ہے، یہ سب ایک ہی کمانڈ سے ہے۔ ROS 2 بنیادی طور پر ازگر پر مبنی لانچ فائلیں استعمال کرتا ہے۔

ہمارے پبلشر اور سبسکرائبر دونوں نوڈس کو شروع کرنے کے لیے یہاں ایک سادہ ازگر لانچ فائل ہے:

```python
# src/examples/ch3_launch.py
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='my_robot_app', # آپ کے ROS 2 پیکیج کا نام
            executable='minimal_publisher', # پبلشر نوڈ کے لیے قابل عمل نام
            name='my_publisher_node', # اختیاری: نوڈ کو ایک کسٹم نام دیں
            output='screen' # نوڈ آؤٹ پٹ کو اسکرین پر ڈسپلے کریں
        ),
        Node(
            package='my_robot_app', # آپ کے ROS 2 پیکیج کا نام
            executable='minimal_subscriber', # سبسکرائبر نوڈ کے لیے قابل عمل نام
            name='my_subscriber_node', # اختیاری: نوڈ کو ایک کسٹم نام دیں
            output='screen' # نوڈ آؤٹ پٹ کو اسکرین پر ڈسپلے کریں
        )
    ])
```

**وضاحت:**
- `from launch import LaunchDescription`: لانچ کی تفصیل بنانے کے لیے مرکزی کلاس درآمد کرتا ہے۔
- `from launch_ros.actions import Node`: `Node` ایکشن درآمد کرتا ہے، جو لانچ کیے جانے والے ROS 2 نوڈ کی نمائندگی کرتا ہے۔
- `generate_launch_description()`: یہ فنکشن ازگر لانچ فائل میں موجود ہونا چاہئے اور `LaunchDescription` آبجیکٹ واپس کرتا ہے۔
- `LaunchDescription([...])`: انجام دینے کے لیے اعمال کی فہرست پر مشتمل ہے۔ یہاں، ہم دو `Node` اعمال شروع کر رہے ہیں۔
- `Node(...)`:
    - `package`: ROS 2 پیکیج کا نام جہاں نوڈ واقع ہے۔
    - `executable`: نوڈ چلانے والی ازگر اسکرپٹ کا نام (بغیر `.py` توسیع کے)، جیسا کہ `setup.py` میں بیان کیا گیا ہے۔
    - `name`: ROS گراف میں نوڈ کی اس مخصوص مثال کے لیے ایک اختیاری، کسٹم نام۔
    - `output='screen'`: نوڈ کے لاگ آؤٹ پٹ کو ٹرمینل پر بھیجتا ہے جہاں لانچ فائل چلائی جاتی ہے۔

اس لانچ فائل کو چلانے کے لیے، آپ عام طور پر استعمال کریں گے:

```bash
ros2 launch my_robot_app ch3_launch.py
```

*(نوٹ: `ch3_launch.py` میں `package` اور `executable` کے لیے قابل عمل نام اس بات پر منحصر ہیں کہ `my_robot_app` کا `setup.py` کس طرح کنفیگر کیا گیا ہے۔ یہ فرض کرتے ہوئے کہ `minimal_publisher` اور `minimal_subscriber` وہاں بیان کیے گئے ہیں۔)*
### 3.8 خلاصہ اور اہم نکات
### 3.9 مشقیں
