import './App.css';
import {BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/eureka-demo" element={<Home />} />
        <Route exact path="/eureka-demo/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
} 

export default App;
