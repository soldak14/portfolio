import axios from "axios"
import Layout from "../components/layout"

function Reviews({reviews}) {

  return (

    <Layout>
      <h1>Reviews</h1>
      <div className="reviews">
        {!!reviews.length && reviews.map(rev => <div key={rev.id} className='review'>{rev.body}</div>)}
      </div>
    </Layout>
  )
}
export async function getServerSideProps(){
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
  return {
    props:{
      reviews:data
    }
  }
}

export default Reviews