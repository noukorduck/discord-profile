import React, { ReactNode } from 'react'

import Sidebar from './layout/Sidebar'

type Props = {
  children?: ReactNode
}

const Base = ({ children }: Props) => (
  <>
    <Sidebar />
    {children}
  </>
)

export default Base