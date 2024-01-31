import React from 'react';
import '@/styles/quienmision/fundador.css';

export default function RootLayout({ children }) {
    return (
      <>
  
          <section className="fundador_control">
          
            {children}
          </section>
      </>
    );
  }
  