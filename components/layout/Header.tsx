import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.branding}>
          <h1 className={styles.title}>Full Stack Experiment Hub</h1>
        </Link>
        <div className={styles.identity}>
          <p className={styles.name}>Harsh Partap Jain</p>
          <p className={styles.uid}>UID: 23BAI70194</p>
        </div>
      </div>
    </header>
  );
}
