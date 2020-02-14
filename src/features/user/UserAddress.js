import React from 'react'

const userAddress = () => {
  return (
    <>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="content">
                <h1>Delivery Info</h1>
                <hr/>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Address"/>
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="APT/Unit Number"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="City"/>
                  </div>
                  <div class="col">
                    <div class="styled-select square-select">
                      <select>
                        <option>State select</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <input type="text" class="form-control" placeholder="Zip Code"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <legend class="col-form-label">Building Type:</legend>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="radio-building-type" id="radio-single-family"
                        value="single-family-home"/>
                      <label class="form-check-label" for="notification-radio">Single Family Home</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="radio-building-type" id="radio-office-building"
                        value="office-building"/>
                      <label class="form-check-label" for="radio-office-building">Office Building</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="radio-building-type" id="radio-apartment-condo"
                        value="apartment-condo"/>
                      <label class="form-check-label" for="radio-apartment-condo">Apartment/Condo</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="radio-building-type" id="radio-townhouse"
                        value="townhouse"/>
                      <label class="form-check-label" for="radio-townhouse">Townhouse</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-check mt-3">
                      <input class="form-check-input" type="checkbox" value="" id="concierge-checkbox"/>
                      <label class="form-check-label" for="concierge-checkbox">
                        Is there a concierge to accept the delivery?
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Concierge Number"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <legend class="col-form-label">If a key fob is needed to acces the building, can you provide us with
                      one?</legend>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="radio-keyfob" id="keyfob-yes" value="yes"/>
                      <label class="form-check-label" for="keyfob-yes">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="radio-keyfob" id="keyfob-no" value="no"/>
                      <label class="form-check-label" for="keyfob-no">No</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <textarea class="form-control" name="parking-options" id="" cols="30" rows="5"
                      placeholder="Parking Options"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <textarea class="form-control" name="special-instructions" id="" cols="30" rows="5"
                      placeholder="Other Special Instructions"></textarea>
                  </div>
                </div>
                {/* <div class="row">
                  <div class="col text-center">
                    <input type="submit" value="Continue to billing info" class="btn btn-secondary"/>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
      </section>  
    </>
  )
}

export default userAddress
