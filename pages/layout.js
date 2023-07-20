
import React from 'react'


export default function RootLayout({ children }) {
  return (
    <div>

        <div className='main'>
            {children}       
        </div>

    </div>
  )
}
