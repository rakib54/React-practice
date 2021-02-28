import React, { useState } from 'react';
import './Profile.css'
import profiles from '../../Data/data.json'
import SingleProfile from '../SingleProfile/SingleProfile'
import Cart from '../Cart/Cart';

const Profile = () => {
    const [AddProfile , setProfile] = useState([])
    
    const handleClick = (profile) =>{
        const newFriend =[...AddProfile, profile]
        setProfile(newFriend);
    } 

    return (
        <div className="profile-container">
           <div className="profile-info">
            
            {
                profiles.map(profile =><SingleProfile profile ={profile} handleClick={handleClick}></SingleProfile>)
            }
            </div>
            <div className="profile-cart">
                <Cart AddProfile ={AddProfile}></Cart>
            </div> 
        </div>
    );
};

export default Profile;