import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { Container } from './styled';
import * as loadingAnimation from '../../animation/load.json';

export default function Loading({ isLoading }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <div className="animation">
        <Lottie options={defaultOptions} />
      </div>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};
Loading.propTypes = {
  isLoading: PropTypes.bool,
};
