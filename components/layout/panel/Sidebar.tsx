import { faClose, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StructureVersion } from '../../utilities/Structure'

import { en, gr } from '../../../translations'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { SideStyled } from './styles'

import { Socials } from '../../../modules/data/Socials'
import { SocialLink } from '../../common/SocialLink'

function Sidebar() {
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(false)

  const router = useRouter()
  const { locale } = router

  const lang = locale === 'en' ? en : gr

  return (
    <>
      <SideStyled>
        <div className="settings">
          <button
            className="toggle"
            onClick={() => {
              setOpen(!open)
            }}
          >
            <FontAwesomeIcon
              color="#dcddde"
              icon={faLayerGroup}
              fontSize={24}
            />
          </button>
        </div>
        <div className={`panel ${open ? 'visible' : 'hidden'}`}>
          <div className="top">
            <h1>{lang.paneltitle}</h1>
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

// <div className="lang">
// <button
// className="lang-toggle"
// onClick={() => {
//  setDrop(!drop)
// }}
// >
// <img src={`./static/lang/${locale}.svg`} width="24px" />
// <h4>{lang.language}</h4>
// </button>
// <div className={`languages ${drop ? 'visible' : 'hidden'}`}>
// <div className="languages">
//  {Languages.map((Language) => (
//    <LanguageLink
//      name={Language.name}
//      language={Language.language}
//    />
//  ))}
// </div>
// </div>
// </div>
