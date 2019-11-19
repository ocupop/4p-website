import React from 'react'
import FeaturedNewsItem from './FeaturedNewsItem'
import { ARTICLES } from '../../data/articles'

function FeaturedNews() {
  const featuredArticle = ARTICLES[0]
  const articles = ARTICLES.slice(1,4)

  return (
    <>
      <div className="row mb-3">
        <div className="col-lg-6">
          <h3>Featured 4P News</h3>
        </div>
        <div className="col-lg-6 text-lg-right">
          <a href="#" className="btn btn-primary">Explore 4P News</a>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <FeaturedNewsItem article={featuredArticle} featured />
        </div>
      </div>
      <div className="threesome mt-5">
        {articles && articles.map(article => <FeaturedNewsItem key={article.id} article={article} />)}
      </div>
    </>
  )
}

export default FeaturedNews
