// Lib
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Context
import { MainProvider } from './context/MainContext'

// Components
import NotFound from './components/not-found'
import Layout from './components/layout'

// Pages
import SinglePostPage from './pages/single-post-page'
import PostPage from './pages/post-page'

// Styles
import GlobalStyle from './globalStyles'

function App() {
  return (
    <MainProvider>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </MainProvider>
  )
}

export default App
