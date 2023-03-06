import { Typography } from '@material-ui/core';
import CardInput from '../../../components/CardInput';
import Tickets from '../../../components/Tickets/TicketTypes.js';
import styled from 'styled-components';
import ConfirmationPayment from '../../../components/Payment/ConfirmationPayment';
import ReviewTicket from '../../../components/Payment/ReviewTicket';
import { SUB_TITLE_COLOR } from '../../../constants/colors';

export default function Payment() {
  const StyledTypography = styled(Typography)`
    margin-bottom: 20px !important;
  `;
  const StyledSubTitle = styled(Typography)`
    color: ${SUB_TITLE_COLOR};
    margin-bottom: 10px !important;
  `;

  return (
    <>
      <Tickets />
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <StyledSubTitle variant="h6">Ingresso escolhido</StyledSubTitle>
      <ReviewTicket />
      <ConfirmationPayment />
    </>
  );
}
