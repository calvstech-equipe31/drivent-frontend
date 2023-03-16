import styled from 'styled-components';
import PlaceActivities from './PlaceActivities';

export default function ListActivities() {
  return (
    <Container>
      <PlaceActivities />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;
