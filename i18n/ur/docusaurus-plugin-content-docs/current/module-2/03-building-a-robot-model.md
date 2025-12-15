---
id: 03-building-a-robot-model
slug: /module-2/building-a-robot-model
---

# باب 3: روبوٹ ماڈل بنانا (URDF)

## تعارف

پچھلے باب میں، ہم نے تخروپن کے ماحول کو دریافت کیا۔ اب، اس مجازی دنیا میں اپنے روبوٹ کو زندہ کرنے کا وقت آگیا ہے۔ یہ باب آپ کو یونیفائیڈ روبوٹ ڈسکرپشن فارمیٹ (URDF) کا استعمال کرتے ہوئے روبوٹ ماڈل بنانے میں رہنمائی کرے گا۔

## تصور

**یونیفائیڈ روبوٹ ڈسکرپشن فارمیٹ (URDF)** ایک XML فائل فارمیٹ ہے جو ROS میں روبوٹ کے تمام پہلوؤں کو بیان کرنے کے لیے استعمال ہوتا ہے، بشمول اس کی حرکیاتی اور متحرک خصوصیات، بصری ظاہری شکل، اور تصادم کی خصوصیات۔ ایک URDF ماڈل RViz جیسے ٹولز میں روبوٹ کو دیکھنے اور اسے گیزبو میں نقل کرنے کے لیے ضروری ہے۔

### کلیدی URDF عناصر

- **`<link>`**: روبوٹ کے ایک سخت جسم کی نمائندگی کرتا ہے (مثلاً، چیسس، پہیہ، سینسر)۔ ہر لنک میں ہے:
    - **`<visual>`**: گرافیکل خصوصیات (جیومیٹری، رنگ) کی وضاحت کرتا ہے۔
    - **`<collision>`**: تصادم کا پتہ لگانے کے لیے طبعی خصوصیات کی وضاحت کرتا ہے۔
    - **`<inertial>`**: طبیعیات کے تخروپن کے لیے کمیت اور جڑتا کی خصوصیات کی وضاحت کرتا ہے۔
- **`<joint>`**: دو لنکس کو جوڑتا ہے، ان کے حرکیاتی تعلقات کی وضاحت کرتا ہے۔ ہر جوڑ میں ہے:
    - **`type`**: مثلاً، `continuous` (پہیوں کے لیے)، `revolute`، `fixed`۔
    - **`<parent>`** اور **`<child>`**: دو لنکس جنہیں یہ جوڑتا ہے۔
    - **`<origin>`**: پیرنٹ لنک کے نسبت چائلڈ لنک کی تبدیلی (پوزیشن اور سمت)۔
    - **`<axis>`**: گردشی جوڑوں کے لیے گردش کا محور۔

## عملی: ایک سادہ تفریق ڈرائیو روبوٹ URDF بنانا

اب ہم پچھلے مرحلے میں ڈیزائن کیے گئے سادہ تفریق ڈرائیو روبوٹ کے لیے URDF بنائیں گے۔

سب سے پہلے، اپنے روبوٹ کی تفصیل کے لیے ایک نیا ROS 2 پیکیج بنائیں۔ اس ٹیوٹوریل کے مقصد کے لیے، ہم فرض کرتے ہیں کہ آپ نے ROS 2 ورک اسپیس ترتیب دی ہے۔

اپنے ROS 2 ورک اسپیس `src` ڈائرکٹری میں جائیں اور `robot_description` پیکیج بنائیں (اگر کاموں کے حصے کے طور پر دستی طور پر پہلے سے نہیں کیا گیا ہے):

```bash
# فرض کریں کہ آپ اپنی ROS 2 ورک اسپیس روٹ میں ہیں، یا وہاں جائیں
# مثال کے طور پر: cd ~/ros2_ws/src
ros2 pkg create --build-type ament_cmake robot_description
```

`robot_description` پیکیج میں جائیں اور `urdf` ڈائرکٹری بنائیں:

```bash
cd robot_description
mkdir urdf
```

اب، `urdf` ڈائرکٹری کے اندر `simple_robot.urdf` نامی فائل بنائیں:

```bash
touch urdf/simple_robot.urdf
```

`urdf/simple_robot.urdf` کھولیں اور درج ذیل مواد شامل کریں۔ یہ URDF `base_link`، دو پہیوں، اور ایک کاسٹر وہیل کی وضاحت کرتا ہے۔

