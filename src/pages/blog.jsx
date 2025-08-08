import React from 'react'
import HeaderComp from '../components/common/headerComponent/headerComp'
import BlogBanner from '../components/modules/blogPageModules/blogBanner/BlogBanner'
import BlogArticleListContainer from '../components/modules/blogArticlesModules/blogArticleListContainer'
import Footer from '../components/common/footerComponent/footer'


const blog = () => {
  return (
    <div>
        <HeaderComp />
        <BlogBanner />
        <BlogArticleListContainer />
        <Footer />
    
        
    </div>
  )
}

export default blog