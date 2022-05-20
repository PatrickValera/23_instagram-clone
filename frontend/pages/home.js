import React from 'react'
import Header from '../src/components/Header'
import PostsList from '../src/components/home/PostsList'
import SideBar from '../src/components/home/SideBar'

const Home = () => {
    return (
        <>
            <Header />
            <main className='bgcolor-red max-w-screen-md mx-auto flex font-sans'>
                <PostsList />
                <SideBar />
            </main>
        </>

    )
}

export default Home