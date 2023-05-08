import React from 'react';
import Home from '../src/pages/home';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Link, Outlet} from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />}></Route>

      </Route>
    )
  )
  return (
    <>
     <div>
       <RouterProvider router={router}></RouterProvider>
     </div>
    </>
  )
}

const Root = () => {
  return(
    <>
      <div>
        
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
