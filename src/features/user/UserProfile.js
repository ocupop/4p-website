import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const profile = useSelector(state => state.firebase.profile)
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>Profile</h1>
                <div>{JSON.stringify(profile, null, 2)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

UserProfile.propTypes = {}

export default UserProfile

// <>
//   <section>
//     <div className="container">
//       <div className="row">
//         <div className="col-12">
//           <div className="content">
//             <h1>Complete your profile</h1>
//             <hr />

//             <form>
//               <div className="row">
//                 <div className="col">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="First name"
//                   />
//                 </div>
//                 <div className="col">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Last name"
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Email"
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12 col-lg-6">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Phone"
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12 col-lg-6">
//                   <textarea
//                     className="form-control"
//                     name=""
//                     id=""
//                     cols="10"
//                     rows="10"
//                     placeholder="Dietary Restrictions"></textarea>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12">
//                   <h2 className="h1 mt-5">Notification Preferences</h2>
//                   <hr />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   <legend className="col-form-label">
//                     Send Notifications Through:
//                   </legend>
//                   <div className="form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="radio-notifications"
//                       id="notification-text"
//                       value="text"
//                     />
//                     <label
//                       className="form-check-label"
//                       for="notification-text">
//                       Text
//                     </label>
//                   </div>
//                   <div className="form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="radio-notifications"
//                       id="notification-email"
//                       value="email"
//                     />
//                     <label
//                       className="form-check-label"
//                       for="notification-email">
//                       Email
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   <legend className="col-form-label">
//                     Send me the weekly newsletter:
//                   </legend>
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="radio-newsletter"
//                       id="newsletter-yes"
//                       value="yes"
//                       checked
//                     />
//                     <label
//                       className="form-check-label"
//                       for="newsletter-yes">
//                       Yes
//                     </label>
//                   </div>
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="radio-newsletter"
//                       id="newsletter-no"
//                       value="no"
//                     />
//                     <label className="form-check-label" for="newsletter-no">
//                       No
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               {/* <div className="row">
//                 <div className="col text-center">
//                   <div className="content">
//                     <input type="submit" value="Continue to delivery info" className="btn btn-secondary" />
//                   </div>
//                 </div>
//               </div> */}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </>
