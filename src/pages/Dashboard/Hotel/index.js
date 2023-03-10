import Rooms from '../../../components/Rooms';
import { useEffect, useState } from 'react';
import useBooking from '../../../hooks/api/useBooking';
import useRoomBookings from '../../../hooks/api/useRoomBookings';
import ReviewBooking from '../../../components/Booking/ReviewBooking.js';

export default function Hotel() {
  const [existBooking, setExistBooking] = useState(false);
  const { booking } = useBooking();
  const { getRoomBookings } = useRoomBookings();
  useEffect(() => {
    if (booking) {
      getRoomBookings(booking.Room.id);
      localStorage.setItem('room', `${booking.Room.id}`);
      setExistBooking(true);
    }
  }, [booking, existBooking]);
  return (
    <>
      {booking ? (
        <>
          <ReviewBooking booking={booking}/>
        </>
      ) : (
        <>
          <Rooms/>
        </>
      )}
    </>
  );
}
