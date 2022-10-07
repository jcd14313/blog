export interface PostTypes {
  userId: string
  id: string
  title: string
  body: string
}

export interface CommentTypes {
  postId: string
  id: string
  name: string
  email: string
  body: string
}
