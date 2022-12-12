import React, { ReactNode } from 'react'
import { en, gr } from '../../translations'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import Head from 'next/head'
import { LanguageLink } from '../common/Language'

type Props = {
  title?: string
  description?: string
  color?: string
  children?: ReactNode
}

export const StructureHead = ({
  title = 'Discord Profiles',
  description = 'yes',
  children,
}: Props) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8" />
      <title>{title}</title>

      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />

      <meta content="" data-react-helmet="true" name="theme-color" />
    </Head>
    {children}
  </>
)

export const StructureStyled = styled.div`
  div {
    color: var(--d-gray-text);
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 0.75rem;
  }
`

export function StructureVersion({ children }: Props) {
  const router = useRouter()
  const { locale } = router

  const lang = locale === 'en' ? en : gr

  return (
    <>
      <StructureStyled>
        <div>
          {lang.version}: {process.env.NEXT_APP_VERSION}-
          {process.env.NEXT_APP_PROD}
        </div>
        {children}
      </StructureStyled>
    </>
  )
}
