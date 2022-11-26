import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import { App } from './App'
// import { Lines } from 'react-preloaders';
// import {Sugar} from 'react-preloaders';
import {Planets} from 'react-preloaders';

const container = document.getElementById('root');
const root = createRoot(container);

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>Maria Vouchara 📷 </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '9px' }}>Deployed by Broccoli 🥦</div>
    </div>
  )
}

root.render(
  <>
      <App />
      <Planets 
      color={'#f7f7f7'}
      background="#151515" 
      time={4000}/>
        
  
      
    <Overlay />
    
    <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />


  </>,
  
)
