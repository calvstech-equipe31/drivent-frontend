import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useDays from '../../hooks/api/useDays';
import dayjs from 'dayjs';

export default function ListDays({ daySelected, setDaySelected }) {
  const { days } = useDays();
  
  function selectDay(day) {
    if (day.id === daySelected.id) {
      return;
    }
    setDaySelected(day);
  }

  return (
    <>
      <DayContainer>
        {days ? (
          days.map((d) => {
            const dayFormated = dayjs(d.date).format('DD/MM');
            return (
              <DayBox 
                onClick={() => selectDay(d)}
                className={daySelected.id === d.id ? 'selected' : ''}
              >
                <h1>{`${d.name}, ${(d.date).substr(8, 2)}/${(d.date).substr(5, 2)}`}</h1>
              </DayBox>
            );
          })
        ) : (
          <div></div>
        )}
      </DayContainer>
    </>
  );
}

const DayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 0 60px 0;
`;

const DayBox = styled.div`
  background-color: #ebebeb;
  width: 131px;
  height: 37px;
  cursor: pointer;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 10px 20px 0 0;
  &.selected {
    background: #FFD37D;
  }
`;
