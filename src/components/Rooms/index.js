import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import OneRoom from './OneRoom';
import Button from '../Form/Button';
import useHotelRooms from '../../hooks/api/useHotelRooms';
import { toast } from 'react-toastify';
import useSaveBooking from '../../hooks/api/useSaveBooking';
import useBooking from '../../hooks/api/useBooking';
import useHotels from '../../hooks/api/useHotels';
import ListHotels from '../ListHotels';
import HotelContext from '../../contexts/HotelContext';

export default function Rooms({ existBooking, setExistBooking }) {
  const [loadingRooms, setLoadingRooms] = useState(true);
  const [hotel, setHotel] = useState([]);
  const [roomAvailability, setRoomAvailability] = useState({});
  const [chosenRoom, setChosenRoom] = useState();
  const { selectHotel, setSelectHotel } = useContext(HotelContext);
  const { gethotelRooms } = useHotelRooms();
  const { booking, bookingLoading, bookingError } = useBooking();
  const { saveBooking, saveBookingLoading } = useSaveBooking();

  function selectRoom(roomId) {
    console.log(chosenRoom);
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
    if (bookingLoading) toast('Ops! Ocorreu um erro. Tente novamente.');
    if (booking) return toast('Usuario ja possui um quarto!');
    if (!chosenRoom) return toast('Escolha um quarto!');
    try {
      const bodyRoomId = { roomId: chosenRoom };
      await saveBooking(bodyRoomId);
      setChosenRoom();
      toast('Quarto reservado com sucesso!');
      setSelectHotel(hotel.id);
      setExistBooking(!existBooking);
    } catch (err) {
      console.log(err.response);
      toast('Não foi possivel completar sua reserva!');
    }
  }

  useEffect(async() => {
    try {
      setLoadingRooms(true);
      const hotelRooms = await gethotelRooms(selectHotel);
      if(hotelRooms.id !== hotel.id) {
        setChosenRoom();
      }
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
        setLoadingRooms(false);
      }
    } catch { 
      toast('Ops. Ocorreu um erro ao carregar os quartos. Por favor tente novamente mais tarde.');
    }
  }, [selectHotel]);
  
  return (
    <>
      <Tittle>Ótima pedida! Agora escolha seu quarto:</Tittle>
      <AllRomns>
        {loadingRooms
          ? 'Aguardando...'
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

const HotelContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const HotelBox = styled.div`
  background-color: #ebebeb;
  width: 190px;
  height: 230px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 20px 0 0;
  h1 {
    color: #343434;
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
  }
  h2 {
    color: #3c3c3c;
    font-size: 12px;
    font-weight: 700;
    margin-top: 10px;
  }
  h3 {
    color: #3c3c3c;
    font-size: 12px;
    font-weight: 400;
  }
`;

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
