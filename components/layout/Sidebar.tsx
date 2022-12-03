import React, { useState } from 'react'
import { SideStyled } from './styles'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SideStyled>
        <button
          className="toggle"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <FontAwesomeIcon color="#dcddde" icon={faBars} fontSize={24} />
        </button>
        <div className={`panel ${open ? 'visible' : 'hidden'}`}>
          <div className="top">
            <h1>MENU</h1>
            <button
              className="close"
              onClick={() => {
                setOpen(!open)
              }}
            >
              <FontAwesomeIcon color="#dcddde" icon={faClose} fontSize={24} />
            </button>
          </div>
          <div className="content"></div>
        </div>
      </SideStyled>
    </>
  )
}

export default Sidebar
