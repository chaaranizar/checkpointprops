import React from 'react'
import PropTypes from "prop-types";
const Profile = (props) => {
    const handleName=(FullName) => alert (`My Name is ${props.FullName}`);
return (
    <div>
        <div>
        <p className='name'> {props.FullName}</p>
        <p>{props.Age}</p>
        <p>{props.Adress}</p>
        <p>{props.Bio}</p>
        <p>{props.Profession}</p>
        </div>
        {props.children}
        <button onClick={handleName}>Click me</button>
        
        
    </div>
)
}

export default Profile
Profile.defaultProps={Adress:'Cite Mileha Ariana Superieur 2080 Ariana'};
Profile.propTypes = {Bio:PropTypes-Number};