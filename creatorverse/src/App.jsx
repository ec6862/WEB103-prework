import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Navbar/>}> {/* show ALL the content creators */}
            <Route index={true} element={<ShowCreators/>}/>
            <Route path = "/new" element={<AddCreator/>}/> {/* add content creators */}
            <Route path = "/ViewCreator/:symbol" element={<ViewCreator/>}/> {/* show ONE content creator */}
            <Route path = "/edit/:symbol" element={<EditCreator/>}/> {/* update content creators --> copy format of add creator */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
