import CardInput from '../../../components/CardInput';
import Tickets from '../../../components/Tickets/TicketTypes.js';
import ConfirmationPayment from '../../../components/Payment/ConfirmationPayment';
import ReviewTicket from '../../../components/Payment/ReviewTicket';
import Title from '../../../components/Payment/Title';
import { useState } from 'react';

export default function Payment() {
  const [updatePage, setUpdatePage] = useState(false);

  return (
    <>
      <Title />
      {!updatePage ? <Tickets setUpdatePage={setUpdatePage} /> : <ReviewTicket />}
      {/* 
      <ConfirmationPayment /> */}
    </>
  );
}
