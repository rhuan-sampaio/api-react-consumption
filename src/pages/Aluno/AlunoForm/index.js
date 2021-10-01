import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import schema from './schema';
import TextField from './TextField';

export default function AlunoForm({ savedData, onSubmit, setIsloading }) {
  const data = {
    name: get(savedData, 'name', ''),
    lastname: get(savedData, 'lastName', ''),
    email: get(savedData, 'email', ''),
    weight: get(savedData, 'weight', ''),
    height: get(savedData, 'height', ''),
    age: get(savedData, 'age', ''),
  };
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  const initialValues = {
    name: '',
    lastname: '',
    email: '',
    weight: '',
    height: '',
    age: '',
  };

  return (
    <Formik
      className="form-container"
      onSubmit={(values) => handleSubmit(values)}
      enableReinitialize
      initialValues={data || initialValues}
      validationSchema={schema}
    >
      {() => (
        <div>
          {}
          <Form>
            <TextField
              label="Name"
              name="name"
              placeholder="Enter student name"
              type="text"
            />
            <TextField
              label="Last Name"
              name="lastname"
              placeholder="Enter student last name"
              type="text"
            />
            <TextField
              label="E-mail"
              name="email"
              type="email"
              placeholder="Email address"
            />
            <TextField
              label="Weight"
              name="weight"
              type="text"
              placeholder="Weight"
            />
            <TextField
              label="Height"
              name="height"
              type="text"
              placeholder="Height"
            />
            <TextField label="Age" name="age" type="number" placeholder="Age" />
            <button onClick={setIsloading} type="submit">
              Send
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

AlunoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  savedData: PropTypes.shape({}).isRequired,
  setIsloading: PropTypes.func.isRequired,
};
