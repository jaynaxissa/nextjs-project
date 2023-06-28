import Image from 'next/image'
import styles from './page.module.css'
import Pink1 from 'public/pink1.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Help better the world using technology.
        </h1>
        <p className={styles.desc}>
          Optimizing the design of your software applications for seamless user
          interaction.
        </p>
        <Button url='/contact' text='Contact' />
      </div>
      <Image src={Pink1} alt='' className={styles.img} />
    </div>
  )
}
