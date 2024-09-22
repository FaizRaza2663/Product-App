import React from 'react'
import profileData from '../utils/profileData'
import Card from '../compnents/common/cards/Card'
import Header from '../compnents/header/Header'

const Profile = () => {
  return (
    <>
    <Header />
    <div className="cards-parrent">
      {profileData.map((item,index)=>{
        return(
          <Card key={index} data ={item}/>
        )
      })}
    </div>
    </>
  )
}

export default Profile