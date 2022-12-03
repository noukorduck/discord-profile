import styled from '@emotion/styled'

export const SideStyled = styled.div`
  .toggle {
    margin: 35px;
    position: absolute;
    display: flex;
    background: none;
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
    }
  }

  .panel {
    display: flex;
    position: fixed;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
    padding: 25px;
    width: 400px;
    top: 0;
    left: 0;
    align-items: center;
    background: var(--d-darkgray);
    transition: transform 0.5s ease;

    .top {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: var(--d-lightgray-text);

      button {
        display: flex;
        background: none;
        height: 50px;
        width: 50px;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        border-radius: 5rem;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
        }
      }
    }
  }

  .panel.visible {
    transform: translateX(0);
  }

  .panel.hidden {
    transform: translateX(-100%);
  }

  @media (max-width: 800px) {
    .panel {
      width: 100%;
    }
  }
`
