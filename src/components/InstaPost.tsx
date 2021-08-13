import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import { RiHeart2Line, RiHeart2Fill, RiShareFill, RiChat3Line } from 'react-icons/ri';

import { sizes } from '../constants/theme';
import Avatar from './Avatar';

export default function InstaPost({ avatar, name, image }: IPost) {
  const [likes, setLikes] = useState(0);
  const [justLiked, setJustLiked] = useState<boolean>(false);
  const [clickTime, setClickTime] = useState<number>(0);
  const [heartPosition, setHeartPosition] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    if (likes === 0) return;
    setJustLiked(true);
    setTimeout(() => setJustLiked(false), 500);
  }, [likes]);

  const increaseLikes = () => {
    setLikes(noOfLikes => noOfLikes + 1);
  };

  const showHeart = (event?: any) => {
    if (!event) {
      return setHeartPosition({ y: '50%', x: '50%' });
    }

    const x = event.clientX;
    const y = event.clientY;

    const leftOffset = event.target.offsetLeft;
    const topOffset = event.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    setHeartPosition({ y: `${yInside}px`, x: `${xInside}px` });
  };

  const handleTap = (event?: any) => {
    if (!event) {
      showHeart();
      return increaseLikes();
    }

    if (clickTime === 0) {
      setClickTime(new Date().getTime());
    } else {
      if (new Date().getTime() - clickTime < 800) {
        showHeart(event);
        increaseLikes();
        setClickTime(0);
      } else {
        setClickTime(new Date().getTime());
      }
    }
  };

  return (
    <Card>
      <CardHeader avatar={avatar} name={name} />
      <PostImage
        src={image}
        width={300}
        height={200}
        loading='lazy'
        alt={name}
        unoptimized
        onClick={handleTap}
      />
      <CardActions>
        <Likes isLiked={likes > 0} onClick={() => handleTap()}>
          {likes === 0 ? (
            <RiHeart2Line />
          ) : (
            <>
              <RiHeart2Fill />
              <p>{likes}</p>
            </>
          )}
        </Likes>
        <RiChat3Line />
        <RiShareFill />
      </CardActions>
      {justLiked && <Heart top={heartPosition.y} left={heartPosition.x} />}
    </Card>
  );
}

interface IPost {
  avatar: string;
  name: string;
  image: string;
}

function CardHeader({ avatar, name }: { avatar: string; name: string }) {
  return (
    <User>
      <Avatar src={avatar} size={30} />
      <p>{name}</p>
    </User>
  );
}

const Card = styled.figure`
  display: flex;
  flex-direction: column;
  min-width: 30rem;
  min-height: 40rem;
  background-color: #fff;
  border-radius: ${sizes.radius.small};
  box-shadow: 0 3px 0.8rem rgba(0, 0, 0, 0.3);
`;

const CardActions = styled.figcaption`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  grid-gap: 1rem;
  place-items: center center;

  & > * {
    cursor: pointer;
  }
`;

const PostImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: auto;
  object-position: center;
  cursor: pointer;
  position: relative;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  & > p {
    margin-left: 1rem;
    flex: 1;
  }

  & + div {
    flex: 1;
  }
`;

const Likes = styled.div<{ isLiked: boolean }>`
  display: flex;
  align-items: center;

  color: ${props => (props.isLiked ? '#f81244' : 'inherit')};
  & > p {
    margin-left: 1rem;
  }
`;

const grow = keyframes`
  from {
    transform: translate(-50%, -50%) scale(1) rotate(-45deg);
    opacity: 1;
  }

  to {
    transform: translate(-50%, -50%) scale(7) rotate(-45deg);
    opacity: 0;
  }
`;

const Heart = styled.div<{ top: string; left: string }>`
  & {
    height: 1rem;
    width: 1rem;
    position: absolute;
    top: ${props => props.top || '50%'};
    left: ${props => props.left || '50%'};
    background-color: #f81244;
    transform: translate(-50%, -50%) rotate(-45deg) scale(0);
    animation: ${grow} 0.5s linear;
    cursor: pointer;
  }

  &::before,
  &::after {
    content: '';
    background-color: #f81244;
    border-radius: 50%;
    height: 1rem;
    position: absolute;
    width: 1rem;
  }

  &::before {
    top: -0.5rem;
    left: 0;
  }

  &::after {
    left: 0.4rem;
    top: 0;
  }
`;
