import Link from 'next/link'
import Layout from '../components/layout'


function NotFoundPage() {

  return (
    <Layout>
      <div className='not-found'>
        <h1>Ops...</h1>
        <h2>Not found</h2>
        <p>Go to <Link href='/'><a>Home page</a></Link></p>
      </div>
    </Layout>
  )
}

export default NotFoundPage