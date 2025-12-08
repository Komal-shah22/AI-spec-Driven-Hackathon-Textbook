


import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="RoboLearn Style"
      description="Build robots that understand the physical world"
    >

      {/* ---------------- HERO SECTION ---------------- */}
      <section className={styles.heroSection}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Physical AI  & <span className={styles.highlight}>Humanoid</span>
            <br />
            Robotics Textbook.
          </h1>

          <p className={styles.subtitle}>
            Master Physical AI from browser to production, ROS 2, Isaac Sim, and
            Vision-Language-Action models.
            <span className={styles.free}> Free forever.</span>
          </p>

          <div className={styles.buttons}>
            <a className={styles.btnPrimary} href="/docs/module-1">
              Get Started →
            </a>
            <a className={styles.btnSecondary} href="/docs/module-1">
              Browse Content
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {/* Optional robot image */}
          <img src="https://assets-v2.lottiefiles.com/a/b80c8f58-1166-11ee-bad3-8fb1e44c9ce0/Pzwmsjc4m2.gif" className={styles.robotImg} alt="Robot GIF" />
        </div>
      </section>

      {/* ---------------- MODULES SECTION ---------------- */}
      <section className={styles.modulesSection}>
        <h1 className={styles.modulesHeading}>Autonomous Humanoid Systems</h1>
        <p className={styles.modulesSub}>
          Progressive learning from robot communication to conversational AI.
          Each module builds on the previous, leading to a voice-controlled
          humanoid robot.
        </p>

        <div className={styles.modulesGrid}>

          {/* -------- MODULE 1 -------- */}
          <div className={styles.moduleCard}>
            <div className={styles.moduleNumber}>01</div>
            <h3 className={styles.moduleTitle}>The Robotic Nervous System</h3>
            <p className={styles.moduleDesc}>
              Master ROS 2 middleware. Build nodes, topics, services,
              and scalable robotic communication systems.
            </p>
            <ul className={styles.moduleList}>
              <li>Weeks 1–5</li>
              <li>Python + rclpy + URDF</li>
              <li>ROS 2 Architecture & Concepts</li>
            </ul>
          </div>

          {/* -------- MODULE 2 -------- */}
          <div className={styles.moduleCard}>
            <div className={styles.moduleNumber}>02</div>
            <h3 className={styles.moduleTitle}>The Digital Twin</h3>
            <p className={styles.moduleDesc}>
              Simulate physics-accurate robots in Gazebo & Unity.
              Test robotics logic in virtual worlds before deploying to hardware.
            </p>
            <ul className={styles.moduleList}>
              <li>Weeks 6–7</li>
              <li>Gazebo + Unity + SDF</li>
              <li>Sensor Models & Data Pipelines</li>
            </ul>
          </div>

          {/* -------- MODULE 3 -------- */}
          <div className={styles.moduleCard}>
            <div className={styles.moduleRibbon}>Hardware Intensive</div>
            <div className={styles.moduleNumber}>03</div>
            <h3 className={styles.moduleTitle}>The AI-Robot Brain</h3>
            <p className={styles.moduleDesc}>
              AI-powered perception using NVIDIA Isaac.
              Synthetic data, photorealistic simulation, & accelerated SLAM.
            </p>
            <ul className={styles.moduleList}>
              <li>Weeks 8–12</li>
              <li>Isaac Sim + ROS 2 + Nav2</li>
              <li>Visual SLAM & Locomotion</li>
            </ul>
          </div>

        </div>
      </section>

    </Layout>
  );
}
