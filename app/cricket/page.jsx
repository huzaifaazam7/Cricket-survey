import Link from "next/link"
import { resolve } from "styled-jsx/css"

async function getTickets() {

  await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch('http://localhost:4030/cricket', {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })

  return res.json()
}

export default async function Cricket() {
  const crickets = await getTickets()
  return (
    <>
      {crickets.map((cricket) => (
        <div key={cricket.id} className="card my-5">
          <Link href={`/cricket/${cricket.id}`}>
          <h3>{cricket.title}</h3>
          <p>{cricket.body}</p>
          <div className={`pill ${cricket.priority}`}>
            {cricket.priority} priority
          </div>
          </Link>
        </div>
      ))}
      {crickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  )
}

