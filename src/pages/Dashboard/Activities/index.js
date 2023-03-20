import ListDays from '../../../components/Days';
import styled from 'styled-components';
import useTicketUser from '../../../hooks/api/useTicketUser';
import { useState, useEffect } from 'react';
import ListActivities from '../../../components/ListActivities/ListActivities';

export default function Activities() {
  const { userTicket } = useTicketUser();
  const [daySelected, setDaySelected] = useState({});
  
  return (
    <>
      <Container>
        <MainTittle>Escolha de atividades</MainTittle>
        {userTicket
          ? 
          <>
            {userTicket.status === 'PAID' && userTicket.TicketType.isRemote == false 
              ? 
              <>
                <ListDays daySelected={daySelected} setDaySelected={setDaySelected}/> 
                <ListActivities daySelected={daySelected}/>
              </>
              : 
              <>
                {userTicket.status === 'RESERVED' 
                  ? 
                  <StyledContainer>
                    <StyledTitleContainer>
                      <h1>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</h1>
                    </StyledTitleContainer>
                  </StyledContainer>
                  : 
                  <StyledContainer>
                    <StyledTitleContainer>
                      <h1>Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.</h1>
                    </StyledTitleContainer>
                  </StyledContainer>
                }</>
            }
          </> 
          : 
          <>
            <StyledContainer>
              <StyledTitleContainer>
                <h1>Você precisa completar sua inscrição antes de prosseguir pra escolha de atividades</h1>
              </StyledTitleContainer>
            </StyledContainer>
          </>
        }
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

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledTitleContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    color: #8e8e8e;
  }
`;
