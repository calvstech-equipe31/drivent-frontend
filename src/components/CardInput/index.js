import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Select from '../../components/Form/Select';
import styled from 'styled-components';
import { useState } from 'react';

export default function CardInput() {
  const [] = useState();
  return (
    <>
      <TittlePayment>Pagamento</TittlePayment>
      <CardPayment>
        <div>
          <Cards cvc={''} expiry={''} focused={''} name={''} number={''} />
        </div>
        <FormCard>
          <NumberInput>
            <InputWrapper>
              <Input label="Card Number" name="number" type="text" maxLength="16" />
              <h1>E.g.: 49..., 51..., 36..., 37...</h1>
            </InputWrapper>
          </NumberInput>
          <InputWrapper>
            <Input label="Name" name="name" type="text" maxLength="16" />
          </InputWrapper>
          <DateCvcInput>
            <InputDate>
              <Input label="Valid Thru" name="expiry" type="text" maxLength="16" />
            </InputDate>
            <InputCVC>
              <Input label="CVC" name="cvc" type="text" maxLength="3" />
            </InputCVC>
          </DateCvcInput>
        </FormCard>
      </CardPayment>
    </>
  );
}
const InputWrapper = styled.div`
  > div {
    width: 100%;
  }
`;

const TittlePayment = styled.h1`
  color: #8e8e8e;
  margin: 0 0 25px 0;
`;

const CardPayment = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FormCard = styled.form`
  margin: 0 0 0 20px;
  width: 35%;
  /* background-color: blue; */
  input {
    height: 10px;
  }
  /* background-color: blue; */
`;

const NumberInput = styled.div`
  h1 {
    margin: 4px 0 5px 0;
    color: #8e8e8e;
  }
`;
const DateCvcInput = styled.div`
  display: flex;
  justify-content: flex-end;

`;

const InputDate = styled.div`
  /* background-color: blue; */
  > div {
    width: 100%;
  }
`;
const InputCVC = styled.div`
  /* background-color: yellow; */
  width: 60%;
  padding-left: 10px;
  > div {
    width: 100%;
  }
`;
