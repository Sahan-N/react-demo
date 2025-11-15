import profilePic from './assets/profile.jpg'
function Card(){

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-name'>Sahan</h2>
            <p className='card-description'>I make software and play games  </p>

        </div>
    );

}

export default Card