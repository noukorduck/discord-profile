import React, { ReactNode } from 'react'

import Navbar from './layout/Navbar'

type Props = {
  children?: ReactNode
}

const Base = ({ children }: Props) => (
  <>
    <Navbar />
    {children}
  </>
)

export default Base
