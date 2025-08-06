import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
// redux
import { Provider } from 'react-redux'
import store from './store/store.js'
// react-router
import { createBrowserRouter, RouterProvider } from 'react-router'
// pages
import HomePage from './pages/HomePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import GamePage from './pages/GamePage.jsx'
import EditPage from './pages/EditPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/gamePage',
        element: <GamePage />
      },
      {
        path: '/editPage',
        element: <EditPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
