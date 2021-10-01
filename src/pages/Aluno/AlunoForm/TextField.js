import React from 'react';
import { useField, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props); //eslint-disable-line
  const { id } = useParams();
  return (
    <div>
      <label htmlFor={field.name}>
        {id ? label : ''}
        <input {...field} {...props} autoComplete="off" />
      </label>
      <p>
        <ErrorMessage name={field.name} />
      </p>
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
};
