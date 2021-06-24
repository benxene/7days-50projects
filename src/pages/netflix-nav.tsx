import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';
import { CenterContainer } from '../components/Utilities';
import { colors } from '../constants/theme';

export default function NetflixNavigation() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleVisibility = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <Head>
        <title>Netflix Navigation | 7 days 50 projects</title>
      </Head>
      <CenterContainer color='#fff' style={{ textTransform: 'uppercase' }}>
        <HamMenuButton onClick={toggleVisibility}>
          <GiHamburgerMenu />
        </HamMenuButton>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          alt='Netflix'
          loading='lazy'
          width='250'
          unoptimized
          height='auto'
        />
        <p>Mobile Navigation</p>

        <NavContent visible={isOpen}>
          <NavHeader>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
              loading='lazy'
              alt='Netflix'
              width='150'
              height='auto'
            />
            <CloseButton onClick={toggleVisibility}>
              <GrFormClose />
            </CloseButton>
          </NavHeader>
          <ul>
            <li>Teams</li>
            <li>Locations</li>
            <li>Life at Netflix</li>
            <li>
              <ul>
                <li>Netflix culture memo</li>
                <li>Work Life Balance </li>
                <li>Inclusion & Diversity Blog </li>
              </ul>
            </li>
          </ul>
        </NavContent>
        <NavBarBgs visible={isOpen} />
      </CenterContainer>
    </>
  );
}

export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const HamMenuButton = styled(IconButton)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 2rem;
`;

const CloseButton = styled(IconButton)`
  font-size: 3rem;
  padding: 1rem;
  color: ${colors.darkSlate};
  align-self: center;
`;

const NavBarBgs = styled.div<{ visible: boolean }>`
  &::after,
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: ${props => (props.visible ? 'translateX(0)' : 'translateX(-100%)')};
    transition: all 0.3s ease-in-out;
  }

  &::after {
    width: 36rem;
    background-color: rgb(229, 9, 20);
    z-index: 100;
    transition-delay: 0.2s;

    @media (max-width: 36rem) {
      width: calc(100% - 2rem);
    }
  }

  &::before {
    width: 38rem;
    background-color: rgb(34, 31, 31);
    z-index: 10;
    transition-delay: ${props => (props.visible ? 0 : '.4s')};

    @media (max-width: 36rem) {
      width: 100%;
    }
  }
`;

const NavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavContent = styled.nav<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  min-width: 34rem;
  font-size: 1.4rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  z-index: 1000;
  transform: ${props => (props.visible ? 'translateX(0)' : 'translateX(-100%)')};
  transition: all 0.3s ease-in-out;
  transition-delay: ${props => (props.visible ? '.4s' : 0)};

  @media (max-width: 36rem) {
    min-width: unset;
    width: calc(100% - 4rem);
  }

  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  ul > li > ul {
    margin-left: 2rem;
  }

  li {
    list-style: none;
    margin-bottom: 1.6rem;
  }
`;
