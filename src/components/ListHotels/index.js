import { useContext, useState } from 'react';
import styled from 'styled-components';
import HotelContext from '../../contexts/HotelContext';
import useHotelRooms from '../../hooks/api/useHotelRooms';
import useHotels from '../../hooks/api/useHotels';
import Rooms from '../Rooms';

export default function ListHotels() {
  const { selectHotel, setSelectHotel } = useContext(HotelContext);
  const { gethotelRooms } = useHotelRooms();
  const { hotels } = useHotels();
  async function findHotel(id) {
    localStorage.setItem('hotelId', `${id}`);
    setSelectHotel(id);
    const oba = await gethotelRooms();
    console.log(oba);
  }
  return (
    <>
      <Tittle>Primeiro, escolha seu hotel</Tittle>
      <HotelContainer>
        {hotels ? (
          hotels.map((hotel) => {
            return (
              <HotelBox onClick={async() => await findHotel(hotel.id)}>
                <img src={hotel.image} />
                <h1>{hotel.name}</h1>
                <h2>Tipos de acomodação:</h2>
                <h3>{hotel.typesRoom.join(', ')}</h3>
                <h2>Vagas disponíveis:</h2>
                <h3>{hotel.capacity}</h3>
              </HotelBox>
            );
          })
        ) : (
          <div></div>
        )}
      </HotelContainer>
      {
        selectHotel && <Rooms/>
      }      
    </>
  );
}

const HotelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 0 60px 0;
`;

const HotelBox = styled.div`
  background-color: #ebebeb;
  width: 196px;
  height: 264px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 20px 0 0;
  img{
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
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
