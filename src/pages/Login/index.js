import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={true}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Salve mermao, Deus te ama e eu também!</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
