import Link from 'next/link'
export default function Navbar() {
  return (
    <nav>
    <h1>We are having a match finally!</h1>
    <Link href="/">Match</Link>
    <Link href="/cricket">Cricket</Link>
    <Link href="/cricket/batsman">Fill the form</Link>
    <Link href="/cricket/bowling">Bowling</Link>
    </nav>
  )
}
