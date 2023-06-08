import styles from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div className={styles.error}>
      <div className={styles.box}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Sorry, an unexpected error has occurred.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
