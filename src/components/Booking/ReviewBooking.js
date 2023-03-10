import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useBooking from '../../hooks/api/useBooking';
import useRoomBookings from '../../hooks/api/useRoomBookings';

export default function ReviewBooking({ booking }) {
  const { bookings, getRoomBookings } = useRoomBookings();
  const [roomBookings, setRoomBookings] = useState([]);
  const [numberOfBookings, setNumberOfBookings] = useState(0);

  console.log(booking.Room.id);

  useEffect(async() => {
    if (bookings) {
      console.log(bookings);
      setRoomBookings(bookings);
      setNumberOfBookings(bookings.length - 1);
    }
  }, [bookings]);

  return (
    <>
      {roomBookings.length !==0 ? (
        <>
          <h1>Quarto reservado</h1>
          {`${booking.id} (${booking.Room.name})`}
          <h1>Pessoas no seu quarto</h1>
          {numberOfBookings==0 ? <> Somente você </> : <>{`Você e mais ${numberOfBookings}`}</> }
        </>
      ) : (
        <>
      Carregando
        </>
      )}
    </>
  );
}
