import React from "react"
import { Formik, Field, Form } from "formik"
import FormikDebug from '../../common/utils/FormikDebug'
import { TextInput, SelectInput } from "../../common/fields"
import { useFirestore } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { addQuote } from './quoteActions'
import * as Yup from 'yup';

const QuoteSchema = Yup.object().shape({
  content: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
});

const QuoteForm = () => {
  useFirestoreConnect('authors')
  const firestore = useFirestore()
  const dispatch = useDispatch()
  const authors = useSelector(state => state.firestore.ordered.authors)
  const initialValues = {
    content: "",
    author: ""
  }
  let authorOptions = []
  if (authors) {
    authorOptions = authors.map(author => ({ label: author.name, value: author.id }))
  }


  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={QuoteSchema}
              onSubmit={(values, { resetForm }) => {
                dispatch(addQuote({ firestore }, values))
                resetForm()
              }}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <Field
                        name="content"
                        type="text"
                        hint="Say something cool..."
                        component={TextInput}
                        placeholder="Enter Quote..."
                        label="Quote"
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <Field
                        name="author"
                        type="text"
                        component={SelectInput}
                        options={authorOptions}
                        onChange={value => setFieldValue("author", value)}
                        label="Author"
                      />
                    </div>
                  </div>

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

export default QuoteForm
