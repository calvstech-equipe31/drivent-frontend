import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';
import { useContext } from 'react';
import HotelContext from '../../contexts/HotelContext';

export default function useHotelRooms() {
  const token = useToken();
  const hotel  = Number(localStorage.getItem('hotel'));

  const {
    data: hotelRooms,
    loading: hotelRoomsLoading,
    error: hotelRoomsError,
    act: gethotelRooms,
  } = useAsync((data) => hotelApi.getHotelWithRooms(data, token), false);

  return {
    hotelRooms,
    hotelRoomsLoading,
    hotelRoomsError,
    gethotelRooms,
  };
}
