import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsChat, BsBookmark } from 'react-icons/bs'
import { IoPaperPlaneOutline } from 'react-icons/io5'
const Post = ({ post }) => {
    return (
        <div className='flex-col mt-6 border'>


            <header className='text-sm flex px-2 py-4 items-center border-b'>
                <div className='grow-0 rounded-full aspect-square overflow-hidden w-6 '>
                    <img className='object-center' src={`/${post}.jpg`} />
                </div>
                <div className='grow basis-1/2 ml-2 text-[.8rem] font-medium'>
                    vaundy_engawa

                </div>
                <button className='mx-2 text-lg'>
                    <HiDotsHorizontal />

                </button>
            </header>


            <div>
                <img src={`/${post}.jpg`} />
            </div>



            <div className='flex flex-col px-3'>
                <section className='flex text-2xl gap-4 mt-2 w-full'>
                    <button><AiOutlineHeart /></button>
                    <button><BsChat className='text-xl'/></button>
                    <button><IoPaperPlaneOutline className='text-xl'/></button>
                    <button className='grow'><BsBookmark className='float-right'/></button>
                </section>
                <section className=' text-sm gap-4 mt-2 font-medium'>
                    230,449 likes
                </section>
                <section className=' text-sm gap-4 mt-2 font-light text-gray-400'>
                    View all 316 comments
                </section>
                <section className=' text-[10px] gap-4 mt-1 font-normal text-gray-400'>
                    2 HOURS AGO
                </section>
            </div>
        </div>
    )
}

export default Post