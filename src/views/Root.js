import React, { useState } from 'react';
import { users as usersData} from '../data/users';
import UsersList from '../components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme'
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from '../components/organisms/Form/Form';
import { Menu } from '../components/organisms/Menu/Menu.styles';


const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};


const Root = () => {
  

  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
      const filteredUsers = users.filter(user => user.name !== name);
      setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
      setFormValues ({
          ...formValues,
          [e.target.name]: e.target.value,   
      })
  }

  const handleAddUser = (e) => {
      e.preventDefault();
      const newUser = {
          name: formValues.name,
          attendance: formValues.attendance,
          average: formValues.average,
      }

      setUsers([
          newUser,
          ...users
      ]);
      setFormValues (initialFormState)
  }

   return (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
          <Menu>
            <Link to="/" className="menuLink">Home</Link>
            <Link to="/add-user" className="menuLink">Add user</Link>
          </Menu>
        <Routes>
          <Route path="/" element={<UsersList deleteUser={deleteUser} users={users}/>}/>
          <Route path="/add-user" element={<Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange}/>} />
        </Routes>
      </Wrapper>
    </ThemeProvider>
  </Router>
);
};

export default Root;