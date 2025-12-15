# باب 4: تخروپن میں سینسرز کو مربوط کرنا

## تعارف

سینسرز روبوٹ کی آنکھیں اور کان ہوتے ہیں، جو اس کے ماحول اور اندرونی حالت کے بارے میں اہم معلومات فراہم کرتے ہیں۔ تخروپن میں، ہم جانچ اور ترقی کے لیے حقیقت پسندانہ ڈیٹا پیدا کرنے کے لیے مختلف سینسرز کو ماڈل بنا سکتے ہیں۔ یہ باب آپ کو ہمارے روبوٹ کے URDF ماڈل میں LiDAR اور IMU جیسے عام سینسرز کو شامل کرنے اور ان کے ڈیٹا کو دیکھنے میں رہنمائی کرے گا۔

## تصور

روبوٹ سینسرز ماحول سے ڈیٹا اکٹھا کرتے ہیں (مثلاً، فاصلہ، تصاویر، سمت) یا خود روبوٹ سے (مثلاً، جوڑوں کے زاویے، بیٹری کی سطح)۔ تخروپن میں، ان سینسرز کو ان کے طبعی ہم منصبوں کی نقل کرنے والا ڈیٹا تیار کرنے کے لیے ماڈل بنایا جاتا ہے، جس سے ہمیں سینسر پر مبنی الگورتھم کی جانچ کرنے کی اجازت ملتی ہے۔

### LiDAR (لائٹ ڈیٹیکشن اینڈ رینجنگ)

ایک LiDAR سینسر اسپندت لیزر روشنی خارج کرکے اور منعکس روشنی کو واپس آنے میں لگنے والے وقت کی پیمائش کرکے اشیاء سے فاصلے کی پیمائش کرتا ہے۔ یہ ماحول کی نمائندگی کرنے والا ایک پوائنٹ کلاؤڈ بناتا ہے۔

### IMU (انرشیل میژرمنٹ یونٹ)

ایک IMU روبوٹ کی سمت، زاویائی رفتار، اور لکیری سرعت کی پیمائش کرتا ہے۔ یہ عام طور پر ایکسلرومیٹر، گائروسکوپ، اور بعض اوقات میگنیٹومیٹر پر مشتمل ہوتا ہے۔

## عملی: URDF میں سینسرز شامل کرنا

اب ہم اپنے `simple_robot.urdf` کو LiDAR اور IMU سینسر شامل کرکے بہتر بنائیں گے۔

سب سے پہلے، اپنی `simple_robot.urdf` فائل کھولیں:

```bash
# فرض کریں کہ آپ اپنی ROS 2 ورک اسپیس src ڈائرکٹری میں ہیں
# nano robot_description/urdf/simple_robot.urdf
```

### LiDAR سینسر شامل کرنا

اپنی `simple_robot.urdf` فائل کے `<robot>` ٹیگز کے اندر، کاسٹر وہیل جوائنٹ کے بعد، درج ذیل `<link>` اور `<joint>` عناصر شامل کریں۔

```xml
  <!-- LiDAR Link -->
  <link name="hokuyo_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <mesh filename="package://robot_description/meshes/hokuyo.dae"/>
      </geometry>
    </visual>
    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <mesh filename="package://robot_description/meshes/hokuyo.dae"/>
      </geometry>
    </collision>
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.1"/>
      <inertia ixx="0.000008" ixy="0.0" ixz="0.0" iyy="0.000008" iyz="0.0" izz="0.00001"/>
    </inertial>
  </link>

  <!-- LiDAR Joint -->
  <joint name="hokuyo_joint" type="fixed">
    <origin xyz="0.1 0 0.05" rpy="0 0 0"/>
    <parent link="base_link"/>
    <child link="hokuyo_link"/>
  </joint>

  <!-- Gazebo specific plugins for LiDAR -->
  <gazebo reference="hokuyo_link">
    <sensor type="ray" name="head_hokuyo_sensor">
      <pose>0 0 0 0 0 0</pose>
      <visualize>true</visualize>
      <update_rate>40</update_rate>
      <ray>
        <scan>
          <horizontal>
            <samples>720</samples>
            <resolution>1</resolution>
            <min_angle>-1.570796</min_angle>
            <max_angle>1.570796</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.10</min>
          <max>10.0</max>
          <resolution>0.01</resolution>
        </range>
      </ray>
      <plugin name="gazebo_ros_laser_controller" filename="libgazebo_ros_ray_sensor.so">
        <ros>
          <argument>~/out</argument>
          <remapping>~/out:=scan</remapping>
        </ros>
        <output_type>sensor_msgs/LaserScan</output_type>
        <frame_name>hokuyo_link</frame_name>
      </plugin>
    </sensor>
  </gazebo>
```

