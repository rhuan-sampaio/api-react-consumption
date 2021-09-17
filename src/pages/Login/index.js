import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form } from '../Register/styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(''); //eslint-disable-line
  const [errorPassword, setErrorPassword] = useState('');//eslint-disable-line
  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <label htmlFor="email">
          Email:{' '}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
          <p>{errorEmail}</p>
        </label>
        <label htmlFor="password">
          Password:{' '}
          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            placeholder="Your password"
          />
          <p>{errorPassword}</p>
        </label>
        <button id="btn-register" type="submit">
          Login
        </button>
      </Form>
    </Container>
  );
}
