import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';
import { Average } from '../../atoms/Average/Average'; 
import { UsersContext } from '../../../providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance }}) => {

    const { deleteUser } = useContext(UsersContext);

    return(
        <Wrapper>
            <Average value={average}>{average}</Average>
            <div>
                <p>{name}</p>
                <p>attendance: {attendance}%</p>
            </div>
            <DeleteButton onClick={() => deleteUser(name)}/>
        </Wrapper>
    )
    };

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
    }), 
};

export default UsersListItem;