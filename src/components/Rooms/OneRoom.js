import styled from 'styled-components';
import { IoPersonOutline, IoPerson } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export default function OneRoom({ room, roomAvailability, selectRoom, chosenRoom }) {
  const { capacity, name, _count } = room;
  const { Booking } = _count;

  function checkAvailability(availability) {
    if (availability === 'occupied') {
      return <IoPerson />;
    }
    if (availability === 'chosen') {
      return <IoPerson color={'#FF4791'} />;
    }
    if (availability === 'empty') {
      return <IoPersonOutline />;
    }
  }
  return (
    <Room chosenRoom={chosenRoom}>
      <button onClick={selectRoom} disabled={Booking === capacity}>
        <RoomName full={Booking === capacity}>{name}</RoomName>
        <PersonIcon>{roomAvailability.map((availability) => checkAvailability(availability))}</PersonIcon>
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
    background-color:${props => props.chosenRoom ? '#FFEED2' : '#ffffff'};
    cursor: pointer;
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
  color: ${(props) => (props.full ? '#9D9D9D' : '#454545')};
`;

const PersonIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 13px;
  svg {
    font-size: 21px;
  }
`;
