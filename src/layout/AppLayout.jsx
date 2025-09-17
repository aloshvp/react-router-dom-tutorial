import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
    return (
        <>
            {/* header */}
            <Header />
            {/* Body */}
            <Outlet />
        </>
    )
}

export default AppLayout