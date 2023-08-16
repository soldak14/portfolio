import axios from "axios"
import Image from "next/image"
import styles from '../../styles/burger.module.css'


export async function getStaticPaths() {
  const { data } = await axios.get('http://localhost:5000/items')
  const paths = data.map(burger => {
    return {
      params: { id: burger.id }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps(context) {
  const id = context.params.id
  const { data } = await axios.get(`http://localhost:5000/items/${id}`)
  return {
    props: { burger: data }
  }
}
function Dietails({ burger }) {
  console.log(burger);
  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
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
        <p>{burger.desc}</p>
      </div>
    </div>
  )
}

export default Dietails