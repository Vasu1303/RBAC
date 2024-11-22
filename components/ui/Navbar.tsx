import Link from 'next/link'
import React from 'react'
import { Button } from './button'


const Navbar = () => {
  return (
    <div className='flex flex-col  '>

      <div className='flex items-center  w-full justify-between  border-b-2 p-2' >
        <h1>VRU Security</h1>
        <nav className='flex gap-5 items-center justify-center '>
          <Link href="/">
            Home
          </Link>
          <Link href="/users">
            Users
          </Link>
          <Link href="/tasks">
            Tasks
          </Link>

        </nav>

        <Button>Login</Button>
        



      </div>





      

      

       

      
    </div>
  )
}

export default Navbar
