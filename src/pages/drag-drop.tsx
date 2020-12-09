import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { CenterContainer } from '../components/Utilities';
import { colors } from '../constants/theme';

export default function DragDrop() {
  const [states, setStates] = useState<Array<State>>(['filled', 'empty', 'empty', 'empty']);
  const [historyState, setHistoryState] = useState<Array<State>>(states);

  const updateState = (index: number, state: State) => {
    setStates(oldStates => {
      let duplicateStates;
      if (state === 'filled') {
        duplicateStates = new Array(4).fill('empty');
      } else {
        duplicateStates = [...oldStates];
      }
      setHistoryState(oldStates);
      duplicateStates[index] = state;
      return duplicateStates;
    });
  };

  useEffect(() => {
    if (
      states.indexOf('filled') === -1 ||
      states.indexOf('filled') !== states.lastIndexOf('filled') ||
      states.indexOf('hovered') !== states.lastIndexOf('hovered')
    ) {
      setStates(historyState);
    }
  }, [states]);

  const dragStart = (evt: any) => {
    const idx = evt.target.id;
    updateState(idx, 'hold');
  };

  const dragEnd = (evt: any) => {
    const idx = evt.target.id;
    updateState(idx, 'filled');
  };

  const dragOver = (evt: any) => {
    evt.preventDefault();
  };

  const dragEnter = (evt: any) => {
    evt.preventDefault();
    const idx = evt.target.id;
    updateState(idx, 'hovered');
  };

  const dragLeave = (evt: any) => {
    const idx = evt.target.id;
    updateState(idx, 'empty');
  };

  const dragDrop = (evt: any) => {
    const idx = evt.target.id;
    updateState(idx, 'filled');
  };

  return (
    <>
      <Head>
        <title>Drag and Drop | 7 days 50 projects</title>
      </Head>
      <CenterContainer color={colors.primary}>
        <Grid>
          {[...new Array(4)].map((_, idx) => (
            <Holder
              key={idx}
              id={idx.toString()}
              state={states[idx]}
              draggable={states[idx] === 'filled'}
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDragStart={states[idx] === 'filled' ? dragStart : undefined}
              onDragEnd={states[idx] === 'filled' ? dragEnd : undefined}
              onDrop={states[idx] !== 'filled' ? dragDrop : undefined}
            >
              &nbsp;
            </Holder>
          ))}
        </Grid>
      </CenterContainer>
    </>
  );
}

const Grid = styled.main`
  display: grid;
  max-width: 100rem;
  margin: 0 auto;
  grid-template-columns: repeat(4, 15rem);
  grid-gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 15rem);
  }
`;

const Holder = styled.div<{ state: State }>`
  width: 15rem;
  height: 15rem;
  background: ${({ state }) =>
    state === 'filled' || state === 'hold'
      ? 'url(/batman.jpg)'
      : state === 'hovered'
      ? colors.darkSlate
      : '#fff'};
  border: 3px
    ${({ state }) => (state === 'hovered' ? 'dashed ' + '#fff' : 'solid ' + colors.secondary)};

  background-size: cover;
  background-position: center;

  opacity: ${({ state }) => (state === 'hold' ? 0.6 : 1)};
`;

type State = 'empty' | 'filled' | 'hovered' | 'hold';
