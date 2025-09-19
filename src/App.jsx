import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/appLayout'
import Home from './pages/Home'
import PostList from './pages/PostList'
import { PostLoader } from './pages/PostList'
import PostComments from './pages/PostComments'
import Header from './components/Header'

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
        element: <PostList />,
        loader: PostLoader
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


// Older way
// function App() {
//   return (
//     <>
//       {/* <AppLayout /> */}

//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} ></Route >
//           <Route path="/posts" element={<PostList />} ></Route >
//           <Route path="/posts/:postId" element={<PostComments />} ></Route >
//         </Routes >
//       </BrowserRouter >
//     </>
//   )
// }

export default App
