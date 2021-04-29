import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import axios from '../../services/axios';
export default function Login() {
  /*esse hooks */
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;
      console.log(data);
    }
    getData();
  }, []);
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
