import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Popup } from "semantic-ui-react"

const FieldHint = ({content}) => {
  return (
    <Popup
      trigger={<Icon name="question circle" color="black" />}
      content={content}
      position="right center"
      inverted
      size="tiny"
    />
  )
}

FieldHint.propTypes = {
  content: PropTypes.string
}

export default FieldHint
