import Link from 'next/link';
import styled from 'styled-components';
import { RiExternalLinkLine as LinkIcon } from 'react-icons/ri';
import { colors, sizes } from '../constants/theme';

export default function Project({ image, day, children: title, link }: IProps) {
  return (
    <Card image={image}>
      <Title>{title}</Title>
      <InfoPanel>
        <p className='day'>{`# ${day}`}</p>
        <LinkGroup>
          <LinkIcon />
          <Link href={link}>Link</Link>
        </LinkGroup>
      </InfoPanel>
    </Card>
  );
}

const Card = styled.div<{ image: string }>`
  width: 25rem;
  min-height: 16rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props => props.image});
  background-size: cover;
  background-position: center center;
  border-radius: ${sizes.radius.small};
  box-shadow: 0 3px 0.5rem rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.6);

    & > div {
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${colors.secondary};
  text-shadow: 0 0 3px #000;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
`;

const InfoPanel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: ${colors.contrast.primary};
  display: flex;
  transition: all 0.2s;
  transform: translateY(100%);

  & > p {
    margin-right: auto;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;

  & > a {
    display: inline-block;
  }
`;

interface IProps {
  day: number;
  children: string;
  link: string;
  image: string;
}
