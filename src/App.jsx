import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout';
import Login from './Paginas/Login';
import Panel from './Paginas/Panel';
import RutaProtegida from './Layouts/RutaProtegida';






function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        </Route>

        <Route path="/panel" element={<RutaProtegida />} >
          <Route index element={<Panel />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
