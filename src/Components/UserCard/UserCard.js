import React from 'react'
import './UserCard.css'
function UserCard({user}) {
    return (
        <div class="card">
             <div class="container">
                <div className="col-1"> 
                    <div className="label" >
                    <label>Name :</label>
                    <h5>{user.name}</h5>
                    </div>
                
                    <div className="label" >
                    <label>Username :</label>
                    <h5>{user.username}</h5>
                    </div>
                
                    <div className="label" >
                    <label>Email :</label>
                    <h5>{user.email}</h5>
                    </div>
                    
                    <div className="label" >
                    <label>Phone :</label>
                    <h5>{user.phone}</h5> 
                    </div>
                  
                 </div>
                <div className="col-1">
                    <div className="label" >
                    <label>Street :</label>
                    <h5>{user.address.street}</h5>
                    </div>
                    <div className="label" >
                    <label>Suite :</label>
                    <h5>{user.address.suite}</h5>
                    </div>
                    <div className="label" >
                    <label>City :</label>
                    <h5>{user.address.city}</h5>
                    </div>
                    <div className="label" >
                    <label>Zipcode :</label>
                    <h5>{user.address.zipcode}</h5>
                </div>
               
                {/* <h5>{user.address.geo.lat}</h5>
                <h5>{user.address.geo.lng}</h5> */}
                </div>
                <div className="col-1">    
                    <div className="label" >
                    <label>Website :</label>
                    <h5 id="website">{user.website}</h5>
                    </div>
                    <div className="label" >
                    <label>Company :</label>
                    <h5>{user.company.name}</h5>
                    </div>
                    <div className="label" >
                    <label>CatchPhrase :</label>
                    <h5>{user.company.catchPhrase}</h5>
                    </div>
                    <div className="label" >
                    <label>BS :</label>
                    <h5>{user.company.bs}</h5>
                    </div>

                </div>
               
            </div>
        </div>
    )
}

export default UserCard
