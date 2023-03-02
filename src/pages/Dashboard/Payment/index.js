import { Typography } from '@material-ui/core';
import styled from 'styled-components';
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
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <StyledSubTitle variant="h6">Ingresso escolhido</StyledSubTitle>
      <ReviewTicket />
    </>
  );
}
