import Rooms from '../../../components/Rooms';
import { useEffect, useState } from 'react';
import useBooking from '../../../hooks/api/useBooking';
import useRoomBookings from '../../../hooks/api/useRoomBookings';
import useHotelRooms from '../../../hooks/api/useHotelRooms';
import ReviewBooking from '../../../components/Booking/ReviewBooking.js';
import styled from 'styled-components';

export default function Hotel() {
  const [existBooking, setExistBooking] = useState(false);
  const { booking } = useBooking();
  const { getRoomBookings } = useRoomBookings();
  const { gethotelRooms } = useHotelRooms();
  useEffect(() => {
    if (booking) {
      getRoomBookings(booking.Room.id);
      localStorage.setItem('room', `${booking.Room.id}`);
      gethotelRooms(booking.Room.hotelId);
      localStorage.setItem('hotel', `${booking.Room.hotelId}`);
      setExistBooking(true);
    }
  }, [booking, existBooking]);
  return (
    <>
      <Container>
        Escolha de hotel e quarto
        {booking ? (
          <>
            <Title>Você já escolheu seu quarto:</Title>
            <ReviewBooking booking={booking}/>
          </>
        ) : (
          <>
            ESCOLHA O QUARTO
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
`;
const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8E8E8E;
  margin-top: 36px;
`;
