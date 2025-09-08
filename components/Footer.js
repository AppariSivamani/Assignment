import styles from '../styles/footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>© {new Date().getFullYear()} Better Replica — Built for assignment</div>
        <div><a href="https://better.com" target="_blank" rel="noopener noreferrer">better.com</a></div>
      </div>
    </footer>
  )
}
