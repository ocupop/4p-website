import React from 'react'
const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}
const FeaturedNewsItem = () => {
  return (
    <>
      
      <div className="row">
        <div className="col-12">
          <img src={"https://via.placeholder.com/1400x600"} className="img-fluid" alt=""/>
          <div className="p-3">
            <h4>Partnership with the Path Foundation</h4>
            <p>August 23, 2019</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero ad soluta eaque aperiam unde quidem quibusdam, odio eum et, blanditiis ab animi accusantium? Adipisci, rerum saepe accusamus aperiam laboriosam reprehenderit vitae eaque atque expedita quam magni velit distinctio accusantium minus esse quas iusto explicabo voluptate magnam totam earum! Itaque?</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default FeaturedNewsItem
