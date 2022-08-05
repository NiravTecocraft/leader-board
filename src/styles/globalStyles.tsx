import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap');

  body{
    font-family: 'Poppins', sans-serif;
    height: 100%;
  }
  html{
    height: 100%;
  }
  #root {
      height: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  p , h6 , h3{
    margin: 0;
  }

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;
