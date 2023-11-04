import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.js'
import './app/index.css'
import { BrowserRouter } from 'react-router-dom'
import store from '@/app/store/createStore/createStore.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
)
