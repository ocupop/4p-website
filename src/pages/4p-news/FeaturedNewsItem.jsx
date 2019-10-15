import React from 'react'
import PropTypes from "prop-types"
import { Card } from 'react-bootstrap'
import format from 'date-fns/format'

const FeaturedNewsItem = ({article, featured}) => {
  let articleDate
  if (article.date) {
    articleDate = new Date(article.date)
  }
  const aspectRatio = featured ? "aspect-16x9" : "aspect-4x3"
  const articleImage = {
    backgroundImage: article.featured_image || `url("https://via.placeholder.com/500x350")`,
  }

  return (
    <>
      <Card className="bg-transparent">
        <div className="card-content pin-footer">
          <div className="card-header p-0">
            <div className="content">
              <div className={`bg-image ${aspectRatio}`} style={articleImage} />
            </div>
          </div>
          <div className="card-body">
            <div className="content text-left">
              <h5>{article.title}</h5>
              <p>{format(articleDate, 'MMMM dd, yyyy')}</p>
              <p>{article.summary}</p>
            </div>
          </div>
          <div className="card-footer p-0">
            <a href={article.url} className="btn btn-secondary">Read More</a>
          </div>
        </div>
      </Card>
    </>
  )
}

FeaturedNewsItem.propTypes = {
  article: PropTypes.object.isRequired,
  featured: PropTypes.bool
}

export default FeaturedNewsItem
