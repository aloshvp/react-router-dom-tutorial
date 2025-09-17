import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/appLayout'
import Home from './pages/Home'
import PostList from './pages/PostList'
import PostComments from './pages/PostComments'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/posts",
        element: <PostList />
      },
      {
        path: "/posts/:postId",
        element: <PostComments />
      },
    ]
  }
])

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
