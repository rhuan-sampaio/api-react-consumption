import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from '../Register/styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    if (email) {
      setTouchedEmail(true);
    }
    if (touchedEmail && !isEmail(email)) {
      setErrorEmail('Invalid E-mail');
    } else {
      setErrorEmail('');
    }
  }, [email, touchedEmail]);

  useEffect(() => {
    if (password) {
      setTouchedPassword(true);
    }
    if (touchedPassword && (password.length < 6 || password.length > 50)) {
      setErrorPassword('Invalid Password');
    } else {
      setErrorPassword('');
    }
  }, [password, touchedPassword]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    if (!isEmail(email)) {
      setErrorEmail('Invalid E-mail');
      formErrors = true;
    }
    if (password.length < 6 || password.length > 50) {
      setErrorPassword('Invalid Password');
      formErrors = true;
    }
    if (!formErrors) {
      dispatch(actions.loginRequest({ email, password, prevPath }));
    }
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
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
