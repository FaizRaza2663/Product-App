import React  from 'react'
import { Route, Router, Routes } from 'react-router'
import Profile from './pages/Profile'
import ProfileDetail from './pages/ProfileDetail'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Profile />}/>
        <Route path='/movies' element={<Profile />}/>
        <Route path='/movies/:id' element={<ProfileDetail />}/>
        <Route path='*' element="Error" />
      </Routes>
    </div>
  )
}

export default App