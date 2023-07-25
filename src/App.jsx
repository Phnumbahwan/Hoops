import './App.css'
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Setup from './pages/Setup';
import Game from './pages/Game';

function App() {

  return (
    <Routes>
      <Route>
        <Route path="/" element={<Main />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/game" element={<Game />} />
      </Route>
    </Routes>
  )
}

export default App
