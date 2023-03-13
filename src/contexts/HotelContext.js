import { createContext, useContext, useEffect, useState } from 'react';
import useHotelRooms from '../hooks/api/useHotelRooms';

const HotelContext = createContext();
export default HotelContext;
export function HotelProvider({ children }) {
  const [selectHotel, setSelectHotel] = useState();

  return <HotelContext.Provider value={{ selectHotel, setSelectHotel }}>{children}</HotelContext.Provider>;
}
