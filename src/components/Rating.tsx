import { ChangeEvent } from 'react';
import styled from 'styled-components';

export default function Rating({ id, checked, onChange, emoji, ...props }: IProps) {
  return (
    <>
      <Input type='checkbox' id={id} checked={checked} onChange={onChange} {...props} />
      <Label htmlFor={id} checked={checked}>
        <img src={emoji} alt='emoji' />
        {id}
      </Label>
    </>
  );
}

interface IProps {
  checked: boolean;
  id: string;
  emoji: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  props?: any;
}

const Input = styled.input`
  display: none;
`;

const Label = styled.label<{ checked: boolean }>`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: ${props => (props.checked ? '0 0 3px rgba(0, 0, 0, 0.3)' : 'none')};
  transition: all 0.4s;

  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 5rem;
    margin: 1rem;
  }
`;
