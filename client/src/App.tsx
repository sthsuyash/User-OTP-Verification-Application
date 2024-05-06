import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import SuccessPage from './pages/SuccessPage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route index element={<HomePage />} />,
    <Route path='/success' element={<SuccessPage />} />,
    <Route path="*" element={<ErrorPage />} />
  ])
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
