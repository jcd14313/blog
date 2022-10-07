// Lib
import React from 'react'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

// Const
import { API_URL } from '../constants'

// Types
import { PostTypes, CommentTypes } from '../types'

interface MainProviderProps {
  children: ReactNode
}

interface MainContextProps {
  postItems: PostTypes[]
  fetchPost: () => void
  getPostById: (id: string) => PostTypes | null | undefined
  commentItems: CommentTypes[]
  fetchComments: (id: string) => void
  propsMessage: string
}

const MainContext = createContext({} as MainContextProps)

export function useMainContext() {
  return useContext(MainContext)
}

export function MainProvider({ children }: MainProviderProps) {
  const [postItems, setPostItems] = useState<PostTypes[]>([])
  const [commentItems, setCommentItems] = useState<CommentTypes[]>([])
  const propsMessage = 'Hello from'

  const fetchPost = async () => {
    const res = await fetch(`${API_URL}/posts?_limit=10`)
    const data = await res.json()
    setPostItems(data)
  }

  const getPostById = (id: string) => {
    if (!postItems || postItems.length === 0) return

    const post = postItems.find((item: PostTypes) => String(item.id) === id)

    if (!post) return null

    return post
  }

  const fetchComments = async (id: string) => {
    const res = await fetch(`${API_URL}/posts/${id}/comments`)
    const data = await res.json()
    setCommentItems(data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <MainContext.Provider
      value={{
        postItems,
        fetchPost,
        getPostById,
        commentItems,
        fetchComments,
        propsMessage,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
