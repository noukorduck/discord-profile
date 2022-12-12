import {
  useFloating,
  useHover,
  useInteractions,
  safePolygon,
} from '@floating-ui/react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import { useState } from 'react'

export interface Social {
  tooltip: string
  href: string
  icon: IconDefinition
  size?: number
}

const SocialStyled = styled.div`
  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  svg {
    padding: 5px;
    border-radius: 5px;
  }

  div.tooltip {
    border-radius: 5px;
    font-family: var(--font-primary);
    background: var(--t-background);
    letter-spacing: 0.25px;
    color: var(--t-color);
    font-size: 0.75rem;
    font-weight: 400;
    padding: 5px 10px;
    margin-bottom: 50px;
    z-index: 1;

    &:after {
      transform: translateX(-50%) rotateZ(45deg);
      background: var(--t-background);
      position: absolute;
      content: '';
      width: 15px;
      height: 15px;
      left: 50%;
      top: 17px;
      z-index: -1;
    }
  }

  &:hover {
    svg {
      color: #dbdcdd;
      background: #32353b;
    }
  }
`

export function SocialLink({ tooltip, href, icon, size }: Social) {
  const [open, setOpen] = useState(false)

  const { context, x, y, reference, floating } = useFloating({
    placement: 'top',
    open,
    onOpenChange: setOpen,
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      mouseOnly: true,
      handleClose: safePolygon(),
    }),
  ])

  return (
    <>
      <SocialStyled>
        <a
          href={href}
          aria-label={tooltip}
          target="_blank"
          {...getReferenceProps({ ref: reference })}
        >
          <FontAwesomeIcon color="#7c7c7c" icon={icon} fontSize={size} />
        </a>
        {open && (
          <>
            <div
              {...getFloatingProps({
                ref: floating,
                style: {
                  position: 'absolute',
                  offset: y ?? 8,
                  top: y ?? 0,
                  left: x ?? 0,
                },
              })}
              className="tooltip"
              ref={floating}
            >
              {tooltip}
            </div>
          </>
        )}
      </SocialStyled>
    </>
  )
}
