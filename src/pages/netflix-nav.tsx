import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { CenterContainer } from '../components/Utilities';
import { colors } from '../constants/theme';

export default function NetflixNavigation() {
  return (
    <>
      <Head>
        <title>Netflix Navigation | 7 days 50 projects</title>
      </Head>
      <CenterContainer color='#fff' style={{ textTransform: 'uppercase' }}>
        <HamMenuButton>
          <GiHamburgerMenu />
        </HamMenuButton>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          loading='lazy'
          width='250'
          unoptimized
          height='auto'
        />
        <p>Mobile Navigation</p>
        <NavBar>
          <NavContent>
            <NavHeader>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                loading='lazy'
                width='150'
                height='auto'
              />
              <CloseButton>
                <GrClose />
              </CloseButton>
            </NavHeader>
            <ul>
              <li>Teams</li>
              <li>Locations</li>
              <li>LIFE AT NETFLIX</li>
              <li>
                <ul>
                  <li>NETFLIX CULTURE MEMO </li>
                  <li>WORK LIFE BALANCE </li>
                  <li>INCLUSION & DIVERSITY BLOG </li>
                </ul>
              </li>
            </ul>
          </NavContent>
        </NavBar>
      </CenterContainer>
    </>
  );
}

const IconButton = styled.button`
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
  padding: 2rem;
  color: ${colors.darkSlate};
  align-self: center;
`;

const NavBar = styled.div`
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 36rem;
    background-color: rgb(229, 9, 20);
    z-index: 100;

    @media (max-width: 36rem) {
      width: calc(100% - 2rem);
    }
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 38rem;
    background-color: rgb(34, 31, 31);
    z-index: 10;

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

const NavContent = styled.nav`
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

  @media (max-width: 36rem) {
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
