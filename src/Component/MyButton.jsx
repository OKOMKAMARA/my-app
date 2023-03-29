import React from 'react'

const MyButton = ({count, onClick}) => {
  return (
    <button>
      Click {count} {onClick} times
    </button>
  )
}

export default MyButton