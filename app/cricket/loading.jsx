import React from 'react'
import Link from 'next/link'
export default function NotFound() {
  return (
    <main>
        <h2 className='text-center'> There is a problem</h2>
        <p>We condnt find this page!</p>
        <p>go back to the <Link href="/">Home page</Link></p>
    </main>
  )
}
