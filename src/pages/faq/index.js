import React from 'react'
import FaqList from './FaqList'
import TryUs from '../../common/ui/TryUs'

const Faq = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-lg-flex align-items-center">
                <h1>FAQ</h1>
                <div className="form-group">
                  <label htmlFor="faq-search" className="sr-only">Search</label>
                </div>
                <input id="faq-search" type="text" placeholder="Search" className="form-control"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <FaqList />
        </div>
      </section>
      <img src={"https://via.placeholder.com/1800x600"} className="img-fluid" alt="" />
      <TryUs />
    </>
  )
}

export default Faq
