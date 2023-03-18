import NavBar from "../src/components/NavBar";
import Home from "./components/Home";
import SocialLinks from "../src/components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;
