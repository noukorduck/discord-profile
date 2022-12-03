import styled from '@emotion/styled'

export const MainStyled = styled.html`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
    /* Fonts */

    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Open Sans', sans-serif;

    /* Dark */

    --d-lightgray: #36393f;
    --d-gray: #2f3136;
    --d-darkgray: #202225;
    --d-lightgray-text: #dcddde;
    --d-gray-text: #8e9297;

    /* Buttons */

    --b-primary: #5865f2;
    --b-primary-hover: #4752c4;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-track {
    border-radius: 99rem;
    background: var(--d-darkgray);
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-primary);
    background: var(--d-lightgray);
  }

  * {
    box-sizing: border-box;
  }
`