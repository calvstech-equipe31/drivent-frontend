import { useState } from 'react';
import styled from 'styled-components';

export default function Tickets() {
  const [tickets, setTickets] = useState([{ id: 1, name: 'online', price: '100', isRemote: true }, { id: 2, name: 'presencial', price: '250', isRemote: false }]);
  const [ticketSelected, setTicketSelected] = useState({});
  const [type, setType] = useState(''); 
  const [modality, setModality] = useState('');
  const [result, setResult] = useState(false);
  const [total, setTotal] = useState(0);
  const [sum, setSum] = useState(0);
  const hotelPrice = 350;

  function selectTicketType(ticket) {
    if(ticket.name===type) {
      return;
    }
    setTicketSelected(ticket);
    if(ticket.isRemote) {
      setResult(true);
      setTotal(ticket.price);
    }
    if(!ticket.isRemote) {
      setModality('');
      setResult(false);
      setSum(ticket.price);
    }
    setType(ticket.name);
  }

  function selectModality(modality) {
    if(modality==='hotel') {
      setModality('hotel');
      setTotal(Number(sum)+Number(hotelPrice));
    }
    if(modality==='noHotel') {
      setModality('noHotel');
      setTotal(sum);
    }
    if(modality!=='') {
      setResult(true);
    }
  }
  return (
    <>
      <h1>Primeiro, escolha sua modalidade de ingresso</h1>
      {tickets?.map((e) => <TicketStyle className={ ticketSelected === e ? 'selected' :'' } onClick={() => selectTicketType(e)}>{e.name}{e.price}</TicketStyle>)}
      {type==='presencial'? 
        ( 
          <>
            <h1>Ótimo! Agora escolha sua modalidade de hospedagem</h1>
            <TicketStyle className={ modality === 'noHotel' ? 'selected' :'' } onClick={() => selectModality('noHotel')}>Sem hotel</TicketStyle>
            <TicketStyle className={ modality === 'hotel' ? 'selected' :'' } onClick={() => selectModality('hotel')}>`Com hotel ${hotelPrice}` </TicketStyle>
          </>
        ) : ''
      }
      {result?<>`Fechado! O total ficou em ${total}. Agora é só confirmar`<Button>Reservar ingresso</Button> </>:''}
    </>
  );
}

const TicketStyle= styled.div`
  width: 100px;
  height: 100px;
  border-radius:20px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  &.selected {
    background-color: #ffeed2;
  }
`;

const Button= styled.div`
  width: 180px;
  height: 40px;
  display:flex;
  justify-content: center;
  align-items:center;
  border-radius:10px;
  background-color: #ccc;
  cursor:pointer;
`;
