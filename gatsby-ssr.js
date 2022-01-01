import React from 'react'
import { Global } from '@emotion/react'

import './src/fonts/fonts.css'
import globalStyles from './src/styles/globalStyles'

const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Global styles={globalStyles} />
      {element}
    </>
  )
}

export { wrapPageElement }
