// Lib
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useParams } from 'react-router-dom'

// Context
import { useMainContext } from '../../context/MainContext'

// Components
import CommentList from '../../components/comment-list'
import { randomDate } from '../../utils'

// Types
import { PostTypes } from '../../types'

// Image
import userImage from '../../assets/images/avatar1.png'

// Styles
import { Container } from '../../globalStyles'
import * as SC from './styled'

const SinglePostPage = () => {
  const [post, setPost] = useState<PostTypes | null>()
  const [loading, setLoading] = useState<boolean>(true)
  let { id } = useParams()
  const { getPostById, postItems, fetchComments, propsMessage } =
    useMainContext()
  console.log(`${propsMessage} SinglePostPage`)

  useEffect(() => {
    if (id) {
      const post = getPostById(id)
      setPost(post)
      setLoading(false)
    }
  }, [postItems])

  useEffect(() => {
    if (post) {
      fetchComments(post.id)
    }
  }, [post])

  if (loading || post === undefined)
    return (
      <Container>
        <SC.Loading>loading....</SC.Loading>
      </Container>
    )

  if (post === null)
    return (
      <Container>
        <SC.Heading> Sorry! Post not found </SC.Heading>
      </Container>
    )

  const { title, body, userId } = post as PostTypes
  const datePosted = moment(randomDate()).format('MMMM Do YYYY, h:mm:ss a')
  return (
    <Container>
      <SC.Wrapper>
        <SC.UserInfo>
          <SC.Avatar src={userImage} alt="avatar" />
          <SC.Name>User-{userId}</SC.Name>
          <SC.Published>Shared publicly - {datePosted}</SC.Published>
        </SC.UserInfo>
        <SC.Content>
          <SC.Title>{title}</SC.Title>
          <SC.Desc>{body}</SC.Desc>
        </SC.Content>
        <CommentList />
      </SC.Wrapper>
    </Container>
  )
}

export default SinglePostPage
