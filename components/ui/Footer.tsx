import { routes, info, legal } from '@/utils/routes'
import { HeartOff } from 'lucide-react'
import Link from 'next/link'
import React from 'react'




const Footer = () => {
  return (
    <div className='flex w-full  bg-black h-[100px] text-white'>

        <div className='flex justify-between p-3  w-full '>
            <h1 className=''>VRU Security</h1>

            <div className='flex justify-between w-[300px] mr-6'>
                <div className='pages flex flex-col'>
                    {routes.map((route)=>(
                        <Link href={route.href}>{route.label}</Link>

                    ))}
                </div>
                <div className='pages flex flex-col  flex-wrap'>
                    {info.map((e)=>(
                        <Link href="/">{e.label}</Link>

                    ))}
                </div>
                <div className='pages flex flex-col  flex-wrap'>
                    {legal.map((e)=>(
                        <Link href="/">{e.label}</Link>

                    ))}
                </div>
                
                

            </div>
        </div>

        
      
    </div>
  )
}

export default Footer
