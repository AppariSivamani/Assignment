import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/page.module.css'

export default function Home(){
  return (
    <>
      <Head>
        <title>Better Replica</title>
        <meta name="description" content="Better Replica - A simplified replica of Better.com demonstrating layout and core behaviors." />
      </Head>

      <div className={styles.page}>
        <div className={styles.hero}>
          <h1>Welcome to Better Replica</h1>
          <p>A simplified replica demonstrating layout and core behaviors.</p>
        </div>

        <div className={styles.container}>
          <section className={styles.grid}>
            <div className={styles.card}>
              <h3>Why choose us</h3>
              <p>Responsive design and a working mortgage calculator built with Next.js.</p>
            </div>

            <div className={styles.card}>
              <h3>About</h3>
              <p>Replica created as part of an internship assignment.</p>
              <Link href="/about-us">Learn more</Link>
            </div>

            <div className={styles.card}>
              <h3>Get started</h3>
              <p>Start your journey with the Start page.</p>
              <Link href="/start">Start</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
