import styled from '@emotion/styled'

export interface Language {
  name: string
  language: string
}

const LanguageStyled = styled.div`
  div {
    display: flex;
    flex-direction: row;
    gap: 5px;
    text-transform: uppercase;
    color: var(--d-lightgray-text);
  }

  h4 {
    font-weight: 700;
    font-size: 0.75rem;
  }

  a {
    text-decoration: none;
  }
`

//
//
//
//  Yeah, let's not use this for now..
//
//
//

export const LanguageLink = ({ name, language }: Language) => (
  <LanguageStyled>
      <div>
        <img src={`./static/lang/${language}.svg`} width="24px" />
        <h4>{name}</h4>
      </div>
  </LanguageStyled>
)
