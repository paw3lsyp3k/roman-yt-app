import React from 'react';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import PropTypes from 'prop-types'
import { UserShape } from '../../../types';


const UsersList = ({users, deleteUser}) => {
    return(
        <>
            <h1>Users List</h1>
                <ul>
                    {
                users.map( (userData, i) => (
                    <UsersListItem deleteUser={deleteUser} index={i} key={userData.name}  userData={userData}/>   
                    ))
                    }
                </ul>
        </>
    );
}


UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
    deleteUser: PropTypes.func,
  };

export default UsersList;