import styled from "styled-components"
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Flower from '../../assets/IMAGES/orangeFLOWER.png';

const GetToKnowUs = () => {
  return (
    <>
    <Header />
    <Container>
        <LogoNTextsContainer>
        {/* <Image src={Hand} alt="hand"/> */}
        <Image src={Flower} alt="blue flower"/>
            <H1>Get to know us</H1>
        <Image src={Flower} alt="blue flower"/>
        </LogoNTextsContainer>
        <TextContainer>
        <P> <Span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium sit in nisl dignissim purus.</Span> <Span> Mollis tellus pulvinar sit nisl lacus a velit sed orci. 
            Sit feugiat eget id augue amet tincidunt. Urna suspttendisse nisl leo ultrices nam tincidunt et id a.</Span></P>
          
        </TextContainer>
    </Container>
    <Footer />
    </>
  )
}

export default GetToKnowUs

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 9rem 5.5rem;

@media (max-width: 768px){
margin: auto;
}
@media (min-width: 769px) and ( max-width: 992px){
  margin: 5rem;
}
`
const LogoNTextsContainer = styled.div`
display: flex;
margin-bottom: 1.5rem;
width: 80%;
align-items: center;
justify-content: center;


@media (max-width: 768px){
width: 70%;
margin-bottom: 0.5rem;

}

@media (min-width: 769px) and ( max-width: 992px){
width: 100%;

}

`
const TextContainer = styled.div`

display: flex;
flex-direction: column;
background-color: rgba(135, 190, 228, 0.1);
border-radius: 10px;
width: 70%;
height: 29rem;

@media (max-width: 768px){
height: 100%;

}

@media (min-width: 769px) and ( max-width: 992px){
  height: 100%;

}
`
const P = styled.p`
margin: 0;
padding: 4rem;
text-align: left;
line-height: 4rem;
font-weight: 500;
font-size: 25px;

@media (max-width: 768px){
display: flex;
flex-direction: column;
margin: 0rem;
font-size: 12px;
line-height: 2rem;
padding: 1.5rem 3rem 1.5rem 1rem;
margin-right: 0.5rem;

}
@media (min-width: 769px) and ( max-width: 992px){
  display: flex;
flex-direction: column;
  font-size: 20px;
margin: 0;
line-height: 3rem;
}
`



const Image = styled.img`
height: 80px;
width: 130px;

@media (max-width: 768px){
height: 20px;
width: 35px;
}
`
const H1 = styled.h1`
font-size: 58px;
padding: 2rem;
text-align: center;
line-height: 4rem;

@media (max-width: 768px){
font-size: 33px;
width: 55%;
line-height: 2rem;
padding: 1rem;
}
@media (min-width: 768px) and ( max-width: 992px){
  line-height: 4rem;
  margin: 0rem 2rem;
  padding: 1rem;
}
`

const Span = styled.span`
margin-bottom: 0.5rem;
`