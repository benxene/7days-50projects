import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { colors, sizes } from '../constants/theme';

export default function Slider() {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log(value);

    setSliderValue(Number(value));
  };

  return (
    <div style={{ position: 'relative' }}>
      <SliderInput id='slider' type='range' value={sliderValue} onChange={handleChange} />
      <Label htmlFor='slider'>{sliderValue}</Label>
    </div>
  );
}

const trackStyles = `
  background: ${colors.contrast.primary};
  margin: 0;
  border: 2px solid ${colors.primary};
  border-radius: 1rem;
  width: 100%;
  height: 1rem;
  margin-right: -1rem;
  cursor: pointer;
`;

const thumbStyles = `
  -webkit-appearance: none;
  margin: 0;
  height: 2.2rem;
  width: 3rem;
  background: ${colors.primary};
  border-radius: ${sizes.radius.large};
  margin-top: -0.8rem;
  cursor: pointer;
`;

const SliderInput = styled.input`
  width: 36rem;
  margin: 2rem 0;
  -webkit-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
  }

  /* Chrome & Safari */
  &::-webkit-slider-runnable-track {
    ${trackStyles}
  }

  &::-webkit-slider-thumb {
    ${thumbStyles}
  }
  /* Firefox */
  &::-moz-range-track {
    ${trackStyles}
  }

  &::-moz-range-thumb {
    ${thumbStyles}
  }

  /* IE */
  &::-ms-track {
    ${trackStyles}
  }

  &::-ms-thumb {
    ${thumbStyles}
  }
`;

const Label = styled.label<{ children: number }>`
  position: absolute;
  bottom: -2.5rem;
  left: ${props => props.children}%;
  width: 7rem;
  padding: 0.3rem 0.4rem;
  transform: translateX(calc(-50% + ${props => props.children / 10}px));
  background-color: ${colors.primary};
  color: ${colors.contrast.primary};
  font-weight: 500;
  text-align: center;
  border-radius: ${sizes.radius.small};
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
`;
