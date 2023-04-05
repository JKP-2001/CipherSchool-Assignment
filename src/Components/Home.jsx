import React from 'react'
import SideBar from './BasicLayouts/SideBar'
import NavBar from './BasicLayouts/NavBar'

const Home = () => {
  return (
    <aside class="flex">
        <SideBar />
        <NavBar />
    </aside>
  )
}

export default Home