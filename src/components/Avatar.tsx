import Image from 'next/image';
import styled from 'styled-components';

export default function Avatar({ src, size }: { src: string; size: number | string }) {
  return <RoundedImage src={src} alt={src} width={size} height={size} unoptimized />;
}

const RoundedImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;
