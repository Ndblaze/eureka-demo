import './App.css';
import {BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/eureka-demo" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
} 

export default App;
