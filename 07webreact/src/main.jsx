import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home,About,Contact,createBrowserRouter,RouterProvider,Layout, User ,Github } from './components/index.js'
import { Route, createRoutesFromElements } from 'react-router-dom'
import { githubloader } from './components/Github/Github'


 // method 1
// const router  = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element: <Home/>
//       }
//       ,
//       {
//         path: 'about',
//         element: <About/>
//       }
//       ,
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
   
//     ]
//   }
// ])


// method 2


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='about' element= {<About/>}/>
      <Route path='contact' element= {<Contact/>}/>
      <Route path='user/:userid' element= {<User/>}/>
      <Route 
      path='github' 
      loader= {githubloader}
      element= {<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)
