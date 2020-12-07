import { useReducer, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { Button, Section } from '../components/Utilities';
import Rating from '../components/Rating';
import { BsFillHeartFill } from 'react-icons/bs';

export default function FeedbackUI() {
  const [click, setClick] = useState<boolean>(false);
  const [choice, dispatch] = useReducer(reducer, initialOptions);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id: name, checked } = event.target;
    dispatch({ type: name, value: checked });
  };

  return (
    <>
      <Head>
        <title>Feedback UI Design | 7 days 50 projects</title>
      </Head>
      <MySection>
        {click ? (
          <ResponseContainer>
            <BsFillHeartFill style={{ margin: '0.5rem' }} />
            <SmallHeading>Thank You!</SmallHeading>
            <SmallHeading>
              Feedback:{' '}
              {choice.Unhappy ? 'Unhappy' : choice.Neutral ? 'Neutral' : choice.Satisfied ? 'Satisfied' : 'None'}
            </SmallHeading>
            <p style={{ margin: '.5rem', textAlign: 'center' }}>
              We'll use your feedback to improve our customer support
            </p>
          </ResponseContainer>
        ) : (
          <FeedbackContainer>
            <SmallHeading>How satisfied are you with our customer support performance?</SmallHeading>
            <RatingContainer>
              <Rating
                emoji='https://image.flaticon.com/icons/svg/187/187150.svg'
                checked={choice.Unhappy}
                onChange={handleChange}
                id='Unhappy'
              />
              <Rating
                emoji='https://image.flaticon.com/icons/svg/187/187136.svg'
                checked={choice.Neutral}
                onChange={handleChange}
                id='Neutral'
              />
              <Rating
                emoji='https://image.flaticon.com/icons/svg/187/187133.svg'
                checked={choice.Satisfied}
                onChange={handleChange}
                id='Satisfied'
              />
            </RatingContainer>
            <ButtonContainer>
              <MyButton
                color='primary'
                onClick={() => {
                  choice.Unhappy
                    ? setClick(true)
                    : choice.Neutral
                    ? setClick(true)
                    : choice.Satisfied
                    ? setClick(true)
                    : setClick(false);
                }}
              >
                Send Feedback
              </MyButton>
            </ButtonContainer>
          </FeedbackContainer>
        )}
      </MySection>
    </>
  );
}

interface IOptions {
  Unhappy: boolean;
  Neutral: boolean;
  Satisfied: boolean;
}

const initialOptions: IOptions = {
  Unhappy: false,
  Neutral: false,
  Satisfied: true
};

const reducer = (state: any, { type, value }: { type: string; value: boolean }) => {
  switch (type) {
    case 'Unhappy':
      return { ...state, Unhappy: value, Satisfied: !value, Neutral: !value };

    case 'Satisfied':
      return { ...state, Unhappy: false, Satisfied: value, Neutral: false };

    case 'Neutral':
      return { ...state, Unhappy: !value, Satisfied: !value, Neutral: value };
  }
};

const MySection = styled(Section)`
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fef9f2;
`;

const FeedbackContainer = styled.div`
  padding: 1rem;
  width: 35rem;
  height: 28rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    width: 3rem;
    height: 3rem;
    fill: red;
  }
`;

const ResponseContainer = styled(FeedbackContainer)`
  height: 20rem;
`;

const SmallHeading = styled.h5`
  text-align: center;
  margin: 0.5rem;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyButton = styled(Button)`
  color: #fff;
`;
