import Rooms from '../../../components/Rooms';
import { useEffect, useState } from 'react';
import useBooking from '../../../hooks/api/useBooking';
import useRoomBookings from '../../../hooks/api/useRoomBookings';
import useHotelRooms from '../../../hooks/api/useHotelRooms';
import ReviewBooking from '../../../components/Booking/ReviewBooking.js';
import styled from 'styled-components';
import ListHotels from '../../../components/ListHotels';

export default function Hotel() {
  const [existBooking, setExistBooking] = useState(false);
  const [booking, setBooking] = useState();
  const { getBooking } = useBooking();
  const { getRoomBookings } = useRoomBookings();
  const { gethotelRooms } = useHotelRooms();
  const [changeRoom, setChangeRoom] = useState(true);
  useEffect(async() => {
    const newBooking = await getBooking();
    if (newBooking) {
      console.log('Existe booking no index do Hotel');
      await getRoomBookings(newBooking.Room.id);
      localStorage.setItem('room', `${newBooking.Room.id}`);
      await gethotelRooms(newBooking.Room.hotelId);
      localStorage.setItem('hotel', `${newBooking.Room.hotelId}`);
      setBooking(newBooking);
      setExistBooking(true);
    }
    console.log('to passando pelo useEffe do Hotel');
  }, [existBooking, changeRoom]);
  return (
    <>
      <Container>
        <MainTittle>
        Escolha de hotel e quarto
        </MainTittle>
        {booking && changeRoom ? (
          <>
            <Title>Você já escolheu seu quarto:</Title>
            <ReviewBooking booking={booking} setChangeRoom={setChangeRoom}/>
          </>
        ) : (
          <>
            <ListHotels setExistBooking={setExistBooking} existBooking={existBooking} setChangeRoom={setChangeRoom}/>
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

const MainTittle = styled.div`
  font-size: 30px;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 10px;
`;

