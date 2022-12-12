import styled from '@emotion/styled'
import { Button } from './Button'

export const ButtonPrimary = styled(Button)`
  background: var(--b-primary);
  color: var(--d-lightgray-text);
  transition: 0.5s ease;

  &:hover {
    background: var(--b-primary-hover);
  }
`
