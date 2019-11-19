import React from 'react'
import { TryUsCTA } from '../../common/ui/CTAs'

const WholesalePrograms = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Wholesale Programs</h1>
              <p className="lead">Supportive Sub-Headline Here</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={"https://via.placeholder.com/500"} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga animi minima repellat reiciendis ratione a sequi nostrum voluptatem porro unde? Id, illo nihil. Incidunt, voluptatibus rerum eos tenetur laudantium voluptates a, culpa ea temporibus quas dolorum ipsum cum necessitatibus placeat dolores aut molestiae quae doloribus! Distinctio maxime aliquam quos autem.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit quam nisi hic nobis voluptates sint accusantium esse! Magni, ea.</p>
              <a href="#" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      <img src={"https://via.placeholder.com/1800x600"} className="img-fluid" alt="" />
      <TryUsCTA />
    </>
  )
}

export default WholesalePrograms
