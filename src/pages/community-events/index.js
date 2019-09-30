import React from 'react'
import EventsCards from './EventsCards'
import TryUs from '../../common/ui/TryUs'

const CommunityEvents = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Community Events</h1>
              <p className="lead">Supportive Sub-Headline Here</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <EventsCards />
            </div>
          </div>
        </div>
      </section>
      <img src={"https://via.placeholder.com/1800x600"} className="img-fluid" alt="" />
      <TryUs />
    </>
  )
}

export default CommunityEvents
