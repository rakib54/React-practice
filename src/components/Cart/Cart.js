import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    console.log(props);
    const AddProfile =props.AddProfile
    const Total = AddProfile.reduce((total, person) =>total +person.salary,0)
    
    // let Total =0;
    // for (let i=0; i< AddProfile.length; i++) {
    //     const person = AddProfile[i];
    //     Total = Total + person.salary
        
    // }

    return (
        <div className="friend-cart">
            <h4><button><FontAwesomeIcon icon={faUserPlus}/></button>{" "}{AddProfile.length}</h4>
            <h4>Total Salary:{Total}</h4>

        </div>
    );
};

export default Cart;