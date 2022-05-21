import React from 'react'

const SideBar = () => {
  return (
    <div className=' basis-1/3 grow pl-4'>
      <div className=' sticky top-[100px]'>
        {/* PROFILE  */}
        <div className='flex items-center gap-3 p-2 '>
          <div className='grow-0 rounded-full aspect-square overflow-hidden border'>
            <img className='object-center max-h-[4.7rem]' src={`/3.jpg`} />
          </div>
          <div className='grow'>
            <p className='text-sm text-gray-700 font-semibold'>patrkvlra</p>
            <p className='text-xs text-gray-400'>Patrick Valera</p>
          </div>
          <div>
            <button className=' font-semibold text-sm text-blue-400'>Switch</button>
          </div>
        </div>
        {/* SEPARATOR */}
        <div className='flex my-3'>
          <p className='grow text-sm text-gray-400 font-semibold '>Suggestions For You</p>
          <button className=' font-semibold text-xs text-gray-700'>See All</button>
        </div>
        {/* SUGGESTIONS LIST */}
        {[1, 2, 3, 4, 5].map((card) => <Card user={card} key={card} />)}
        {/* FOOTER */}
        <footer className='flex flex-wrap mt-4 p-2 w-[90%]'>
          {['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Top Accounts', 'Hashtags', 'Language'].map(content =>
            <li key={content} className="list-none text-[12px]  text-gray-400 opacity-60 ">
              <a className="after:content-['\B7'] after:px-[2px]">{content}</a>
            </li>
          )}
          <div className='text-[12px]  text-gray-400 opacity-60 mt-4'>
            <span>&copy;</span> 2022 INSTAGRAM FROM META
          </div>
        </footer>
      </div>
    </div>
  )
}

export default SideBar

const Card = ({ user }) => {
  return (
    <div className='flex items-center gap-3 px-2 mt-3 '>
      <div className='grow-0 rounded-full aspect-square overflow-hidden'>
        <img className='object-center max-h-9' src={`/1.jpg`} />
      </div>
      <div className='grow'>
        <p className='text-sm text-gray-700 font-semibold'>kinomesrose</p>
        <p className='text-xs text-gray-400'>Followed by chaambs_ +</p>
      </div>
      <div>
        <button className=' font-semibold text-xs text-blue-400'>Follow</button>
      </div>
    </div>
  )
}