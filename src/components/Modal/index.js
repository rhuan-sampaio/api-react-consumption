import React from 'react';
import PropTypes from 'prop-types';
import { Container, Unfocus } from './styled';

export default function Modal({ children, modalOpen, onClose = () => {} }) {
  const handleClickBox = (e) => {
    if (e.target.id === 'unfocused') {
      onClose();
    }
  };
  if (!modalOpen) {
    return <></>;
  }
  return (
    <Unfocus onClick={handleClickBox} id="unfocused">
      <Container>
        <h1> Student data </h1>
        {children}
      </Container>
    </Unfocus>
  );
}
Modal.defaultProps = {
  modalOpen: false,
  onClose: () => {},
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  modalOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
