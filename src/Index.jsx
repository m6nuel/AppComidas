import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import { RecipesProviders } from './context/context'

createRoot(document.getElementById('app')).render(
  <RecipesProviders>
    <App />
  </RecipesProviders>
)
