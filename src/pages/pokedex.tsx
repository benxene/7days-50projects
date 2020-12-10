import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};

const main_types = Object.keys(colors);
const main_values = Object.values(colors);

function Pokimon({
  id,
  name,
  type,
  image,
  bgColor
}: {
  id: number;
  type: string;
  name: string;
  image: string;
  bgColor: string;
}) {
  const Dex = styled.div`
    width: 160px;
    height: 260px;
    border-radius: 25px;
    margin: 10px;
    padding: 20px;
    text-align: center;
    background-color: ${bgColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
  `;

  return (
    <>
      <Dex>
        <ImageBox>
          <Image src={`https://pokeres.bastionbot.org/images/pokemon/${image}.png`} alt='logo' />
        </ImageBox>
        <DexCount>#{id}</DexCount>
        <Name>{name}</Name>
        <Type>Type: {type}</Type>
      </Dex>
    </>
  );
}

function pokedex() {
  const [poki, setPoki] = useState<Array<any>>([]);
  const [count, setCount] = useState<{ prev: number; next: number }>({
    prev: 1,
    next: 20
  });

  const trackScrolling = () => {
    const wrappedElement = document.getElementById('dex-container');
    setCount((old: any) => ({
      prev: old.next,
      next: old.next + 20
    }));
  };

  async function getPokemon() {
    document.addEventListener('scroll', trackScrolling);

    for (let i = count.prev; i <= count.next; i++) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemon = await res.json();

      const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
      const id = pokemon.id.toString().padStart(3, '0');
      const imageId = pokemon.id.toString();
      const poke_types = pokemon.types.map((type: any) => type.type.name);
      const type = main_types.find(type => poke_types.indexOf(type) > -1)!;
      const typeIndex = main_types.findIndex(t => t === type);
      const bgColor = main_values[typeIndex];

      setPoki(prev => {
        return [
          ...prev,
          {
            name,
            id,
            type,
            imageId,
            bgColor
          }
        ];
      });
    }
  }

  useEffect(() => {
    getPokemon();
  }, [count]);

  return (
    <>
      <Head>
        <title>Poke Dex | 7 days 50 projects</title>
      </Head>

      <DexContainer id='dex-container'>
        {poki.map(p => {
          return (
            <Pokimon
              key={p.id}
              name={p.name}
              id={p.id}
              type={p.type}
              image={p.imageId}
              bgColor={p.bgColor}
            />
          );
        })}
      </DexContainer>
    </>
  );
}

// Styled component CSS
const DexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const ImageBox = styled.div`
  background-color: #fff;
  border-radius: 50%;
  padding-top: 1rem;
  position: relative;
  width: 120px;
  height: 120px;
`;

const Image = styled.img`
  max-width: 100%;
  position: absolute;
  top: 1rem;
  left: 0;
`;

const DexCount = styled.p`
  margin: 1.5rem auto 0 auto;
  border-radius: 15px;
  background-color: #b3f5b3;
  max-width: 55px;
  padding: 0 5px;
`;

const Name = styled.h5`
  margin: 5px 0;
  font-size: 20px;
`;

const Type = styled.p`
  font-size: 14px;
`;

export default pokedex;
