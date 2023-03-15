import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function PlaceActivities() {
  return (
    <Container>
      <TitleTypography variant="subtitle1">Auditório Principal</TitleTypography>
      <TitleTypography variant="subtitle1">Auditório Lateral</TitleTypography>
      <TitleTypography variant="subtitle1">Sala de Workshop</TitleTypography>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const TitleTypography = styled(Typography)`
  color: #7b7b7b;
  margin-bottom: 20px !important;
`;
