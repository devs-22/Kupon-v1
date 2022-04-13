import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import Flower from '../../assets/IMAGES/orangeFLOWER.png';
import Hand from '../../assets/IMAGES/Point_right.png';

const GetToKnowUs = () => {
  return (
    <div>
      <Header />
      <Container>
        <LogoNTextsContainer>
          <HandImage src={Hand} alt="hand" />
          <Image src={Flower} alt="blue flower" />
          <H1>Get to know us</H1>
          <Image src={Flower} alt="blue flower" />
        </LogoNTextsContainer>
        <TextContainer>
          <Texts>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              sit in nisl dignissim purus. Mollis tellus pulvinar sit nisl lacus
              a velit sed orci. Sit feugiat eget id augue amet tincidunt. Urna
              suspttendisse nisl leo ultrices nam tincidunt et id a.
            </p>
          </Texts>
        </TextContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default GetToKnowUs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 9rem 5.5rem;

  @media (max-width: 768px) {
    margin: auto;
  }
`;
const LogoNTextsContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  width: 80%;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 70%;
    margin-bottom: 0.5rem;
  }
`;
const TextContainer = styled.div`
  display: flex;
  background-color: rgba(135, 190, 228, 0.1);
  border-radius: 10px;
  width: 70%;
  height: 25rem;

  @media (max-width: 768px) {
    height: 17rem;
  }
`;
const Texts = styled.p`
  margin: 5rem 0rem;
  padding: 2rem;
  text-align: left;
  line-height: 4rem;
  font-weight: 500;
  font-size: 26px;

  @media (max-width: 768px) {
    margin: 0rem;
    font-size: 12px;
    line-height: 2rem;
    padding: 1.5rem 3rem 1.5rem 1rem;
    display: flex;
    margin-right: 0.5rem;
  }
`;

const Image = styled.img`
  height: 80px;
  width: 130px;

  @media (max-width: 768px) {
    height: 20px;
    width: 35px;
  }
`;

const HandImage = styled.img`
  position: absolute;
  width: 100px;
  height: 123.6px;
  left: 0;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    left: -48px;
  }
`;

const H1 = styled.h1`
  font-size: 58px;
  padding: 1rem;
  text-align: center;
  line-height: 2rem;

  @media (max-width: 768px) {
    font-size: 33px;
    width: 55%;
  }
`;
