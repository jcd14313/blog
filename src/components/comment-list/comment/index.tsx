// Lib
import React from 'react'

// Context
import { useMainContext } from '../../../context/MainContext'

// Types
import { CommentTypes } from '../../../types'

// Image
import Avatar from '../../../assets/images/avatar5.png'

// Styles
import * as SC from './styled'

const Comment = ({ name, body }: CommentTypes) => {
  const { propsMessage } = useMainContext()
  console.log(`${propsMessage} Comment`)
  return (
    <SC.Card data-testid="comment-card">
      <SC.Avatar src={Avatar} alt="avatar" />
      <SC.Body>
        <SC.Name>{name}</SC.Name>
        <SC.Desc>{body}</SC.Desc>
      </SC.Body>
    </SC.Card>
  )
}

export default Comment