*(نوٹ: LiDAR کے لیے `<mesh>` ٹیگ کو 3D ماڈل فائل کی ضرورت ہے، مثلاً، `hokuyo.dae`۔ ایک مکمل ٹیوٹوریل کے لیے، آپ کو یہ میش فائل `robot_description/meshes/` میں فراہم کرنے کی ضرورت ہوگی۔)*

### IMU سینسر شامل کرنا

LiDAR سیکشن کے بعد درج ذیل `<link>` اور `<joint>` عناصر شامل کریں۔ سادگی کے لیے، ہم IMU کو براہ راست `base_link` سے منسلک کریں گے۔

```xml
  <!-- IMU Link -->
  <link name="imu_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.01"/>
      <inertia ixx="0.000001" ixy="0.0" ixz="0.0" iyy="0.000001" iyz="0.0" izz="0.000001"/>
    </inertial>
  </link>

  <!-- IMU Joint -->
  <joint name="imu_joint" type="fixed">
    <origin xyz="0 0 0.05" rpy="0 0 0"/>
    <parent link="base_link"/>
    <child link="imu_link"/>
  </joint>

  <!-- Gazebo specific plugins for IMU -->
  <gazebo reference="imu_link">
    <sensor type="imu" name="imu_sensor">
      <always_on>true</always_on>
      <update_rate>100</update_rate>
      <visualize>true</visualize>
      <topic>imu</topic>
      <plugin name="imu_plugin" filename="libgazebo_ros_imu_sensor.so">
        <ros>
          <argument>~/out</argument>
          <remapping>~/out:=imu</remapping>
        </ros>
        <frame_name>imu_link</frame_name>
        <initial_orientation_as_reference>false</initial_orientation_as_reference>
      </plugin>
    </sensor>
  </gazebo>
```

## خلاصہ

آپ نے کامیابی سے اپنے روبوٹ کے URDF ماڈل میں ایک LiDAR اور ایک IMU سینسر شامل کرلیا ہے، جو ان کے طرز عمل کی تقلید کے لیے گیزبو پلگ انز سے لیس ہیں۔ اگلے حصوں میں، ہم RViz جیسے ROS 2 ٹولز کا استعمال کرتے ہوئے اس سینسر ڈیٹا کو دیکھنے کا طریقہ دریافت کریں گے۔

### RViz2 کے ساتھ سینسر ڈیٹا کو دیکھنا

ایک بار جب آپ کا روبوٹ سینسرز کے ساتھ گیزبو میں لانچ ہوجاتا ہے، تو آپ RViz2 کا استعمال کرتے ہوئے سینسر ڈیٹا اور روبوٹ کی تبدیلیوں کو دیکھ سکتے ہیں۔

1. **RViz2 لانچ کریں**:
    ```bash
    rviz2
    ```
2. **`RobotModel` ڈسپلے شامل کریں**: اپنے روبوٹ کو دیکھنے کے لیے۔
3. **`LaserScan` ڈسپلے شامل کریں**: LiDAR ڈیٹا کو دیکھنے کے لیے `/scan` ٹاپک کو سبسکرائب کریں۔
4. **`IMU` ڈسپلے شامل کریں**: IMU ڈیٹا کو دیکھنے کے لیے `/imu` ٹاپک کو سبسکرائب کریں۔

### TF2 (تبدیلیاں) کو سمجھنا

