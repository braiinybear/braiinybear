import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'
import Loader from './components/Loader.tsx'

const apiUrl = import.meta.env.VITE_API_URL
if (apiUrl) {
  setTimeout(() => {
    fetch(apiUrl + "videos", { keepalive: true }).catch(() => {})
  }, 100)

  if (import.meta.env.PROD) {
    setInterval(() => {
      fetch(apiUrl + "videos", { keepalive: true }).catch(() => {})
    }, 300000)
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>,
)
