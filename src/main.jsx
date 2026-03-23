import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-muted min-h-screen  sm:p-12'>
      <div className='sm:max-w-90 mx-auto bg-white min-h-screen sm:min-h-211 '>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </div>
  </StrictMode>,
);
