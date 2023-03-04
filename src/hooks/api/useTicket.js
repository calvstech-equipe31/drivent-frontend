import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicketTypes() {
  const token = useToken();

  const {
    data: tickets,
    loading: saveTicketTypeLoading,
    error: saveTicketTypeError,
    act: getTickets,
  } = useAsync(() => ticketApi.ticketTypes(token));

  return {
    tickets,
    saveTicketTypeLoading,
    saveTicketTypeError,
    getTickets
  };
}
