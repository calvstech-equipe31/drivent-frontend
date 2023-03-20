import styled from 'styled-components';
import PlaceActivities from './PlaceActivities';
import useLocations from '../../hooks/api/useLocations';

export default function ListActivities({ daySelected }) {
  return (
    <Container>
      <PlaceActivities daySelected={daySelected} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;
