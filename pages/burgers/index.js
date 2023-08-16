import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Layout from "../../components/layout"
import styles from '../../styles/burger.module.css'


export async function getStaticProps() {
  const { data } = await axios.get('http://localhost:5000/items')
  return {
    props: { burgers: data }
  }
}
function Burgers({ burgers }) {
  const [search, setSearch] = useState('');
  return (
    <Layout>
      <input
        type="text"
        placeholder="search burger"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <h1>Burgers</h1>
      {burgers.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      .map(burger => {
        return (
          <Link href={`/burgers/${burger.id}`} key={burger.id}>
            <a className={styles.burgerCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={burger.image}
                  alt={burger.name}
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='cover'
                />
              </div>
              <div>
                <h3>{burger.name}</h3>
                <p>{burger.desc}</p>
              </div>
            </a>
          </Link>
        )
      })}
    </Layout>
  )
}

export default Burgers