import React from 'react'
import { css } from '@emotion/react'

import { lg, md, xl, xxl } from '../utils/breakpoints'

export const mainContainedStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  @media (min-width: ${md}) {
    max-width: ${md};
  }
  @media (min-width: ${lg}) {
    max-width: ${lg};
  }
  @media (min-width: ${xl}) {
    max-width: ${xl};
  }
  @media (min-width: ${xxl}) {
    max-width: ${xxl};
  }
`

const Contained: React.FC = ({ children }) => (
  <>
    <main css={mainContainedStyles}>{children}</main>
  </>
)

export default Contained
