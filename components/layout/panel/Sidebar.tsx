import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { StructureVersion } from '../../utilities/Structure'
import React, { useState } from 'react'
import { SideStyled } from './styles'

import { SocialLink } from '../../common/SocialLink'
import { Socials } from '../../../modules/data/Socials'

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
          <FontAwesomeIcon color="#dcddde" icon={faLayerGroup} fontSize={24} />
        </button>
        <div className={`panel ${open ? 'visible' : 'hidden'}`}>
          <div className="top">
            <h1>PANEL</h1>
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
          <div className="social">
            {Socials.map((social) => (
              <SocialLink
                key={'social-' + social.tooltip}
                icon={social.icon}
                href={social.href}
                size={24}
                tooltip={social.tooltip}
              />
            ))}
          </div>
          <StructureVersion />
        </div>
      </SideStyled>
    </>
  )
}

export default Sidebar
