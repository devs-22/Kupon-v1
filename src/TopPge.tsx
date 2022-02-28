// import { MenuOutlined } from "@mui/icons-material";
// import { Button } from "@mui/material";
import styled from 'styled-components';

//Mobile View

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 24px;
  top: 68px;
  left: 20px;
  position: absolute;
`;
const Logo = styled.h2`
  width: 51px;
  height: 22px;
  font-weight: 700px;
`;
const Menu = styled.div``;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 278px;
  height: 196px;
  left: 56px;
  top: 140px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const Title = styled.h1`
  position: static;
  left: 11.15%;
  right: 11.15%;
  top: 0%;
  bottom: 38.78%;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 2px 0px;
`;
const Desc = styled.p`
  position: static;
  width: 278px;
  height: 60px;
  left: 0px;
  top: 136px;
  font-family: Cabinet Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.004em;
  color: #000000;
`;
const CreateButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  position: absolute;
  width: 156px;
  height: 56px;
  left: 117px;
  top: 363px;
  color: #ffffff;
  background: #000000;
  border-radius: 10px;
  border: none;
`;
const LearnMoreButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  position: absolute;
  width: 126px;
  height: 56px;
  left: 132px;
  top: 435px;
  font-weight: bold;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
`;
const ImageGroup = styled.div`
  position: absolute;
  width: 350px;
  height: 347px;
  left: 20px;
  top: 536px;
`;
const Rectangle = styled.div`
  position: absolute;
  width: 231px;
  height: 325px;
  left: 116px;
  top: -20px;
  background: rgba(135, 190, 228, 0.1);
`;

const TopPage = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Kupon</Logo>
        <Menu></Menu>
      </Wrapper>
      <Middle>
        <Title>
          Create
          <br /> detailed
          <br /> invoice in a <span style={{ color: '#025CE4' }}>jiffy</span>.
        </Title>
        <Desc>
          Send invoices to your customers globally, Get to provide details of
          your goods in seconds.
        </Desc>
      </Middle>

      <CreateButton>Create Account</CreateButton>
      <LearnMoreButton>Learn More</LearnMoreButton>
      <ImageGroup>
        <Rectangle />
        <img
          src={require('/src/assets/Vector.png')}
          alt="error"
          style={{
            position: 'absolute',
            width: '225.31px',
            height: '208.31px',
            left: '60.36px',
            top: '89.75px',
          }}
        />
        <img
          src={require('/src/assets/Saly.png')}
          alt="error"
          style={{
            position: 'absolute',
            width: '347px',
            height: '347px',
            left: '0px',
            top: '0px',
            filter: 'drop-shadow(0px 2.25806px 5.64516px rgba(0, 0, 0, 0.25))',
          }}
        />
      </ImageGroup>
    </Container>
  );
};

export default TopPage;
