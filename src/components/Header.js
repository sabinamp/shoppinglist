import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #004F98;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  pointer-events: none;
  font-size: 1.4rem;
`;

const Header=({title})=> {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
    </HeaderWrapper>
  );
}

export default Header;