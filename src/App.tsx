import './App.css'

import type { FC } from 'react'
import { Link } from 'react-router-dom'

const App: FC = () => {
  return (
    <div className="App">
      Homepage
      <nav>
        <Link to="/sign_in">Sign In</Link> |{' '}
        <Link to="/sign_out">Sign Out</Link>
      </nav>
    </div>
  )
}

export default App
