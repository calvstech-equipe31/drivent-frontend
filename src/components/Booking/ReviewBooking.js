import { useEffect, useState, useContext } from 'react';
import useBooking from '../../hooks/api/useBooking';
import useRoomBookings from '../../hooks/api/useRoomBookings';
import CardHotel from './CardHotel.js';
import Button from '../Form/Button';
import { toast } from 'react-toastify';

export default function ReviewBooking({ booking, setChangeRoom }) {
  const { getRoomBookings } = useRoomBookings();
  const [roomBookings, setRoomBookings] = useState([]);
  const [numberOfBookings, setNumberOfBookings] = useState(0);
  const [typeRoom, setTypeRoom] = useState('');

  useEffect(async() => {
    try {
      const bookings = await getRoomBookings(booking.Room.id);
      if (bookings) {
        console.log(bookings);
        setRoomBookings(bookings);
        setNumberOfBookings(bookings.length - 1);
      }
      if (booking.Room.capacity == 1) {
        setTypeRoom('Single');
      }
      if (booking.Room.capacity == 2) {
        setTypeRoom('Double');
      }
      if (booking.Room.capacity == 3) {
        setTypeRoom('Triple');
      }
    }
    catch {
      toast('Ops. Ocorreu um erro ao carregar os quartos. Por favor tente novamente mais tarde.');
    }
  }, [booking]);

  return (
    <>
      {roomBookings.length !== 0 ? (
        <>
          <CardHotel>
            <img src={booking.Room.Hotel.image} alt={booking.Room.Hotel.name} />
            <div>
              <h2>{booking.Room.Hotel.name}</h2>
              <h1>Quarto reservado</h1>
              <p>{`${booking.Room.name} (${typeRoom})`}</p>
              <h1>Pessoas no seu quarto</h1>
              <p>{numberOfBookings == 0 ? <> Somente você </> : <>{`Você e mais ${numberOfBookings}`}</>}</p>
            </div>
          </CardHotel>
          <Button onClick={() => setChangeRoom(false)}>Troca de quarto</Button>
        </>
      ) : (
        <>Carregando</>
      )}
    </>
  );
}
