import { getRoomBookingsById } from '../../services/bookingApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useRoomBookings() {
  const token = useToken();
  //const room  = Number(localStorage.getItem('room'));
  
  const {
    data: bookings,
    loading: bookingsLoading,
    error: bookingsError,
    act: getRoomBookings,
  } = useAsync((data) => getRoomBookingsById(data, token), false);

  return {
    bookings,
    bookingsLoading,
    getRoomBookings,
    getRoomBookings,
  };
}
