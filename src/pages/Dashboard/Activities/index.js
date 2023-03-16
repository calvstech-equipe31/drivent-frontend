import ListDays from '../../../components/Days';
import styled from 'styled-components';

export default function Activities() {
  return (
    <>
      <Container>
        <MainTittle>Escolha de atividades</MainTittle>
        <ListDays/>
      </Container>
    </>
  );
}
const MainTittle = styled.div`
  font-size: 30px;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 10px;
`;
const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    
    color: #000000;
`;
