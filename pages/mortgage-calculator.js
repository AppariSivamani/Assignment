import Head from 'next/head'
import MortgageCalculator from '../components/MortgageCalculator'
import styles from '../styles/page.module.css'

export default function MortgagePage() {
  return (
    <>
      <Head>
        <title>Better Replica</title>
        <meta
          name="description"
          content="Use the Better Replica mortgage calculator to estimate monthly payments including taxes and insurance."
        />
      </Head>

      <div className={styles.page}>
        <div className={styles.hero}>
          <h1>Mortgage Calculator</h1>
          <p>Estimate monthly payments quickly — taxes prefilled.</p>
        </div>
        <div className={styles.container}>
          <MortgageCalculator initialTaxes={265} initialZip="421005" />
        </div>
      </div>
    </>
  )
}
