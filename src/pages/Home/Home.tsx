import "./Home.css";
//import { Button } from "./components/Styles/Button.styles";
import Header from "../../components/Header/Header";
//This is how to pass props into the button

function Home() {
  return (
    <div className="Home">
      <Header />
      {/* <Button
        backgroundColor="red"
        color="black"
        hover="blue"
        width="158px"
        border="1px solid black"
      >
        Click me
      </Button> */}

    </div>
  );
}

export default Home;
