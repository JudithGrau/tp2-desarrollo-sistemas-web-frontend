import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Recursos from './pages/Recursos';
import ApiView from './pages/ApiView';
import RenderTree from './pages/RenderTree';
import Bitacora from './pages/Bitacora';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfil/:id" element={<Profile />} />
          <Route path="recursos" element={<Recursos />} />
          <Route path="api" element={<ApiView />} />
          <Route path="arbol" element={<RenderTree />} />
          <Route path="bitacora" element={<Bitacora />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
