import { useEffect, useState } from 'react';
import useBooking from '../../hooks/api/useBooking';
import useRoomBookings from '../../hooks/api/useRoomBookings';
import useHotelRooms from '../../hooks/api/useHotelRooms';
import CardHotel from './CardHotel.js';

export default function ReviewBooking({ booking }) {
  const { bookings, getRoomBookings } = useRoomBookings();
  const [roomBookings, setRoomBookings] = useState([]);
  const [numberOfBookings, setNumberOfBookings] = useState(0);
  const { hotelRooms, gethotelRooms } = useHotelRooms();
  const [hotel, setHotel] = useState(0);

  console.log(booking.Room.id);

  useEffect(async() => {
    if (bookings) {
      console.log(bookings);
      setRoomBookings(bookings);
      setNumberOfBookings(bookings.length - 1);
    }
  }, [bookings]);

  useEffect(async() => {
    if (hotelRooms) {
      console.log(hotelRooms);
      setHotel(hotelRooms);
    }
  }, [hotelRooms]);

  return (
    <>
      {roomBookings.length !==0 && hotel !==0 ? (
        <>
          <CardHotel>
            <img src={hotel.image} alt={hotel.name}/>
            <div>
              <h2>{hotel.name}</h2>
              <h1>Quarto reservado</h1>
              <p>{`${booking.id} (${booking.Room.name})`}</p>
              <h1>Pessoas no seu quarto</h1>
              <p>{numberOfBookings==0 ? <> Somente você </> : <>{`Você e mais ${numberOfBookings}`}</> }</p>
            </div>
          </CardHotel>
        </>
      ) : (
        <>
      Carregando
        </>
      )}
    </>
  );
}
