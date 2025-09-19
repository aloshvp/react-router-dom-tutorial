import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading"

    return (
        <>
            {/* header */}
            <Header />
            {isLoading && <div>Loading...</div>}
            {/* Body */}
            <Outlet />
        </>
    )
}

export default AppLayout