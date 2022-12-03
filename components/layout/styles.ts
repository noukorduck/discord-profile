import styled from '@emotion/styled'

export const NavStyled = styled.div`
  & nav {
    position: fixed;
    top: 0;
    padding: 15px 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: 0.45s background ease;

    & .center {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 60%;
    }

    & .column {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }

    & .item {
      color: #bdbdbd;
      padding: 5px 15px;
      font-weight: 600;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      &:hover,
      &.active {
        color: #fff;
      }
    }

    & .download {
      outline: none;
      border: none;
      padding: 10px 25px;
      height: 50px;
      background: linear-gradient(132deg, rgba(90,164,206,1) 0%, rgba(35,117,138,1) 100%);
      color: white;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.95rem;
      text-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
      opacity: 0.8;
      transition: 0.25s ease;

      &:hover {
        opacity: 1
      }
    }

    & .toggle {
      position: absolute;
      width: 0px;
      height: 0px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      white-space: nowrap;
      cursor: pointer;
      visibility: hidden;

      span {
        border-radius: 5rem;
        position: relative;
        display: block;
        background: white;
        width: 27px;
        height: 3px;
        transition: 0.45s ease-in-out;
      }
    }

    & .enabled {
      span.top {
        transform: rotate(45deg) translate(5px, 10px);
      }

      span.middle {
        opacity: 0;
        transform: scaleX(0);
      }

      span.bottom {
        transform: rotate(-45deg) translate(5px, -10px);
      }
    }
  }

  @media (max-width: 800px) {
    & nav {
      padding: 10px 20px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.45);

      & .center {
        width: 90%;
      }

      & .links {
        visibility: hidden;
        opacity: 0;
        width: 0;

        a {
          width: 0;
          position: absolute;
        }
      }

      & .toggle {
        position: relative;
        width: 25px;
        height: 25px;
        visibility: visible;
      }
    }
  }
`
