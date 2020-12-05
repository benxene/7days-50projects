import { useState } from 'react';
import styled from 'styled-components';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';

export default function Note(props: {
  setNotes: React.Dispatch<React.SetStateAction<string[]>>;
  index: number;
  description: string;
  onDelete: (arg0: number) => void;
}) {
  const [disabled, setDisable] = useState(true);

  const handleDescriptionChange = (v: string) => {
    props.setNotes(old => {
      old[props.index] = v;
      return [...old];
    });
  };

  return (
    <NoteBox>
      <NoteHeader>
        <AiOutlineEdit style={{ color: 'white' }} onClick={() => setDisable(false)} />
        <AiFillDelete style={{ color: 'white' }} onClick={() => props.onDelete(props.index)} />
      </NoteHeader>
      <TextArea
        disabled={disabled}
        onChange={e => handleDescriptionChange(e.target.value)}
        value={props.description}
        onBlur={() => setDisable(true)}
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

  & > * {
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
