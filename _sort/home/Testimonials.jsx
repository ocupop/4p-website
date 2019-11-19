import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  function prevIcon() {
    return (
      <i className="ri-arrow-left-s-line"/>
    )
  }

  function nextIcon() {
    return (
      <i className="ri-arrow-right-s-line" />
    )
  }
  return (
    <section id="testimonials" className="bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="text-white mb-4">Stories of Satisfied Customers</h4>
            <Carousel
              activeIndex={index}
              direction={direction}
              onSelect={handleSelect}
              indicators={false}
              prevIcon={prevIcon()}
              nextIcon={nextIcon()}
              >
              <Carousel.Item>
                <blockquote className="quote">
                  <p>“I can’t say enough good things about 4P! My boyfriend and I have been subscribed to their produce bags for over a year now, and we absolutely love it! Unlike most CSAs, 4P is extremely flexible. It allows you to switch out things you don’t like and get more of the items you do. They also allow you to skip weeks, which we often do during the winter when there are fewer options. At $35 per “small” bag (which they recommend for 1-2 people), you definitely get your money’s worth in terms of quantity and quality. Most of the items are organic, in addition to being locally grown. My boyfriend picks up the bag at his office. I strongly recommend 4P for its convenience and commitment to sustainability!”</p>
                  <footer>Collin B. - <cite>Yelp Review</cite></footer>
                </blockquote>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
