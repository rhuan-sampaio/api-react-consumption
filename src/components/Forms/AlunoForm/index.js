import React from 'react';

import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { get } from 'react-hook-form';
import TextField from './TextField';

export default function AlunoForm({ setters, ...values }) {
  const setName = get(setters, 'setName', false);
  const setLastName = get(setters, 'setLastName', false);
  const setEmail = get(setters, 'setEmail', false);
  const setAge = get(setters, 'setAge', false);
  const setWeight = get(setters, 'setWeight', false);
  const setHeight = get(setters, 'setHeight', false);
  const { name, lastName, age, email, weight, height } = values;
  const schema = yup.object().shape({
    name: yup.string('name is required').required('Name is required').min(3),
    lastname: yup
      .string()
      .required('Last name is required')
      .min(3, 'Must be at least 3 characters'),
    email: yup
      .string()
      .email('Please choose a valid e-mail')
      .required('E-mail is required'),
    weight: yup
      .number()
      .typeError('Please choose a valid number')
      .required('Weight is required'),
    height: yup
      .number()
      .typeError('Please choose a valid number')
      .required('height is required'),
    age: yup.number().integer().required('Age is required'),
  });
  return (
    <Formik
      initialValues={{
        name,
        lastname: '',
        email: '',
        weight: '',
        height: '',
        age: '',
      }}
      validationSchema={schema}
    >
      {() => (
        <div>
          <Form>
            <TextField
              label="Name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Last Name"
              name="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              label="Age"
              name="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <TextField
              label="E-mail"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Weight"
              name="weight"
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <TextField
              label="Height"
              name="height"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <button type="submit">Send</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

AlunoForm.propTypes = {
  setters: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};
