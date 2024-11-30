import { useRoutes } from 'react-router'
import Layout from './layouts'
import Home from './pages/home'
import { path } from './routers'

function App() {
  const element = useRoutes([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: path.home,
          element: <Home />
        }
      ]
    }
  ])

  return element
}

export default App
