import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navbar(){
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/images/logo.png" alt="Better Replica" className={styles.logo} />
          <span className={styles.title}>Better Replica</span>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/mortgage-calculator">Mortgage Calculator</Link>
          <Link href="/start">Start</Link>
        </nav>
      </div>
    </header>
  )
}
