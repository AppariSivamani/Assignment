import Head from 'next/head'
import styles from '../styles/page.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>Better Replica</title>
        <meta name="description" content="Learn more about Better Replica, our mission, vision, and team for the internship assignment." />
      </Head>

      <div className={styles.page}>
        <div className={styles.container}>
          <h1>About Us</h1>
          <p>This is a simplified "About Us" page modeled for the assignment.</p>

          <div className={styles.values}>
            <div className={styles.card}>
              <h3>Mission</h3>
              <p>Provide transparent mortgage tools and resources.</p>
            </div>
            <div className={styles.card}>
              <h3>Vision</h3>
              <p>Deliver fast, reliable home loan guidance.</p>
            </div>
            <div className={styles.card}>
              <h3>Team</h3>
              <p>Engineers and product designers focused on usability.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
