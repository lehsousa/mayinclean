import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Importa o GTM
import TagManager from 'react-gtm-module'

// Configuração do GTM (substitua pelo seu ID real)
const tagManagerArgs = {
  gtmId: 'GTM-5SGCM4W9',
}

// Inicializa o GTM
TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
