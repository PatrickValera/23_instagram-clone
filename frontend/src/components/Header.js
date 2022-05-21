import React, { useEffect, useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { RiMessengerLine, } from 'react-icons/ri'
import { AiFillHome, AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai'
import Menu from './utils/Menu'


const Header = () => {
  const [anchor, setAnchor] = useState(null)
  const open = Boolean(anchor)

  const handleClick = (e) => {
    e.stopPropagation()
    setAnchor(e.currentTarget)
  }
  const handleClose = () => {
    console.log('UH OH')
    setAnchor(null)
  }
  useEffect(() => {
    console.log('header')

  }, [])
  return (
    <>
      <header className=' px-2 py-3 border-b-[1px] bg-white fixed top-0 w-full'>

        <div className='max-w-screen-md flex mx-auto items-center'>
          <div className='basis-1/3 flex h-[25px]'>
            <img src='./instagram_logo.png' />
          </div>

          <div className='basis-1/3 flex justify-center pr-4 '>
            <input className='flex-1 bg-gray-100 px-2 py-1 rounded outline-0 focus:border-0' placeholder='Search' />
          </div>

          <div className='basis-1/3 flex justify-end text-xl gap-4'>
            <i onClick={handleClick} ><AiFillHome /></i>
            <i onClick={handleClick} ><RiMessengerLine /></i>
            <i onClick={handleClick} ><BsPlusSquare /></i>
            <i onClick={handleClick} ><AiOutlineCompass /></i>
            <i onClick={handleClick} ><AiOutlineHeart /></i>

          </div>
        </div>

      </header>
      <div className='h-[50px]' />
      <Menu element={anchor} open={open} onClose={handleClose}>
        <li className='list-none'>This account started following you</li>
        <li className='list-none'>This account started following you</li>
        <li className='list-none'>This account started following you</li>

      </Menu>
    </>
  )
}
export default Header