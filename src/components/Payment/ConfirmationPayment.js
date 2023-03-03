import { Typography } from '@material-ui/core';
import { AiFillCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';

export default function ConfirmationPayment() {
  return (
    <Container>
      <AiFillCheckCircle size={40} color={'#36B853'} />
      <InfoConfirmationPayment>
        <Title variant="inherit">Pagamento confirmado !</Title>
        <Text variant="body2">Prossiga para escolha de hospedagem e atividades</Text>
      </InfoConfirmationPayment>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  height: 100px;
  display: flex;
  align-items: center;
  gap: calc(10px);
`;

const InfoConfirmationPayment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #454545;
`;

const Title = styled(Typography)`
  font-size: 1em;
  font-weight: 700;
`;

const Text = styled(Typography)`
  font-size: 0.8em;
`;
