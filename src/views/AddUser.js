import React, { useState, useContext } from 'react';
import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import UsersProvider from '../providers/UsersProvider';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
  };


const AddUser = (ctx) => {

    const [formValues, setFormValues] = useState(initialFormState);
    const { handleAddUser } = useContext(UsersProvider)


    const handleInputChange = (e) => {
        setFormValues ({
            ...formValues,
            [e.target.name]: e.target.value,   
        })
    }

    const handleSubmitUser = (e) => {
        e.preventDefault();
        handleAddUser(formValues);
        setFormValues (initialFormState);
    }
  

    return(   
        <ViewWrapper as="form" onSubmit={handleSubmitUser}>
            {console.log(ctx)}
            <h1>Add new student</h1>
            <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}/>
            <FormField label="Attendance" id="attendance" name="attendance"value={formValues.attendance} onChange={handleInputChange} />
            <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange}/>
            <Button type="submit">Add</Button>
         </ViewWrapper>
       
    );
}

export default AddUser;