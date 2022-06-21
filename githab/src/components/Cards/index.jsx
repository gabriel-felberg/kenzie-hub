import React from 'react'
import { LiCard } from './style'

const Card = ({setEditModal}) => {
  function openEditditAddModal(){
    setEditModal(true)
  }
  return (
    <LiCard g="300px" onClick={()=>openEditditAddModal()}>
        <div>nome da tec</div>
        <span>tipo de facilidade</span>
    </LiCard>
  )
}

export default Card