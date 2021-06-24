import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { colors } from '../constants/theme';

export default function Switch({ checked, onChange, id, ...props }: IProps) {
  return (
    <>
      <Check
        id={id || 'theCheck'}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <Label htmlFor={id || 'theCheck'} />
    </>
  );
}

interface IProps {
  checked: boolean;
  id?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  props?: any;
}

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  width: 4rem;
  height: 2rem;
  border-radius: 1rem;
  border: 2px solid #222;
  position: relative;
  transition: all 0.1s;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10%;
    background-color: #eee;
    height: 3rem;
    width: 3rem;
    transform: translate(-20%, -50%);
    border-radius: 10rem;
    box-shadow: 1px 2px 5px rgba(#000, 0.4);
    transition: all 0.2s;
  }
`;

const Check = styled.input`
  visibility: hidden;
  display: none;

  &:checked + label {
    border-color: ${colors.primary};

    &::before {
      left: auto;
      transform: translate(65%, -50%);
      background-color: ${colors.primary};
    }
  }
`;
