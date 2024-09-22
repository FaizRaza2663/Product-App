import React from 'react'
import { useParams } from 'react-router';
import profileData from '../utils/profileData';
import './page.css';

const ProfileDetail = () => {
  // console.log(useParams())


  const { id } = useParams()


  const singleData = profileData.find((items) => {
    return items.id == id
  })


  console.log(singleData)

  const { description,profileImage,name,profession } = singleData
  console.log("image", profileImage)
  return (
    // <div style={{backgroundImage:`url(${profileImage})`}} className='bgImage'>

    // </div>
    <div className='users'>
      <div className='userImage'>
        <img className='user-img' src={profileImage} alt="" />
      </div>
      <div className='userdetail' >
        <h1>{name}</h1>
        <p className='pro'>{profession}</p>
        <p className='dec'>{description}</p>
        <div className='Social-link'>
          <img src="/assets/OtherImage/g10.svg" alt="" />
          <img src="/assets/OtherImage/instargram.com - png.svg" alt="" />
          <img src="/assets/OtherImage/LinkedIn svg.svg" alt="" />
          <img src="/assets/OtherImage/Twitter  svg.svg" alt="" />

        </div>
        <button className='but1'>Buy a me Coffee</button>
      </div>
    </div>
  )
}

export default ProfileDetail