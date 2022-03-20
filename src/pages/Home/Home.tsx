import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TopPages from '../../components/TopPage/TopPages';
import './Home.css';
// import { Button } from "./components/Styles/Button.styles";
//This is how to pass props into the button

function Home() {
  return (
    <div className="Home">
      <Header />
      <TopPages />
      <Footer />
    </div>
  );
}

export default Home;
