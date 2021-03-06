import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './containers/App/App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
