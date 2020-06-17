import React from 'react'

function Avatar(props) {
  return(
    <div 
      className='avatar'
      style={{
        width: props.size,
        height: props.size
      }}
    > 
      <img src={props.image}/>
    </div>
  )
}

export default Avatar