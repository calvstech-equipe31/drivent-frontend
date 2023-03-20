import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Activity from './Activity';
import useLocations from '../../hooks/api/useLocations';
import useActivity from '../../hooks/api/useActivity';
import useInscription from '../../hooks/api/useInscription';
import { useEffect } from 'react';
import { useState } from 'react';

export default function PlaceActivities({ daySelected }) {
  const { locations } = useLocations();
  const { activity, getactivity }  = useActivity();
  const [activities, setActivities] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(async() => {
    const newActivity = await getactivity(); 
    setActivities(newActivity);
  }, [loading]);

  return (
    <>
      {locations ? (
        locations.map((l, index) => {   
          return (
            <Place>
              <TitleTypography key={index}>{l.name}</TitleTypography>
              <ActivitiesGrid> 
                {activities ? (
                  activities.map((a) => {
                    const full = a.Inscription.length !== a.Location.capacity;
                    if(a.localId === l.id && daySelected.id === a.dayId) {
                      return <Activity nameActivity={a.name} startHour={a.startHour} endHour={a.endHour} time={a.duration} isFull={full} capacity={a.Location.capacity - a.Inscription.length} loading={loading} setLoading={setLoading}/>;
                    }
                  })
                ):('')}
              </ActivitiesGrid>
            </Place>);
        } )
      ):(<h1>sim</h1>)}
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
