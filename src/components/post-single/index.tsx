// Lib
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

// Context
import { useMainContext } from '../../context/MainContext'

// Components
import { randomDate } from '../../utils'

// Types
import { PostTypes } from '../../types'
import * as SC from './styled'

const PostSingle = ({ id, title, body }: PostTypes) => {
  const datePosted = moment(randomDate()).format('MMM Do YY')
  const { propsMessage } = useMainContext()
  console.log(`${propsMessage} PostSingle`)

  return (
    <SC.Card data-testid="single-post">
      <Link to={`/post/${id}`} target="_blank">
        <SC.Title>{title}</SC.Title>
        <SC.Desc>{body}</SC.Desc>
        <SC.Details>Posted by {`user-${id} on ${datePosted}`}</SC.Details>
      </Link>
    </SC.Card>
  )
}

export default PostSingle
