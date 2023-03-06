import { ticketUser } from '../../services/ticketApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useTicketUser() {
  const token = useToken();

  const {
    data: userTicket,
    loading: userTicketLoading,
    error: userTicketError,
    act: getUserTicket,
  } = useAsync(() => ticketUser(token));

  return {
    userTicket,
    userTicketError,
    userTicketLoading,
    getUserTicket,
  };
}
