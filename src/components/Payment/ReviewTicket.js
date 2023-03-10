import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { CONTAINER_REVIEWTICKET_COLOR, INFO_TICKET_COLOR, SUB_TITLE_COLOR, TOTAL_PRICE } from '../../constants/colors';
export default function ReviewTicket({ ticketSelected }) {
  console.log(ticketSelected, 'Aqui');
  return (
    <>
      <StyledSubTitle variant="h6">Ingresso escolhido</StyledSubTitle>
      <ContainerReviewTicket>
        <InfoTicket variant="subtitle1">
          {ticketSelected.name}
          {ticketSelected.isRemote ? '' : ticketSelected.includesHotel ? ' + Com hotel' : ' + Sem hotel'}
        </InfoTicket>
        <TotalPrice variant="subtitle2">R$ {ticketSelected.price}</TotalPrice>
      </ContainerReviewTicket>
    </>
  );
}

const StyledSubTitle = styled(Typography)`
  color: ${SUB_TITLE_COLOR};
  margin-bottom: 10px !important;
`;

const ContainerReviewTicket = styled.div`
  width: 30%;
  height: 100px;
  background-color: ${CONTAINER_REVIEWTICKET_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const InfoTicket = styled(Typography)`
  font-family: 'Roboto';
  color: ${INFO_TICKET_COLOR};
  margin-bottom: 5px;
`;

const TotalPrice = styled(Typography)`
  font-family: 'Roboto';
  color: ${TOTAL_PRICE};
`;
