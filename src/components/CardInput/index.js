import Cards from '@snowpak/react-credit-cards';
import '@snowpak/react-credit-cards/es/styles-compiled.css';

import Payment from 'payment';
import Input from '../Form/Input';
import Button from '../Form/Button';

import styled from 'styled-components';

import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { toast } from 'react-toastify';

export default function CardInput() {
  const [cardLocate, setCardLocate] = useState('');
  // console.log(Payment.fns.cardType('512345')); issuer

  const { handleSubmit, handleChange, data, errors, setData, customHandleChange } = useForm({
    // validations: FormValidations,

    onSubmit: async(data) => {
      const newData = {
        ticketId: 1,
        cardData: {
          issuer: Payment.fns.cardType(data.number),
          number: data.number,
          name: data.name,
          expirationDate: data.expirationDate,
          cvv: data.cvc,
        },
      };
      console.log(newData);
      try {
        toast('Informações salvas com sucesso!');
      } catch (err) {
        toast('Não foi possível salvar suas informações!');
      }
    },

    // initialValues: {
    //   cpf: '',
    //   name: '',
    //   birthday: null,
    //   phone: '',
    //   cep: '',
    //   street: '',
    //   city: '',
    //   number: '',
    //   state: '',
    //   neighborhood: '',
    //   addressDetail: '',
    // },
  });

  return (
    <>
      <TittlePayment>Pagamento</TittlePayment>

      <FormCard onSubmit={handleSubmit}>
        <CardDiv>
          <Cards
            cvc={data.cvc || ''}
            expiry={data.expirationDate || ''}
            focused={cardLocate}
            name={data.name || ''}
            number={data.number || ''}
          />
          <Button type="submit">FINALIZAR PAGAMENTO</Button>
        </CardDiv>
        <InputsDiv>
          <NumberInput>
            <InputWrapper>
              <Input
                label="Card Number"
                name="number"
                type="text"
                maxLength="16"
                mask="9999 9999 9999 9999"
                value={data?.number || ''}
                onClick={() => setCardLocate('number')}
                onChange={handleChange('number', (targetValue) => {
                  setCardLocate('number');
                  return targetValue;
                })}
              />
              <h1>E.g.: 49..., 51..., 36..., 37...</h1>
            </InputWrapper>
          </NumberInput>
          <InputWrapper>
            <Input
              label="Name"
              name="name"
              type="text"
              value={data.name}
              onClick={() => setCardLocate('name')}
              onChange={handleChange('name', (targetValue) => {
                setCardLocate('name');
                return targetValue;
              })}
            />
          </InputWrapper>
          <DateCvcInput>
            <InputDate>
              <Input
                label="Valid Thru"
                name="expiry"
                type="text"
                mask="99/99"
                value={data.expirationDate || ''}
                onClick={() => setCardLocate('expiry')}
                onChange={handleChange('expirationDate', (targetValue) => {
                  setCardLocate('expirationDate');
                  return targetValue;
                })}
              />
            </InputDate>
            <InputCVC>
              <Input
                label="CVC"
                name="cvc"
                type="text"
                maxLength="3"
                mask="999"
                value={data.cvc}
                onClick={() => setCardLocate('cvc')}
                onChange={handleChange('cvc', (targetValue) => {
                  setCardLocate('cvc');
                  return targetValue;
                })}
              />
            </InputCVC>
          </DateCvcInput>
        </InputsDiv>
      </FormCard>
    </>
  );
}

const InputsDiv = styled.div`
  margin: 0 0 0 20px;
`;

const InputWrapper = styled.div`
  > div {
    width: 100%;
  }
`;

const TittlePayment = styled.h1`
  color: #8e8e8e;
  margin: 0 0 25px 0;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 260px;
`;

const FormCard = styled.form`
  width: 75%;
  display: flex;
  input {
    height: 10px;
  }
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
  > div {
    width: 100%;
  }
`;
const InputCVC = styled.div`
  width: 60%;
  padding-left: 10px;
  > div {
    width: 100%;
  }
`;