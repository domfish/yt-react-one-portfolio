import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Home from "./component/home";
import NavBar from "./component/navBar";
import Portfolio from "./component/Portfolio";
import SocialLinks from "./component/SocialLinks";

function App() {
  return (
    < >
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <SocialLinks></SocialLinks>
    </>
  );
}

export default App;
