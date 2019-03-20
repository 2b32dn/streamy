import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {createStream} from '../../actions'

class StreamCreate extends React.Component{
  renderInput = ({input, label, placeholder, meta}) => {
    console.log(meta)

    const inputField = `field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={inputField}>
        <label>
          {label}
        </label>
        {/* <input value={formProps.input.value} onChan    console.log(placeholder){formProps.input.onChange}/> */}
        <input {...input} placeholder={placeholder} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }
  // meta is destructure
  renderError = ({error, touched}) => {
    if(touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      )
    }
  }

  onSubmit = formValues => {
    // no need for preventDefault
    this.props.createStream(formValues)
  }

  render(){
    console.log(this.props)
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" placeholder="title"/>
        <Field name="description" component={this.renderInput} label="Enter Description" placeholder="description"/>
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if(!formValues.title) {
    errors.title = "You must enter a title"
  }
  if(!formValues.description) {
    errors.description = "You must enter a description"
  }
  return errors
}

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate)

export default connect( null, {
  createStream
})(formWrapped)