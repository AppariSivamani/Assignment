import { useState, useEffect } from 'react'
import styles from '../styles/calculator.module.css'

function formatCurrency(n){
  if (isNaN(n)) return '$0.00'
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export default function MortgageCalculator({ initialTaxes = 265, initialZip = '421005' }){
  const [loanAmount, setLoanAmount] = useState(300000)
  const [interestRate, setInterestRate] = useState(3.5)
  const [termYears, setTermYears] = useState(30)
  const [propertyTax, setPropertyTax] = useState(Number(initialTaxes) || 0)
  const [insurance, setInsurance] = useState(1200)
  const [zip, setZip] = useState(initialZip || '')
  const [monthlyPI, setMonthlyPI] = useState(0)
  const [monthlyTax, setMonthlyTax] = useState(0)
  const [monthlyIns, setMonthlyIns] = useState(0)
  const [errors, setErrors] = useState({})

  useEffect(()=>{ calculate() }, [loanAmount, interestRate, termYears, propertyTax, insurance, zip])

  function validate(){
    const e = {}
    if (loanAmount <= 0) e.loanAmount = 'Loan amount must be greater than 0'
    if (interestRate <= 0) e.interestRate = 'Interest rate must be greater than 0'
    if (termYears <= 0) e.termYears = 'Term must be greater than 0'
    if (!/^\d{5,6}$/.test(zip)) e.zip = 'Enter a valid ZIP / PIN'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function calculate(){
    if (!validate()) return
    const P = Number(loanAmount)
    const r = Number(interestRate) / 100 / 12
    const n = Number(termYears) * 12
    let pi = 0
    if (r === 0) pi = P / n
    else pi = (P * r) / (1 - Math.pow(1 + r, -n))
    const monthlyTaxVal = Number(propertyTax) / 12
    const monthlyInsVal = Number(insurance) / 12
    setMonthlyPI(Number(pi.toFixed(2)))
    setMonthlyTax(Number(monthlyTaxVal.toFixed(2)))
    setMonthlyIns(Number(monthlyInsVal.toFixed(2)))
  }

  const totalMonthly = (monthlyPI + monthlyTax + monthlyIns)

  return (
    <section className={styles.container}>
      <h2>Mortgage Calculator</h2>
      <div className={styles.grid}>
        <form className={styles.form} onSubmit={(e)=>{ e.preventDefault(); calculate(); }}>
          <label>
            Loan amount
            <input type="number" value={loanAmount} onChange={(e)=>setLoanAmount(Number(e.target.value))} />
            {errors.loanAmount && <div className={styles.error}>{errors.loanAmount}</div>}
          </label>

          <label>
            Interest rate (annual %)
            <input type="number" step="0.01" value={interestRate} onChange={(e)=>setInterestRate(Number(e.target.value))} />
            {errors.interestRate && <div className={styles.error}>{errors.interestRate}</div>}
          </label>

          <label>
            Term (years)
            <input type="number" value={termYears} onChange={(e)=>setTermYears(Number(e.target.value))} />
            {errors.termYears && <div className={styles.error}>{errors.termYears}</div>}
          </label>

          <label>
            Annual property tax
            <input type="number" value={propertyTax} onChange={(e)=>setPropertyTax(Number(e.target.value))} />
          </label>

          <label>
            Annual homeowners insurance
            <input type="number" value={insurance} onChange={(e)=>setInsurance(Number(e.target.value))} />
          </label>

          <label>
            ZIP / PIN
            <input type="text" value={zip} onChange={(e)=>setZip(e.target.value)} />
            {errors.zip && <div className={styles.error}>{errors.zip}</div>}
          </label>

          <div style={{marginTop:12}}>
            <button className={styles.button} type="submit">Recalculate</button>
          </div>
        </form>

        <aside className={styles.summary}>
          <div className={styles.card}>
            <h3>Monthly Payment</h3>
            <div className={styles.big}>{formatCurrency(totalMonthly)}</div>
            <div className={styles.sub}>
              <div>Principal & Interest: <strong>{formatCurrency(monthlyPI)}</strong></div>
              <div>Taxes: <strong>{formatCurrency(monthlyTax)}</strong></div>
              <div>Insurance: <strong>{formatCurrency(monthlyIns)}</strong></div>
            </div>
          </div>

          <div className={styles.card}>
            <h4>Mortgage Summary</h4>
            <ul>
              <li>Loan amount: {formatCurrency(Number(loanAmount))}</li>
              <li>Interest rate: {Number(interestRate)}%</li>
              <li>Term: {termYears} years</li>
              <li>ZIP / PIN: {zip}</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
