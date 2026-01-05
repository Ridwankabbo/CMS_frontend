
// import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Singup from './pages/singup'
import Singin from './assets/singin'
import DashboardLayout from './assets/layouts/dashboardLayout'
import Dashboard from './pages/Dashboard'
import AdminLayout from './components/AdminLayout'
import AdminPage from './pages/AdminPage'
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          
        </Route>
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/singin' element={<Singin/>}/>
        
        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>

        <Route path='/admin'  element={<AdminLayout/>}>
          <Route index element={<AdminPage/>}/>
        </Route>

       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
