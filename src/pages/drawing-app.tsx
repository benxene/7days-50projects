import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { Alert } from '../components/Utilities';
import { colors } from '../constants/theme';

type Coordinates = {
  x: number;
  y: number;
};

export default function DrawingApp() {
  const [size, setSize] = useState(10);
  const [color, setColor] = useState('#000');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    let mouseDown: boolean = false;
    let start: Coordinates = { x: 0, y: 0 };
    let end: Coordinates = { x: 0, y: 0 };
    let canvasOffsetLeft: number = 0;
    let canvasOffsetTop: number = 0;

    function handleMouseDown(evt: MouseEvent) {
      mouseDown = true;

      start = {
        x: evt.clientX - canvasOffsetLeft,
        y: evt.clientY - canvasOffsetTop
      };

      end = {
        x: evt.clientX - canvasOffsetLeft,
        y: evt.clientY - canvasOffsetTop
      };
    }

    function handleMouseUp() {
      mouseDown = false;
    }

    function handleMouseMove(evt: MouseEvent) {
      if (mouseDown && context) {
        start = {
          x: end.x,
          y: end.y
        };

        end = {
          x: evt.clientX - canvasOffsetLeft,
          y: evt.clientY - canvasOffsetTop
        };

        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.lineCap = 'round';
        context.strokeStyle = color;
        context.lineWidth = size;
        context.stroke();
        context.closePath();
      }
    }

    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');

      if (renderCtx) {
        canvasRef.current.addEventListener('mousedown', handleMouseDown);
        canvasRef.current.addEventListener('mouseup', handleMouseUp);
        canvasRef.current.addEventListener('mousemove', handleMouseMove);

        canvasOffsetLeft = canvasRef.current.offsetLeft;
        canvasOffsetTop = canvasRef.current.offsetTop;
        if (!context) {
          setContext(renderCtx);
        }
      }
    }

    return function cleanup() {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousedown', handleMouseDown);
        canvasRef.current.removeEventListener('mouseup', handleMouseUp);
        canvasRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [context, size, color]);

  const handleClear = () => {
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Drawing App | 7 days 50 projects</title>
      </Head>
      <Section>
        <Alert color='white' bgColor='#00b029'>
          Use Laptop for better experience
        </Alert>
        <Main>
          <canvas ref={canvasRef} width='700' height='500'></canvas>
          <Toolbar>
            <button
              onClick={() => {
                if (size === 5) return;
                setSize(old => old - 5);
              }}
            >
              -
            </button>
            <span>{size}</span>
            <button
              onClick={() => {
                if (size === 50) return;
                setSize(old => old + 5);
              }}
            >
              +
            </button>
            <input type='color' value={color} onChange={handleColorChange} />
            <button onClick={handleClear}>X</button>
          </Toolbar>
        </Main>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Main = styled.div`
  border: 2px solid ${colors.primary};

  /* & canvas {
    width: 700px;
    height: 500px;

    @media (max-width: 750px) {
      width: 500px;
    }

    @media (max-width: 550px) {
      width: 400px;
    }

    @media (max-width: 450px) {
      width: 300px;
    }
  } */
`;

const Toolbar = styled.div`
  background-color: ${colors.primary};
  padding: 1rem 2rem;
  font-size: 2.5rem;
  display: flex;
  align-items: center;

  & input[type='color'] {
    cursor: pointer;
    height: 3rem;
    padding: 0.1rem;
    margin-left: 3rem;
    width: 3rem;
    margin-right: auto;
  }

  & span {
    margin: 0 1rem;
  }

  & button {
    padding: 0.5rem 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
`;
