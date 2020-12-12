import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../constants/theme';

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <a href='https://github.com/benxene' className='brand'>
        <Image
          src='https://raw.githubusercontent.com/benxene/blobs/main/benxene-wo-name.png'
          width='40'
          height='40'
          objectFit='contain'
        />
      </a>
      <a href='https://github.com/benxene/7days-50projects'>GitHub Repository</a>
    </Nav>
  );
}

const Nav = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: ${props => (props.isScrolled ? '1rem' : '2rem')} 6rem;
  background-color: ${({ isScrolled }) => (isScrolled ? 'rgba(255,255,255,.75)' : 'transparent')};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(1rem)' : 'none')};
  box-shadow: ${props => (props.isScrolled ? '0 3px .5rem rgba(0,0,0,.2)' : 'none')};
  display: flex;
  align-items: center;
  transition: all 0.3s;
  z-index: 100;

  & > * {
    display: inline-flex;
    align-items: center;
  }

  img {
    filter: ${({ isScrolled }) => (isScrolled ? 'initial' : 'brightness(100)')};
  }

  .brand {
    margin-right: auto;
  }

  & > a {
    color: ${({ isScrolled }) => (isScrolled ? colors.secondary : colors.contrast.primary)};
    font-weight: 800;
    transition: color 0.2s;

    &:hover {
      color: ${({ isScrolled }) => (isScrolled ? colors.primary : colors.secondary)};
    }
  }

  @media (max-width: 50rem) {
    padding-right: 4rem;
    padding-left: 4rem;
  }
`;
