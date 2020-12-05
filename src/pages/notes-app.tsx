/** @format */
import { useEffect, useState } from 'react';
import Note from '../components/Note';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import Head from 'next/head';

export default function Home() {
  const [notes, setNotes] = useState(['', '']);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  const hanldeDeleteButtonClick = (i: number) => {
    const result = notes.filter((item, index) => i !== index);
    setNotes(result);
  };

  const hanldeAddButtonClick = () => setNotes(notes => [...notes, '']);

  const hanldeDescriptionChange = (text: string, index: number) => {
    notes[index] = text;
    setNotes(notes);
    console.log(notes);
  };

  return (
    <>
      <Head>
        <title>Notes app | 7 days 50 projects</title>
      </Head>
      <Container>
        <ContainerHeader>
          <p></p>
          <AddButton onClick={hanldeAddButtonClick}>
            <AiOutlinePlus /> Add Note
          </AddButton>
        </ContainerHeader>

        <NotesContainer>
          {notes.map((note, index) => (
            <Note
              key={index}
              onDelete={hanldeDeleteButtonClick}
              index={index}
              onDescription={hanldeDescriptionChange}
            />
          ))}
        </NotesContainer>
      </Container>
    </>
  );
}

const Container = styled.main`
  background-color: #7bdaf3;
  border: 1px solid black;
  min-width: calc(100vw - 100px);
  min-height: 100vh;
  padding: 2rem;
  overflow-x: hidden;
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 1rem;
`;

const NotesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const AddButton = styled.button`
  padding: 4px 10px;
  border: none;
  outline: none;
  background-color: #9ec862;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  .fa-plus {
    padding: 6px;
  }

  &:hover {
    background-color: #769c41;
  }
`;
