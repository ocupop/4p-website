import React from 'react'
import { Formik, Field, Form } from "formik";
// formik custom components
import {
  TextInput,
  TextArea,
  SwitchInput,
  SelectInput,
  RichInput
} from "../common/formik";
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'

const DeliveryInfo = () => {
  const mockSelectData = [
    {label: "opt1", name: "option 1"},
    {label: "opt2", name: "option 2"},
    {label: "opt3", name: "option 3"},
    {label: "opt4", name: "option 4"},
  ]

  return (
    <div>
      <Header />
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
          {/* Example of Text Field */}
          <Field
            name="textInputExample"
            type="text"
            hint="This is a hint"
            component={TextInput}
            placeholder="Enter Some Text!"
            label="textInputExample"
          />
          {/* Example of Text Area */}
          <Field
            name="description"
            type="text"
            component={TextArea}
            placeholder="Enter a discription!"
            hint="Enter Some text!"
            label="Description"
          />
          {/* Example of Switch Input */}
          <Field
            name="switchMe"
            type="checkbox"
            component={SwitchInput}
            label="SwitchMe"
            onChange={() => setFieldValue("switchMe", !values.switchMe)}
          />
          {/* Example of Select Input */}
          <Field
            name="selectInput"
            type="text"
            component={SelectInput}
            options={mockSelectData}
            onChange={val => {
              setFieldValue("selectInput", val);
            }}
            label="selectInput"
          />
          {/* Example of Rich Input */}
          <Field
            name="richDescription"
            type="text"
            component={RichInput}
            onChange={val => {
              setFieldValue("richDescription", val);
            }}
            label="Enter your description"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    <Footer />
  </div>
  )
}

export default DeliveryInfo