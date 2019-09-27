import React from 'react'

const HomeTabs = () => {
  return (
    <section className="bg-beige">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            need tabs solution
            <h3>Empowering Farmers</h3>
            <p>4p currently empowers more than 200 local family farms to their high quality produce, meat, and dairy products on more tables every day.</p>
            <h3>Committed to our Planet</h3>
            <p>4p foods works with farmers who are committed to low-impact, sustainable methods of production. Plus, local food requires less travel, improving your carbon footprint.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-lg-8">
            <img src={"https://via.placeholder.com/700x400"} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTabs