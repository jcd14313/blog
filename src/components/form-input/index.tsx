// Lib
import React from 'react'

// Context
import { useMainContext } from '../../context/MainContext'

// Styles
import * as SC from './styled'

interface InputProps {
  className: string
  name: string
  handleChange: (v: string) => void
  placeholder?: string
  value?: string
}

const FormInput = ({
  handleChange,
  ...props
}: Partial<InputProps> & Required<Pick<InputProps, 'handleChange'>>) => {
  const { propsMessage } = useMainContext()
  console.log(`${propsMessage} FormInput`)

  return (
    <SC.Input
      {...props}
      onChange={(e) => {
        handleChange(e.target.value)
      }}
    />
  )
}

export default FormInput
