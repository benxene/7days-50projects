import styled from 'styled-components';
import Head from 'next/head';
import { CgDarkMode } from 'react-icons/cg';

import { ThemedCenterContainer } from '../components/Utilities';
import { IconButton } from './netflix-nav';
import { useState } from 'react';
import { colors } from '../constants/theme';

export default function ThemeClock() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [isDark, setDarkMode] = useState<boolean>(false);
  const [time, setTime] = useState<Date>(new Date());

  const toggleDarkTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // inefficient by okay.
  setInterval(() => setTime(new Date()), 1000);

  return (
    <>
      <Head>
        <title>Theme Clock | 7 days 50 projects</title>
      </Head>
      <ThemedCenterContainer dark={isDark}>
        <DarkThemeToggleButton onClick={toggleDarkTheme} dark={isDark}>
          <CgDarkMode />
        </DarkThemeToggleButton>
        <AnalogueClock dark={isDark}>
          <HourNeedle dark={isDark} hour={time.getHours()} />
          <MinuteNeedle dark={isDark} minute={time.getMinutes()} />
          <SecondNeedle dark={isDark} second={time.getSeconds()} />
        </AnalogueClock>
        <h1>{time.toLocaleTimeString('en-us')}</h1>
        <DateView dark={isDark}>
          {days[time.getDay()]}, {months[time.getMonth()]} <p>{time.getDate()}</p>
        </DateView>
      </ThemedCenterContainer>
    </>
  );
}

export const DarkThemeToggleButton = styled(IconButton)<{ dark: boolean }>`
  position: fixed;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  color: ${({ dark }) => (dark ? '#f9ffd6' : '#003b88')};
  transition: color 0.4s;
`;

const DateView = styled.div<{ dark: boolean }>`
  font-size: 1.3rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;

  p {
    width: 1.8rem;
    height: 1.8rem;
    text-align: center;
    border-radius: 50%;
    color: ${colors.contrast.primary};
    background-color: ${({ dark }) => (dark ? colors.primary : colors.darkSlate)};
    display: inline-block;
    letter-spacing: initial;
    transition: all 0.3s;
  }
`;

const AnalogueClock = styled.div<{ dark: boolean }>`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  padding: 1rem;
  margin-bottom: 2rem;
  position: relative;
  transform: rotate(-90deg);
  transition: all 0.3s;
`;

const HourNeedle = styled.div<{ dark: boolean; hour: number }>`
  width: 8rem;
  height: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: left;
  background-color: ${({ dark }) => (dark ? colors.contrast.primary : colors.darkSlate)};
  transform: rotate(
    ${({ hour }) => {
      let temp = hour >= 12 ? hour - 12 : hour;
      return temp * 30;
    }}deg
  );
  transition: all 0.3s;
`;

const MinuteNeedle = styled.div<{ dark: boolean; minute: number }>`
  width: 11rem;
  height: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: left;
  background-color: ${({ dark }) => (dark ? colors.contrast.primary : colors.darkSlate)};
  transform: rotate(${({ minute }) => minute * 6}deg);
  transition: all 0.3s;
`;

const SecondNeedle = styled.div<{ dark: boolean; second: number }>`
  width: 11rem;
  height: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: left;
  background-color: ${colors.primary};
  transform: rotate(${({ second }) => second * 6}deg);
  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: ${({ dark }) => (dark ? colors.contrast.primary : colors.darkSlate)};
    border: 3px solid ${colors.primary};
    border-radius: 50%;
    transition: all 0.3s;
  }
`;
