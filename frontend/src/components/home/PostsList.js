import React from 'react'
import Post from './Post'

const PostsList = () => {
  return (
    <div className='basis-2/3 '>
      {[1,2,3].map(post=><Post key={post} post={post}/>)}
    </div>
  )
}

export default PostsList