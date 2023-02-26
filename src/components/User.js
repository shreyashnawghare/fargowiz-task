import React from 'react'
import './user.css'

 

const User = ({id,email,name,onDelete , city ,street , suite , zipcode}) => {

    const handleDelete = () => {

        onDelete(id);
    }
    
   

  

     

    return (
        <div className='container'>
            <div className="card_item" key="{user.id}">
            
            <div className="card_inner">
            {/* <span class="close-btn" onClick={handleDelete}>&times;</span> */}
            <img src={'image.png'} alt="" />
            <div className="userName">{name}</div>
            <div className="useUrl">{email}</div>.
            <div className="usercity">{city}</div>
           
            <div className="userstreet">{street}</div>
            <div className="usersuite">{suite}</div>
            <div className="userzipcode">{zipcode}</div>
            </div>

            <button className="seeMore" onClick={handleDelete}>Delete User</button>
            



         
               
               
           </div></div> 
       
    )
}

export default User
