
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './Home';
import Time from './Time';
import Forecast from './Forecast';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/time' element={<Time />}></Route>
          <Route path='/forecast' element={<Forecast />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
