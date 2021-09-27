import React from 'react';
import PropTypes from 'prop-types';
import { Container, Unfocus } from './styled';

export default function ConfirmModal({ children, modalOpen }) {
  if (!modalOpen) {
    return <></>;
  }
  return (
    <Unfocus>
      <Container>{children}</Container>
    </Unfocus>
  );
}
ConfirmModal.defaultProps = {
  modalOpen: false,
};

ConfirmModal.propTypes = {
  children: PropTypes.node.isRequired,
  modalOpen: PropTypes.bool,
};
