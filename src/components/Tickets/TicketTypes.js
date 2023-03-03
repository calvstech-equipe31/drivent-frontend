import { useState } from 'react';
import useSaveTicket from '../../hooks/api/useSaveTicket';
import { toast } from 'react-toastify';
import styled from 'styled-components';

export default function Tickets() {
  const [tickets, setTickets] = useState([{ id: 2, name: 'Online', price: '100', isRemote: true, includesHotel: false }, { id: 4, name: 'Presencial', price: '250', isRemote: false, includesHotel: false }, { id: 5, name: 'Presencial', price: '600', isRemote: false, includesHotel: true }]);
  const [ticketSelected, setTicketSelected] = useState({});
  const [type, setType] = useState(''); 
  const [isRemote, setIsRemote] = useState(true);
  const [modality, setModality] = useState({});
  const [result, setResult] = useState(false);
  const [total, setTotal] = useState(0);
  //const [sum, setSum] = useState(0);
  const { saveTicketLoading, saveTicket } = useSaveTicket();
  //const hotelPrice = 350;

  const filterTickets = tickets.filter(e => (e.includesHotel===false));
  const filterTicketPresential = tickets.filter(e => (e.isRemote===false));
  const hotelPriceNegative = Number(filterTicketPresential[0].price)-Number(filterTicketPresential[1].price);
  const hotelPrice = Math.abs(hotelPriceNegative);

  function selectTicketType(ticket) {
    if(ticket.name===type) {
      return;
    }
    setTicketSelected(ticket);
    if(ticket.isRemote) {
      setResult(true);
      setTotal(ticket.price);
      setIsRemote(true);
    }
    if(!ticket.isRemote) {
      setModality({});
      setResult(false);
      setIsRemote(false);
      //setSum(ticket.price);
    }
    setType(ticket.name);
  }

  function selectModality(e) {
    /*if(e.includesHotel===true) {
      setModality(e);
      setTotal(e.price);
      setTicketSelected(e);
    }
    if(e.includesHotel===false) {
      setModality(e);
      setTotal(e.price);
      setTicketSelected(e);
    }*/
    
    if(modality!=={}) {
      setResult(true);
    }
    setModality(e);
    setTotal(e.price);
    setTicketSelected(e);
  }
  async function sendTicket() {
    const newData = { ticketTypeId: ticketSelected.id };
    console.log(newData);
    try {
      await saveTicket(newData);
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  return (
    <>
      <h1>Primeiro, escolha sua modalidade de ingresso</h1>
      {filterTickets?.map((e) => <TicketStyle className={ ticketSelected.name === e.name ? 'selected' :'' } onClick={() => selectTicketType(e)}>{e.name}{e.price}</TicketStyle>)}
      {!isRemote? 
        ( 
          <>
            <h1>Ótimo! Agora escolha sua modalidade de hospedagem</h1>
            {filterTicketPresential?.map((e) => <TicketStyle className={ modality === e ? 'selected' :'' } onClick={() => selectModality(e)}>{e.includesHotel?'Com hotel '+hotelPrice:'sem hotel'}</TicketStyle>)}
          </>
        ) : ''
      }
      {result?<>`Fechado! O total ficou em ${total}. Agora é só confirmar`<Button onClick={() => sendTicket()}>Reservar ingresso</Button> </>:''}
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
