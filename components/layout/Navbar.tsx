import React, { useState } from 'react'
import { NavStyled } from './styles'
import Link from 'next/link'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <NavStyled>
        <nav>
          <div className="content">
            <div
              className={`toggle ${open ? 'enabled' : 'disabled'}`}
              onClick={() => {
                setOpen(!open)
              }}
            ></div>
          </div>
        </nav>
      </NavStyled>
    </>
  )
}

export default Navbar
