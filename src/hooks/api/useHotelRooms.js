import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useHotelRooms() {
  const token = useToken();
  const hotel  = Number(localStorage.getItem('hotel'));

  const {
    data: hotelRooms,
    loading: hotelRoomsLoading,
    error: hotelRoomsError,
    act: gethotelRooms,
  } = useAsync(() => hotelApi.getHotelWithRooms(token, hotel));

  return {
    hotelRooms,
    hotelRoomsLoading,
    hotelRoomsError,
    gethotelRooms,
  };
}
