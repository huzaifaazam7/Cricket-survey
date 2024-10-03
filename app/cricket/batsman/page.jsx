import { notFound } from "next/navigation"
import Cricket from "../page"

async function getTicket(id) {

    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('http://localhost:4030/cricket/' +id , {
      next: {
        revalidate: 60 // use 0 to opt out of using cache
      }
    })

    if(!res.ok) {
        notFound()
    }
  
    return res.json()
  }

export default async function cricketdetails({params}) {
    const cricket = await getTicket(params.id)
    return (
        <main>
          <nav>
            <h2>cricket Details</h2>
          </nav>
          <div className="card">
            <h3>{cricket.title}</h3>
            <small>Created by {cricket.user_email}</small>
            <p>{cricket.body}</p>
            <div className={`pill ${cricket.priority}`}>
              {cricket.priority} priority
            </div>
          </div>
        </main>
      )
    }
