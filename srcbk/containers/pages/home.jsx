
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/Layout"
import Header from "components/home/header"
import Incentives from "components/home/incentives"
import UseCases from "components/home/useCases"
import Footer from "components/navigation/footer"
import Features from "components/home/features"
import Cta from "components/home/cta"
import LogoCloud from "components/home/logoCloud"
import BlogList from "components/home/blogList"
import { useEffect } from "react"




function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28 ">
                <Header/>
                <Incentives/>
                <UseCases/>
                <Features/>
                <Cta/>
                <LogoCloud/>
                <BlogList/>
            </div>
            
            
            
            <div className="">
                <Footer/>
            </div>
            
        </Layout>
    )
}
export default Home