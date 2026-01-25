
// import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Singup from './pages/singup'
import Singin from './pages/singin'
import DashboardLayout from './assets/layouts/dashboardLayout'
import AdminLayout from './Admin/AdminLayout'
import AdminPage from './Admin/AdminPage'
import Dashboard from './Dashboard/Dashboard'
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

        <Route path='/dashboard' element={<Dashboard/>}/>
        
        {/* <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route index element={<Dashboard/>}/>
        </Route> */}

        <Route path='/admin'  element={<AdminPage/>}>
          {/* <Route index element={<AdminPage/>}/> */}
        </Route>

       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
