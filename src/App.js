import logo from './logo.svg';
import './App.css';
import NavigationMenu from "./components/navigation/navigation_menu";
import Portfolio from "./pages/portfolio";
import Carousel from "./components/carousels/carousel";
import Skillset from "./components/skills/skillset";
import Header from "./components/header/header";

function App() {
  return (
<div>
  <Header/>,
  <NavigationMenu/>,
  <Portfolio/>,
  <Carousel/>,
  <Skillset/>,
</div>

  );
}

export default App;
