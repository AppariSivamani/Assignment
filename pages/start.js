import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/page.module.css'

export default function Start() {
  return (
    <>
      <Head>
        <title>Better Replica</title>
        <meta
          name="description"
          content="Start your journey with Better Replica. Fill in details to check eligibility or continue to the mortgage calculator."
        />
      </Head>

      <div className={styles.page}>
        <div className={styles.hero}>
          <h1>Start</h1>
          <p>Enter a few details to get started with your mortgage journey.</p>
        </div>

        <div className={styles.container}>
          <div className={styles.card}>
            <h3>Quick Start</h3>
            <p>Fill in basic info to see eligibility or continue to the mortgage calculator for estimates.</p>
            <Link href="/mortgage-calculator">Open Calculator</Link>
          </div>
        </div>
      </div>
    </>
  )
}
