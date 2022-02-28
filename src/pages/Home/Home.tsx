import Footer from '../../components/Footer/Footer';
import TopPages from '../../components/TopPage/TopPages';
import './Home.css';
// import { Button } from "./components/Styles/Button.styles";
//This is how to pass props into the button

function Home() {
  return (
    <div className="Home">
      <TopPages />
      <Footer />
    </div>
  );
}

export default Home;
