import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';
import { Average } from '../../atoms/Average/Average'; 


const UsersListItem = ({deleteUser, userData: {average, name, attendance}}) => (
    <Wrapper>
        <Average value={average}>{average}</Average>
        <div>
            <p>{name}</p>
            <p>attendance: {attendance}%</p>
        </div>
        <DeleteButton onClick={() => deleteUser(name)}/>
    </Wrapper>
);

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
    }), 
};

export default UsersListItem;