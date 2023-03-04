import { useEffect, useState } from 'react';
import useSaveTicket from '../../hooks/api/useSaveTicket';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import useTicketTypes from '../../hooks/api/useTicket';

export default function Tickets() {
  const [ticketSelected, setTicketSelected] = useState({});
  const [type, setType] = useState('');
  const [isRemote, setIsRemote] = useState(true);
  const [modality, setModality] = useState({});
  const [result, setResult] = useState(false);
  const [total, setTotal] = useState(0);
  const [filterTickets, setFilterTickets] = useState([]);
  const [filterTicketPresential, setFilterTicketPresential] = useState([]);
  const [hotelPrice, setHotelPrice] = useState(0);
  const { saveTicketLoading, saveTicket } = useSaveTicket();
  const { tickets } = useTicketTypes();

  useEffect(() => {
    if (tickets) {
      const ticketWithoutHotel = tickets.filter((e) => e.includesHotel === false);
      const presentialTicket = tickets.filter((e) => e.isRemote === false);
      const hotelPriceNegative = Number(presentialTicket[0].price) - Number(presentialTicket[1].price);
      const hotelPrice = Math.abs(hotelPriceNegative);
      setFilterTickets(ticketWithoutHotel);
      setFilterTicketPresential(presentialTicket);
      setHotelPrice(hotelPrice);
    }
  }, [tickets]);

  function selectTicketType(ticket) {
    if (ticket.name === type) {
      return;
    }
    setTicketSelected(ticket);
    if (ticket.isRemote) {
      setResult(true);
      setTotal(ticket.price);
      setIsRemote(true);
    }
    if (!ticket.isRemote) {
      setModality({});
      setResult(false);
      setIsRemote(false);
    }
    setType(ticket.name);
  }

  function selectModality(e) {
    if (modality !== {}) {
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
      <StyledTitle>Primeiro, escolha sua modalidade de ingresso</StyledTitle>
      {filterTickets?.map((e) => (
        <TicketStyle className={ticketSelected.name === e.name ? 'selected' : ''} onClick={() => selectTicketType(e)}>
          <h1>{e.name}</h1>
          <h2>R$ {e.price}</h2>
        </TicketStyle>
      ))}
      {!isRemote ? (
        <>
          <StyledTitle>Ótimo! Agora escolha sua modalidade de hospedagem</StyledTitle>
          {filterTicketPresential?.map((e) => (
            <TicketStyle className={modality === e ? 'selected' : ''} onClick={() => selectModality(e)}>
              {e.includesHotel ? (
                <>
                  <h1>Com hotel</h1>
                  <h2>+ R${hotelPrice}</h2>
                </>
              ) : (
                <h1>Sem hotel</h1>
              )}
            </TicketStyle>
          ))}
        </>
      ) : (
        ''
      )}
      {result ? (
        <>
          <StyledTitle>Fechado! O total ficou em R${total}. Agora é só confirmar</StyledTitle>
          <Button onClick={() => sendTicket()}>Reservar ingresso</Button>{' '}
        </>
      ) : (
        ''
      )}
    </>
  );
}

const StyledTitle = styled.div`
  margin-bottom: 10px;
`;

const TicketStyle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border: 1px solid #cecece;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px 10px 0;
  &.selected {
    background-color: #ffeed2;
  }
  h1 {
    color: black;
    margin-bottom: 5px;
  }
  h2 {
    color: #cecece;
  }
`;

const Button = styled.div`
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #ccc;
  cursor: pointer;
`;
