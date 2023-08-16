import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import styles from '../styles/home.module.css'


export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>Main page</h1>
      <div className={styles.mainImage}>
        <Image src='/images/fatburger.png' alt='fatburger' width={400} height={300}/>
      </div>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, repellendus!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, repellendus!</p>
      <Link href='burgers'><a className={styles.btn}>All burgers</a></Link>
    </div>
    </Layout>
  )
}
