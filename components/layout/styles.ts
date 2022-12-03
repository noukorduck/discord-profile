import styled from '@emotion/styled'

export const SideStyled = styled.div`
  .toggle {
    margin: 15px;
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
      background: rgba(255, 255, 255, 0.1)
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
    background: var(--d-darkgray);
    transition: transform 0.5s ease;

    .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: #dcddde;

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
          background: rgba(255, 255, 255, 0.1)
        }
      }
    }
  }

  .panel.visible {
    transform: translateX(0)
  }

  .panel.hidden {
    transform: translateX(-100%)
  }

  @media (max-width: 800px) {
    .panel {
      width: 100%;
    }
  }
`
