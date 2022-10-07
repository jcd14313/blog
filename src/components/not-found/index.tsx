// Lib
import React from 'react'

// Context
import { useMainContext } from '../../context/MainContext'

// Styles
import { Container } from '../../globalStyles'
import * as SC from './styled'

export default function () {
  const { propsMessage } = useMainContext()
  console.log(`${propsMessage} NotFound`)

  return (
    <Container>
      <SC.Heading> 404 Not Found</SC.Heading>
    </Container>
  )
}
