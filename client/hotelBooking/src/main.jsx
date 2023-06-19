import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import {RecoilRoot} from "recoil"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'



const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

     <RecoilRoot>
        < Router >
        <QueryClientProvider client={queryClient}>
        <RecoilRoot>
              <App /> 
          </RecoilRoot>
         </QueryClientProvider>
        </Router>
      </RecoilRoot>
  </React.StrictMode>,
)
