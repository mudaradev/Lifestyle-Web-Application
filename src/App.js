import './App.css';
import Navi from './navbar.jsx';
import Slide from './side.jsx';
import Butt from './Shop.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pricing from './pricing.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="App">
              <Navi />
              <Slide />
              <Butt />
            </div>
          }
        />
        {/* Pricing Page */}
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;