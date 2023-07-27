import './App.css'
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Setup from './pages/Setup';
import Game from './pages/Game';
import RequireCookie from './hooks/RequireCookie';
import CheckCookie from './hooks/CheckCookie';

function App() {

  return (
    <Routes>
      <Route>
        <Route element={<CheckCookie />}>
        <Route path="/" element={<Main />} />
          <Route path="/setup" element={<Setup />} />
        </Route>
        <Route element={<RequireCookie />}>
          <Route path="/game" element={<Game />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
