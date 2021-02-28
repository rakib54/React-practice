import React from 'react';
import './SingleProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUserPlus } from '@fortawesome/free-solid-svg-icons'

const SingleProfile = (props) => {
    const {name,image,email,gender,salary} = props.profile // object destructuring
    return (
        <div className="single-profile">
            
            <div className="profile-img">
                <img src={image} alt=""/>
            </div>
            <div className="profileDetails">
                <h3>{name}</h3>
                
                <h5>Email:{email}</h5>
                
                <h5>Gender:{gender}</h5>
                <h5>Salary :{salary}</h5>
                <br/>
                <button className ="add-button" onClick={() =>props.handleClick(props.profile)}>
                    <FontAwesomeIcon icon={faUserPlus}/>Add me</button>
            </div>

        </div>
    );
};

export default SingleProfile;