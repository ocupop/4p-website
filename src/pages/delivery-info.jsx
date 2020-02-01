import React from 'react'
import { Formik, Field, Form } from "formik";
// formik custom components
import {
  TextInput,
  TextArea,
  SwitchInput,
  SelectInput,
  RichInput,
  RadioInput
} from "../common/formik";

const DeliveryInfo = () => {

  const mockSelectData = [
    {label: "opt1", name: "option 1"},
    {label: "opt2", name: "option 2"},
    {label: "opt3", name: "option 3"},
    {label: "opt4", name: "option 4"},
  ]

  const stateSelectData = [
    { label: "opt1", name: "option 1" },
    { label: "opt2", name: "option 2" },
    { label: "opt3", name: "option 3" },
    { label: "opt4", name: "option 4" },
  ]

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>Delivery Info</h1>
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              description: ""
            }}
            onSubmit={values => {
              // same shape as initial values
              console.log("Submitted", values);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="row">
                  <div className="col-lg-6">
                  <div className="form-check form-check-inline">
                      <Field
                        name="radioExample"
                        type="radio"
                        component={RadioInput}
                        label="radio-opt-1"
                        value="radio-opt-1"
                        onChange={(e, val) => {
                          setFieldValue("radioExample", val.value);
                        }}
                      />
                      <Field
                        name="radioExample"
                        type="radio"
                        component={RadioInput}
                        label="radio-opt-2"
                        value="radio-opt-2"
                        onChange={(e, val) => {
                          setFieldValue("radioExample", val.value);
                        }}
                      />
                    </div>
                    <Field
                      name="address"
                      type="text"
                      hint="This is a hint"
                      component={TextInput}
                      placeholder="Address"
                      label="Address"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="apt-unit"
                      type="text"
                      component={TextInput}
                      placeholder="APT/Unit Number"
                      hint="Enter Some text!"
                      label="Apt/Unit Number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <Field
                      name="city"
                      type="text"
                      hint="This is a hint"
                      component={TextInput}
                      placeholder="City"
                      label="City"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="selectInput"
                      type="text"
                      component={SelectInput}
                      options={stateSelectData}
                      onChange={val => {
                        setFieldValue("selectInput", val);
                      }}
                      label="selectInput"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <Field
                      name="zip"
                      type="text"
                      hint="This is a hint"
                      component={TextInput}
                      placeholder="Zip code"
                      label="Zip Code"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <legend className="col-form-label">Building Type:</legend>
                    <div className="form-check form-check-inline">
                      <Field
                        name="switchFamily"
                        type="checkbox"
                        component={SwitchInput}
                        label="Single Family Home"
                        onChange={() => setFieldValue("switchFamily", !values.switchFamily)}
                      />
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        name="switchOffice"
                        type="checkbox"
                        component={SwitchInput}
                        label="Office Building"
                        onChange={() => setFieldValue("switchOffice", !values.switchOffice)}
                      />
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        name="switchCondo"
                        type="checkbox"
                        component={SwitchInput}
                        label="Apartment/Condo"
                        onChange={() => setFieldValue("switchCondo", !values.switchCondo)}
                      />
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        name="switchTownhouse"
                        type="checkbox"
                        component={SwitchInput}
                        label="Townhouse"
                        onChange={() => setFieldValue("switchTownhouse", !values.switchTownhouse)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Field
                      name="switchConciege"
                      type="checkbox"
                      component={SwitchInput}
                      label="Is there a conciege to accept the delivery?"
                      onChange={() => setFieldValue("switchConcierge", !values.switchConcierge)}
                    />
                    <Field
                      name="concierge"
                      type="textarea"
                      component={TextInput}
                      label=""
                      placeholder="Conciege Number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-check-inline">
                      <label>If a key fob is needed to access the building, can you provide us with one?</label>
                      <Field
                        name="switchKeyFob"
                        type="checkbox"
                        component={SwitchInput}
                        label="Yes"
                        onChange={() => setFieldValue("switchKeyFob", !values.switchKeyFob)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Field
                      name="parkingOptions"
                      type="textarea"
                      component={TextArea}
                      label="Parking Options"
                      placeholder="Parking Options"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Field
                      name="specialInstructions"
                      type="textarea"
                      component={TextArea}
                      label="Other Special Instructions"
                      placeholder="Other Special Instructions"
                    />
                  </div>
                </div>
                {/* Example of Rich Input */}
                {/* <Field
                  name="richDescription"
                  type="text"
                  component={RichInput}
                  onChange={val => {
                    setFieldValue("richDescription", val);
                  }}
                  label="Enter your description"
                /> */}
                <button type="submit" className="btn btn-secondary">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
  </>
  )
}

export default DeliveryInfo