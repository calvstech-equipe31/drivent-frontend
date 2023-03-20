import { BiLogIn } from 'react-icons/bi';
import { FiXCircle } from 'react-icons/fi';
import styled from 'styled-components';
export default function Activity({ nameActivity, time, startHour, endHour, isFull, capacity }) {
  return (
    <Container time={time}>
      <InfosActivity time={time}>
        <p>{nameActivity}</p>
        <span>{startHour} - {endHour}</span>
      </InfosActivity>
      <StatusActivity time={time} isFull={isFull}>
        {isFull ? <BiLogIn size={20} color="#078632" /> : <FiXCircle size={20} color="#CC6666"/>}
        <span>{capacity} vagas</span>
      </StatusActivity>
    </Container>
  );
}
const Container = styled.div`
  width: 90%;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  height: calc(${(props) => props.time}*80px);
  display: flex;
  background-color: #f1f1f1;
  border-radius: 12px;
`;

const InfosActivity = styled.div`
  width: 70%;
  height: calc(${(props) => props.time}*70px);

  display: flex;
  flex-direction: column;
  gap: calc(5px);
  font-size: 0.7em;

  p {
    font-weight: 700;
  }
`;

const StatusActivity = styled.div`
  width: 20%;
  height: calc(${(props) => props.time}*70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #cfcfcf;

  span {
    font-size: 0.5em;
    color: ${props => props.isFull ? '#078632': '#CC6666'};
  }
`;
