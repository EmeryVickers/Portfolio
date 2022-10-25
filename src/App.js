
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {BrowserScroll as Scroll} from 'react-scroll';
import Home from './pages';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
