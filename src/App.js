import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Lists from './pages/Lists';
import ListDetail from './pages/ListDetail';
import ListItemForm from './pages/ListItemForm';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  const saveNewListItemHandler=(newItem)=>{
    let listItems = { ...newItem, id: Math.random().toString() };
    //updateList(listId, listItems);
    //TO DO
}
  return (
    <>
    <GlobalStyle />
    <AppWrapper>
      <BrowserRouter>
        <Header title="Personal Shopping List"/>
        <Routes>
          <Route path='/' element={<Lists />} />
          <Route path='/list/:listId/new' element={<ListItemForm onSubmitItemForm={saveNewListItemHandler}/>} />
          <Route path='/list/:listId' element={<ListDetail />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  </>
  );
}

export default App;
