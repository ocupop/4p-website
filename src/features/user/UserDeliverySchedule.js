import React from 'react'

const UserDeliverySchedule = () => {
  return (
    <>
      <section className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>Delivery Schedule</h1>
                <hr/>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-3">
              <div className="content">
                <div className="delivery-schedule-item">
                  <p className="delivery-date mb-0">
                    12/21
                  </p>
                  <div className="delivery-schedule-footer">
                    <button>Skip</button>
                    <button>Donate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="content">
                <div className="delivery-schedule-item">
                  <p className="delivery-date mb-0">
                    12/21
                  </p>
                  <div className="delivery-schedule-footer">
                    <button>Skip</button>
                    <button>Donate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="content">
                <div className="delivery-schedule-item">
                  <p className="delivery-date mb-0">
                    12/21
                  </p>
                  <div className="delivery-schedule-footer">
                    <button>Skip</button>
                    <button>Donate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="content">
                <div className="delivery-schedule-item">
                  <p className="delivery-date mb-0">
                    12/21
                  </p>
                  <div className="delivery-schedule-footer">
                    <button>Skip</button>
                    <button>Donate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="content">
                <p><span className="text-uppercase">Skip an order:</span> You can skip any of your scheduled deliveries, just make sure to skip before your skip deadline (12/18) for the upcoming
                week.</p>
                <p><span className="text-uppercase">Donate an order:</span> You can choose to donate any of your scheduled deliveries, just make sure to donate before your deadline (12/18) for the
                upcoming week.</p>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default UserDeliverySchedule
