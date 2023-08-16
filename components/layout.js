import Head from "next/head"
import Footer from "./footer"
import Header from "./header"

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Burger</title>
      </Head>
      <div className='content'>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout