import React from "react"
import { Formik, Field, Form } from "formik"
import FormikDebug from '../../common/utils/FormikDebug'
import { TextInput } from "../../common/fields"
import { useFirestore } from 'react-redux-firebase'
import * as Yup from 'yup'

const AuthorSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
})

const AuthorForm = () => {
  const firestore = useFirestore()
  const initialValues = {
    name: ""
  }
  function addAuthor(values) {
    const { name } = values
    const newAuthor = { name }
    try {
      const request = firestore.collection('authors').add(newAuthor)
      console.log(request)
      // history.push(`/sandbox/authors/${author.id}`);
    } catch (error) {

    }

  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={AuthorSchema}
              // onSubmit={(values, { resetForm }) => {
              //   dispatch(addAuthor({ firestore }, values))
              //   resetForm()
              // }}
              onSubmit={values => addAuthor(values)}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Field
                    name="name"
                    type="text"
                    hint="Who we talking about?"
                    component={TextInput}
                    placeholder="Full Name"
                    label="Author"
                  />
                  <button type="submit" className="btn btn-block btn-success">Submit</button>
                  <FormikDebug />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthorForm
