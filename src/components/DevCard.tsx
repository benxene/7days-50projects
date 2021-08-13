import styled from 'styled-components';
import { colors, sizes } from '../constants/theme';
import Link from 'next/link';

export default function DevCard(props: DevProps) {
  const { name, contributions, avatar, profile } = props;

  return (
    <Link href={profile} passHref>
      <Card>
        <img
          src={avatar}
          alt={name}
          loading='lazy'
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <Details>
          <h4>{name}</h4>
          <p>{contributions} Contributions</p>
        </Details>
      </Card>
    </Link>
  );
}

interface DevProps {
  name: string;
  contributions: number;
  avatar: string;
  profile: string;
}

const Card = styled.figure`
  width: 22rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkSlate};
  box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.5);
  border-radius: ${sizes.radius.small};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;

  & > div {
    width: 100%;
    height: 25rem;
  }

  &:hover {
    transform: translateY(-1rem);
    box-shadow: 0 6px 1.5rem rgba(0, 0, 0, 0.5);
  }
`;

const Details = styled.figcaption`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;

  & > h4 {
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
