import React from 'react';
const UserProfile =  () => {
    return(
        <UserContext.Consumer>
           <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        </UserContext.Consumer>
    );
};

export default UserProfile;