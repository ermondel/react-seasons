import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsAddForm extends Component {
  static maxLength = {
    title: 80,
    categories: 80,
    content: 450,
  };

  static validate({ title, categories, content }) {
    const errors = {};

    // title
    if (!title) {
      errors.title = 'You must enter a title.';
    }
    if (title && title.length > PostsAddForm.maxLength.title) {
      errors.title = `Must be ${PostsAddForm.maxLength.title} characters or less`;
    }

    // categories
    if (!categories) {
      errors.categories = 'You must enter categories.';
    }
    if (categories && categories.length > PostsAddForm.maxLength.categories) {
      errors.categories = `Must be ${PostsAddForm.maxLength.categories} characters or less`;
    }

    // content
    if (!content) {
      errors.content = 'You must enter content.';
    }
    if (content && content.length > PostsAddForm.maxLength.content) {
      errors.content = `Must be ${PostsAddForm.maxLength.content} characters or less`;
    }

    return errors;
  }

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return <p>{error}</p>;
    } else {
      return null;
    }
  };

  renderCounter = ({ name, value }) => {
    if (value) {
      return (
        <span>
          {value.length}/{PostsAddForm.maxLength[name]}
        </span>
      );
    } else {
      return null;
    }
  };

  renderField = ({ input, meta, placeholder, type }) => {
    let field;

    switch (type) {
      case 'text':
        field = <input {...input} autoComplete='off' placeholder={placeholder} />;
        break;

      case 'textarea':
        field = <textarea {...input} placeholder={placeholder}></textarea>;
        break;

      default:
        field = null;
        break;
    }

    return (
      <div>
        <div>
          <label>{field}</label>
          {this.renderCounter(input)}
        </div>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { handleSubmit, valid } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name='title'
          component={this.renderField}
          placeholder='Title'
          type='text'
        />
        <Field
          name='categories'
          component={this.renderField}
          placeholder='Categories'
          type='text'
        />
        <Field
          name='content'
          component={this.renderField}
          placeholder='Content'
          type='textarea'
        />
        <button disabled={!valid}>Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsAddForm',
  validate: PostsAddForm.validate,
})(PostsAddForm);
