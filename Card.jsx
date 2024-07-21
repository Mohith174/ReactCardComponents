import profilePicture from './assets/IMG_6778.jpg'

function Card(){

    return(
        <div className = "card">
            <img className = "cardImg" src={profilePicture} alt="Picture of Me"/>
            <h2 className = "cardTitle" >Mohith Kodavati</h2>
            <p>I study Computer & Data Sciences</p>
        </div>
    );

}

export default Card