import { useEffect } from 'react';
import styled from 'styled-components';
import OneRoom from './OneRoom';
import Button from '../Form/Button';

export default function Rooms() {
  const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <Tittle>Ótima pedida! Agora escolha seu quarto:</Tittle>
      <AllRomns>
        {lista.map((i) => (
          <OneRoom roomName={i} />
        ))}
      </AllRomns>
      <Button>RESERVAR QUARTO</Button>
    </>
  );
}

const Tittle = styled.h1`
  color: #8e8e8e;
  font-size: 20px;
`;

const AllRomns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;

  margin: 35px 0 44px 0;
`;
