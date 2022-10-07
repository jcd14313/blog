// Lib
import React from 'react'

// Context
import { useMainContext } from '../../context/MainContext'

// Components
import Comment from './comment'

// Types
import { CommentTypes } from '../../types'

// Styles
import * as SC from './styled'

const CommentList = () => {
  const { commentItems, propsMessage } = useMainContext()
  console.log(`${propsMessage} CommentList`)

  return (
    <SC.CommentContainer data-testid="comment-list-wrap">
      <SC.Sub>{commentItems.length} comments</SC.Sub>
      {commentItems.map((item: CommentTypes) => (
        <Comment {...item} key={item.id} />
      ))}
    </SC.CommentContainer>
  )
}

export default CommentList
