import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./styles.module.css";

export default function Exp6Page() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={20} />
        Back to Dashboard
      </Link>

      <div className={styles.content}>
        <h1 className={styles.title}>Experiment 6</h1>
        <p className={styles.description}>
          Authentication and authorization in full-stack applications
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.text}>
            This experiment explores secure authentication and authorization patterns
            for protecting resources in modern web applications.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Concepts</h2>
          <ul className={styles.list}>
            <li>JWT token authentication</li>
            <li>Session management</li>
            <li>Role-based access control</li>
            <li>OAuth and social login</li>
          </ul>
        </div>

        <div className={styles.actions}>
          <Button variant="primary">Run Demo</Button>
          <Button href="https://github.com">View Source</Button>
        </div>
      </div>
    </div>
  );
}
