
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {cache: 'no-store'});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const Blog = ({ data }) => {
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              className={styles.image}
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
