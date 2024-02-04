
import React from 'react';
import '@/styles/components/eventos.css'

export default function EventosLayout({ children }) {
    return (
      <>
  
          <section className="eventos_control ">
          
            {children}
          </section>
      </>
    );
  }
  