import { useEffect, useState } from 'react';
import useBooking from '../../hooks/api/useBooking';
import useRoomBookings from '../../hooks/api/useRoomBookings';
import useHotelRooms from '../../hooks/api/useHotelRooms';
import CardHotel from './CardHotel.js';

export default function ReviewBooking({ booking }) {
  const { bookings, getRoomBookings } = useRoomBookings();
  const [roomBookings, setRoomBookings] = useState([]);
  const [numberOfBookings, setNumberOfBookings] = useState(0);
  const { gethotelRooms } = useHotelRooms();
  const [hotel, setHotel] = useState(0);
  const [typeRoom, setTypeRoom] = useState('');
  // console.log(booking.Room.id);

  useEffect(async() => {
    if (bookings) {
      console.log(bookings);
      setRoomBookings(bookings);
      setNumberOfBookings(bookings.length - 1);
    }
    if(booking.Room.capacity==1) {
      setTypeRoom('Single');
    }
    if(booking.Room.capacity==2) {
      setTypeRoom('Double');
    }
    if(booking.Room.capacity==3) {
      setTypeRoom('Triple');
    }
  }, [bookings]);

  useEffect(async() => {
    const hotelId = localStorage.getItem('hotel');
    const hotelRooms = await gethotelRooms(hotelId);
    if (hotelRooms) {
      console.log(hotelRooms);
      setHotel(hotelRooms);
    }
  }, []);
  console.log(hotel);
  console.log(roomBookings);
  return (
    <>
      {roomBookings.length !==0 && hotel !==0 ? (
        <>
          <CardHotel>
            <img src={hotel.image} alt={hotel.name}/>
            <div>
              <h2>{hotel.name}</h2>
              <h1>Quarto reservado</h1>
              <p>{`${booking.Room.name} (${typeRoom})`}</p>
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
