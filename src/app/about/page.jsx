import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Creating Web Experiences that Captivate and Connect:
          </h1>
          <h2 className={styles.imgDesc}> Meet Jayna, Software Developer</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>What I'm seeking</h1>
          <p className={styles.desc}>
            Through my journey, I have discovered my deep-rooted passion for
            helping women, children, and mental health issues. These causes are
            particularly close to my heart, and I am committed to leveraging
            technology to make a meaningful impact in these areas. I believe
            that by combining my passion with the transformative power of
            technology, I can make a significant difference in the lives of
            countless individuals who are facing immense challenges
            <br />
            <br />
            ADD SOMETHING HERE
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I'll bring</h1>
          <p className={styles.desc}>
            I am a purpose-driven individual who relentlessly pursues my
            passions based on my unwavering beliefs and deep-seated values. With
            over five years of exceptional professional experience in management
            and sales within the highly competitive UK beauty industry, I have
            honed my skills in identifying and capitalizing on opportunities
            that drive growth and success.
            <br />
            <br /> - Versatile Business Perspective
            <br />
            <br /> - Empathetic Communication and Collaboration
            <br />
            <br /> - Determined Problem-Solver
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  )
}

export default About
