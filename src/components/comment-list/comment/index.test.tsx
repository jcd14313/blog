import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainProvider } from '../../../context/MainContext'
import { render, cleanup, screen, waitFor } from '@testing-library/react'
import Comment from './index'

interface WrapperProps {
  children: ReactNode
}

const RouterWrapper = ({ children }: WrapperProps) => (
  <MainProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </MainProvider>
)

afterEach(() => {
  cleanup()
})

test('check comment component is rendering', () => {
  const data = {
    postId: '1',
    id: '1',
    name: 'Josh Santana',
    email: 'josh@gmail.com',
    body: 'Some random comment',
  }
  render(<Comment {...data} />, { wrapper: RouterWrapper })
  expect(screen.getByTestId('comment-card')).toBeInTheDocument()
})