**TF2** ایک ROS 2 پیکیج ہے جو متعدد کوآرڈینیٹ فریموں کا ٹریک رکھتا ہے اور ان کے درمیان تعلقات کو ایک درخت کی ساخت میں برقرار رکھتا ہے۔ یہ روبوٹکس کے لیے اہم ہے، کیونکہ سینسرز، روبوٹ کے پرزے، اور ماحول ہر ایک کے اپنے کوآرڈینیٹ سسٹم ہوتے ہیں۔ TF2 آپ کو اس طرح کے سوالات پوچھنے کی اجازت دیتا ہے: "اس مخصوص وقت پر روبوٹ کی بنیاد کے نسبت LiDAR سینسر کی پوزیشن کیا ہے؟"

**اہم تصورات**:

- **کوآرڈینیٹ فریمز**: آپ کے URDF میں ہر لنک ایک کوآرڈینیٹ فریم کی وضاحت کرتا ہے۔ سینسرز کے بھی اپنے فریم ہوتے ہیں۔
- **تبدیلیاں**: دو کوآرڈینیٹ فریموں کے درمیان تعلقات کی ریاضیاتی تفصیل۔
- **براڈکاسٹرز**: نوڈس جو تبدیلیاں شائع کرتے ہیں، اس بات کی نشاندہی کرتے ہیں کہ فریم ایک دوسرے کے نسبت کہاں ہیں۔
- **لسنرز**: نوڈس جو تبدیلیاں وصول کرتے ہیں اور کسی بھی وقت کسی بھی دو فریموں کے درمیان تعلقات کو دیکھ سکتے ہیں۔

ہمارے `simple_robot.urdf` میں، `<joint>` ٹیگز `base_link` اور `left_wheel_link`, `right_wheel_link`, `caster_wheel_link`, `hokuyo_link`, اور `imu_link` کے درمیان جامد تبدیلیوں کی واضح طور پر وضاحت کرتے ہیں۔ یہ جامد تبدیلیاں TF2 درخت کو خود بخود فراہم کی جاتی ہیں جب روبوٹ ماڈل لوڈ ہوتا ہے۔

## کوڈ کے نمونے: سینسر ڈیٹا کو سبسکرائب کرنا (rclpy)

*(یہ سیکشن T3.6 سے `sensor_logger.py` کوڈ کی مثال کا حوالہ دے گا)*

نقل شدہ سینسرز سے ڈیٹا پر کارروائی کرنے کے لیے، آپ کو ROS 2 نوڈس لکھنے کی ضرورت ہے جو سینسر ٹاپکس کو سبسکرائب کرتے ہیں۔ `sensor_logger.py` اسکرپٹ جو ہم نے پہلے بنایا تھا، یہ ظاہر کرتا ہے کہ `/scan` (LiDAR سے) اور `/imu` (IMU سے) ٹاپکس کو کیسے سبسکرائب کیا جائے اور ان کا ڈیٹا پرنٹ کیا جائے۔

`sensor_logger.py` نوڈ چلائیں:

```bash
# اپنی ROS 2 ورک اسپیس میں
# source install/setup.bash
# ros2 run sensor_subscribers sensor_logger.py
```

یہ آپ کو اپنے نقل شدہ سینسرز سے آنے والے خام ڈیٹا کا سلسلہ دکھائے گا۔

## مشقیں

1. **ایک کیمرہ سینسر شامل کریں**: اپنے `simple_robot.urdf` کو کیمرہ سینسر شامل کرنے کے لیے پھیلائیں۔ کیمرہ کی تقلید کے لیے گیزبو پلگ انز کا استعمال کریں اور RViz2 میں اس کی فیڈ دیکھیں۔
2. **TF2 لسنر**: ایک سادہ `rclpy` نوڈ لکھیں جو TF2 لسنر کا استعمال کرتا ہے تاکہ `base_link` اور آپ کے نئے شامل کردہ کیمرہ سینسر کے درمیان تبدیلی تلاش کی جاسکے۔
3. **سینسر ڈیٹا کی تشریح**: `sensor_logger.py` آؤٹ پٹ کی بنیاد پر، وضاحت کریں کہ LiDAR اور IMU سے ڈیٹا کا ہر ٹکڑا آپ کو روبوٹ کے ماحول اور حالت کے بارے میں کیا بتاتا ہے۔
