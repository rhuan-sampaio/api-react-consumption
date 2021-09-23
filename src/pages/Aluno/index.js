import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { get } from 'lodash';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import * as actions from '../../store/modules/auth/actions';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Aluno({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', 0);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState({
    nameError: '',
    lastNameError: '',
    emailError: '',
    ageError: '',
    weightError: '',
    heightError: '',
  });
  // const [touched, setTouched] = useState({
  //   name: false,
  //   lastName: false,
  //   email: false,
  //   age: false,
  //   weight: false,
  //   height: false,
  // });
  useEffect(() => {
    if (!id) return;
    async function getData() {
      try {
        setIsloading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Photo = get(data, 'Photos[0].url', ''); // eslint-disable-line
        setName(data.nome);
        setLastName(data.sobrenome);
        setEmail(data.email);
        setAge(data.idade);
        setWeight(data.peso);
        setHeight(data.altura);
        setIsloading(false);
      } catch (err) {
        setIsloading(false);
        const errorLog = get(err, 'response.data.errors', []);
        const status = get(err, 'response.status', 0);
        errorLog.map((er) => toast.error(er));
        history.push('/');
        if (status === 401) {
          dispatch(actions.loginFailure());
        }
      }
    }
    getData();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newError = { ...error };
    if (name.length < 3 || name.length > 255) {
      newError.nameError = 'Name must have a between 3 and 255 charaters';
      setError(newError);
      isValid = false;
    }
    if (lastName.length < 3 || lastName.length > 255) {
      newError.lastNameError =
        'Last name must have a between 3 and 255 charaters';
      setError(newError);
      isValid = false;
    }
    if (!isInt(String(age))) {
      newError.ageError = 'Age must have a valid number';
      setError(newError);
      isValid = false;
    }
    if (!isFloat(String(weight))) {
      newError.weightError = 'Weight must have a valid number.';
      setError(() => newError);
      isValid = false;
    }
    if (!isFloat(String(height))) {
      newError.heightError = 'Height must have a valid number.';
      setError(() => newError);
      isValid = false;
    }
    if (!isEmail(email)) {
      newError.emailError = 'Email must be valid.';
      setError(() => newError);
      isValid = false;
    }
    if (!isValid) return;
    try {
      if (id) {
        // edit
        await axios.put(`/alunos/${id}`, {
          nome: name,
          sobrenome: lastName,
          email,
          idade: age,
          peso: weight,
          altura: height,
        });
        history.push('/');
        toast.success('Student edited successfully!');
      } else {
        // create
        await axios.post('alunos/', {
          nome: name,
          sobrenome: lastName,
          email,
          idade: age,
          peso: weight,
          altura: height,
        });
        history.push('/');
        toast.success('Student added successfully!');
      }
    } catch (err) {
      const errors = get(err, 'response.errors', []);
      errors.map((er) => toast.error(er));
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Edit Student' : 'New Student'}</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <p>{error.nameError}</p>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <p>{error.lastNameError}</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <p>{error.emailError}</p>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <p>{error.ageError}</p>
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight"
        />
        <p>{error.weightError}</p>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height"
        />
        <p>{error.heightError}</p>
        <button type="submit">Send</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropType.shape({}).isRequired,
};
