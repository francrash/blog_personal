
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/footer"
import { useEffect } from "react"
import{Helmet} from 'react-helmet-async'

function Blog(){
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return(
        <Layout>
            <Helmet>
            <title>Francisco |  Blog</title>
            <meta name="description" content="Portfolio Web, Made your webPage" />
            <meta name="keywords" content="Portfolio, web, app mobile, react, python" />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://murkiva.com" />
            <meta name="author" content='Francisco Chacon' />
            <meta name="publisher" content='Francisco Chacon' />

            {/* Social Media Tags */}
            <meta property="og:title" content='Francisco |  Software Developer' />
                <meta property="og:description" content='Portfolio Web, Made your webPage' />
                <meta property="og:url" content="https://www.murkiva.com/" />
                <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

                <meta name="twitter:title" content='Francisco |  Software Developer' />
                <meta
                    name="twitter:description"
                    content='Portfolio Web, Made your webPage'
                />
                <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
                <meta name="twitter:card" content="summary_large_image" />

        </Helmet>
            <Navbar/>
            <div className="pt-28 ">
                Blog
            </div>
            
            <div className="">
                <Footer/>
            </div>
            
        </Layout>
    )
}
export default Blog