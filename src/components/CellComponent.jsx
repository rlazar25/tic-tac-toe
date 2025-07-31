import React from 'react'

const CellComponent = (props) => {

  const {cell, id, handleClick} = props

  return (
    <div className='gameCell' id={id} onClick={() => handleClick(id)} >
      <div className={cell}></div>
    </div>
  )
}

export default CellComponent
