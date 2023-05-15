
import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { get_categories } from "redux/actions/categories/categories";
import { get_blog_list, get_blog_list_page, search_blog, search_blog_page } from "redux/actions/blog/blog";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import CategoriesHeader from "components/blog/categoriesHeader";
//import BlogList from "components/blog/BlogList";

function Search({
    posts,
    count,
    next,
    previous,
}) {

    const params = useParams()
    const term = params.term

    useEffect(() => {
        window.scrollTo(0, 0)
        search_blog(term)

    }, [])


    return (
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
            <Navbar />
            <div className="pt-24 ">
                search posts
            </div>

            <div className="">
                <Footer />
            </div>

        </Layout>
    )
}

const mapStateToProps = state => ({

    posts: state.blog.filtered_posts,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,


})
export default connect(mapStateToProps, {

})(Search)

