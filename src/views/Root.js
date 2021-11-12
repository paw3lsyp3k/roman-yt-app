import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme'
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainTemplate from '../templates/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import UsersProvider from '../providers/UsersProvider';




const Root = () => {
  
   return (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <UsersProvider>
          <Wrapper>
          <Routes>
              <Route path="/" element={
                <Dashboard />
              }/>
              <Route path="/add-user" element={
                <AddUser/>
              }/>
            </Routes>
          </Wrapper>
        </UsersProvider>
      </MainTemplate>
    </ThemeProvider>
  </Router>
);
};

export default Root;