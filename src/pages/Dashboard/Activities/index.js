import styled from 'styled-components';
import ListActivities from '../../../components/ListActivities/ListActivities';

export default function Activities() {
  return (
    <Container>
      <ListActivities />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

`;
