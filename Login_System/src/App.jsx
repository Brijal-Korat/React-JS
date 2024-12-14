import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import View from './Pages/View'
import Add from './Pages/Add'
import Edit from './Pages/Edit'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
