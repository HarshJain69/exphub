import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {new Date().getFullYear()} Full Stack Experiment Hub
        </p>
        <p className={styles.text}>Harsh Partap Jain · UID: 23BAI70194</p>
      </div>
    </footer>
  );
}
