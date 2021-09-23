import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaCheck,
  FaBan,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture, NewAluno } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);
  const handleDeleteAsk = (index, e) => {
    e.preventDefault();
    const deleteBtn = document.querySelector(`.deletebtn${index}`);
    deleteBtn.setAttribute('opacity', '0');
    deleteBtn.setAttribute('display', 'none');
    const confirmButton = e.currentTarget.nextSibling;
    const cancelButton = confirmButton.nextSibling;
    confirmButton.setAttribute('opacity', '1');
    confirmButton.setAttribute('display', 'block');
    cancelButton.setAttribute('opacity', '1');
    cancelButton.setAttribute('display', 'block');
  };
  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const newAlunos = [...alunos];
      newAlunos.splice(index, 1);
      setAlunos(newAlunos);
      setIsLoading(false);
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
  };
  const handleCancel = (index, e) => {
    const confirm = e.currentTarget.previousSibling;
    const cancel = e.currentTarget;
    const deleteBtn = document.querySelector(`.deletebtn${index}`);
    deleteBtn.setAttribute('opacity', '1');
    deleteBtn.setAttribute('display', 'block');
    cancel.setAttribute('opacity', '0');
    cancel.setAttribute('display', 'none');
    confirm.setAttribute('opacity', '0');
    confirm.setAttribute('display', 'none');
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NewAluno to="/aluno/">New Student</NewAluno>
      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div className="aluno-div" key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Photos[0].url', false) ? (
                <img src={aluno.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit
                className="transition"
                size={16}
                display={isLoggedIn ? 'inline' : 'none'}
              />
            </Link>
            <Link onClick={(e) => handleDeleteAsk(index, e)} to="/aluno">
              <FaWindowClose
                className={`transition deletebtn${index}`}
                size={16}
                display={isLoggedIn ? 'inline' : 'none'}
              />
            </Link>
            <FaCheck
              className="transition"
              onClick={(e) => handleDelete(e, aluno.id, index)}
              size={16}
              cursor="pointer"
              display="none"
              color="green"
            />
            <FaBan
              className="transition"
              onClick={(e) => handleCancel(index, e)}
              size={16}
              cursor="pointer"
              display="none"
              color="#C3073F"
            />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
