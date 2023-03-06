import { SUB_TITLE_COLOR } from '../../constants/colors';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function Title() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
