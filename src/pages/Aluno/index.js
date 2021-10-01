import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { get } from 'lodash';

import { toast } from 'react-toastify';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as actions from '../../store/modules/auth/actions';
import { Container } from '../../styles/GlobalStyles';
import { ProfilePicture, Title, FormContainer } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import AlunoForm from './AlunoForm';

export default function Aluno({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [photo, setPhoto] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const savedData = { name, lastName, age, weight, height, email };

  useEffect(() => {
    setIsloading(false);
    if (!id) return;
    async function getData() {
      try {
        setIsloading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Photo = get(data, 'Photos[0].url', '');
        setName(data.nome);
        setLastName(data.sobrenome);
        setEmail(data.email);
        setAge(data.idade);
        setWeight(data.peso);
        setHeight(data.altura);
        setPhoto(Photo);
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
  }, [id, dispatch]);

  const handleSubmit = async (values) => {
    try {
      if (id) {
        // edit
        await axios.put(`/alunos/${id}`, {
          nome: values.name,
          sobrenome: values.lastname,
          email: values.email,
          idade: values.age,
          peso: values.weight,
          altura: values.height,
        });
        history.push('/');
        toast.success('Student edited successfully!');
      } else {
        // create
        await axios.post('alunos/', {
          nome: values.name,
          sobrenome: values.lastname,
          email: values.email,
          idade: values.age,
          peso: values.weight,
          altura: values.height,
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
      <Title>{id ? 'Edit Student' : 'New Student'}</Title>
      {id ? (
        <ProfilePicture>
          {photo ? <img src={photo} alt={name} /> : <FaUserCircle size={130} />}
          <Link to={`/photos/${id}`}>
            <FaEdit size={16} />
          </Link>
        </ProfilePicture>
      ) : (
        ''
      )}
      <FormContainer>
        <AlunoForm
          onSubmit={handleSubmit}
          savedData={savedData}
          setIsloading={setIsloading}
        />
      </FormContainer>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropType.shape({}).isRequired,
};
