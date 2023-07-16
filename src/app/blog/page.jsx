import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
        <Link href='blog/test' className={styles.container} key="1">
          <div className={styles.imageContainer}>
            <Image 
            src=''
            alt=''
            className={styles.image}
            width={400}
            height={250} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
        <Link href='blog/test' className={styles.container} key="2">
          <div className={styles.imageContainer}>
            <Image 
            src=''
            alt=''
            className={styles.image}
            width={400}
            height={250} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
    </div>
  )
}

export default Blog 