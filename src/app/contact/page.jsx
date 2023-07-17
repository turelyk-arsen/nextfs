import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
  title: "My Contact Next App",
  description: "Generated in Contact by create next app",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
        <Image className={styles.image}
        src='/contact.png'
        alt='contacts'
        fill={true}
         />
        </div>

        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input}/>
          <input type='text' placeholder='email' className={styles.input}/>
          <textarea className={styles.textArea}
          placeholder='message'
          cols='30'
          rows='10'></textarea>
          <Button url='#' text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact