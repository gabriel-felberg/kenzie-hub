import React from 'react'
import { LiCard } from './style'

const Card = ({setEditModal, elem}) => {
  function openEditditAddModal(){
    setEditModal(true)
  }
  return (
    <LiCard g="48%" onClick={()=>openEditditAddModal()}>
        <div>{elem.title}</div>
        <span>{elem.status}</span>
        <button>excluir</button>
    </LiCard>
  )
}

export default Card