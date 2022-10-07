import React, { ReactNode, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainProvider } from '../../context/MainContext'
import { render, cleanup, screen } from '@testing-library/react'
import CommentList from './index'

interface WrapperProps {
  children: ReactNode
}

const RouterWrapper = ({ children }: WrapperProps) => (
  <MainProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </MainProvider>
)

beforeEach(() => {
  render(<CommentList />, { wrapper: RouterWrapper })
})

afterEach(() => {
  cleanup()
})

test('check if wrap by layout component', () => {
  expect(screen.getByTestId('comment-list-wrap')).toBeInTheDocument()
})
