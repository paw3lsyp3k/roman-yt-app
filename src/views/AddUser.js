import React from 'react';
import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import PropTypes from 'prop-types'
import { UserShape } from '../types';


const AddUser = ({handleAddUser, formValues, handleInputChange}) => {

    return(
        <>
            <ViewWrapper as="form" onSubmit={handleAddUser}>
                <h1>Add new student</h1>
                <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}/>
                <FormField label="Attendance" id="attendance" name="attendance"value={formValues.attendance} onChange={handleInputChange} />
                <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange}/>
                <Button type="submit">Add</Button>
            </ViewWrapper>
        </>
    );
}

AddUser.propTypes = {
    handleAddUser: PropTypes.func.isRequired,
    formValues: PropTypes.shape(UserShape),
    handleInputChange: PropTypes.func.isRequired,
  };

export default AddUser;