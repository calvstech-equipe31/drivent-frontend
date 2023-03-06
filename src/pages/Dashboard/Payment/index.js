import { useEffect, useState } from 'react';
import CardInput from '../../../components/CardInput';
import Title from '../../../components/Payment/Title';
import Tickets from '../../../components/Tickets/TicketTypes.js';
import usePayment from '../../../hooks/api/usePayment';
import useTicketUser from '../../../hooks/api/useTicketUser';
import ReviewTicket from '../../../components/Payment/ReviewTicket';
import useLocalStorage from '../../../hooks/useLocalStorage';

export default function Payment() {
  const [existTicket, setExistTicket] = useState(false);
  const { userTicket } = useTicketUser();
  const { getPayment } = usePayment();
  const [ticketSelected, setTicketSelected] = useState({});
  useEffect(() => {
    if (userTicket) {
      getPayment(userTicket.id);
      localStorage.setItem('ticket', `${userTicket.id}`);
      setExistTicket(true);
      setTicketSelected(userTicket.TicketType);
    }
  }, [userTicket, existTicket]);
  return (
    <>
      <Title />
      {existTicket ? (
        <>
          <ReviewTicket ticketSelected={ticketSelected} />
          <CardInput userTicket={userTicket} />
        </>
      ) : (
        <Tickets
          setExistTicket={setExistTicket}
          ticketSelected={ticketSelected}
          setTicketSelected={setTicketSelected}
        />
      )}
    </>
  );
}
