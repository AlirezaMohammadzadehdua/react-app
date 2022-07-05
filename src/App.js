import './App.css';
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import Body from './components/Body'
import Content from './components/Content';
import NewData from './components/NewData';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Body />
      <Content />
      <NewData />
      <Footer />
    </>
  );
}

export default App;
