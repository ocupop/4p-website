import React from 'react'
import { TryUsCTA } from '../../common/ui/CTAs'

const Contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Contact Us</h1>
              <p>Let us know if you have any concerns, questions, or kind words for us. We are happy to get back to you as soon as possible. Be sure to check the FAQ.</p>
              <p><strong className="text-uppercase">Phone:</strong> <a href="tel:703-732-6664">(703) 732.6664</a></p>
              <p><strong className="text-uppercase">Email:</strong> <a href="mailto:community@4pfoods.com">community@4pfoods.com</a></p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              form section
            </div>
          </div>
        </div>
      </section>
      <img src={"https://via.placeholder.com/1800x600"} className="img-fluid" alt="" />
      <TryUsCTA />
    </>
  )
}

export default Contact
