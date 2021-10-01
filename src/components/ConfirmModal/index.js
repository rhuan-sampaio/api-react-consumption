import React from 'react';
import PropTypes from 'prop-types';
import { Container, Unfocus } from './styled';

export default function ConfirmModal({ children }) {
  return (
    <Unfocus>
      <Container>{children}</Container>
    </Unfocus>
  );
}

ConfirmModal.propTypes = {
  children: PropTypes.node.isRequired,
};
