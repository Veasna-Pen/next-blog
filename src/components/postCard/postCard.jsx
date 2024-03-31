import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/post.png" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>03.31.2024</span>
      </div>
      <div className={styles.buttom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <Link href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default postCard;
