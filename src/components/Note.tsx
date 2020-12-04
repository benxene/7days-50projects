/** @format */

import { useState } from 'react';
import styled from 'styled-components';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';

export default function Note(props: {
  onDescription: (arg0: string, arg1: any) => void;
  index: number;
  onDelete: (arg0: number) => void;
}) {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (v: string) => {
    setDescription(v);
    props.onDescription(v, props.index);
  };

  return (
    <NoteBox>
      <NoteHeader>
        <AiOutlineEdit />
        <AiFillDelete onClick={() => props.onDelete(props.index)} />
      </NoteHeader>
      <TextArea
        onChange={e => handleDescriptionChange(e.target.value)}
        value={description}
        name='note'
        cols={30}
      ></TextArea>
    </NoteBox>
  );
}

const NoteBox = styled.div`
  width: 380px;
  height: 380px;
  position: relative;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.3);
  margin: 1rem 5px;
`;

const NoteHeader = styled.div`
  background-color: #9ec862;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .fa-edit,
  .fa-trash-alt {
    cursor: pointer;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
  font-size: 1.5rem;
  resize: vertical;
  padding: 5px 10px 10px;
`;
