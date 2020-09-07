import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from "./redux/redux-store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <Suspense fallback='loading'>
      <App />
    </Suspense>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
