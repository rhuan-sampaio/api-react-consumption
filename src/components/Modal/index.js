import React from 'react';
import PropTypes from 'prop-types';
import { Container, Unfocus } from './styled';

export default function Modal({ children, onClose = () => {} }) {
  const handleClickBox = (e) => {
    if (e.target.id === 'unfocused') {
      onClose();
    }
  };

  return (
    <Unfocus onClick={handleClickBox} id="unfocused">
      <Container>
        <h1> Info </h1>
        {children}
      </Container>
    </Unfocus>
  );
}
Modal.defaultProps = {
  onClose: () => {},
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};
