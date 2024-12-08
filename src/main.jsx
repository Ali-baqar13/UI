import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './components/Home.jsx'
import "./index.css"
import About from './components/About.jsx'
import Upload from './components/Upload.jsx'
import Statistics from './components/Statistics.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="home" element={<Home/>}/>   
      <Route path="upload" element={<Upload/>}/>  
      <Route path="about" element={<About/>}/>  
      <Route path="statistics" element={<Statistics/>}/>    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  < StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
