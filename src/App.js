import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Moj } from './pages/Moj'
import { Sk } from './pages/Sk'
import {Login } from './pages/Login'
import {HeaderMenu} from "./components/HeaderMenu"
import {NotFoundPage} from "./pages/NotFoundPage"
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
function App() {
  return (  
    <AuthProvider>
  <Router>
      <HeaderMenu userName="Exclave#0000"/>
<Routes>
     <Route path={'/login'} element={<Login/>} />
     <Route path={'/moj'} element={<RequireAuth><Moj/></RequireAuth>}/>
     <Route path={'/sk'}  element={<RequireAuth><Sk/></RequireAuth>} />
     <Route path={'*'}  element={<NotFoundPage/>} />
 </Routes>
</Router>
</AuthProvider>
    
  );
}

export default App;
