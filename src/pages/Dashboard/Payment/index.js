import { useEffect, useState } from 'react';
import CardInput from '../../../components/CardInput';
import Tickets from '../../../components/Tickets/TicketTypes.js';
import usePayment from '../../../hooks/api/usePayment';
import useTicketUser from '../../../hooks/api/useTicketUser';
import useLocalStorage from '../../../hooks/useLocalStorage';

export default function Payment() {
  const [existTicket, setExistTicket] = useState(false);
  const { userTicket } = useTicketUser();
  const { getPayment } = usePayment();
  useEffect(() => {
    if (userTicket) {
      getPayment(userTicket.id);
      localStorage.setItem('ticket', `${userTicket.id}`);
      setExistTicket(true);
    }
  }, [userTicket, existTicket]);
  return <>{existTicket ? <CardInput userTicket={userTicket} /> : <Tickets setExistTicket={setExistTicket} />}</>;
}
