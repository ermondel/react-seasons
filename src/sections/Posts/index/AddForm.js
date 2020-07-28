import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class AddForm extends Component {
  static maxLength = {
    title: 80,
    categories: 80,
    content: 450,
  };

  static validate({ title, categories, content }) {
    const errors = {};

    if (!title) {
      errors.title = 'You must enter title';
    }
    if (title && title.length > AddForm.maxLength.title) {
      errors.title = `Must be ${AddForm.maxLength.title} characters or less`;
    }

    if (!categories) {
      errors.categories = 'You must enter categories';
    }
    if (categories && categories.length > AddForm.maxLength.categories) {
      errors.categories = `Must be ${AddForm.maxLength.categories} characters or less`;
    }

    if (!content) {
      errors.content = 'You must enter content';
    }
    if (content && content.length > AddForm.maxLength.content) {
      errors.content = `Must be ${AddForm.maxLength.content} characters or less`;
    }

    return errors;
  }

  renderError = ({ dirty, touched, error }) => {
    if ((dirty && error) || (touched && error)) {
      return <p className='add-form__error'>{error}</p>;
    } else {
      return null;
    }
  };

  renderCounter = ({ name, value }) => {
    return value ? (
      <span className='add-form__counter'>
        {value.length}/{AddForm.maxLength[name]}
      </span>
    ) : null;
  };

  renderInputClass = ({ touched, error }) => {
    const className = 'add-form__input';
    return touched && error ? `${className} ${className}--error` : className;
  };

  renderTextareaClass = ({ touched, error }) => {
    const className = 'add-form__textarea';
    return touched && error ? `${className} ${className}--error` : className;
  };

  renderInput = ({ input, meta, placeholder }) => {
    return (
      <label className='add-form__element-label'>
        <input
          {...input}
          autoComplete='off'
          placeholder={placeholder}
          className={this.renderInputClass(meta)}
        />
      </label>
    );
  };

  renderTextarea = ({ input, meta, placeholder }) => {
    return (
      <label className='add-form__element-label'>
        <textarea
          {...input}
          placeholder={placeholder}
          className={this.renderTextareaClass(meta)}
        ></textarea>
      </label>
    );
  };

  renderInputField = (props) => {
    return (
      <div className='add-form__field'>
        <div className='add-form__element'>
          {this.renderInput(props)}
          {this.renderCounter(props.input)}
        </div>
        {this.renderError(props.meta)}
      </div>
    );
  };

  renderTextareaField = (props) => {
    return (
      <div className='add-form__field'>
        <div className='add-form__element'>
          {this.renderTextarea(props)}
          {this.renderCounter(props.input)}
        </div>
        {this.renderError(props.meta)}
      </div>
    );
  };

  renderActions = () => {
    return (
      <div className='add-form__actions'>
        <Link to='/posts' className='add-form__cancel'>
          Cancel and return to the list
        </Link>
        <button disabled={!this.props.valid} className='add-form__btn-submit'>
          Save
        </button>
      </div>
    );
  };

  cleanCategories = (str) => {
    const res = str.split(',').reduce((acc, val) => {
      val = val.trim();
      if (val) acc.push(val);
      return acc;
    }, []);
    return res.join(', ');
  };

  onSubmit = (formValues) => {
    formValues.categories = this.cleanCategories(formValues.categories);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form className='add-form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name='title'
          component={this.renderInputField}
          placeholder='Enter title *'
        />
        <Field
          name='categories'
          component={this.renderInputField}
          placeholder='Enter categories * (comma separated values)'
        />
        <Field
          name='content'
          component={this.renderTextareaField}
          placeholder='Enter content *'
        />
        {this.renderActions()}
      </form>
    );
  }
}

export default reduxForm({
  form: 'AddForm',
  validate: AddForm.validate,
})(AddForm);
