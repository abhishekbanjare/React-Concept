import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Aboute from './components/Aboute/Aboute.jsx';
import Contact from './components/Contact/Contact.jsx';
// import Github from './components/Github/Github.jsx';
import Layout from './Layout.jsx';
import User from './components/User/User.jsx';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//         {
//           path: "",
//           element: <Home/>
//         },
//         {
//           path: "about",
//           element: <Aboute />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         },
//         {
//           path: "github",
//           element: <Github />
//         }
//     ]
//   }
// ])

// OR..............................

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
         <Route path='' element={<Home />} />
         <Route path='about' element={<Aboute />}/>
         <Route path='contact' element={<Contact />}/>
         <Route path='user/:userId' element={<User />}/>
      </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
