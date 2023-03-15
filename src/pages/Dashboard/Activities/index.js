import styled from 'styled-components';
import PlaceActivities from '../../../components/ListActivities/PlaceActivities';

export default function Activities() {
  return (
    <Container>
      <PlaceActivities />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

`;
