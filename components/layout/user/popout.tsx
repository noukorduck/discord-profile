import React from 'react'
import styled from '@emotion/styled'

type Props = {
  profileStatus?: string
  profileImage?: string
  profileAbout?: string
  profileName?: string
  profileTag?: number
  bannerImage?: string
  bannerColor?: string
  // children?: ReactNode
}

export const Popout = ({
  profileStatus,
  profileImage,
  profileAbout,
  profileName,
  profileTag,
  bannerImage,
  bannerColor,
}: Props) => (
  <>
    <PopoutStyled>
      <div className="popout">
        <div className="banner"></div>
      </div>
    </PopoutStyled>
  </>
)

export const PopoutStyled = styled.div``
