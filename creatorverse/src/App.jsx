import React, { useState } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import ViewCreator from './pages/ViewCreator'


const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path = "/" element={ShowCreators}></Route>
      <Route path = "/add" element={AddCreator}></Route>
      <Route path = "/ViewCreator/:symbol" element={ViewCreator}></Route>
      <Route path = "/edit/:symbol" element={EditCreator}></Route>
    </Routes>

  </BrowserRouter>
}

export default App
