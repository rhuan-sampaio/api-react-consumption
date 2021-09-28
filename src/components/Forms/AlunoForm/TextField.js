import React from 'react';
import { useField, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props); //eslint-disable-line
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} autoComplete="off" />
      <ErrorMessage name={field.name} />
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
};
