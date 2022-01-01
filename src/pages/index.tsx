import React from 'react'
import { css } from '@emotion/react'

import LogoHorizontalPlata from '@components/logos/HorizontalPlata'
import Contained from '@layouts/Contained'
import { md } from '@utils/breakpoints'

const logoStyles = css`
  width: 90%;
  @media (min-width: ${md}) {
    max-width: 50%;
  }
`

const IndexPage = () => {
  return (
    <Contained>
      <LogoHorizontalPlata css={logoStyles} />
      <h1 css={{ fontSize: '40px' }}>Próxim<span css={{ color: '#009FE3' }}>a</span>mente</h1>
    </Contained>
  )
}

export default IndexPage
