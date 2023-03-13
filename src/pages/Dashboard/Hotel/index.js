import Rooms from '../../../components/Rooms';
import { useEffect, useState } from 'react';
import useBooking from '../../../hooks/api/useBooking';
import useRoomBookings from '../../../hooks/api/useRoomBookings';
import ReviewBooking from '../../../components/Booking/ReviewBooking.js';
import styled from 'styled-components';
import ListHotels from '../../../components/ListHotels';

export default function Hotel() {
  const [existBooking, setExistBooking] = useState(false);
  const { booking } = useBooking();
  const { getRoomBookings } = useRoomBookings();
  useEffect(() => {
    if (booking) {
      getRoomBookings(booking.Room.id);
      localStorage.setItem('room', `${booking.Room.id}`);
      setExistBooking(true);
    }
  }, [booking, existBooking]);
  return (
    <>
      <MainTittle>
        Escolha de hotel e quarto
      </MainTittle>

      {booking ? (
        <>
          <ReviewBooking booking={booking} />
        </>
      ) : (
        <>
          <ListHotels />
        </>
      )}
    </>
  );
}

const MainTittle = styled.div`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
`;

