import React from 'react';
import { users } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';

const UsersList = () => (
    <Wrapper>
        <ul>
            {users.map( (userData, i) => (
             <UsersListItem  index={i} key={userData.name}  userData={userData}/>   
            ))}
        </ul>
    </Wrapper>
);

export default UsersList;