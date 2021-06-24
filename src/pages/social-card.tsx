import Head from 'next/head';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';
import { BiMessageRounded } from 'react-icons/bi';
import { BsArrowCounterclockwise, BsHeartFill, BsEnvelope } from 'react-icons/bs';

// colors
const lightGrey = '#acabab';
const skyBlue = '#00a2ff';

export default function Card() {
  return (
    <>
      <Head>
        <title>Notes app | 7 days 50 projects</title>
      </Head>
      <Main>
        <Frame>
          <CardImageIcon src='/batman.jpg' alt='community logo' />
          <CardContainer>
            <CardHeader>
              <HeaderInfo>
                <TitleText>
                  <p>
                    The Practicaal Dev{' '}
                    <span
                      style={{
                        color: lightGrey,
                        padding: '0 10px'
                      }}
                    >
                      @Mdjack
                    </span>
                    <span
                      style={{
                        color: lightGrey
                      }}
                    >
                      Dec 5
                    </span>
                  </p>
                  <MdExpandMore />
                </TitleText>
                <p>Learning React? Start Small.</p>
                <p>
                  {'{'}author:{' '}
                  <span
                    style={{
                      color: skyBlue
                    }}
                  >
                    @Mdjack
                  </span>
                  {'}'}
                </p>
              </HeaderInfo>
            </CardHeader>
            <CardBody>
              <CardImage>
                <CardInnerImage
                  src='https://github.com/PranavGPR/PranavGPR/blob/master/code.gif?raw=true'
                  alt='card main image'
                />
                <CardInnerImageIcon
                  src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                  alt='community logo'
                />
                <AuthorInfo>
                  <AuthorImage src='/batman.jpg' alt='profile image' />
                  <AuthorName>Md Jack</AuthorName>
                </AuthorInfo>
              </CardImage>
              <CardDescription>
                <p>Learning React? Start Small.</p>
                <p>
                  Can't pry yourself away from the tutorials? The cure is to make tiny little
                  experment apps.
                </p>
                <p
                  style={{
                    color: lightGrey
                  }}
                >
                  dev.to
                </p>
              </CardDescription>
            </CardBody>
            <CardFooter>
              <FooterIcon>
                <BiMessageRounded />
                <span>2</span>
              </FooterIcon>
              <FooterIcon
                style={{
                  color: 'green'
                }}
              >
                <BsArrowCounterclockwise />
                <span>47</span>
              </FooterIcon>
              <FooterIcon
                style={{
                  color: 'red'
                }}
              >
                <BsHeartFill />
                <span>190</span>
              </FooterIcon>
              <FooterIcon>
                <BsEnvelope />
              </FooterIcon>
            </CardFooter>
          </CardContainer>
        </Frame>
      </Main>
    </>
  );
}

const iconSize = styled.img`
  width: 50px;
  height: 50px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
  }
`;

const Frame = styled.div`
  display: flex;
  margin: 2rem 0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

const CardImageIcon = styled(iconSize)`
  border-radius: 50%;
  margin-top: 10px;
`;

const HeaderInfo = styled.div`
  width: 100%;

  p {
    padding: 2px 2px 0 5px;
    font-size: 14px;
  }
`;

const TitleText = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bolder;

  span: {
    padding: 0 10px;
  }
`;

const CardBody = styled.div``;

const CardImage = styled.div`
  position: relative;
`;

const CardInnerImage = styled.img`
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const CardInnerImageIcon = styled(iconSize)`
  position: absolute;
  top: 5px;
  left: 5px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  bottom: 0;
  right: 0;
  align-items: center;
  margin: 10px 5px;
  background-color: #fff;
  border-radius: 3px;
`;

const AuthorImage = styled(iconSize)`
  padding: 5px;
  border-radius: 5px;
`;

const AuthorName = styled.p`
  padding: 0 5px;
  color: #b72ef7;
  font-weight: 800;
`;

const CardDescription = styled.div`
  padding: 10px;
  font-size: 14px;

  p:first-child {
    font-weight: 700;
  }
`;

const CardFooter = styled.div`
  display: flex;
`;

const FooterIcon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  span {
    padding: 0 10px;
  }
`;
