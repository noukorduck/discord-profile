import styled from '@emotion/styled'

export const SideStyled = styled.div`
  .settings {
    margin: 35px;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .lang {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .lang-toggle {
    display: flex;
    background: none;
    align-items: center;
    justify-content: center;
    height: 36px;
    gap: 5px;
    outline: none;
    border: none;
    padding: 5px;
    border-radius: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
    color: #dbdcdd;
    background: rgba(255, 255, 255, 0.1);
    transition: 0.2s ease;

    & h4 {
      font-weight: 800;
    }
  }

  .toggle {
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

  .languages {
    margin-top: 85px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-family: var(--font-primary);
    background: var(--t-background);
    letter-spacing: 0.25px;
    color: var(--t-color);
    font-size: 0.75rem;
    padding: 5px 10px;
    z-index: 1;

    &:after {
      transform: translateX(-50%) rotateZ(45deg);
      background: var(--t-background);
      position: absolute;
      content: '';
      width: 15px;
      height: 15px;
      left: 50%;
      top: -5px;
      z-index: -1;
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

    .social {
      display: flex;
      flex-direction: row;
    }

    .top {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: var(--d-lightgray-text);

      h1 {
        font-family: var(--font-secondary);
        font-weight: 400;
      }

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
