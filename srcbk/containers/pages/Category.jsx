
import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { get_categories } from "redux/actions/categories/categories";
import { get_blog_list_category, get_blog_list_category_page } from "redux/actions/blog/blog";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import BlogList from "components/blog/BlogList";

import CategoriesHeader from "components/blog/categoriesHeader";


function Category({
    get_categories,
    categories,
    get_blog_list_category,
    get_blog_list_category_page,
    posts,
    count,
    next,
    previous,
}) {
    const params = useParams()
    const slug = params.slug


    useEffect(() => {
        window.scrollTo(0, 0)
        get_categories()
        get_blog_list_category(slug)

    }, [])


    return (
        <Layout>
            <Helmet>
                <title>Francisco |  Category:{slug}</title>
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
            <div className="pt-24">
                <CategoriesHeader categories={categories && categories} />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                    <div className="mx-auto max-w-6xl my-10">
                        {/* Content goes here */}
                        <BlogList posts={posts && posts} get_blog_list_page={get_blog_list_category_page} count={count && count} />
                    </div>
                </div>
            </div>

            <div className="">
                <Footer />
            </div>

        </Layout>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    posts: state.blog.blog_list_category,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})
export default connect(mapStateToProps, {
    get_categories,
    get_blog_list_category,
    get_blog_list_category_page
})(Category)
