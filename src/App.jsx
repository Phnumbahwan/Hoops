import './App.css'
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Setup from './pages/Setup';

function App() {

  return (
    <Routes>
      <Route>
        <Route path="/" element={<Main />} />
        <Route path="/setup" element={<Setup />} />
      </Route>
    </Routes>
  )
}

export default App
