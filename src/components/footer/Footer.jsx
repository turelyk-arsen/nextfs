import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <div>2023 MyApp. All rights reserved</div>
        <div className={styles.social}>
          <Image src='/vk.png' width={15} height={15} className={styles.icon} alt='' />
          <Image src='/inst.png' width={15} height={15} className={styles.icon} alt='' />
          <Image src='/twitter.png' width={15} height={15} className={styles.icon} alt='' />
          <Image src='/yt.png' width={15} height={15} className={styles.icon} alt='' />
        </div>
    </footer>
  )
}

export default Footer