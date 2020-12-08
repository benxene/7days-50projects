import Image from 'next/image';
import styled from 'styled-components';
import { colors, sizes } from '../constants/theme';

export default function MovieCard(props: IMovie) {
  const { title, rating, poster, description } = props;

  return (
    <Card>
      <Figure>
        <Image src={poster} width='auto' height='auto' loading='lazy' />
        <Caption rating={rating}>
          <h3>{title}</h3>
          <p>{rating}</p>
        </Caption>
      </Figure>
      <Overview>
        <h3>Overview</h3>
        {description}
      </Overview>
    </Card>
  );
}

interface IMovie {
  title: string;
  rating: number;
  description: string;
  poster: string;
}

const Card = styled.div`
  height: 48rem;
  width: 30rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 85% 15%;
  border-radius: ${sizes.radius.small};
  box-shadow: 0 2px 1rem rgba(0, 0, 0, 0.8);
  overflow: hidden;
  position: relative;

  &:hover > div {
    transform: translateY(-100%);
  }
`;

const Figure = styled.figure`
  & > div {
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      object-position: center;
    }
  }
`;

const Caption = styled.figcaption<{ rating: number }>`
  display: flex;
  height: 15%;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;

  & > h3 {
    flex: 1;
  }

  & > p {
    height: 4rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    color: ${({ rating }) => (Number(rating) > 8 ? 'green' : Number(rating) > 6 ? 'yellow' : 'red')};
  }
`;

const Overview = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 3rem;
  border-radius: ${sizes.radius.medium} ${sizes.radius.medium} 0 0;
  background-color: ${colors.darkSlate};
  box-shadow: 0 -2px 1rem rgba(0, 0, 0, 0.5);
  transform: translateY(1rem);
  transition: all 0.3s;

  & > h3 {
    margin-bottom: 1rem;
  }
`;
