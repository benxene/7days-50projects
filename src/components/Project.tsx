import styled from 'styled-components';
import { colors, sizes } from '../constants/theme';

export default function Project({ image, day, children: title, link }: IProps) {
  return (
    <Card image={image}>
      <Title>{title}</Title>
    </Card>
  );
}

const Card = styled.div<{ image: string }>`
  width: 25rem;
  min-height: 16rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props => props.image});
  background-size: cover;
  background-position: center center;
  border-radius: ${sizes.radius};
  box-shadow: ${sizes.shadows.light} rgba(0, 0, 0, 0.4);
  transition: all 0.2s;

  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${sizes.shadows.big} rgba(0, 0, 0, 0.4);
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: ${colors.contrast.darkSlate};
  text-shadow: 0 0 3px #000;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

interface IProps {
  day: number;
  children: string;
  link: string;
  image: string;
}
