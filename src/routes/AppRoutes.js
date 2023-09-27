import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Soal from '../pages/Soal'
import Login from '../pages/Login'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/soal' element={<Soal />} />
        </Routes>
    )
}

export default AppRoutes