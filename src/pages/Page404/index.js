import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { H1, Paragraph } from './styled';

export default function Page404() {
  return (
    <Container>
      <H1>Page 404</H1>
      <Paragraph>This page does not exist.</Paragraph>
    </Container>
  );
}
