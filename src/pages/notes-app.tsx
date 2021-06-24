import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { Note } from '../components';

export default function Home() {
  const [notes, setNotes] = useState<Array<string>>([]);

  const handleDeleteButtonClick = (i: number) => {
    const result = notes.filter((item, index) => i !== index);
    setNotes(result);
  };

  const handleAddButtonClick = () => setNotes(notes => [...notes, '']);

  return (
    <>
      <Head>
        <title>Notes app | 7 days 50 projects</title>
      </Head>
      <Container>
        <ContainerHeader>
          <AddButton onClick={handleAddButtonClick}>
            <AiOutlinePlus /> Add Note
          </AddButton>
        </ContainerHeader>

        <NotesContainer>
          {notes.map((note, index) => (
            <Note
              key={index}
              onDelete={handleDeleteButtonClick}
              index={index}
              description={note}
              setNotes={setNotes}
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
