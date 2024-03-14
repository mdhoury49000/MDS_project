import React from 'react'
import HomePage from '../Component'
import { Routes, Route } from 'react-router-dom'
export default function BaseRouter() {
  return (
    <Routes>
      <Route path = '/*' element = {<HomePage/>} />
    {//  <Route path = '/pro' element = {<RouterPro/>} />
    //<Route path = '/user' element = {<RouterUser/>} />
     // <Route path = '/art' element = {<RouterArt/>} />
    }
    </Routes>
  )
}
