import styled from 'styled-components';
import { IoPersonOutline, IoPerson } from 'react-icons/io5';

export default function OneRoom({ roomName }) {
  return (
    <Room>
      <button>
        <RoomName>{roomName}</RoomName>
        <PersonIcon>
          <IoPersonOutline />
          <IoPersonOutline />
          <IoPerson/>
        </PersonIcon>
      </button>
    </Room>
  );
}

const Room = styled.div`
  position: relative;
  width: 190px;
  height: 45px;
  margin: 0 0 8px 0;
  button {
    width: 100%;
    height: 100%;
    border: 1px solid #cecece;
    border-radius: 10px;
    background-color: #ffffff;
  }
`;

const RoomName = styled.h4`
  position: absolute;
  left: 15px;
  top: 12px;

  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 700;
  font-style: normal;
  color: #454545;
`;

const PersonIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 13px;
  svg {
    font-size: 21px;
  }
`;
