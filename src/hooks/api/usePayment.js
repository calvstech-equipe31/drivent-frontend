import { getPaymentTicketId } from '../../services/paymentApi';
import useAsync from '../useAsync';
import useToken from '../useToken';
import useTicketUser from './useTicketUser';

export default function usePayment(id) {
  const token = useToken();
  const ticket  = Number(localStorage.getItem('ticket')); //AQUI TEM QUE TER MAIS UM TICKET ID
  
  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: getPayment,
  } = useAsync((data) => getPaymentTicketId(ticket, token));

  return {
    payment,
    paymentLoading,
    paymentError,
    getPayment,
  };
}
