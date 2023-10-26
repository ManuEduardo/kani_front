import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRouter';


function App() {
  <Routes>
    <Route path="/" element={<div>home</div>}/>
    <Route element={<ProtectedRoute />}>
    <Route path="/perfil" element={<div>perfil</div>}/>
    </Route>
  </Routes>
}

export default App