```xml
<?xml version="1.0"?>
<robot name="simple_differential_robot">

  <!-- Base Link -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.3 0.2 0.1"/>
      </geometry>
      <material name="gray">
        <color rgba="0.7 0.7 0.7 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.3 0.2 0.1"/>
      </geometry>
    </collision>
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="1.0"/>
      <inertia ixx="0.005833" ixy="0.0" ixz="0.0" iyy="0.005833" iyz="0.0" izz="0.004167"/>
    </inertial>
  </link>

  <!-- Left Wheel Link -->
  <link name="left_wheel_link">
    <visual>
      <geometry>
        <cylinder radius="0.05" length="0.02"/>
      </geometry>
      <material name="black">
        <color rgba="0 0 0 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <cylinder radius="0.05" length="0.02"/>
      </geometry>
    </collision>
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.1"/>
      <inertia ixx="0.000125" ixy="0.0" ixz="0.0" iyy="0.000125" iyz="0.0" izz="0.00025"/>
    </inertial>
  </link>

  <!-- Right Wheel Link -->
  <link name="right_wheel_link">
    <visual>
      <geometry>
        <cylinder radius="0.05" length="0.02"/>
      </geometry>
      <material name="black"/>
    </visual>
    <collision>
      <geometry>
        <cylinder radius="0.05" length="0.02"/>
      </geometry>
    </collision>
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.1"/>
      <inertia ixx="0.000125" ixy="0.0" ixz="0.0" iyy="0.000125" iyz="0.0" izz="0.00025"/>
    </inertial>
  </link>

  <!-- Caster Wheel Link -->
  <link name="caster_wheel_link">
    <visual>
      <geometry>
        <sphere radius="0.02"/>
      </geometry>
      <material name="silver">
        <color rgba="0.8 0.8 0.8 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <sphere radius="0.02"/>
      </geometry>
    </collision>
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.01"/>
      <inertia ixx="0.0000008" ixy="0.0" ixz="0.0" iyy="0.0000008" iyz="0.0" izz="0.0000008"/>
    </inertial>
  </link>

  <!-- Joints -->
  <joint name="base_link_to_left_wheel_joint" type="continuous">
    <parent link="base_link"/>
    <child link="left_wheel_link"/>
    <origin xyz="0.1 -0.11 0" rpy="-1.57079632679 0 0"/>
    <axis xyz="0 0 1"/>
  </joint>

  <joint name="base_link_to_right_wheel_joint" type="continuous">
    <parent link="base_link"/>
    <child link="right_wheel_link"/>
    <origin xyz="0.1 0.11 0" rpy="1.57079632679 0 0"/>
    <axis xyz="0 0 1"/>
  </joint>

  <joint name="base_link_to_caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="caster_wheel_link"/>
    <origin xyz="0.13 0 -0.04" rpy="0 0 0"/>
  </joint>

</robot>
```

## خلاصہ

آپ نے کامیابی سے ایک سادہ تفریق ڈرائیو روبوٹ کے لیے ایک URDF ماڈل بنایا ہے۔ اس ماڈل کو اب RViz میں دیکھا جا سکتا ہے اور گیزبو میں نقل کیا جا سکتا ہے۔ اگلے باب میں، ہم اس روبوٹ ماڈل میں سینسر شامل کرنے اور انہیں ROS 2 کے ساتھ مربوط کرنے کا طریقہ سیکھیں گے۔

## مشقیں

1. **URDF عناصر کی وضاحت کریں**: URDF میں `<link>` اور `<joint>` عناصر کے مقصد کی وضاحت کریں، اور وہ عام طور پر کون سے ذیلی عناصر پر مشتمل ہوتے ہیں۔
2. **روبوٹ کے طول و عرض میں ترمیم کریں**: `simple_robot.urdf` میں `base_link` کے طول و عرض کو تبدیل کریں اور RViz میں تبدیلیوں کا مشاہدہ کریں (روبوٹ لانچ کرنے کے بعد)۔
3. **ایک نیا لنک شامل کریں**: اپنے روبوٹ کے URDF میں ایک سادہ نیا لنک شامل کریں (مثلاً، ایک کیمرہ ماؤنٹ)، اسے ایک فکسڈ جوڑ کے ساتھ `base_link` سے منسلک کریں۔
