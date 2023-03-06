import { getPaymentTicketId } from '../../services/payment';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function usePayment() {
  const token = useToken();
  const ticket = 3; //AQUI TEM QUE TER MAIS UM TICKET ID
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
