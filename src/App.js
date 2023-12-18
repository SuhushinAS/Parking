
import Start from './pages/StartPage';
import Main from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Start/>} path='/'/>
          <Route element={<Main/>} path='/main'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

