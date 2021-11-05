import React from 'react';
import { users as usersData} from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
import FormField from '../../molecules/FormField/FormField';
import { Button } from '../../atoms/Button/Button';


const UsersList = ({users, deleteUser}) => {
    return(
        <>
            <Wrapper>
            <h1>Users List</h1>
                <ul>
                    {
                users.map( (userData, i) => (
                    <UsersListItem deleteUser={deleteUser} index={i} key={userData.name}  userData={userData}/>   
                    ))
                    }
                </ul>
            </Wrapper>
        </>
    );
}



export default UsersList;