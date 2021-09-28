import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaUserEdit,
  FaPlus,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture, NewAluno } from './styled';
import { iconColor } from '../../config/colors';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import ConfirmModal from '../../components/ConfirmModal';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState({});
  const [confirmModal, setConfirmModal] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get('/alunos');
        setAlunos(response.data);
        setIsLoading(false);
      } catch (err) {
        const errors = get(err, 'response.data.errors', false);
        if (errors) {
          errors.map((er) => toast.error(er));
        } else {
          toast.error('Please verify your internet connection');
        }
        setIsLoading(false);
        //
      }
    }
    getData();
  }, []);
  const handleDeleteAsk = (e) => {
    e.preventDefault();
  };
  const handleDelete = async (e, id, selected) => {
    e.persist();
    setIsLoading(true);
    const index = alunos.indexOf(selected);

    try {
      await axios.delete(`/alunos/${id}`);
      const newAlunos = [...alunos];

      newAlunos.splice(index, 1);
      setAlunos(newAlunos);
      setIsLoading(false);
      setModalOpen(false);
      setConfirmModal(false);
      toast.success('Student deleted successfully.');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
      setConfirmModal(false);
      setIsLoading(false);
    }
  };

  const handleClickClose = () => {
    setModalOpen(false);
  };
  const handleClickOpen = (e, index) => {
    setSelectedAluno(alunos[index]);
    setModalOpen(true);
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Students</h1>

      <NewAluno to="/aluno/">
        <button type="submit">
          <span>
            New <FaPlus size={10} />
          </span>
        </button>
      </NewAluno>
      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div
            id="aluno-container"
            className="aluno-div"
            key={String(aluno.id)}
          >
            <ProfilePicture>
              {get(aluno, 'Photos[0].url', false) ? (
                <img src={aluno.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Modal onClose={() => setModalOpen(false)} modalOpen={modalOpen}>
              {get(selectedAluno, 'Photos[0].url') ? (
                <img
                  src={selectedAluno.Photos[0].url}
                  alt={selectedAluno.nome}
                />
              ) : (
                <FaUserCircle size={80} />
              )}

              <form action="/">
                <label htmlFor="nome">
                  Name:
                  <input
                    id="nome"
                    type="text"
                    value={selectedAluno.nome}
                    disabled
                  />
                </label>

                <label htmlFor="sobrenome">
                  Lastname:
                  <input
                    id="sobrenome"
                    type="text"
                    value={selectedAluno.sobrenome}
                    disabled
                  />
                </label>

                <label htmlFor="email">
                  E-mail:
                  <input
                    id="email"
                    type="text"
                    value={selectedAluno.email}
                    disabled
                  />
                </label>
                <label htmlFor="age">
                  Age:
                  <input
                    id="age"
                    type="text"
                    value={selectedAluno.idade}
                    disabled
                  />
                </label>

                <label htmlFor="weight">
                  Weight:
                  <input
                    id="weight"
                    type="text"
                    value={selectedAluno.peso}
                    disabled
                  />
                </label>

                <label htmlFor="height">
                  {' '}
                  Height:
                  <input
                    id="height"
                    type="text"
                    value={selectedAluno.altura}
                    disabled
                  />
                </label>
              </form>
              {isLoggedIn ? (
                <div>
                  <span>Edit</span>
                  <Link to={`/aluno/${selectedAluno.id}/edit`}>
                    <FaUserEdit color={iconColor} size={16} />
                  </Link>
                  <span>Erase</span>
                  <Link onClick={handleDeleteAsk} to="/aluno">
                    <FaWindowClose
                      onClick={() => {
                        setConfirmModal(true);
                      }}
                      color={iconColor}
                      size={16}
                    />
                  </Link>
                </div>
              ) : (
                <></>
              )}

              <button onClick={handleClickClose} type="submit">
                Close
              </button>
              <ConfirmModal modalOpen={confirmModal}>
                <p>Deleting student {selectedAluno.nome}, are you sure? </p>
                <div>
                  <button
                    onClick={(e) =>
                      handleDelete(e, selectedAluno.id, selectedAluno)
                    }
                    type="submit"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setConfirmModal(false);
                    }}
                    type="submit"
                  >
                    Cancel
                  </button>
                </div>
              </ConfirmModal>
            </Modal>
            <div>
              <button type="submit" onClick={(e) => handleClickOpen(e, index)}>
                View Info <FaEdit size={10} />
              </button>
            </div>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
