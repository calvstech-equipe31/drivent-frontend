import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Activity from './Activity';

const nameActivity1 = 'Montando Pc';
const nameActivity2 = 'Cursin de Java';
const nameActivity3 = 'Infraestrutura com Docker';

const time1 = 1;
const time2 = 1;
const time3 = 2;

const horario1 = '09:00 - 10:00';
const horario2 = '09:00 - 10:00';
const horario3 = '09:00 - 11:00';

const full = false;

export default function PlaceActivities() {
  return (
    <>
      <Place>
        <TitleTypography>Auditório Principal</TitleTypography>
        <ActivitiesGrid>
          <Activity nameActivity={nameActivity1} time={time1} horario={horario1} isFull={!full}/>
        </ActivitiesGrid>
      </Place>
      <Place>
        <TitleTypography>Auditório Lateral</TitleTypography>
        <ActivitiesGrid>
          <Activity nameActivity={nameActivity2} time={time2} horario={horario2} isFull={!full}/>
          <Activity nameActivity={nameActivity2} time={time2} horario={horario2} isFull={full}/>
        </ActivitiesGrid>
      </Place>
      <Place>
        <TitleTypography>Sala de Workshop</TitleTypography>
        <ActivitiesGrid>
          <Activity nameActivity={nameActivity3} time={time3} horario={horario3}isFull={!full}/>
        </ActivitiesGrid>
      </Place>
    </>
  );
}

const Place = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleTypography = styled(Typography)`
  color: #7b7b7b;
  margin-bottom: 20px !important;
`;

const ActivitiesGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #d7d7d7;
  height: 450px;
`;
