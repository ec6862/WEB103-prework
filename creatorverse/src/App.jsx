import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import './App.css'
import ShowCreators from './pages/ShowCreators.jsx'
import AddCreator from './pages/AddCreator.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<ShowCreators/>}>
            <Route path = "/new" element={<AddCreator/>}/>
            <Route path = "/ViewCreator/:symbol" element={<ViewCreator/>}/>
            <Route path = "/edit/:symbol" element={<EditCreator/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
