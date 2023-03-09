import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useBooking from '../../hooks/api/useBooking';
import useRoomBookings from '../../hooks/api/useRoomBookings';

export default function ReviewBooking({ booking }) {
  const { bookings, getRoomBookings } = useRoomBookings();
  const [roomBookings, setRoomBookings] = useState([]);
  const [numberOfBookings, setNumberOfBookings] = useState(0);

  useEffect(async() => {
    if (bookings) {
      setRoomBookings(bookings);
      setNumberOfBookings(bookings.length - 1);
    }
  }, [bookings]);

  function typeQuarto() {
    if(booking.Room.capacity==1) {
      return 'Single';
    }
    if(booking.Room.capacity==2) {
      return 'Double';
    }
    if(booking.Room.capacity==3) {
      return 'Triple';
    }
  }

  return (
    <>
      {roomBookings.length !==0 ? (
        <>
      Quarto reservado
          {() => typeQuarto()}
      Pessoas no seu quarto
          {`Você e mais ${numberOfBookings}`}
        </>
      ) : (
        <>
      Carregando
        </>
      )}
    </>
  );
}
