import React, { useState, useEffect } from 'react';
import { get } from 'react-hook-form';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Photos({ match }) {
  const id = get(match, 'params.id', '');
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState('');
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const photoURL = URL.createObjectURL(file);

    setPhotos(photoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('photo', file);
    console.log(formData);

    try {
      setIsLoading(true);
      await axios.post('/photos/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Image successfully updated');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Error when send the image');
      console.log(err);
      const errors = get(err, 'response.data.errors', []);
      if (status === 401) {
        toast.error('You must login again');
        dispatch(actions.loginFailure());
      }
    }
  };

  useEffect(() => {
    const getPhoto = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setPhotos(() => get(data, 'Photos[0].url', ''));
        setIsLoading(false);
      } catch (err) {
        toast.error('Error to obtain the image');
        setIsLoading(false);
        history.push('/');
      }
    };
    getPhoto();
  }, [id]);
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title> Photos </Title>
      <Form>
        <label htmlFor="photos">
          {' '}
          {photos ? <img src={photos} alt="User" /> : 'Select Image'}
          <input id="photos" type="file" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Photos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
