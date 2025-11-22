import './index.css';
import React from 'react';
import { registerSW } from 'virtual:pwa-register';

registerSW();

function App(): React.ReactElement {
  console.log('[APP] Rendering simplified App');
  return (
    <div style={{ 
      color: 'white', 
      padding: '50px', 
      textAlign: 'center',
      minHeight: '100vh',
      background: '#111',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>TEST MODE</h1>
      <p>If you see this, React is working correctly.</p>
      <p style={{ color: '#888', marginTop: '1rem' }}>Debugging Framer Motion issues...</p>
    </div>
  );
}

export default App;
