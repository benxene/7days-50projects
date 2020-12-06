import styled from 'styled-components';
import Head from 'next/head';
import { CenterContainer, Heading } from '../components/Utilities';
import { colors } from '../constants/theme';
import { useEffect, useState } from 'react';

export default function DrinkWater() {
  const [click, setClick] = useState<boolean[]>(new Array(10).fill(false));
  const [ml, setMl] = useState<number>(0);

  useEffect(() => {
    let temp = 0;
    click.forEach(value => {
      temp += Number(value) * 250;
    });
    setMl(temp);
  }, [click]);

  return (
    <>
      <Head>
        <title>Drink Water | 7 days 50 projects</title>
      </Head>
      <WaterContainer>
        <MyHeading>Drink Water</MyHeading>
        <SmallHeading>Goal: 2.5 Litres</SmallHeading>
        <CupContainer>
          <Cup>{2500 - ml} ml remaining</Cup>
          <Percentage ml={ml} />
        </CupContainer>
        <SmallHeading>Select how much you drank today</SmallHeading>
        <CupsContainer>
          {[...new Array(10)].map((value, index) => {
            return (
              <div key={index}>
                <input
                  type='checkbox'
                  id={'bottle' + index}
                  style={{ display: 'none' }}
                  checked={click[index]}
                  onChange={() => {
                    setClick(old => {
                      old[index] = !old[index];
                      return [...old];
                    });
                  }}
                />
                <SmallCup htmlFor={'bottle' + index} click={click[index]}>
                  250ml
                </SmallCup>
              </div>
            );
          })}
        </CupsContainer>
      </WaterContainer>
    </>
  );
}

const WaterContainer = styled(CenterContainer)`
  height: 100%;
`;

const MyHeading = styled(Heading)`
  color: ${colors.primary};
`;

const SmallHeading = styled.h3`
  color: ${colors.darkSlate};
  margin-bottom: 1rem;
`;

const CupContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  margin: 2rem 0;
  width: 15rem;
  height: 30rem;
  background-color: ${colors.contrast.primary};
  color: ${colors.darkSlate};
  border: 5px solid ${colors.lightSlate};
  border-radius: 0 0 4rem 4rem;
`;

const Cup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.7rem;
  font-weight: 800;
  text-align: center;
`;

const Percentage = styled.div<{ ml: number }>`
  transition: all 0.3s;
  background-color: ${colors.primary};
  width: 15rem;
  height: ${props => (props.ml / 250) * 3}rem;
`;

const CupsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 8rem);
  margin-bottom: 2rem;
`;

const SmallCup = styled.label<{ click: boolean }>`
  width: 5rem;
  height: 10rem;
  margin: 1rem;
  padding: 0.5rem;
  background-color: ${props => (props.click ? 'transparent' : colors.primary)};
  color: ${colors.darkSlate};
  border: 3px solid ${colors.lightSlate};
  border-radius: 0 0 2rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  span {
    font-size: 1.3rem;
    font-weight: 800;
  }
`;
