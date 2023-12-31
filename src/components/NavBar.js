import styled from 'styled-components';
import Button from './Button';

const NavBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #B0E0E6;
`;


const Title = styled.h2`
  text-align: center;
  flex-basis: 60%;
  &:first-child {
    margin-left: 20%;
  }
  &:last-child {
    margin-right: 20%;
  }
`;


const NavBarButton = styled(Button)`
  margin: 1rem 5%;
`;


const NavBar=({ goBack, title, openForm = false })=>{
  return (
    <NavBarWrapper>
      {goBack && <NavBarButton onClick={goBack}>{`< Go Back`}</NavBarButton>}
      <Title>{title}</Title>
      {openForm && (
        <NavBarButton onClick={openForm}>{`+ Add Item`}</NavBarButton>
      )}
    </NavBarWrapper>
  );
}

export default NavBar;