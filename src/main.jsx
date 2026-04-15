import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/routes.jsx'
import FriendsTimelineProvider from './components/context/FriendsTimelineProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsTimelineProvider>
      <RouterProvider router={router} />
    </FriendsTimelineProvider>
     
  </StrictMode>,
)
