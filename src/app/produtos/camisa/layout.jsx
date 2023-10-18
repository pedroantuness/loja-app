import React from 'react'

export default function CamisaLayout({children}) {
  return (
    <div>
        <p className='bg-fuchsia-400'>Novas Camisas de Fios Egipicios...</p>
        {children}
    </div>
  )
}