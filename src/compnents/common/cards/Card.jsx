import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router'


const Card = ({ data }) => {
  const { id, background, profileImage, name, description, profession } = data
  // console.log(data);
  const navigate = useNavigate()



  return (
    <div className="main-card-container">
      <div className="background-img">
        <img className="background-img" src={background} alt="" />
      </div>


      <div className="profile-detail">
        <div className="profile-img">
          <img className='profile-img' src={profileImage} alt="" />
        </div>
        <h2 id='userName'>{name}</h2>
        <p id='profession'>{profession}</p>
        <p id='description'>{description.slice(0, 100)}...</p>
        <div className="icon">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="btn-div"><button onClick={() => navigate(`/movies/${id}`)} id='veiw-btn'>View Profile</button></div>
      </div>
    </div>





    // <div className="user-profile">
    //   <div className="card-image">
    //     <img id='background-img' src={background} alt="" />
    //     <img id='profile-img' src={profileImage} alt="" />
    //     <div className="card-detail">
    //       <h3 id='userName'>{name}</h3>
    //       <p id='profession'>{profession}</p>
    //       <p id='description'>{description}</p>
    //       <button onClick={()=>navigate(`/movies/${id}`)} id='veiw-btn'>View Profile</button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Card