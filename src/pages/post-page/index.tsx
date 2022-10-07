// Lib
import React, { useState } from 'react'

// Components
import FormInput from '../../components/form-input'
import PostSingle from '../../components/post-single'
import { useMainContext } from '../../context/MainContext'

// Types
import { PostTypes } from '../../types'

// Styles
import { Container } from '../../globalStyles'
import * as SC from './styled'

const PostPage = () => {
  const [keywords, setKeywords] = useState<string>()
  const { postItems, propsMessage } = useMainContext()
  console.log(`${propsMessage} PostPage`)

  const filterByTitle = (postItems: PostTypes[]) => {
    if (keywords && postItems) {
      return postItems.filter((item: PostTypes) => {
        const pattern = new RegExp(keywords, 'i')
        return pattern.test(item.title)
      })
    }

    return postItems
  }

  return (
    <Container>
      <FormInput
        data-testid="search-input"
        name="search"
        className="search"
        placeholder="filter by title"
        handleChange={(v) => setKeywords(v)}
      />
      <SC.InnerCon>
        {filterByTitle(postItems).map((post: PostTypes) => (
          <PostSingle {...post} key={post.id} />
        ))}
      </SC.InnerCon>
    </Container>
  )
}

export default PostPage
