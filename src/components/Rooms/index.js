import { useEffect, useState } from 'react';
import styled from 'styled-components';
import OneRoom from './OneRoom';
import Button from '../Form/Button';
import useHotelRooms from '../../hooks/api/useHotelRooms';
import { toast } from 'react-toastify';
import useSaveBooking from '../../hooks/api/useSaveBooking';
import useBooking from '../../hooks/api/useBooking';

export default function Rooms() {
  const [hotel, setHotel] = useState([]);
  const [roomAvailability, setRoomAvailability] = useState({});
  const [chosenRoom, setChosenRoom] = useState();
  const { hotelRooms, hotelRoomsLoading, gethotelRooms } = useHotelRooms();
  const { booking, bookingLoading, bookingError } = useBooking();
  const { saveBooking, saveBookingLoading } = useSaveBooking();

  function selectRoom(roomId) {
    const room = roomAvailability[roomId];
    console.log(roomAvailability);
    if (roomId === chosenRoom || !room.includes('empty')) return;

    if (chosenRoom) {
      const newRoomAvailability = { ...roomAvailability };
      const oldRoom = roomAvailability[chosenRoom];
      const oldRoomLastIndex = oldRoom.indexOf('chosen');
      const newRoomlastIndex = room.lastIndexOf('empty');
      oldRoom[oldRoomLastIndex] = 'empty';
      room[newRoomlastIndex] = 'chosen';

      newRoomAvailability[chosenRoom] = oldRoom;
      newRoomAvailability[roomId] = room;

      setChosenRoom(roomId);
      setRoomAvailability(newRoomAvailability);
    }

    if (!chosenRoom) {
      const newRoomAvailability = { ...roomAvailability };
      const lastIndex = room.lastIndexOf('empty');

      room[lastIndex] = 'chosen';
      newRoomAvailability[roomId] = room;

      setChosenRoom(roomId);
      setRoomAvailability(newRoomAvailability);
    }
    console.log(chosenRoom);
  }

  async function bookingRoom() {
    if(booking) return toast('Usuario ja possui um quarto!');
    if (!chosenRoom) return toast('Escolha um quarto!');
    try {
      const bodyRoomId = { roomId: chosenRoom };
      await saveBooking(bodyRoomId);
      setChosenRoom();
      toast('Quarto reservado com sucesso!');
      await gethotelRooms();
    } catch (err) {
      console.log(err.response);
      toast('Não foi possivel completar sua reserva!');
    }
  }

  useEffect(() => {
    if (hotelRooms) {
      const allRooms = {};
      hotelRooms.Rooms.forEach((element) => {
        const personsBooking = Array.from({ length: element._count.Booking }, (_, i) => i + 1);
        let listRoomAvailability = [];
        for (let i = 1; i <= element.capacity; i++) {
          if (i === personsBooking[i - 1]) {
            listRoomAvailability.push('occupied');
          }
          if (i !== personsBooking[i - 1]) {
            listRoomAvailability.push('empty');
          }
        }
        allRooms[element.id] = listRoomAvailability.reverse();
      });
      setRoomAvailability(allRooms);
      setHotel(hotelRooms);
    }
  }, [hotelRooms]);

  console.log(roomAvailability);
  return (
    <>
      <Tittle>Ótima pedida! Agora escolha seu quarto:</Tittle>
      <AllRomns>
        {hotelRoomsLoading
          ? 'sim'
          : hotel.Rooms.map((r) => (
            <OneRoom
              key={r.id}
              selectRoom={() => selectRoom(r.id)}
              chosenRoom={r.id === chosenRoom}
              room={r}
              roomAvailability={roomAvailability[r.id]}
            />
          ))}
      </AllRomns>
      <Button onClick={bookingRoom}>RESERVAR QUARTO</Button>
    </>
  );
}

const Tittle = styled.h1`
  color: #8e8e8e;
  font-size: 20px;
`;

const AllRomns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;

  margin: 35px 0 44px 0;
`;
