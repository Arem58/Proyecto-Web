import React from 'react';
import {createRoot} from 'react-dom/client';

// import App components
import App from './components/app/App'

const container = document.getElementById( 'root' )
const root = createRoot(container) 

// compile App component in `#app` HTML element
root.render(<App />)
