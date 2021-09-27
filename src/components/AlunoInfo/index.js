import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

export default function AlunoInfo({ children, isActivated }) {
  if (!isActivated) return <></>;
  return (
    <Container>
      <div />
      <div>{children}</div>
    </Container>
  );
}

AlunoInfo.defaultProps = {
  isActivated: false,
  children: '<> </>',
};
AlunoInfo.propTypes = {
  isActivated: PropTypes.bool,
  children: PropTypes.element,
};
