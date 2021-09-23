import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import * as actions from '../../store/modules/auth/actions';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

import Loading from '../../components/Loading';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [touchedName, setTouchedName] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const isLoading = useSelector((state) => state.auth.isLoading); // eslint-disable-line
  const idStored = useSelector((state) => state.auth.user.id); // eslint-disable-line
  const nameStored = useSelector((state) => state.auth.user.nome); // eslint-disable-line
  const emailStored = useSelector((state) => state.auth.user.email); // eslint-disable-line
  const dispatch = useDispatch();

  useEffect(() => {
    if (!idStored) return;
    setName(nameStored);
    setEmail(emailStored);
  }, []); // eslint-disable-line
  useEffect(() => {
    if (name) {
      setTouchedName(true);
    }
    if (touchedName && (name.length < 3 || name.length > 255)) {
      setErrorName('Name must be between 3 and 255 charaters.');
      document.getElementById('btn-register').disabled = true;
    } else {
      setErrorName('');
      document.getElementById('btn-register').disabled = false;
    }
  }, [name, touchedName]);

  useEffect(() => {
    if (email) {
      setTouchedEmail(true);
    }
    if (touchedEmail && !isEmail(email)) {
      setErrorEmail('Email must be valid.');
      document.getElementById('btn-register').disabled = true;
    } else {
      setErrorEmail('');
      document.getElementById('btn-register').disabled = false;
    }
  }, [email, touchedEmail]);

  useEffect(() => {
    if (password) {
      setTouchedPassword(true);
    }
    if (
      !idStored &&
      touchedPassword &&
      (password.length < 6 || password.length > 50)
    ) {
      setErrorPassword('Password must be between 6 and 50 charaters');
      document.getElementById('btn-register').disabled = true;
    } else {
      setErrorPassword('');
      document.getElementById('btn-register').disabled = false;
    }
  }, [password, touchedPassword]);// eslint-disable-line
  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      setErrorName('Name must be between 3 and 255 charaters.');
    }
    if (!isEmail(email)) {
      formErrors = true;
      setErrorEmail('Email must be valid.');
    }
    if (!idStored && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      setErrorPassword('Password must be between 6 and 50 charaters');
    }
    if (formErrors) return;
    dispatch(
      actions.registerRequest({ nome: name, password, email, id: idStored })
    );
  }
  function handleBlur(e) {
    if (e.target.type === 'text') {
      setTouchedName(true);
    }
    if (e.target.type === 'password') {
      setTouchedPassword(true);
    }
    if (e.target.type === 'email') {
      setTouchedEmail(true);
    }
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{idStored ? 'Edit Account' : 'Create Account'}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:{' '}
          <input
            type="text"
            value={name}
            onBlur={handleBlur}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <p>{errorName}</p>
        </label>
        <label htmlFor="email">
          Email:{' '}
          <input
            type="email"
            onBlur={handleBlur}
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
            onBlur={handleBlur}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
          <p>{errorPassword}</p>
        </label>
        <button id="btn-register" type="submit">
          {idStored ? 'Save' : 'Create my Account'}
        </button>
      </Form>
    </Container>
  );
}
