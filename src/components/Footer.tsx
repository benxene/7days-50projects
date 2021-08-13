import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { RiHeart2Fill } from 'react-icons/ri';
import { colors } from '../constants/theme';

export default function Footer() {
  return (
    <>
      <Foot>
        <p>
          Made {'&'} maintained with &nbsp; <RiHeart2Fill color='#f81244' /> &nbsp; by
        </p>
        <Link href='https://www.github.com/benxene' passHref>
          <Image
            src='https://raw.githubusercontent.com/benxene/blobs/main/benxene-w-name-right.png'
            height={80}
            width={140}
            alt='benxene'
            objectFit='contain'
            loading='lazy'
          />
        </Link>
      </Foot>
      <Derivative>
        A derivative of <Link href='https://50projects50days.com'>#50Projects50Days</Link>
      </Derivative>
    </>
  );
}

const Foot = styled.footer`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0f0f0f;
  color: ${colors.lightSlate};
  & > p {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
`;

const Derivative = styled.div`
  background-color: #0a0a0a;
  padding: 2rem;
  color: #ccc;
  text-align: center;
`;
