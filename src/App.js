import './App.css';
import Heading from "./component/Heading";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Content from "./component/content/Content";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Notfound from './component/NotFound/Notfound';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
